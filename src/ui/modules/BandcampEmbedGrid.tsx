// next/src/ui/modules/BandcampEmbedGrid.tsx
import React from 'react';
import BandcampEmbed from './BandcampEmbed';

type BandcampEmbedGridProps = {
  albums?: Sanity.Album[];
};

const BandcampEmbedGrid: React.FC<BandcampEmbedGridProps> = ({ albums }) => {
  if (!albums || albums.length === 0) {
    return null; // or return a loading state or placeholder
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32 mx-8 mt-8 xl:max-w-6xl xl:mx-auto">
      {albums.map((album, index) => (
        <div className="h-[125vw] md:h-[65vw] lg:h-128 xl:h-144">
          <BandcampEmbed key={index} album={album} />
        </div>
      ))}
    </div>
  );
};

export default BandcampEmbedGrid;