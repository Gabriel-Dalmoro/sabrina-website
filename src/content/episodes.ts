/**
 * « Les 400 Coups » — the 16 episodes broadcast on France Bleu Pays de Savoie,
 * July–August 2024. Transcribed from the Radio France podcast page.
 *
 * `id` is the Radio France diffusion UUID; the player embeds
 * https://embed.radiofrance.fr/ici/diffusion/<id>.
 */

export interface Episode {
  id: string;
  title: string;
  /** Human-readable broadcast date, in French. */
  date: string;
  /** Machine-readable date for <time datetime>. */
  iso: string;
  duration: string;
  description?: string;
}

export const PODCAST_EMBED_BASE =
  'https://embed.radiofrance.fr/ici/diffusion/';

export const EPISODES: Episode[] = [
  {
    id: 'afc68e68-c01c-4274-975a-97fd5bcd95af',
    title: "Le coup de grâce : Axel Domont",
    date: '25 août 2024',
    iso: '2024-08-25',
    duration: '3 min 59',
  },
  {
    id: 'e7a10cd1-1234-4287-990c-5b4db93df96e',
    title: "Gilles Berlioz, les filles",
    date: '24 août 2024',
    iso: '2024-08-24',
    duration: '4 min 03',
  },
  {
    id: '9d7d8826-3eab-47b7-a1bd-af014d2c498a',
    title: "Qu’est-ce qu’on boit pour adoucir les cœurs ?",
    date: '18 août 2024',
    iso: '2024-08-18',
    duration: '4 min 09',
  },
  {
    id: 'cb2951ad-02f3-4fff-acbc-9e8924984676',
    title: "Le domaine Curtet",
    date: '17 août 2024',
    iso: '2024-08-17',
    duration: '3 min 49',
  },
  {
    id: 'f3312c27-6a52-4dbb-824d-3b1a6a743925',
    title: "Les 400 coups de Sabrina Carlier",
    date: '11 août 2024',
    iso: '2024-08-11',
    duration: '3 min 13',
  },
  {
    id: '74556fcb-0f80-44ae-8c0f-ed9e7e0f4dc0',
    title: "Les 400 coups de Sabrina Carlier",
    date: '10 août 2024',
    iso: '2024-08-10',
    duration: '3 min 37',
  },
  {
    id: 'b0e52db6-2bee-4ea4-9683-ec4a5baef3c7',
    title: "La cuvée Améthyste du domaine des Ardoisières, le coup de sa vie !",
    date: '4 août 2024',
    iso: '2024-08-04',
    duration: '3 min 51',
  },
  {
    id: 'fb2d5a28-812e-464d-8175-77faae302411',
    title: "La cuvée Giant Step 2021 de Ludovic Archer à St-Jean-de-la-Porte pour les coups de folie",
    date: '3 août 2024',
    iso: '2024-08-03',
    duration: '4 min 06',
  },
  {
    id: '412e4adc-32d1-4b9b-9ead-a7f8bfcc834c',
    title: "Mon coup de bol - Domaine de l'envigne",
    date: '28 juillet 2024',
    iso: '2024-07-28',
    duration: '3 min 51',
  },
  {
    id: '9ac4eda9-aa79-491d-babb-4f2f9492e3fd',
    title: "La cuvée des gueux d'Adrien et Gilles Berlioz",
    date: '27 juillet 2024',
    iso: '2024-07-27',
    duration: '3 min 56',
  },
  {
    id: '53367213-2d57-47bf-affd-84aa971409af',
    title: "Osez les mariages inattendus avec les vins de Jean Noël et Thomas Blard",
    date: '21 juillet 2024',
    iso: '2024-07-21',
    duration: '3 min 53',
    description: "Avec la manogodine servez sans hésiter le brut alpin du domaine Blard, et avec un bon pâté croute ou un boudin blanc aux morilles tentez la roussette de Jean Noël et Thomas Blard.",
  },
  {
    id: '724e9339-ceb1-43ec-b84b-3839fb1fa6c8',
    title: "Les mondeuses de Louis Magnin : \"tout un monde\" dans une bouteille",
    date: '20 juillet 2024',
    iso: '2024-07-20',
    duration: '3 min 52',
  },
  {
    id: '420b8323-57f0-44dc-9c30-cb2308905df2',
    title: "Les 400 coups de Sabrina Carlier",
    date: '14 juillet 2024',
    iso: '2024-07-14',
    duration: '4 min 07',
  },
  {
    id: 'cb6321a4-b90b-4a99-8012-f6c1c753a009',
    title: "Un \"matin face au lac\" de Dominique Lucas",
    date: '13 juillet 2024',
    iso: '2024-07-13',
    duration: '3 min 52',
    description: "Un soir, Sabrina a vécu un \"matin face au lac\" inoubliable. \"matin face au lac\" est le nom d'une cuvée de Dominique Lucas dans son domaine des vignes du Paradis à Ballaison.",
  },
  {
    id: '62d2961b-4bb5-4bd8-821f-7e41adb120b8',
    title: "Les frères Giachino",
    date: '7 juillet 2024',
    iso: '2024-07-07',
    duration: '3 min 44',
  },
  {
    id: 'c6b18027-8ac8-4090-b538-7fa5c2fb579a',
    title: "Les 400 coups de Sabrina Carlier sommelière : Dominique Belluard, coup de foudre",
    date: '6 juillet 2024',
    iso: '2024-07-06',
    duration: '3 min 33',
  },
];
