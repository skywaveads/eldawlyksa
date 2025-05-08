import React from 'react';
import clsx from 'clsx';

interface MapEmbedProps {
  lat: string;
  lng: string;
  apiKey?: string;
  title?: string;
  zoom?: number;
  height?: string;
  className?: string;
}

const MapEmbed = ({
  lat,
  lng,
  apiKey,
  title = 'Location Map',
  zoom = 14,
  height = '400px',
  className,
}: MapEmbedProps) => {
  // If API key is provided, use Google Maps JavaScript API
  // Otherwise, use the simple embed iframe
  const useIframe = !apiKey;
  
  return (
    <div 
      className={clsx('w-full overflow-hidden rounded-md shadow-md', className)}
      style={{ height }}
    >
      {useIframe ? (
        <iframe
          src={`https://www.google.com/maps/embed/v1/place?q=${lat},${lng}&zoom=${zoom}&key=${apiKey || 'AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8'}`}
          title={title}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label={title}
        />
      ) : (
        // When API key is provided, you might want to use the Google Maps JavaScript API
        // This requires additional setup with the @googlemaps/js-api-loader
        // For now, we'll just use the iframe method in both cases
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.4737270328163!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDM0JzQwLjMiTiA0NsKwMjQnMDEuMyJF!5e0!3m2!1sen!2ssa!4v1604567297991!5m2!1sen!2ssa`}
          title={title}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label={title}
        />
      )}
    </div>
  );
};

export default MapEmbed; 