"""
Generates the brand raster assets from the charte fonts.

    python3 .devtools/make-brand-assets.py

Outputs (all committed, none generated at build time):
    src/app/favicon.ico          16/32/48 monogram
    src/app/apple-icon.png       180x180 monogram
    src/app/opengraph-image.jpg  2400x1260 social card (2x of the 1200x630 grid)

Anton is fetched from Google Fonts on first run and cached in .devtools/.
Hey October comes from public/hey_october_font/.
"""

import pathlib
import urllib.request

from PIL import Image, ImageDraw, ImageFont

ROOT = pathlib.Path(__file__).resolve().parent.parent
CACHE = ROOT / '.devtools' / '.fontcache'
CACHE.mkdir(exist_ok=True)

ANTON_URL = 'https://fonts.gstatic.com/s/anton/v27/1Ptgg87LROyAm0K0.ttf'
ANTON = CACHE / 'Anton.ttf'
HEY = ROOT / 'public' / 'hey_october_font' / 'Hey October.ttf'

INK = (18, 19, 26)
PAPER = (250, 248, 245)
BLUE = (71, 71, 244)
LEMON = (252, 255, 151)
FLAME = (255, 79, 20)

if not ANTON.exists():
    urllib.request.urlretrieve(ANTON_URL, ANTON)


def fit(font_path, text, target_px):
    """Font sized so `text` renders at roughly target_px cap height."""
    size = target_px
    for _ in range(24):
        f = ImageFont.truetype(str(font_path), size)
        h = f.getbbox(text)[3] - f.getbbox(text)[1]
        if h == 0:
            break
        size = max(1, round(size * target_px / h))
    return ImageFont.truetype(str(font_path), size)


def draw_centred(img, text, font, fill, box):
    """Draw text optically centred inside box=(x0,y0,x1,y1) using its ink bbox."""
    d = ImageDraw.Draw(img)
    x0, y0, x1, y1 = box
    bx0, by0, bx1, by1 = d.textbbox((0, 0), text, font=font)
    x = x0 + (x1 - x0 - (bx1 - bx0)) / 2 - bx0
    y = y0 + (y1 - y0 - (by1 - by0)) / 2 - by0
    d.text((x, y), text, font=font, fill=fill)


def monogram(size, bg=BLUE, fg=LEMON):
    """Square tile with SC filling ~78% of it — legible down to 16px."""
    img = Image.new('RGB', (size, size), bg)
    font = fit(ANTON, 'SC', round(size * 0.62))
    draw_centred(img, 'SC', font, fg, (0, 0, size, size))
    return img


def make_icons():
    # Render large and downsample so the small sizes stay crisp.
    master = monogram(512)

    # RGBA, not RGB: Next's ICO decoder rejects ICOs whose PNG frames are not
    # RGBA ("The PNG is not in RGBA format!") and the build fails outright.
    ico = master.resize((256, 256), Image.LANCZOS).convert('RGBA')
    ico.save(ROOT / 'src/app/favicon.ico', format='ICO',
             sizes=[(16, 16), (32, 32), (48, 48)])

    master.resize((180, 180), Image.LANCZOS).save(ROOT / 'src/app/apple-icon.png')
    print('icons: favicon.ico, apple-icon.png')


def fit_width(font_path, text, target_w, tracking=0):
    """Font sized so `text` renders at roughly target_w wide."""
    size = 100
    for _ in range(30):
        f = ImageFont.truetype(str(font_path), size)
        bb = f.getbbox(text)
        w = (bb[2] - bb[0]) + tracking * max(0, len(text) - 1)
        if w <= 0:
            break
        nxt = max(1, round(size * target_w / w))
        if nxt == size:
            break
        size = nxt
    return ImageFont.truetype(str(font_path), size)


def tracked_width(d, text, font, tracking):
    return sum(d.textlength(c, font=font) for c in text) + tracking * max(0, len(text) - 1)


def draw_tracked(d, xy, text, font, fill, tracking):
    """PIL has no letter-spacing; step the pen manually."""
    x, y = xy
    for ch in text:
        d.text((x, y), ch, font=font, fill=fill)
        x += d.textlength(ch, font=font) + tracking
    return x


def fit_cap(font_path, target_cap):
    """Font whose cap height is target_cap, measured on a flat-topped glyph."""
    size = target_cap
    for _ in range(30):
        f = ImageFont.truetype(str(font_path), size)
        bb = f.getbbox('H')
        h = bb[3] - bb[1]
        if h <= 0:
            break
        nxt = max(1, round(size * target_cap / h))
        if nxt == size:
            break
        size = nxt
    return ImageFont.truetype(str(font_path), size)


def make_og():
    """
    Social card — a pure typographic poster, no photograph: the name is the
    subject, and at preview size a face competes with it rather than helping.

    Authored on a 1200x630 grid and rendered at 2x (2400x1260) so it stays
    sharp on high-density phone screens.

    Nothing is set below ~40px on the 1200 grid. WhatsApp renders the preview
    around 350px wide, so anything smaller than that lands under ~12px on a
    phone and simply cannot be read.

    JPEG, because WhatsApp gets unreliable with heavy previews — flat colour
    and type compress to a fraction of the PNG equivalent.
    """
    S = 2                      # render scale
    W, H = 1200 * S, 630 * S
    m = 84 * S                 # margin
    avail = W - 2 * m

    img = Image.new('RGB', (W, H), INK)
    d = ImageDraw.Draw(img)

    KICKER = 'SOMMELLERIE · RADIO · FORMATION · CONFÉRENCES'
    PHRASE = "l'hospitalité, autrement"

    # Kicker — what she does, read first.
    ktrack = 4 * S
    kicker = fit_width(ANTON, KICKER, avail * 0.94, ktrack)
    draw_tracked(d, (m, 62 * S), KICKER, kicker, PAPER, ktrack)

    # The name.
    #
    # Sized from the vertical budget, not the measure: fitting "SABRINA" to the
    # full width gives a cap height so large that the second line falls off the
    # card. Width is the ceiling, height is what actually governs.
    top, bottom = 142 * S, 458 * S
    LINE = 1.06
    cap = (bottom - top) / (1 + LINE)

    name = fit_cap(ANTON, cap)
    if tracked_width(d, 'SABRINA', name, 0) > avail:
        name = fit_width(ANTON, 'SABRINA', avail)

    nb = name.getbbox('SABRINA')
    line_h = (nb[3] - nb[1]) * LINE

    d.text((m - nb[0], top - nb[1]), 'SABRINA', font=name, fill=LEMON)
    y2 = top + line_h
    d.text((m - nb[0], y2 - nb[1]), 'CARLIER', font=name, fill=LEMON)

    # Brush script laid across the lower edge of CARLIER, as on the site.
    name_w = tracked_width(d, 'CARLIER', name, 0)
    script = fit_width(HEY, PHRASE, name_w * 0.92)
    sb = script.getbbox(PHRASE)

    layer = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(layer).text(
        # 0.88 of cap height down: the script clips the bottom edge of the
        # caps rather than crossing their middle, as in the Les 400 Coups
        # artwork. At 0.66 it swallowed CARLIER.
        (m + 22 * S - sb[0], y2 + (nb[3] - nb[1]) * 0.88 - sb[1]),
        PHRASE, font=script, fill=FLAME + (255,),
    )
    layer = layer.rotate(2.6, resample=Image.BICUBIC, center=(m, y2))
    img.paste(layer, (0, 0), layer)

    # Foot.
    rule_y = H - 116 * S
    d.line([(m, rule_y), (m + avail, rule_y)], fill=(64, 65, 76), width=2 * S)

    ftrack = 3 * S
    fy = rule_y + 30 * S

    foot = fit_width(ANTON, 'TRENTE ANS DE TERRAIN · LYON', avail * 0.44, ftrack)
    draw_tracked(d, (m, fy), 'TRENTE ANS DE TERRAIN · LYON',
                 foot, (170, 171, 180), ftrack)

    site = fit_width(ANTON, 'SABRINACARLIER.FR', avail * 0.29, ftrack)
    sw = tracked_width(d, 'SABRINACARLIER.FR', site, ftrack)
    draw_tracked(d, (m + avail - sw, fy), 'SABRINACARLIER.FR', site, LEMON, ftrack)

    out = ROOT / 'src/app/opengraph-image.jpg'
    img.save(out, quality=90, optimize=True, progressive=True, subsampling=0)
    print(f'og card: {out.name} {img.size} ({out.stat().st_size // 1024} KB)')


if __name__ == '__main__':
    make_icons()
    make_og()
