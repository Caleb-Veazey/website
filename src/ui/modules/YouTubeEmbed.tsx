// next/src/ui/modules/YouTubeEmbed.tsx
import React from 'react';

type YouTubeEmbedProps = {
  video?: Sanity.YouTubeVideo;
};

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ video }) => {
  if (!video) {
    return null; // or return a loading state or placeholder
  }
  return (
    <div className="relative w-full h-0 pb-[56.25%]">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${video.videoId}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;