import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import clsx from 'clsx';
import Button from '../ui/Button';

const Header = () => {
  const t = useTranslations('common');
  const router = useRouter();
  const { pathname } = router;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false);
  // Add timeout ref to prevent dropdown from closing too quickly
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Reset mobile more dropdown when closing main menu
    if (isMobileMenuOpen) {
      setIsMobileMoreOpen(false);
    }
    // Update aria-expanded attribute via state
  };

  // Toggle more dropdown
  const toggleMoreDropdown = () => {
    setIsMoreDropdownOpen(!isMoreDropdownOpen);
  };

  // Toggle mobile more dropdown
  const toggleMobileMore = () => {
    setIsMobileMoreOpen(!isMobileMoreOpen);
  };

  // Close more dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('#more-dropdown-button') && !target.closest('#more-dropdown-menu')) {
        setIsMoreDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu on resize to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        setIsMobileMoreOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileMoreOpen(false);
  }, [pathname]);

  // Change header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  // Links arrangement in navigation
  const navLinks = [
    { href: '/', label: t('navigation.home') },          // 1- الرئيسية
    { href: '/about', label: t('navigation.about') },    // 2- من نحن
    { href: '/services', label: t('navigation.services') }, // 3- خدماتنا
    { href: '/blog', label: t('navigation.blog') }, // 4- المدونة
    { href: '/track-order', label: t('navigation.trackOrder') }, // 5- تتبع الشحنة
    { href: '/contact', label: t('navigation.contact') }, // 6- اتصل بنا
  ];

  // مزيد Dropdown items
  const moreDropdownItems = [
    { href: '/services-in-saudi-arabia-may-2025', label: t('navigation.services_in_ksa') },
    { href: '/special-service-team-may-2025', label: t('navigation.specialTeam') },
    { href: '/contact-team-may-2025', label: t('navigation.contactTeam') },
    { href: '/refrigerated-transport-in-saudi-arabia', label: 'نقل مبرد في السعودية' },
    { href: '/refrigerated-transport-in-riyadh', label: 'نقل مبرد في الرياض' },
    { href: '/refrigerated-transport-in-jeddah', label: 'نقل مبرد في جدة' },
    { href: '/refrigerated-transport-in-dammam', label: 'نقل مبرد في الدمام' },
    { href: '/refrigerated-transport-in-makkah', label: 'نقل مبرد في مكة' },
    { href: '/refrigerated-transport-in-madinah', label: 'نقل مبرد في المدينة' }
  ];

  // تعريف وقت تحديث الكاش لصورة اللوجو
  const logoUpdateTime = new Date().getTime();

  // More Dropdown open/close handlers for hover
  const handleMoreMouseEnter = () => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsMoreDropdownOpen(true);
  };
  
  const handleMoreMouseLeave = () => {
    // Set a timeout to close the dropdown after a delay
    timeoutRef.current = setTimeout(() => {
      setIsMoreDropdownOpen(false);
    }, 300); // 300ms delay
  };

  return (
    <header 
      className={clsx(
        'w-full transition-all duration-300 z-40 fixed top-0 left-0 right-0',
        isScrolled ? 'bg-primary-navy shadow-lg py-2' : 'bg-primary-navy/95 py-3'
      )}
    >
      <div className="container mx-auto px-4 flex flex-row-reverse md:flex-row items-center justify-between">
        {/* Logo - responsive sizing */}
        <div className="flex-shrink-0 logo-container relative">
          <Link href="/" aria-label="Nabaa Al-Khaleej - Home">
            <div className="relative w-[120px] h-[50px] sm:w-[140px] sm:h-[60px] md:w-[161px] md:h-[70px] logo-shine-effect">
              <div className="circle circle-1"></div>
              <div className="circle circle-2"></div>
              <div className="circle circle-3"></div>
              <div className="circle circle-4"></div>
              <div className="circle circle-5"></div>
              <div className="relative z-20 w-full h-full">
            <Image 
              src={`/images/logo.png?v=${logoUpdateTime}`}
              alt="شركة نبع الخليج للنقل المبرد" 
              fill
                  sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, 161px"
              style={{ objectFit: 'contain' }} 
              priority
            />
          </div>
            </div>
          </Link>
          <style jsx>{`
            .logo-shine-effect {
              position: relative;
              overflow: visible;
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
              width: 20px;
              height: 20px;
              animation: circle-animation 3s infinite ease-out;
              animation-delay: 0s;
              border-color: rgba(3, 169, 244, 0.7);
            }
            .circle-2 {
              width: 30px;
              height: 30px;
              animation: circle-animation 3s infinite ease-out;
              animation-delay: 0.5s;
              border-color: rgba(3, 169, 244, 0.6);
            }
            .circle-3 {
              width: 40px;
              height: 40px;
              animation: circle-animation 3s infinite ease-out;
              animation-delay: 1s;
              border-color: rgba(3, 169, 244, 0.5);
            }
            .circle-4 {
              width: 50px;
              height: 50px;
              animation: circle-animation 3s infinite ease-out;
              animation-delay: 1.5s;
              border-color: rgba(3, 169, 244, 0.4);
            }
            .circle-5 {
              width: 60px;
              height: 60px;
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
                transform: translate(-50%, -50%) scale(2.5);
                opacity: 0;
              }
            }
          `}</style>
        </div>

        {/* Hamburger Menu Button - Mobile Only */}
        <button
          id="menu-toggle"
          type="button"
          className="inline-flex items-center p-2 text-white md:hidden"
          onClick={toggleMobileMenu}
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Close main menu" : "Open main menu"}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            className="w-6 h-6 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Layout with Centered Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-center mx-auto">
          {/* Desktop Navigation */}
          <nav className="flex items-center justify-center space-x-2 mx-auto">
            {/* Regular navigation links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'px-3 py-2 text-base font-medium rounded-md transition-colors hover:bg-[#00033f]',
                  isActive(link.href)
                    ? 'text-amber-400 border-b-2 border-amber-400'
                    : 'text-white hover:text-amber-400'
                )}
              >
                {link.label}
        </Link>
            ))}
            
            {/* More Dropdown - At the end of nav */}
            <div className="relative"
            onMouseEnter={handleMoreMouseEnter}
            onMouseLeave={handleMoreMouseLeave}
          >
            <button
              id="more-dropdown-button"
              className={clsx(
                  'px-3 py-2 text-base font-medium rounded-md transition-colors hover:bg-[#00033f] flex items-center',
                isMoreDropdownOpen 
                  ? 'text-amber-400 bg-[#00033f]'
                  : 'text-white hover:text-amber-400'
              )}
              aria-expanded={isMoreDropdownOpen}
              aria-haspopup="true"
              type="button"
              tabIndex={0}
            >
              {t('navigation.more')}
              <svg 
                className={clsx(
                  "w-4 h-4 mr-1 transition-transform duration-200",
                  isMoreDropdownOpen ? "rotate-180" : ""
                )} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                  aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown menu */}
            <div 
              id="more-dropdown-menu"
              className={clsx(
                  "absolute left-0 mt-0 w-72 bg-primary-navy shadow-lg rounded-md border border-gray-700 z-50 transition-all duration-300",
                  isMoreDropdownOpen 
                    ? "opacity-100 visible transform translate-y-0" 
                    : "opacity-0 invisible transform -translate-y-2"
              )}
              onMouseEnter={handleMoreMouseEnter}
              onMouseLeave={handleMoreMouseLeave}
            >
              {/* Add a padding top area to bridge the gap between button and menu */}
              <div className="h-2 w-full"></div>
              <div className="py-1">
                {moreDropdownItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                      className="block w-full text-left px-4 py-3 text-white hover:bg-[#00033f] hover:text-amber-400 text-sm border-b border-gray-700 last:border-b-0 transition-colors duration-200"
                    onClick={() => setIsMoreDropdownOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
        </div>

        {/* CTA Buttons - Desktop Only */}
        <div className="hidden md:flex items-center flex-shrink-0">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/+966561475554"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-whatsapp hover:bg-whatsapp/90 text-white font-medium py-2 px-4 rounded-full transition-all duration-300 text-sm flex items-center ml-5"
            aria-label="Contact us on WhatsApp"
          >
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
            </svg>
            <span>{t('buttons.whatsapp')}</span>
          </a>

          {/* Call Now Button */}
          <a
            href="tel:+966561475554"
            className="bg-amber-400 hover:bg-amber-500 text-black font-medium py-2 px-4 rounded-full transition-all duration-300 text-sm flex items-center"
            aria-label="Call us now"
          >
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>{t('buttons.callNow')}</span>
          </a>
        </div>
      </div>

      {/* Mobile Menu with smooth slide transition */}
      <div
        id="mobile-menu"
        className={clsx(
          'md:hidden bg-primary-navy overflow-y-auto transition-all duration-300 ease-in-out absolute top-full left-0 right-0 z-30',
          isMobileMenuOpen 
            ? 'max-h-[90vh] opacity-100 visible border-t border-gray-800 shadow-lg mt-0' 
            : 'max-h-0 opacity-0 invisible'
        )}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="px-4 py-3 space-y-3 sm:px-6">
          {/* Regular navigation links - First for better visibility */}
          <div className="space-y-2 mb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                  'block px-3 py-3 rounded-md text-base font-medium transition-colors duration-200',
                isActive(link.href)
                  ? 'text-amber-400 bg-[#00033f] border-r-4 border-amber-400'
                  : 'text-white hover:text-amber-400 hover:bg-[#00033f]'
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          </div>

          {/* More section in mobile menu - as collapsible dropdown */}
          <div className="mb-4 border-t border-b border-gray-700 py-2">
            <button
              className="w-full flex items-center justify-between px-3 py-3 text-white hover:text-amber-400 hover:bg-[#00033f] rounded-md transition-colors duration-200"
              onClick={toggleMobileMore}
              aria-expanded={isMobileMoreOpen}
              aria-controls="mobile-more-dropdown"
            >
              <span className="text-base font-bold text-amber-400">{t('navigation.more')}</span>
              <svg 
                className={clsx(
                  "w-5 h-5 transition-transform duration-200",
                  isMobileMoreOpen ? "rotate-180" : ""
                )} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div 
              id="mobile-more-dropdown"
              className={clsx(
                "overflow-hidden transition-all duration-300 ease-in-out pr-2",
                isMobileMoreOpen 
                  ? "max-h-[500px] opacity-100 visible mt-2" 
                  : "max-h-0 opacity-0 invisible"
              )}
            >
              <div className="space-y-2 pl-4 border-r-2 border-gray-700">
                {moreDropdownItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2.5 rounded-md text-base font-medium text-white hover:text-amber-400 hover:bg-[#00033f] transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Buttons for mobile */}
          <div className="pt-2 pb-4 flex flex-col space-y-3">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/+966561475554"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-whatsapp hover:bg-whatsapp/90 text-white font-medium py-3 px-6 rounded-full text-center flex items-center justify-center"
              aria-label="Contact us on WhatsApp"
            >
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
              </svg>
              <span>{t('buttons.whatsapp')}</span>
            </a>

            {/* Call Now Button */}
            <a
              href="tel:+966561475554"
              className="bg-amber-400 hover:bg-amber-500 text-black font-medium py-3 px-6 rounded-full text-center flex items-center justify-center"
              aria-label="Call us now"
            >
              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{t('buttons.callNow')}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 