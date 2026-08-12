"""
Generates the brand raster assets from the charte fonts.

    python3 .devtools/make-brand-assets.py

Outputs (all committed, none generated at build time):
    src/app/favicon.ico          16/32/48 monogram
    src/app/apple-icon.png       180x180 monogram
    src/app/opengraph-image.jpg  1200x630 social card

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


def make_og():
    """
    1200x630 social card — the same move as the site hero: black ground,
    photograph, Anton in lemon with the brush script laid across it.

    Saved as JPEG: WhatsApp is unreliable with previews over a few hundred KB,
    and this compresses to a fraction of the PNG equivalent.
    """
    W, H = 1200, 630
    img = Image.new('RGB', (W, H), INK)

    # Photograph, right-hand third, desaturated to sit under the type.
    photo = Image.open(ROOT / 'public/photos/sabrina_photo_06.jpg').convert('RGB')
    pw = 470
    ratio = pw / photo.width
    photo = photo.resize((pw, round(photo.height * ratio)), Image.LANCZOS)
    top = max(0, (photo.height - H) // 2)
    photo = photo.crop((0, top, pw, min(top + H, photo.height)))
    img.paste(photo, (W - pw, 0))

    # Feather the photo's left edge into the ground.
    grad = Image.new('L', (140, H), 0)
    gd = ImageDraw.Draw(grad)
    for x in range(140):
        gd.line([(x, 0), (x, H)], fill=int(255 * (1 - x / 140)))
    img.paste(Image.new('RGB', (140, H), INK), (W - pw, 0), grad)

    d = ImageDraw.Draw(img)
    x = 72

    kicker = fit(ANTON, 'X', 15)
    d.text((x, 92), 'S O M M E L L E R I E   ·   R A D I O   ·   C O N F É R E N C E S',
           font=kicker, fill=(250, 248, 245, 255))

    name = fit(ANTON, 'SABRINA', 92)
    d.text((x, 140), 'SABRINA', font=name, fill=LEMON)
    d.text((x, 246), 'CARLIER', font=name, fill=LEMON)

    script = ImageFont.truetype(str(HEY), 62)
    d.text((x + 14, 352), "l'hospitalité, autrement", font=script, fill=FLAME)

    rule_y = 470
    d.line([(x, rule_y), (x + 430, rule_y)], fill=(70, 71, 80), width=2)

    foot = fit(ANTON, 'X', 15)
    d.text((x, rule_y + 26),
           'T R E N T E   A N S   D E   T E R R A I N   ·   L Y O N',
           font=foot, fill=(170, 170, 178))
    d.text((x, rule_y + 62), 'S A B R I N A C A R L I E R . F R',
           font=foot, fill=LEMON)

    out = ROOT / 'src/app/opengraph-image.jpg'
    img.save(out, quality=86, optimize=True, progressive=True)
    print(f'og card: {out.name} ({out.stat().st_size // 1024} KB)')


if __name__ == '__main__':
    make_icons()
    make_og()
