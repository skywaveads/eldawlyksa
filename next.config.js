// const { withNextIntl } = require('next-intl/plugin');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const { locales, defaultLocale } = require('./next-intl.config.js');

const isVercelBuild = process.env.VERCEL === '1';

const nextConfig = {
  reactStrictMode: true,
  // i18n debe ser deshabilitado para compilación en modo export
  // i18n: {
  //   locales: locales,
  //   defaultLocale: defaultLocale,
  // },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: isVercelBuild ? false : true, // Only unoptimized for local builds
  },
  compress: true,
  distDir: '.next',
  // Remove output: 'export' for Vercel deployment
  trailingSlash: false,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  // Headers no son compatibles con output: export
  // async headers() {...},
  // Redirects no son compatibles con output: export
  // async redirects() {...},
  
  // Excluir páginas problemáticas que causan conflictos
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  webpack: (config, { dev, isServer }) => {
    // Excluir el componente de blog dinámico para evitar conflictos
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        'pages/blog/[slug]': false,
      });
    }
    return config;
  },
};

// module.exports = withNextIntl('./i18n.ts')(
//   withBundleAnalyzer(nextConfig)
// );

module.exports = withBundleAnalyzer(nextConfig); 