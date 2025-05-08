import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo, NextSeoProps, LocalBusinessJsonLd } from 'next-seo';

interface SeoProps {
  pageTitle?: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: 'website' | 'article' | 'product';
  ogImage?: string;
  jsonLd?: Record<string, any> | Record<string, any>[];
}

const Seo = ({
  pageTitle,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage = '/images/og-image.jpg',
  jsonLd,
}: SeoProps) => {
  const router = useRouter();
  const siteName = 'شركة نبع الخليج للنقل المبرد';
  const siteUrl = 'https://nabaaalkhaleej.com';

  // Si no se proporciona un título específico, usar un título por defecto
  const title = pageTitle 
    ? `${pageTitle} | ${siteName}` 
    : `${siteName} - خدمات النقل المبرد في المملكة العربية السعودية`;

  // Si no se proporciona una descripción específica, usar una descripción por defecto
  const metaDescription = description || 
    'شركة نبع الخليج للنقل المبرد توفر خدمات نقل آمنة وموثوقة للمواد الغذائية والمجمدة والأدوية في المملكة العربية السعودية. اتصل بنا للحصول على أفضل حلول النقل المبرد.';
  
  // Asegurar que la descripción no exceda los 160 caracteres
  const finalDescription = metaDescription.length > 160 
    ? `${metaDescription.substring(0, 157)}...` 
    : metaDescription;

  // URL canónica
  const canonical = canonicalUrl || `${siteUrl}${router.asPath}`;

  // Generar datos estructurados por defecto si no se proporciona
  const defaultJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+966561475554',
      contactType: 'customer service',
      areaServed: 'SA',
      availableLanguage: ['Arabic', 'English']
    },
    sameAs: [
      'https://www.facebook.com/nabaaalkhaleej',
      'https://twitter.com/nabaaalkhaleej',
      'https://www.instagram.com/nabaaalkhaleej'
    ]
  };

  // Si se proporcionan datos estructurados específicos, usarlos; de lo contrario, usar los por defecto
  const structuredData = jsonLd || defaultJsonLd;

  return (
    <Head>
      {/* Metadatos básicos */}
      <title>{title}</title>
      <meta name="description" content={finalDescription} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:locale" content="ar_SA" />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Datos estructurados (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />

      {/* Verificaciones para motores de búsqueda */}
      <meta name="google-site-verification" content="GOOGLE_VERIFICATION_CODE" />
      <meta name="msvalidate.01" content="BING_VERIFICATION_CODE" />
    </Head>
  );
};

export default Seo; 