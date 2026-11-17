import { PAYHIP_URL } from './socials';

export type ProjectFile = {
  title: string;
  artist: string;
  kind: 'Drop Remake' | 'Original Track' | 'Ozee Remix';
  note?: string;
  price?: string;
  url: string;
};

// Newest first. Add new products at the top.
export const projectFiles: ProjectFile[] = [
  {
    title: 'Intro ID (Tomorrowland 2026)',
    artist: 'Martin Garrix',
    kind: 'Drop Remake',
    url: 'https://payhip.com/b/1wG9s',
  },
  {
    title: 'Full Progressive House FLP #4',
    artist: 'Ozee',
    kind: 'Original Track',
    price: '€3.99',
    url: 'https://payhip.com/b/rIByA',
  },
  {
    title: 'Full Progressive House FLP #3',
    artist: 'Ozee',
    kind: 'Original Track',
    price: '€3.99',
    url: 'https://payhip.com/b/I86x7',
  },
  {
    title: 'Take Me Away',
    artist: 'Third Party',
    kind: 'Drop Remake',
    url: 'https://payhip.com/b/LsABb',
  },
  {
    title: 'Hurricane',
    artist: 'Martin Garrix & Sentinel feat. Bonn',
    kind: 'Drop Remake',
    url: 'https://payhip.com/b/emirS',
  },
  {
    title: 'Run Wild (Manse Remix)',
    artist: 'Hardwell feat. Jake Reese',
    kind: 'Drop Remake',
    url: 'https://payhip.com/b/K79VA',
  },
  {
    title: 'Out Of My Head (Ozee Remix)',
    artist: 'Wildcrow',
    kind: 'Ozee Remix',
    note: 'Full Big Room FLP #3',
    url: 'https://payhip.com/b/5bKAp',
  },
  {
    title: 'Stay A Little Longer',
    artist: 'Nicky Romero & DubVision x Philip Strand',
    kind: 'Drop Remake',
    url: 'https://payhip.com/b/Xchi5',
  },
  {
    title: 'Full Big Room FLP #2',
    artist: 'Ozee',
    kind: 'Original Track',
    note: 'Unreleased track',
    url: 'https://payhip.com/b/LERNq',
  },
  {
    title: 'With My Baby',
    artist: 'Holly & Severman',
    kind: 'Drop Remake',
    url: 'https://payhip.com/b/tcBza',
  },
  {
    title: 'Full Big Room FLP #1',
    artist: 'Ozee',
    kind: 'Original Track',
    price: '€3.99',
    url: 'https://payhip.com/b/TzpvJ',
  },
  {
    title: 'Full Progressive House FLP #2',
    artist: 'Ozee',
    kind: 'Original Track',
    price: '€3.99',
    // TODO: replace with the product link once it is known.
    url: PAYHIP_URL,
  },
  {
    title: 'Full Progressive House FLP #1',
    artist: 'Ozee',
    kind: 'Original Track',
    price: '€3.99',
    url: 'https://payhip.com/b/Sc9XV',
  },
  {
    title: 'Worst Way',
    artist: 'Severman & BECH feat. Annamarie Rosanio',
    kind: 'Drop Remake',
    url: 'https://payhip.com/b/q8dYK',
  },
  {
    title: 'Never Let Me Go',
    artist: 'Trevor Omoto',
    kind: 'Drop Remake',
    url: 'https://payhip.com/b/YWyi2',
  },
  {
    title: 'Falling',
    artist: 'Axity',
    kind: 'Drop Remake',
    url: 'https://payhip.com/b/xsPFe',
  },
];
