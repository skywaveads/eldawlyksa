import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('common');
  const currentYear = new Date().getFullYear();

  // Quick Links
  const quickLinks = [
    { href: '/', label: t('navigation.home') },
    { href: '/about', label: t('navigation.about') },
    { href: '/services', label: t('navigation.services') },
    { href: '/blog', label: t('navigation.blog') },
    { href: '/track-order', label: t('navigation.trackOrder') },
    { href: '/contact', label: t('navigation.contact') },
    { href: '/privacy-policy', label: t('footer.privacyPolicy') },
    { href: '/terms', label: t('footer.terms') },
  ];

  // Services Links
  const servicesLinks = [
    { href: '/services#refrigerated', label: 'النقل المبرد' },
    { href: '/services#general', label: 'النقل العام' },
    { href: '/services#express', label: 'النقل السريع' },
    { href: '/services#tracking', label: 'تتبع الشحنات' },
  ];

  // تعريف وقت تحديث الكاش لصورة اللوجو
  const logoUpdateTime = new Date().getTime();

  return (
    <footer className="bg-primary-navy text-white pt-10 sm:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Logo and company info - Will be full width on mobile, 1/4 on desktop */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <div className="flex flex-col items-center md:items-start">
              <Link href="/" aria-label="Nabaa Al-Khaleej - Home" className="mb-4">
                <div className="relative w-[80px] h-[80px] md:w-[100px] md:h-[100px] logo-shine-effect">
                  <div className="circle circle-1"></div>
                  <div className="circle circle-2"></div>
                  <div className="circle circle-3"></div>
                  <div className="circle circle-4"></div>
                  <div className="circle circle-5"></div>
                  <Image 
                    src={`/images/logo.png?v=${logoUpdateTime}`}
                    alt="شركة نبع الخليج للنقل المبرد" 
                    fill
                    sizes="(max-width: 768px) 80px, 100px"
                    style={{ objectFit: 'contain' }} 
                  />
                </div>
              </Link>
              <style jsx>{`
                .logo-shine-effect {
                  position: relative;
                  overflow: visible;
                  border-radius: 50%;
                }
                .circle {
                  position: absolute;
                  border-radius: 50%;
                  background: rgba(255, 255, 255, 0);
                  border: 2px solid rgba(3, 169, 244, 0.5);
                  box-shadow: 0 0 10px rgba(3, 169, 244, 0.3);
                  z-index: 10;
                  opacity: 0;
                }
                .circle-1 {
                  width: 16px;
                  height: 16px;
                  animation: circle-animation 3s infinite ease-out;
                  animation-delay: 0s;
                  border-color: rgba(3, 169, 244, 0.7);
                }
                .circle-2 {
                  width: 24px;
                  height: 24px;
                  animation: circle-animation 3s infinite ease-out;
                  animation-delay: 0.5s;
                  border-color: rgba(3, 169, 244, 0.6);
                }
                .circle-3 {
                  width: 32px;
                  height: 32px;
                  animation: circle-animation 3s infinite ease-out;
                  animation-delay: 1s;
                  border-color: rgba(3, 169, 244, 0.5);
                }
                .circle-4 {
                  width: 40px;
                  height: 40px;
                  animation: circle-animation 3s infinite ease-out;
                  animation-delay: 1.5s;
                  border-color: rgba(3, 169, 244, 0.4);
                }
                .circle-5 {
                  width: 48px;
                  height: 48px;
                  animation: circle-animation 3s infinite ease-out;
                  animation-delay: 2s;
                  border-color: rgba(3, 169, 244, 0.3);
                }
                @keyframes circle-animation {
                  0% {
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) scale(0);
                    opacity: 0.8;
                  }
                  100% {
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) scale(4);
                    opacity: 0;
                  }
                }
              `}</style>
              <p className="text-gray-300 text-sm mb-4 text-center md:text-right max-w-xs">
                شركة رائدة في مجال النقل المبرد والعام في المملكة العربية السعودية، نسعى لتقديم أفضل الخدمات اللوجستية بأعلى معايير الجودة.
              </p>
            </div>
          </div>

          {/* Links columns - 3/4 of width on desktop, grid for equal columns */}
          <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-center sm:text-right">{t('footer.quickLinks')}</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href} className="text-center sm:text-right">
                    <Link href={link.href} className="text-gray-300 hover:text-white transition-colors inline-block py-1">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-center sm:text-right">{t('footer.services')}</h3>
              <ul className="space-y-2">
                {servicesLinks.map((link) => (
                  <li key={link.href} className="text-center sm:text-right">
                    <Link href={link.href} className="text-gray-300 hover:text-white transition-colors inline-block py-1">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-center sm:text-right">{t('footer.contactInfo')}</h3>
              <ul className="space-y-3">
                <li className="flex flex-wrap justify-center sm:justify-start sm:flex-nowrap">
                  <svg className="w-5 h-5 mt-1 text-primary-cyan shrink-0 mx-2 sm:ml-0 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-300 text-center sm:text-right">
                    طريق الملك فهد، الرياض، المملكة العربية السعودية
                  </span>
                </li>
                <li className="flex flex-wrap justify-center sm:justify-start sm:flex-nowrap">
                  <svg className="w-5 h-5 mt-1 text-primary-cyan shrink-0 mx-2 sm:ml-0 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a 
                    href="tel:+966561475554"
                    className="text-gray-300 hover:text-white transition-colors text-center sm:text-right"
                    aria-label="Call our phone number"
                  >
                    <span dir="ltr" style={{ unicodeBidi: 'embed', direction: 'ltr', display: 'inline-block' }}>+966 561 475 554</span>
                  </a>
                </li>
                <li className="flex flex-wrap justify-center sm:justify-start sm:flex-nowrap">
                  <svg className="w-5 h-5 mt-1 text-primary-cyan shrink-0 mx-2 sm:ml-0 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a 
                    href="mailto:info@nabaaalkhaleej.com" 
                    className="text-gray-300 hover:text-white transition-colors text-center sm:text-right"
                    aria-label="Email us"
                  >
                    info@nabaaalkhaleej.com
                  </a>
                </li>
                <li className="flex flex-wrap justify-center sm:justify-start sm:flex-nowrap">
                  <svg className="w-5 h-5 mt-1 text-primary-cyan shrink-0 mx-2 sm:ml-0 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-300 text-center sm:text-right">
                    الأحد - الخميس: 8:00 صباحاً - 5:00 مساءً
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0 text-center md:text-right">
            <p className="flex flex-wrap justify-center md:justify-start gap-2">
              <span>© {currentYear} شركة نبع الخليج للنقل المبرد.</span>
              <span>{t('footer.rights')}</span>
              <Link href="/privacy-policy" className="text-primary-cyan hover:text-white transition-colors">
                {t('footer.privacyPolicy')}
              </Link>
            </p>
          </div>
          <div className="text-sm text-amber-400">
            تم التصميم بكل <span className="text-red-500">❤️</span> بواسطة{' '}
            <a 
              href="https://www.skywaveads.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-cyan hover:text-white transition-colors font-semibold"
            >
              Sky Wave
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 