import { PAYHIP_URL } from './socials';

export type ProjectFile = {
  title: string;
  artist: string;
  kind: 'Drop Remake' | 'Original';
  note?: string;
  url: string;
};

// Newest first. Add new products at the top.
export const projectFiles: ProjectFile[] = [
  {
    title: 'Stay A Little Longer',
    artist: 'Nicky Romero & DubVision x Philip Strand',
    kind: 'Drop Remake',
    // TODO: replace with the product link once it is known.
    url: PAYHIP_URL,
  },
  {
    title: 'Full Big Room FLP #2',
    artist: 'Ozee',
    kind: 'Original',
    note: 'Unreleased track',
    url: 'https://payhip.com/b/LERNq',
  },
  {
    title: 'With My Baby',
    artist: 'Holly & Severman',
    kind: 'Drop Remake',
    url: 'https://payhip.com/b/tcBza',
  },
];
