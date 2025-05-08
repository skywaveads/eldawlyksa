import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import OptimizedImage from './OptimizedImage';

const CustomerSupportSection = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const handlePhoneCall = () => {
    window.location.href = 'tel:+966561475554';
  };
  
  const handleWhatsApp = () => {
    window.location.href = 'https://wa.me/+966561475554';
  };
  
  return (
    <section className="w-full py-0 bg-primary-navy text-white">
      <div className="container mx-auto px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
          {/* Order changed for mobile - Image will appear after text on small screens */}
          {/* Right side - Text and buttons */}
          <div className="text-center md:text-right space-y-6 p-8 md:p-12 order-1 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">يسعدنا تواصلك معنا</h2>
            <p className="text-xl">فريقنا متاح على مدار الساعة لمساعدتك في تلبية احتياجاتك اللوجستية.</p>
            
            {/* Added motivational text section */}
            <div className="text-center md:text-right my-4">
              <p className="text-xl text-amber-300">لنقل بضائعك بأمان وكفاءة عالية</p>
              <p className="text-lg mt-2">احصل على استشارة مجانية وعرض سعر فوري لخدمات النقل المبرّد</p>
              <p className="mt-3">تواصل معنا الآن للحصول على أفضل حلول النقل المبرد في المملكة</p>
            </div>
            
            <p className="text-amber-400 text-2xl font-bold">اتصل بنا اليوم</p>
            
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:gap-3 sm:justify-center md:justify-end max-w-md mx-auto md:mr-0 md:ml-auto">
              {mounted && (
                <Button
                  variant="primary"
                  size="sm"
                  className="flex-1 text-center md:text-right flex items-center justify-center md:justify-end rtl:justify-end text-sm"
                  onClick={handlePhoneCall}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  اتصل بنا
                </Button>
              )}
              
              {mounted && (
                <Button
                  variant="whatsapp"
                  size="sm"
                  className="flex-1 text-center md:text-right flex items-center justify-center md:justify-end rtl:justify-end text-sm"
                  onClick={handleWhatsApp}
                >
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                  </svg>
                  واتساب
                </Button>
              )}
            </div>
          </div>
          
          {/* Left side - Agent Image */}
          <div className="order-2 md:order-2 flex justify-center items-end py-0 md:py-0 mb-0 overflow-hidden">
            <div className="relative w-full h-[350px] md:h-[500px] mb-0 pb-0">
              <OptimizedImage
                src="/images/contact/man.png"
                alt="فريق خدمة العملاء - نبع الخليج"
                fill
                className="object-contain object-bottom"
                aboveTheFold={false}
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSupportSection; 