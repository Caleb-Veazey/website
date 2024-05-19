type BandcampEmbedProps = {
  album?: {
    title: string;
    bandcampEmbedUrl: string;
    // Add other relevant album fields
  };
};

const BandcampEmbed: React.FC<BandcampEmbedProps> = ({ album }) => {
  if (!album) {
    return null; // or return a loading state or placeholder
  }
  
  return (
    <div className="mx-4 mt-8 h-[125vw] md:h-[65vw] lg:h-128 xl:h-144">
      <h2 className="text-2xl font-bold mb-4">{album.title}</h2>
      <iframe
        style={{ border: 0, width: '100%', height: '100%' }}
        src={album.bandcampEmbedUrl}
        seamless
      >  
      </iframe>
    </div>
  );
};

export default BandcampEmbed;