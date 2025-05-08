Okay, this is an excellent starting point for a Cursor prompt. Let's enhance it to be even more comprehensive and prescriptive, incorporating finer details for modernization, UX, and SEO, ensuring the AI has maximum clarity.

Here's the improved prompt, building upon your solid foundation:

### ROLE
You are an Expert Full-Stack Engineer specializing in Next.js, Modern UI/UX, Performance Optimization, and Advanced SEO Implementation. Your task is to re-engineer the provided logistics website screenshots into a cutting-edge, high-performance, and SEO-dominant web application.

### OBJECTIVE
Recreate the core layout and functionality of the provided logistics website screenshots ("Nabaa Al-Khaleej Refrigerated Transport") using the specified tech stack. Elevate the design significantly with modern aesthetics and UX best practices. Implement rigorous SEO strategies aligned with Google's anticipated April 2025 standards (emphasizing Core Web Vitals, EEAT signals, and Helpful Content) to achieve top SERP rankings for the target title: `شركة نبع الخليج للنقل المبرد - افضل شركة نقل مبرد بالمملكة`. Ensure the final build is production-ready for Vercel.

### STACK & GLOBAL RULES
- **Framework**: **Next.js 14** – **Pages Router** architecture.
- **Styling**: **Tailwind CSS** utility-first approach. Utilize **shadcn/ui** for pre-built, accessible components (Accordion, Buttons, potentially Input, etc.). Install `clsx` for conditional classes.
- **Image Handling**:
    - **Storage Path**: All static image assets MUST reside in `/public/images/[pageOrComponent]/[descriptive-name].{webp,png,jpg,svg}`. Organize logically (e.g., `/public/images/home/hero-agent.png`, `/public/images/services/refrigerated-transport.webp`).
    - **Optimization**: Prioritize **.webp** format for photographic content. Use `next/image` component exclusively for automatic optimization, AVIF/WebP support, and lazy loading.
    - **Alt Text**: All images must have descriptive, keyword-relevant `alt` text (primarily in Arabic).
- **Internationalization (i18n)**: Implement language toggle (AR ↔︎ EN) using `next-intl`.
    - **Default**: **Arabic (RTL)** layout and content.
    - **Setup**: Configure `next-intl` to load translations from JSON files. Ensure seamless layout direction switching.
- **Deployment Target**: Vercel. Include necessary configurations (`vercel.json` if needed, ensure environment variables are handled).
- **SEO & Sitemap**: Use `next-seo` for meta tag management and JSON-LD. Use `next-sitemap` for automatic `sitemap.xml` and `robots.txt` generation post-build.
- **Branding**:
    - **Primary Colors**: Dark Navy (`#00153b`), Cyan (`#00b4d8`).
    - **Accent/CTA**: Orange (`#ff9f00`).
    - **Neutrals**: White, light grays for backgrounds/text as needed.
- **Typography**:
    - **Font Pair**: "Cairo" (Google Fonts) for Arabic UI, "Poppins" (Google Fonts) for Latin (English UI/code/potentially numbers). Configure font loading optimally (e.g., `next/font`).
    - **Hierarchy**: Implement clear typographic scale using Tailwind classes for headings (h1-h6) and paragraphs.
- **State Management**: Use React Context API for simple global state (like theme or language) if needed. Avoid complex state managers unless necessary.
- **Linting/Formatting**: Enforce strict ESLint & Prettier rules (configure based on Next.js/TypeScript best practices).

### PAGES & COMPONENTS STRUCTURE


/pages
_app.tsx // Global layout, providers (next-intl, Theme)
_document.tsx // Custom document structure (font loading, lang attribute)
index.tsx // Home page
services.tsx // Main Services overview page
about.tsx // About Us page
track-order.tsx // Shipment Tracking interface page
contact.tsx // Contact Us page (form, map, details)
404.tsx // Custom 404 page

/components
/layout
Layout.tsx // Main wrapper (Header, Footer, children)
Header.tsx // Sticky header, nav, CTAs, lang switch
Footer.tsx // Footer links, info, copyright
/ui // shadcn/ui components (or wrappers around them)
Button.tsx
Accordion.tsx
Input.tsx
Label.tsx
/common
Hero.tsx // Reusable Hero section (accepts image, title, text, CTAs props)
ServiceCard.tsx // Card for service display (props: title, description, imageSrc, link). Implement triangular mask via CSS clip-path or mask-image.
StatsCounter.tsx // Animated number counter (props: targetNumber, label). Use Intersection Observer for trigger.
FaqAccordion.tsx // Wrapper for shadcn Accordion specifically for FAQs (props: items array).
MapEmbed.tsx // Google Maps iframe wrapper (props: lat, lng, apiKey?, title). Ensure lazy loading.
Seo.tsx // Centralized component using next-seo (props: title, description, canonicalUrl, openGraph data, jsonLd).
ContactForm.tsx // Contact form logic & presentation.
WhatsAppButton.tsx // Floating or fixed WhatsApp button.
/icons // SVG icons as React components

### DESIGN & UX SPECIFICS (Modernization Focus)
1.  **Overall Feel**: Clean, professional, efficient, trustworthy. Utilize ample whitespace, consistent padding/margin (Tailwind spacing scale).
2.  **Header (`/components/layout/Header.tsx`)**:
    *   **Sticky**: Remains visible on scroll. Navy background (`#00153b`).
    *   **Layout**: Logo left, Navigation links (Home, About, Services, Track Order, Contact) centered/right, CTAs (WhatsApp Button, Call Now Button styled distinctly) right.
    *   **Responsiveness**: Collapse nav links into a hamburger menu on mobile/tablet. Ensure CTAs remain easily accessible.
    *   **Language Switcher**: Subtle toggle/dropdown (e.g., AR | EN).
3.  **Hero (`/components/common/Hero.tsx`)**:
    *   **Layout**: Flexible 2-column layout (RTL default). Image/graphic on one side (e.g., CSR agent for Home, truck banner for Services), text content (H1, paragraph, CTAs) on the other.
    *   **Visuals**: Use high-quality, relevant images per page. Ensure the Home page uses the specified CSR agent PNG with a transparent background if intended.
    *   **CTAs**: Prominent primary (Orange) and secondary (Cyan outline or lighter variant) buttons.
4.  **Service Grid/Cards (`/components/common/ServiceCard.tsx`)**:
    *   **Visual**: Replicate the *idea* of the triangular image mask but implement using modern CSS (`clip-path: polygon(...)` or `mask-image`) for flexibility and performance. *Do not* use pre-cut images if avoidable.
    *   **Interaction**: Subtle scale/lift animation on hover (`transform: scale(1.03)`, `box-shadow`). Ensure smooth transitions.
    *   **Content**: Clear service title (h3), concise description, link/button to learn more (if applicable).
5.  **Track Order Page (`/pages/track-order.tsx`)**:
    *   **Layout**: Two columns. Left column: Tracking input field + "Track Now" button (Green accent?) above the `FaqAccordion.tsx` component. Right column: `MapEmbed.tsx`.
    *   **Functionality**: Input field requires validation. "Track Now" button click should trigger a *dummy* asynchronous function (e.g., `fetch`) simulating an API call with loading/success/error states reflected in the UI (e.g., display status message below input, change button state). No real tracking backend needed for this phase.
    *   **Map**: Lazy-load the Google Map embed to improve initial page load.
6.  **Stats Counter (`/components/common/StatsCounter.tsx`)**:
    *   **Animation**: Numbers should animate counting up from 0 to the target value.
    *   **Trigger**: Animation should trigger only when the component scrolls into the viewport (use `react-intersection-observer` or similar). Gentle fade-in effect for the entire section.
7.  **Footer (`/components/layout/Footer.tsx`)**:
    *   **Structure**: Clean three or four-column layout (Quick Links, Services Links, Contact Info/Address, Mini Logo/Copyright).
    *   **Content**: Include essential links (Privacy Policy, Terms - even if placeholder pages). Display copyright year dynamically.
8.  **Forms (`/components/common/ContactForm.tsx`, Tracking Input)**: Use `shadcn/ui` Input/Label. Implement clear visual states for focus, validation (error messages, red borders), and success.
9.  **Accessibility (WCAG 2.1 AA)**: Ensure keyboard navigability, logical focus order, sufficient color contrast (use contrast checker tools), semantic HTML structure (correct use of `header`, `nav`, `main`, `article`, `aside`, `footer`, headings). Use ARIA attributes where necessary (e.g., for custom controls).
10. **Responsiveness**: Flawless, mobile-first responsive design across all common viewport sizes (mobile, tablet, desktop). Test thoroughly.
11. **Micro-interactions**: Add subtle hover effects, focus states, and transitions to enhance user engagement without sacrificing performance.

### SEO & PERFORMANCE MANDATES (APR 2025 Focus)
-   **Core Web Vitals (CWV)**: Target strict scores: LCP ≤ 2.0s, CLS < 0.1, INP ≤ 100ms.
-   **Site Title**: Hardcode the exact Arabic title in `_app.tsx` or `Seo.tsx` default: `شركة نبع الخليج للنقل المبرد - افضل شركة نقل مبرد بالمملكة`.
-   **Meta Descriptions**: Default description (approx. 155 chars, English provided can be translated): `Naba Alkhaleej offers reliable, high-quality refrigerated and general freight transport across Saudi Arabia. Features include real-time tracking, competitive pricing, and exceptional service. Contact us via Call or WhatsApp today.` Customize per page where appropriate within `Seo.tsx`.
-   **Headings (H1-H6)**:
    *   Strictly **one unique H1 per page**.
    *   H1 should contain the page's primary target keyword (e.g., Home H1 contains "نقل مبرد", Services H1 contains "خدمات النقل").
    *   Use H2-H6 logically to structure content semantically.
-   **Schema Markup (JSON-LD)**:
    *   Implement `LocalBusiness` schema in `Seo.tsx` (populated with company name, address, phone number, business hours if available).
    *   Implement `WebSite` schema.
    *   Consider `Service` schema on the Services page for each listed service.
-   **Canonical URLs**: Auto-generate `<link rel="canonical">` for every page via `next-seo` to prevent duplicate content issues.
-   **Performance**:
    *   **Lazy Loading**: Aggressively lazy-load components and images below the fold. Use `next/dynamic` for heavy components if necessary.
    *   **Image Optimization**: Rely on `next/image` `priority` prop *only* for the main LCP element (likely the Hero image on each page).
    *   **Code Splitting**: Leverage Next.js automatic code splitting per page.
    *   **Bundle Analysis**: Install and configure `@next/bundle-analyzer` to inspect and optimize bundle sizes.
    *   **Font Optimization**: Use `next/font` for efficient font loading (subsetting, self-hosting).
-   **Crawlability & Indexing**:
    *   Generate `sitemap.xml` including all public pages.
    *   Generate `robots.txt` allowing crawling of all necessary assets and pages, disallowing admin/private routes (if any). Configure via `next-sitemap`.
-   **Social Sharing**: Configure OpenGraph and Twitter Card meta tags dynamically via `next-seo` using page-specific titles, descriptions, and images.
-   **EEAT Signals**: Design should facilitate inclusion of: Clear 'About Us' details, prominent contact information, potentially client logos/testimonials section (design space for it), structured address.

### TASKS (Sequential Steps)
1.  **Scaffold Project**: Initialize Next.js project, set up folders/files as defined in `PAGES & COMPONENTS STRUCTURE`.
2.  **Install Dependencies**: `tailwindcss`, `shadcn-ui`, `next-intl`, `next-seo`, `next-sitemap`, `clsx`, `@next/bundle-analyzer`, `react-intersection-observer`, etc. Configure Tailwind, shadcn.
3.  **Setup Layout**: Implement `_app.tsx`, `_document.tsx`, `Layout.tsx`, including Header, Footer, font loading, and `next-intl` provider.
4.  **Build Base Components**: Develop core reusable components (`Button`, `Hero`, `ServiceCard`, `MapEmbed`, `Seo`, etc.).
5.  **Implement Pages**: Build each page (`index.tsx`, `services.tsx`, etc.) using the components, matching screenshot structure *initially*, then applying modernization/UX improvements. Use placeholder copy/images where final content isn't available yet.
6.  **Integrate i18n**: Add basic AR/EN JSON translation files and implement the language switcher functionality.
7.  **Implement SEO**: Integrate `next-seo` (`Seo.tsx`) on all pages with dynamic content. Configure `next-sitemap`. Set up JSON-LD.
8.  **Refine & Optimize**: Focus on animations, transitions, responsiveness, accessibility (keyboard nav, contrast checks), and performance (Lighthouse, Bundle Analyzer).
9.  **Add Dark Mode (Optional but Recommended)**: Use `next-themes` and Tailwind's `dark:` variant to implement a dark mode toggle.
10. **Testing**: Perform thorough cross-browser/device testing. Run Lighthouse CI checks locally or via Vercel previews. Lint and type-check rigorously.

### ACCEPTANCE CRITERIA
-   All specified pages and components are built and functional.
-   Layout structurally mirrors the reference screenshots but with significantly modernized aesthetics, improved spacing, and enhanced UX.
-   All images load correctly from `/public/images/...` path using `next/image`.
-   Language switching (AR/EN, RTL/LTR) works seamlessly via `next-intl`.
-   SEO implementation is complete: correct metas, H1s, JSON-LD, canonicals, sitemap, robots.txt.
-   **Lighthouse Scores**: Consistently achieve ≥ 98 Performance, ≥ 100 Accessibility, ≥ 100 Best Practices, ≥ 100 SEO in simulated tests.
-   Core Web Vitals pass recommended thresholds in field/lab data (monitor post-launch).
-   Website is fully responsive across major breakpoints.
-   Code passes ESLint, Prettier, and TypeScript checks with zero errors/warnings.
-   Bundle size is optimized, and code splitting is effective.
-   WCAG 2.1 AA accessibility guidelines are met.
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
IGNORE_WHEN_COPYING_END

Key Enhancements in this Version:

Stronger Objective: Clearly frames the goal beyond just replication.

More Specificity in Stack/Rules: Details on image optimization (.webp, alt text), clsx, i18n config, font loading, explicit TypeScript.

Detailed Component Structure: Adds /layout, /ui, /common, /icons separation and suggests key props for components like Hero, ServiceCard, MapEmbed, Seo. Adds _app, _document, 404.

Explicit Modernization Guidance: Moves beyond "shadows/gradients" to mention whitespace, clip-path, subtle animations, focus states, CSS masks, IntersectionObserver, etc.

Dedicated Accessibility Section (WCAG 2.1 AA): Elevates accessibility to a top-level requirement.

Richer SEO Mandates: Connects "April 2025" to EEAT/Helpful Content, specifics on schema types (LocalBusiness, WebSite, Service), image SEO (alt tags), more stringent CWV/INP targets, and explicit mention of facilitating EEAT signals through design.

Granular Tasks: Breaks down the implementation process into more manageable, sequential steps. Includes setup, component building, i18n integration, SEO implementation, refinement, and testing phases.

Stricter Acceptance Criteria: Sets higher Lighthouse targets (especially for Perf/Access/SEO), adds checks for i18n, responsiveness, code quality, bundle size, and explicit WCAG compliance.

Clarity & Structure: Uses formatting (code, bolding, lists) extensively for readability and actionability by the AI or a developer.

This prompt provides a much more detailed blueprint, reducing ambiguity and increasing the likelihood of Cursor (or a developer) producing a high-quality, modern, and SEO-optimized result aligned with your vision.