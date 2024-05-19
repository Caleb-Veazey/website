// next/src/ui/modules/BandcampEmbedGrid.tsx
import React from 'react';
import BandcampEmbed from './BandcampEmbed';
import { Image } from 'next-sanity/image';

type BandcampEmbedGridProps = {
  albums?: {
    title: string;
    bandcampEmbedUrl: string;
    albumArtwork: typeof Image;
  }[];
};

const BandcampEmbedGrid: React.FC<BandcampEmbedGridProps> = ({ albums }) => {
  if (!albums || albums.length === 0) {
    return null; // or return a loading state or placeholder
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
      {albums.map((album, index) => (
        <BandcampEmbed key={index} album={album} />
      ))}
    </div>
  );
};

export default BandcampEmbedGrid;