import React, { useState, useEffect } from 'react';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// Saudi cities data
const saudiCities = [
  { id: 1, name: 'الرياض' },
  { id: 2, name: 'جدة' },
  { id: 3, name: 'مكة المكرمة' },
  { id: 4, name: 'المدينة المنورة' },
  { id: 5, name: 'الدمام' },
  { id: 6, name: 'الخبر' },
  { id: 7, name: 'تبوك' },
  { id: 8, name: 'أبها' },
  { id: 9, name: 'الطائف' },
  { id: 10, name: 'القصيم' },
  { id: 11, name: 'نجران' },
  { id: 12, name: 'جازان' },
  { id: 13, name: 'الجبيل' },
  { id: 14, name: 'ينبع' },
  { id: 15, name: 'الإحساء' },
  { id: 16, name: 'حائل' },
  { id: 17, name: 'الباحة' },
  { id: 18, name: 'عرعر' },
];

const SaudiCitiesSlider = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <div className="py-12 bg-gray-100">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-primary-navy mb-4">نقدم خدماتنا في جميع مدن المملكة</h2>
          <div className="h-1 w-32 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            نفتخر بتقديم خدمات النقل المبرد بأعلى معايير الجودة في مختلف مدن المملكة العربية السعودية
          </p>
        </div>

        {mounted && (
          <div className="mt-8 overflow-hidden">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={15}
              slidesPerView="auto"
              loop={true}
              speed={3000}
              allowTouchMove={false}
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
                reverseDirection: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: "auto",
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: "auto",
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: "auto",
                  spaceBetween: 20,
                },
              }}
              className="cities-swiper rtl"
              dir="rtl"
            >
              {saudiCities.map((city) => (
                <SwiperSlide key={city.id} className="!w-auto">
                  <div className="text-center py-2 px-1">
                    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 py-3 px-3 border-r-4 border-amber-400 h-[60px] flex items-center justify-center">
                      <h3 className="text-lg font-bold text-primary-navy px-2 whitespace-nowrap">{city.name}</h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
};

export default SaudiCitiesSlider; 