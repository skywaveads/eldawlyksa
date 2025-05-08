import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html dir="rtl" lang="ar">
      <Head>
        {/* Viewport meta tag for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        
        {/* Favicon configuration */}
        <link rel="icon" href="/images/logo.ico" sizes="any" />
        <link rel="shortcut icon" href="/images/logo.ico" type="image/x-icon" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// Custom Document doesn't have access to the router via hooks
// So we need to determine the lang and dir in _app.tsx instead 