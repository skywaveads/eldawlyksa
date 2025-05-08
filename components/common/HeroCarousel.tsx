import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../ui/Button';
import clsx from 'clsx';

interface HeroCarouselProps {
  title: string;
  subtitle?: string;
  description?: string;
  slides: {
    imageSrc: string;
    imageAlt: string;
  }[];
  whatsAppNumber: string;
  className?: string;
}

const HeroCarousel = ({
  title,
  subtitle,
  description,
  slides,
  whatsAppNumber,
  className,
}: HeroCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Move to next slide
  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  }, [slides.length]);

  // Auto-rotate slides - always auto play
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds
    
    return () => {
      clearInterval(interval);
    };
  }, [nextSlide]);

  // Function to navigate to a specific slide
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section 
      className={clsx('relative py-0 overflow-hidden', className)}
    >
      {/* Mobile and Desktop layout separation */}
      <div className="w-full bg-primary-navy">
        {/* Image Slider */}
        <div className="relative">
          <Image
            src={slides[currentSlide].imageSrc}
            alt={slides[currentSlide].imageAlt}
            width={1920}
            height={800}
            priority={true}
            className="w-full h-auto"
            sizes="100vw"
            quality={100}
          />
          
          {/* Navigation Dots */}
          <div 
            className="absolute bottom-4 left-0 right-0 z-30 flex justify-center gap-3" 
            role="tablist" 
            aria-label="Carousel navigation"
          >
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={clsx(
                  'w-3 h-3 rounded-full transition-all',
                  index === currentSlide 
                    ? 'bg-amber-400 scale-125' 
                    : 'bg-white/50 hover:bg-white/80'
                )}
                aria-label={`Go to slide ${index + 1}`}
                aria-selected={index === currentSlide}
                role="tab"
              />
            ))}
        </div>

          {/* Gradient overlay for desktop text readability - hidden on mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/80 via-primary-navy/40 to-primary-navy/20 md:block hidden"></div>
          
          {/* Desktop Content Overlay - Hidden on mobile */}
          <div className="absolute inset-0 z-20 items-center p-8 lg:p-12 hidden md:flex">
          <div className="container mx-auto">
              <div className="grid grid-cols-2 gap-8 items-center">
                <div>
                  {/* This space is intentionally left empty to match the layout in the image */}
                </div>
                <div className="text-white text-right">
                {subtitle && (
                  <div className="text-contact font-semibold text-lg mb-3">{subtitle}</div>
                )}
                  <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-md">
                  {title}
                </h1>
                {description && (
                    <p className="text-white text-lg font-medium mb-6 leading-relaxed max-w-xl drop-shadow-sm">
                    {description}
                  </p>
                )}
                  <div className="flex flex-wrap gap-4 mt-6 justify-start">
                  <Link href="/contact" className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black font-medium py-2 px-6 rounded-full transition-all duration-300 shadow-md">
                    تواصل معنا
                  </Link>
                  <a 
                    href={`https://wa.me/${whatsAppNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="تواصل معنا عبر واتساب"
                    className="bg-whatsapp hover:bg-whatsapp/90 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 shadow-md"
                  >
                    <svg 
                      className="w-5 h-5 ml-2 rtl:ml-0 rtl:mr-2 inline-block" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                    </svg>
                    واتساب
                  </a>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Content - Below Slider */}
        <div className="md:hidden bg-primary-navy text-white py-6 px-4">
          <div className="container mx-auto">
            {subtitle && (
              <div className="text-contact font-semibold text-lg mb-2">{subtitle}</div>
            )}
            <h1 className="text-2xl font-bold text-white mb-3 leading-tight">
              {title}
            </h1>
            {description && (
              <p className="text-white font-medium mb-4 leading-relaxed">
                {description}
              </p>
            )}
            <div className="flex flex-wrap gap-3 mt-4">
              <Link href="/contact" className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black font-medium py-2 px-6 rounded-full transition-all duration-300 shadow-md">
                تواصل معنا
              </Link>
              <a 
                href={`https://wa.me/${whatsAppNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="تواصل معنا عبر واتساب"
                className="bg-whatsapp hover:bg-whatsapp/90 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 shadow-md"
              >
                <svg 
                  className="w-5 h-5 ml-2 rtl:ml-0 rtl:mr-2 inline-block" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
                واتساب
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel; 