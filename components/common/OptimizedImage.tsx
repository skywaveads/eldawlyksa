import { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import { useInView } from 'react-intersection-observer';

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  aboveTheFold?: boolean;
  preload?: boolean;
}

const OptimizedImage = ({
  src,
  alt,
  aboveTheFold = false,
  preload = false,
  priority = false,
  ...props
}: OptimizedImageProps) => {
  const [mounted, setMounted] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });
  
  // Manejar la carga del lado del cliente
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Generar URLs para diferentes formatos
  const getOptimizedSrc = () => {
    // Solo cambiamos las extensiones para imágenes locales (no para URLs externas)
    if (!src.startsWith('http') && !src.startsWith('data:')) {
      // Extraer base y extensión
      const basePath = src.substring(0, src.lastIndexOf('.')) || src;
      return {
        avif: `${basePath}.avif`,
        webp: `${basePath}.webp`,
        original: src,
      };
    }
    
    // Para URLs externas o data URLs, retornamos la original
    return {
      avif: src,
      webp: src,
      original: src,
    };
  };
  
  const sources = getOptimizedSrc();
  
  // Si está sobre el pliegue o es prioritario, cargarlo inmediatamente
  const shouldLoad = aboveTheFold || priority || (mounted && inView);
  
  // Solo renderizamos el preload en el cliente para evitar duplicados en SSR
  useEffect(() => {
    if (mounted && preload && (aboveTheFold || priority)) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = sources.webp; // Precargar formato WebP
      link.type = 'image/webp';
      link.fetchPriority = 'high';
      document.head.appendChild(link);
      
      return () => {
        document.head.removeChild(link);
      };
    }
  }, [mounted, preload, sources, aboveTheFold, priority]);
  
  return (
    <div ref={!aboveTheFold && !priority ? ref : undefined}>
      {shouldLoad && (
        <picture>
          <source srcSet={sources.avif} type="image/avif" />
          <source srcSet={sources.webp} type="image/webp" />
          <Image
            src={sources.original}
            alt={alt}
            priority={priority || aboveTheFold}
            loading={aboveTheFold || priority ? 'eager' : 'lazy'}
            decoding={aboveTheFold || priority ? 'sync' : 'async'}
            {...props}
          />
        </picture>
      )}
    </div>
  );
};

export default OptimizedImage; 