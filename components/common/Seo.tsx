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
  openGraph?: {
    images?: Array<{
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }>;
    type?: string;
    article?: {
      publishedTime?: string;
      authors?: string[];
      tags?: string[];
    };
    [key: string]: any;
  };
}

const Seo = ({
  pageTitle,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage = '/images/og-image.jpg',
  jsonLd,
  openGraph,
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

  // Configurar OpenGraph por defecto si no se proporciona
  const defaultOpenGraph = {
    title,
    description: finalDescription,
    url: canonical,
    type: ogType,
    images: [
      {
        url: `${siteUrl}${ogImage}`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  };

  // Usar openGraph proporcionado o el por defecto
  const finalOpenGraph = openGraph || defaultOpenGraph;

  return (
    <>
      <Head>
        {/* Metadatos básicos */}
        <title>{title}</title>
        <meta name="description" content={finalDescription} />
        <link rel="canonical" href={canonical} />
        
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
      
      {/* Usar NextSeo para Open Graph avanzado */}
      <NextSeo
        title={title}
        description={finalDescription}
        canonical={canonical}
        openGraph={finalOpenGraph}
      />
    </>
  );
};

export default Seo; 