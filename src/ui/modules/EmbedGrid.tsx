// next/src/ui/modules/EmbedGrid.tsx
import React from 'react';
import BandcampEmbed from './BandcampEmbed';
import YouTubeEmbed from './YoutubeEmbed';

type EmbedGridProps = {
  albums?: Sanity.Album[];
  youTubeVideos?: Sanity.YouTubeVideo[]; // Updated this line
  embedStyle?: 'portrait' | 'landscape';
};

const EmbedGrid: React.FC<EmbedGridProps> = ({ albums, youTubeVideos, embedStyle = 'portrait' }) => {
  if ((!albums || albums.length === 0) && (!youTubeVideos || youTubeVideos.length === 0)) {
    return null; // or return a loading state or placeholder
  }

  const aspectRatio = embedStyle === 'portrait' ? 'h-[125vw] md:h-[65vw] lg:h-128 xl:h-144' : 'h-[55vw] md:h-[35vw] lg:h-56';

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32 m-8 xl:max-w-6xl xl:mx-auto">
      {albums?.map((album, index) => (
        <div key={index} className={aspectRatio}>
          <BandcampEmbed album={album} />
        </div>
      ))}
      {youTubeVideos?.map((video, index) => (
        <div key={index} className={aspectRatio}>
          <YouTubeEmbed video={video} />
        </div>
      ))}
    </div>
  );
};

export default EmbedGrid;