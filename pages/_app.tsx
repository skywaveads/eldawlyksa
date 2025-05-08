import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextIntlClientProvider } from 'next-intl';
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from './error';
import { DefaultSeo } from 'next-seo';
import { Cairo } from 'next/font/google';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';

// تعريف الخط العربي فقط
const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-cairo',
  display: 'swap',
});

function fallbackRender() {
  return <ErrorPage />;
}

function MyApp({ Component, pageProps }: AppProps) {
  const [isHydrated, setIsHydrated] = useState(false);

  // Wait until the app is fully hydrated to prevent hydration mismatch
  useEffect(() => {
    setIsHydrated(true);
  }, []);
  
  return (
    <ErrorBoundary fallbackRender={fallbackRender}>
      <NextIntlClientProvider 
        locale="ar"
        messages={pageProps.messages || {}}
        timeZone="Asia/Riyadh"
      >
        <div className={`${cairo.variable} font-sans`}>
          <DefaultSeo
            defaultTitle="شركة نبع الخليج للنقل المبرد - افضل شركة نقل مبرد بالمملكة"
            titleTemplate="%s | شركة نبع الخليج للنقل المبرد"
            description="تقدم شركة نبع الخليج خدمات النقل المبرد والعام عالية الجودة في جميع أنحاء المملكة العربية السعودية. تشمل المميزات تتبع الشحنات في الوقت الفعلي وأسعار تنافسية وخدمة استثنائية. اتصل بنا عبر الهاتف أو واتساب اليوم."
            additionalMetaTags={[
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
              {
                name: 'theme-color',
                content: '#00022b',
              },
            ]}
            openGraph={{
              type: 'website',
              locale: 'ar_SA',
              url: 'https://www.nabaaalkhaleej.com',
              site_name: 'شركة نبع الخليج للنقل المبرد',
              images: [
                {
                  url: 'https://www.nabaaalkhaleej.com/images/logo.png',
                  width: 1200,
                  height: 630,
                  alt: 'شركة نبع الخليج للنقل المبرد',
                },
              ],
            }}
            twitter={{
              handle: '@nabaaalkhaleej',
              site: '@nabaaalkhaleej',
              cardType: 'summary_large_image',
            }}
          />
          {isHydrated ? <Component {...pageProps} /> : null}
        </div>
      </NextIntlClientProvider>
    </ErrorBoundary>
  );
}

export default MyApp; 