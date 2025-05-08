import React, { ReactNode, useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from '../common/WhatsAppButton';
import BackToTop from '../common/BackToTop';
import SaudiCitiesSlider from '../common/SaudiCitiesSlider';
import CustomerSupportSection from '../common/CustomerSupportSection';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [mounted, setMounted] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Only show UI after client-side hydration
  useEffect(() => {
    setMounted(true);
    
    // Function to update header height for dynamic spacing
    const updateHeaderHeight = () => {
      const headerElement = document.querySelector('header');
      if (headerElement) {
        setHeaderHeight(headerElement.offsetHeight);
      }
    };
    
    // Initial measurement after render
    updateHeaderHeight();
    
    // Update on resize
    window.addEventListener('resize', updateHeaderHeight);
    
    // Update after a short delay to ensure all elements are fully rendered
    const timeout = setTimeout(updateHeaderHeight, 300);
    
    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div dir="rtl" lang="ar" className="flex flex-col min-h-screen font-cairo">
      <Header />
      <main 
        className="flex-grow w-full mx-auto" 
        style={{ marginTop: `${headerHeight}px` }}
      >
        {mounted ? children : null}
      </main>
      {mounted && <WhatsAppButton />}
      {mounted && <BackToTop />}
      <Footer />
    </div>
  );
};

export default Layout; 