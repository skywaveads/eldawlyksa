const fs = require('fs');
const path = require('path');
const glob = require('glob');
require('dotenv').config(); // Cargar variables de entorno

// Configuración
const DOMAIN = process.env.NEXT_PUBLIC_SITE_URL || 'https://eldawlyksa.com';
const PAGES_DIR = path.join(process.cwd(), 'pages');
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const EXCLUDED_PAGES = ['_app.tsx', '_document.tsx', '_error.tsx', 'api', '404.tsx', '500.tsx', '500.js', '404.js'];
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || 'YOUR_INDEXNOW_KEY';

// Configuración de prioridades y frecuencias por tipo de página
const PAGE_SETTINGS = {
  // Páginas principales
  homePage: { priority: '1.0', changefreq: 'daily' },
  mainPages: { priority: '0.9', changefreq: 'weekly' },
  // Páginas de contenido
  servicePages: { priority: '0.8', changefreq: 'weekly' },
  blogPosts: { priority: '0.7', changefreq: 'monthly' },
  // Otras páginas
  utilityPages: { priority: '0.5', changefreq: 'monthly' },
};

// Mapeo de tipo de página según su ruta
function getPageType(path) {
  if (path === '/') return 'homePage';
  
  if (
    path === '/about' || 
    path === '/contact' || 
    path === '/track-order'
  ) return 'mainPages';
  
  if (
    path.startsWith('/services') || 
    path.includes('-service') || 
    path.includes('/refrigerated-transport') || 
    path.includes('/services-in-')
  ) return 'servicePages';
  
  if (
    path.startsWith('/blog') || 
    path.includes('/post/')
  ) return 'blogPosts';
  
  return 'utilityPages';
}

// Generar URLs a partir de los archivos de páginas
function generateUrlsFromPages() {
  const pageFiles = glob.sync(`${PAGES_DIR}/**/*.{js,jsx,ts,tsx}`);
  
  return pageFiles
    .filter(file => {
      const fileName = path.basename(file);
      const dirName = path.basename(path.dirname(file));
      
      // Excluir páginas del sistema y archivos en carpetas excluidas
      return !EXCLUDED_PAGES.some(excluded => 
        fileName === excluded || 
        fileName.startsWith(excluded) || 
        dirName === excluded
      );
    })
    .map(file => {
      // Convertir la ruta del archivo a URL
      let relativePath = file.replace(PAGES_DIR, '');
      
      // Convertir separadores de Windows a URL
      relativePath = relativePath.replace(/\\/g, '/');
      
      // Quitar extensión
      relativePath = relativePath.replace(/\.(js|jsx|ts|tsx)$/, '');
      
      // Convertir /index a /
      relativePath = relativePath.replace(/\/index$/, '/');
      
      // Asegurarse de que comienza con /
      if (!relativePath.startsWith('/')) {
        relativePath = `/${relativePath}`;
      }
      
      // Determinar el tipo de página
      const pageType = getPageType(relativePath);
      const { priority, changefreq } = PAGE_SETTINGS[pageType];
      
      return {
        url: `${DOMAIN}${relativePath}`,
        lastmod: new Date().toISOString().split('T')[0], // YYYY-MM-DD
        changefreq,
        priority
      };
    });
}

// Generar URLs para secciones específicas (fragmentos de página)
function generateSectionUrls() {
  // Secciones principales que podrían no tener su propia página pero necesitan estar en el sitemap
  const sections = [
    { path: '/services#refrigerated', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: '0.8' },
    { path: '/services#general', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: '0.8' },
    { path: '/services#express', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: '0.8' },
    { path: '/services#tracking', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: '0.8' },
  ];
  
  return sections.map(section => ({
    url: `${DOMAIN}${section.path}`,
    lastmod: section.lastmod,
    changefreq: section.changefreq,
    priority: section.priority
  }));
}

// Generar URLs para ciudades de Arabia Saudita
function generateCityUrls() {
  const cities = [
    'riyadh', 'jeddah', 'dammam', 'makkah', 'madinah', 'abha', 'tabuk', 'khamis-mushait', 
    'buraidah', 'khobar', 'najran', 'jubail', 'taif', 'hail', 'sakaka', 'yanbu', 'kharj', 
    'qatif', 'hofuf', 'dhahran'
  ];
  
  return cities.map(city => ({
    url: `${DOMAIN}/refrigerated-transport-in-${city}`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.7'
  }));
}

// Generar el XML del sitemap
function generateSitemapXml(urls) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" \n';
  xml += '        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" \n';
  xml += '        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 \n';
  xml += '        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n';
  
  urls.forEach(url => {
    xml += '  <url>\n';
    xml += `    <loc>${url.url}</loc>\n`;
    xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
    xml += `    <priority>${url.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  
  return xml;
}

// Generar robots.txt mejorado
function generateRobotsTxt() {
  return `# robots.txt for Nabaa Al-Khaleej
# ${DOMAIN}
# Last updated: ${new Date().toISOString().split('T')[0]}

User-agent: *
Allow: /

# Prohibir acceso a páginas de error y administrativas
Disallow: /404
Disallow: /500
Disallow: /api/
Disallow: /admin/

# Sitemap
Sitemap: ${DOMAIN}/sitemap.xml

# Host
Host: ${DOMAIN}
`;
}

// Notificar a los motores de búsqueda
async function notifySearchEngines() {
  const searchEngines = [
    `https://www.google.com/ping?sitemap=${DOMAIN}/sitemap.xml`,
    `https://www.bing.com/ping?sitemap=${DOMAIN}/sitemap.xml`,
    `https://search.yahoo.com/ping?sitemap=${DOMAIN}/sitemap.xml`,
    // Usando IndexNow para Bing y Yandex (más eficiente)
    `https://www.bing.com/indexnow?url=${DOMAIN}&key=${INDEXNOW_KEY}`
  ];
  
  console.log('Notificando a los motores de búsqueda...');
  
  try {
    const promises = searchEngines.map(url => 
      fetch(url)
        .then(res => {
          console.log(`Notificado ${url}: ${res.status} ${res.statusText}`);
          return res;
        })
        .catch(err => {
          console.error(`Error notificando ${url}:`, err);
          return null;
        })
    );
    
    await Promise.all(promises);
  } catch (error) {
    console.error('Error notificando motores de búsqueda:', error);
  }
}

// Función principal
async function main() {
  try {
    console.log('Generando sitemap y robots.txt...');
    
    // Generar URLs desde todas las fuentes
    const pageUrls = generateUrlsFromPages();
    const sectionUrls = generateSectionUrls();
    const cityUrls = generateCityUrls();
    
    // Combinar todas las URLs
    const allUrls = [...pageUrls, ...sectionUrls, ...cityUrls];
    
    console.log(`Encontradas ${allUrls.length} URLs totales`);
    console.log(`- ${pageUrls.length} páginas regulares`);
    console.log(`- ${sectionUrls.length} secciones específicas`);
    console.log(`- ${cityUrls.length} páginas de ciudades`);
    
    // Generar y guardar sitemap.xml
    const sitemapXml = generateSitemapXml(allUrls);
    fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemapXml);
    console.log('sitemap.xml generado correctamente');
    
    // Generar y guardar robots.txt
    const robotsTxt = generateRobotsTxt();
    fs.writeFileSync(path.join(PUBLIC_DIR, 'robots.txt'), robotsTxt);
    console.log('robots.txt generado correctamente');
    
    // Notificar a los motores de búsqueda
    await notifySearchEngines();
    
    console.log('¡Sitemap y robots.txt generados con éxito!');
  } catch (error) {
    console.error('Error generando sitemap y robots.txt:', error);
    process.exit(1);
  }
}

main(); 