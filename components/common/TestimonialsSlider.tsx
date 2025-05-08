import React, { useState, useEffect } from 'react';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// Import required modules
import { Autoplay, Pagination } from 'swiper/modules';

interface TestimonialItem {
  id: number;
  quote: string;
  name: string;
  title: string;
  avatarSrc?: string;
}

interface TestimonialsSliderProps {
  testimonials: TestimonialItem[];
}

const TestimonialsSlider: React.FC<TestimonialsSliderProps> = ({ testimonials }) => {
  const [mounted, setMounted] = useState(false);
  
  // Prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <section className="py-16 bg-[#00022b] text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">ماذا يقول عملاؤنا؟</h2>
          <div className="h-1 w-24 bg-primary-cyan mx-auto mb-8"></div>
          <p className="text-white/80 max-w-3xl mx-auto">
            نفتخر بثقة عملائنا في خدماتنا وهذه بعض آرائهم
          </p>
        </div>

        <div className="testimonials-slider mx-auto max-w-full px-4 pb-8">
          {mounted && (
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                bulletActiveClass: 'swiper-pagination-bullet-active bg-primary-cyan',
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              modules={[Autoplay, Pagination]}
              className="pb-16"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className="h-auto flex">
                  <div className="bg-[#0a0c3d] p-8 rounded-lg text-right hover:shadow-xl transition-all duration-300 w-full flex flex-col h-full border border-gray-700">
                    {/* Quote Icon */}
                    <div className="mb-4 text-primary-cyan">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="opacity-40">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    
                    {/* Testimonial Text */}
                    <div className="flex-grow mb-6">
                      <p className="text-lg text-white/90 leading-relaxed">{testimonial.quote}</p>
                    </div>
                    
                    {/* Author Information */}
                    <div className="flex items-center">
                      {testimonial.avatarSrc ? (
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-primary-cyan">
                          <Image 
                            src={testimonial.avatarSrc}
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-full mr-4 bg-gradient-to-br from-primary-cyan to-amber-400 flex items-center justify-center text-white text-lg font-bold border-2 border-primary-cyan">
                          {testimonial.name.charAt(0)}
                        </div>
                      )}
                      <div>
                        <h4 className="font-bold text-amber-400">{testimonial.name}</h4>
                        <p className="text-sm text-white/70">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>

      <style jsx global>{`
        .testimonials-slider .swiper-pagination {
          bottom: 0;
        }
        .testimonials-slider .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
        }
        .testimonials-slider .swiper-pagination-bullet-active {
          background: #00CED1 !important;
          width: 12px;
          height: 12px;
        }
        .testimonials-slider .swiper-slide {
          height: auto !important;
          display: flex !important;
        }
        .testimonials-slider .swiper-slide > div {
          height: 100%;
          width: 100%;
        }
        .testimonials-slider .swiper-wrapper {
          align-items: stretch;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSlider; 