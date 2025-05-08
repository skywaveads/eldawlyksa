module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/about',
        'http://localhost:3000/services',
        'http://localhost:3000/contact',
        'http://localhost:3000/track-order'
      ],
      numberOfRuns: 3,
      startServerCommand: 'npm run start',
      startServerReadyPattern: 'ready on',
      startServerReadyTimeout: 30000,
    },
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        // Requisitos personalizados basados en las directrices del proyecto
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],

        // Core Web Vitals específicos
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }], // LCP <= 2.5s
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }], // CLS <= 0.1
        'interactive': ['error', { maxNumericValue: 3500 }], // TTI <= 3.5s
        
        // Métricas adicionales críticas
        'first-contentful-paint': ['error', { maxNumericValue: 1800 }], // FCP <= 1.8s
        'speed-index': ['error', { maxNumericValue: 3000 }], // SI <= 3s
        'max-potential-fid': ['error', { maxNumericValue: 300 }], // Max Potential FID <= 300ms
        
        // Vulnerabilidades y best practices específicas
        'uses-http2': 'error',
        'uses-text-compression': 'error',
        'uses-optimized-images': 'error',
        'uses-responsive-images': 'error',
        'uses-rel-preload': 'warning',
        'efficient-animated-content': 'warning',
        'duplicated-javascript': 'error',
        'legacy-javascript': 'warning',
        'unused-javascript': 'warning',
        'unused-css-rules': 'warning',
        
        // Accesibilidad requerida
        'color-contrast': 'error',
        'html-has-lang': 'error',
        'meta-viewport': 'error',
        'document-title': 'error',
        'html-lang-valid': 'error',
        'meta-description': 'error',
        'tap-targets': 'error',
        
        // SEO requerido
        'hreflang': 'warning',
        'canonical': 'error',
        'robots-txt': 'error',
        'structured-data': 'warning',
        
        // Algunas reglas que podemos relajar
        'unused-javascript': ['warn', { maxLength: 10 }],
        'render-blocking-resources': 'warn',
        'unminified-css': 'warn',
        'unminified-javascript': 'warn',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}; 