import React from 'react';
import { FaFacebook, FaInstagram, FaSpotify, FaApple, FaSoundcloud } from 'react-icons/fa';

type SocialMediaLinksProps = {
  socialLinks: {
    facebook?: string;
    instagram?: string;
    spotify?: string;
    appleMusic?: string;
    soundcloud?: string;
  };
};

const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({ socialLinks }) => {
  const iconSize = 36;
  const iconStyles = "drop-shadow-[1px_1px_8px_rgba(0,0,0,0.8)]";

  return (
    <div className="flex space-x-4 place-content-center md:place-content-start">
      {socialLinks?.facebook && (
        <a href={socialLinks.facebook}>
          <FaFacebook size={iconSize} color="white" className={iconStyles} />
        </a>
      )}
      {socialLinks?.instagram && (
        <a href={socialLinks.instagram}>
          <FaInstagram size={iconSize} color="white" className={iconStyles} />
        </a>
      )}
      {socialLinks?.spotify && (
        <a href={socialLinks.spotify}>
          <FaSpotify size={iconSize} color="white" className={iconStyles} />
        </a>
      )}
      {socialLinks?.appleMusic && (
        <a href={socialLinks.appleMusic}>
          <FaApple size={iconSize} color="white" className={iconStyles} />
        </a>
      )}
      {socialLinks?.soundcloud && (
        <a href={socialLinks.soundcloud}>
          <FaSoundcloud size={iconSize} color="white" className={iconStyles} />
        </a>
      )}
    </div>
  );
};

export default SocialMediaLinks;