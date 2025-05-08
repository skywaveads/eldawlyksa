# Nabaa Al-Khaleej - Sitio Web Optimizado

Este proyecto es el sitio web oficial de Nabaa Al-Khaleej para servicios de transporte refrigerado en Arabia Saudita.

## Guía de Optimización (Mayo 2025)

Este proyecto ha sido optimizado siguiendo las directrices de rendimiento, SEO, UX, accesibilidad y seguridad establecidas en mayo de 2025. A continuación se detallan las optimizaciones implementadas:

### 🚀 Rendimiento

- **Imágenes optimizadas**: Conversión automática a formatos WebP/AVIF usando el script `scripts/convert-images.js`
- **Componente OptimizedImage**: Carga perezosa (lazy-loading) para imágenes bajo el pliegue
- **Precarga de recursos críticos**: Elementos críticos como fuentes e imágenes hero con `fetchpriority="high"`
- **Compresión HTTP**: Habilitada compresión Brotli/Gzip mediante configuración en `next.config.js`
- **División de código (code-splitting)**: Implementado mediante importaciones dinámicas para reducir el tamaño de los bundles

### 🔍 SEO

- **Generación automática de sitemap**: Implementada en `scripts/generate-sitemap.js`
- **Metadatos dinámicos**: Títulos, descripciones y etiquetas personalizadas por página
- **Datos estructurados JSON-LD**: Implementados para organización, productos y artículos
- **Notificación a motores de búsqueda**: Ping automático a Google y Bing

### 👥 UX y Accesibilidad

- **Diseño mobile-first**: Breakpoints responsivos, sin scroll horizontal a 320px
- **Optimización de contraste de color**: Relación mínima de 4.5:1
- **Atributos ARIA**: Implementados para mejorar la accesibilidad
- **Menú hamburguesa**: Implementado para dispositivos móviles (pantallas < 768px)

### 🔒 Seguridad

- **Redirección HTTPS forzada**: Configurada en `next.config.js`
- **Cabeceras de seguridad**: Content-Security-Policy, X-Frame-Options, HSTS, etc.
- **Dependencias actualizadas**: Todas las dependencias actualizadas a versiones LTS

### 🛠️ Mantenibilidad y DevOps

- **Lighthouse CI**: Configurado en `lighthouserc.js` para verificar métricas en cada PR
- **Registro de Web Vitals**: Implementado envío de métricas a GA4
- **Prettier + ESLint**: Configurados para ejecutarse en pre-commit
- **Tests automatizados**: Implementados con Jest/Playwright para rutas críticas

## Estructura del Proyecto

```
├── components/         # Componentes React
│   ├── common/         # Componentes compartidos
│   ├── layout/         # Componentes de layout
│   └── ui/             # Componentes UI básicos
├── pages/              # Páginas y rutas
├── public/             # Archivos estáticos
├── scripts/            # Scripts de optimización
│   ├── convert-images.js       # Conversión de imágenes
│   └── generate-sitemap.js     # Generación de sitemap
├── styles/             # Estilos globales
├── next.config.js      # Configuración de Next.js
└── lighthouserc.js     # Configuración de Lighthouse CI
```

## Comandos Disponibles

```bash
# Desarrollo
npm run dev             # Iniciar servidor de desarrollo

# Construcción
npm run build           # Construir para producción (incluye optimización de imágenes)
npm run postbuild       # Generar sitemap (ejecutado automáticamente después de build)

# Optimización
npm run convert-images  # Convertir imágenes a WebP/AVIF
npm run analyze         # Analizar tamaño de bundles
npm run lighthouse      # Ejecutar auditoría de Lighthouse

# Calidad de código
npm run lint            # Ejecutar ESLint
npm run format          # Ejecutar Prettier
npm run test            # Ejecutar tests unitarios
npm run test:e2e        # Ejecutar tests end-to-end

# Completo
npm run audit           # Ejecutar todas las auditorías (lint, test, lighthouse)
```

## Métricas Objetivo

- **Lighthouse**: Puntuaciones ≥ 95 en móvil
- **Core Web Vitals**:
  - LCP (Largest Contentful Paint): ≤ 2.5s
  - INP (Interaction to Next Paint): ≤ 200ms
  - CLS (Cumulative Layout Shift): ≤ 0.1

## Contribución

1. Asegúrate de que tu PR no disminuya las puntuaciones de Lighthouse
2. Ejecuta `npm run audit` antes de enviar tu PR
3. Sigue las convenciones de commit establecidas
4. Asegúrate de que todos los tests pasen

## Licencia

Todos los derechos reservados © Nabaa Al-Khaleej 2025 

## Despliegue en Vercel

### Configuración de Variables de Entorno

Para desplegar correctamente este sitio en Vercel, es necesario configurar las siguientes variables de entorno:

1. Desde la consola de Vercel, ve a tu proyecto
2. Navega a "Settings" > "Environment Variables"
3. Añade cada variable del archivo `vercel.env` con sus valores correspondientes

También puedes configurar los valores usando la CLI de Vercel:

```bash
vercel env add NEXT_PUBLIC_SITE_URL
```

### Variables Requeridas

Las variables marcadas con 🔴 son requeridas para el funcionamiento correcto del sitio:

🔴 `NEXT_PUBLIC_SITE_URL` - URL completa del sitio (ej: https://nabaaalkhaleej.com)  
🔴 `NEXT_PUBLIC_SITE_NAME` - Nombre del sitio  
🔴 `INDEXNOW_KEY` - Clave para IndexNow (SEO)  

### Despliegue Automático

El sitio está configurado para desplegarse automáticamente con cada commit a la rama `main`. También puedes desplegar manualmente desde la consola de Vercel o usando:

```bash
vercel --prod
```

## Desarrollo Local

1. Clona el repositorio
2. Instala las dependencias: `npm install`
3. Copia `vercel.env` a `.env.local` y completa los valores
4. Ejecuta el servidor de desarrollo: `npm run dev`

## Generación de Sitemap

El sitemap se genera automáticamente mediante el script `scripts/generate-sitemap.js`. Se puede ejecutar manualmente con:

```bash
node scripts/generate-sitemap.js
```

---

© Nabaa Al-Khaleej 