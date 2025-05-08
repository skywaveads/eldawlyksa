import React, { useState, useEffect } from 'react';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// Import required modules
import { Autoplay } from 'swiper/modules';

interface SlideItem {
  id: number;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

interface WhyUsSliderProps {
  slides: SlideItem[];
}

const WhyUsSlider: React.FC<WhyUsSliderProps> = ({ slides }) => {
  const [mounted, setMounted] = useState(false);
  
  // Prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const handlePrevSlide = () => {
    const swiperInstance = document.querySelector('.why-us-slider .swiper') as HTMLElement;
    if (swiperInstance && (swiperInstance as any).swiper) {
      (swiperInstance as any).swiper.slidePrev();
    }
  };
  
  const handleNextSlide = () => {
    const swiperInstance = document.querySelector('.why-us-slider .swiper') as HTMLElement;
    if (swiperInstance && (swiperInstance as any).swiper) {
      (swiperInstance as any).swiper.slideNext();
    }
  };
  
  return (
    <div className="why-us-slider mx-auto max-w-full px-4 pb-16">
      {mounted && (
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={false}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
          className="py-8"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="h-auto flex">
              <div className="bg-primary-navy p-6 rounded-lg text-center hover:shadow-xl transition-all duration-300 w-full flex flex-col h-full">
                <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 rounded-full bg-[#3d4db2]/20 overflow-hidden border-6 border-amber-400 shadow-lg relative flex-shrink-0">
                  <Image 
                    src={slide.imageSrc}
                    alt={slide.imageAlt}
                    fill
                    className="object-cover p-4"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-amber-400">{slide.title}</h3>
                <div className="text-white/80 text-base md:text-lg flex-grow">
                  <p>{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      
      {/* Custom navigation arrows outside Swiper for better UX */}
      <div className="flex justify-center gap-4 mt-8">
        <button 
          className="prev-slide bg-amber-400 hover:bg-amber-500 text-black w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all focus:outline-none"
          aria-label="السابق"
          onClick={handlePrevSlide}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
        <button 
          className="next-slide bg-amber-400 hover:bg-amber-500 text-black w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all focus:outline-none"
          aria-label="التالي"
          onClick={handleNextSlide}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
      </div>

      <style jsx global>{`
        .swiper-slide {
          height: auto !important;
          display: flex !important;
        }
        .swiper-slide > div {
          height: 100%;
          width: 100%;
        }
        .swiper-wrapper {
          align-items: stretch;
        }
      `}</style>
    </div>
  );
};

export default WhyUsSlider; 