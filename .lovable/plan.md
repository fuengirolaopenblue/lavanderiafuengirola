## Plan: Páginas Limpieza + Gestión Vacacional (ES/EN) con SEO y nuevas rutas

### 1. Rutas nuevas (`src/App.tsx`)
Añadir:
- `/limpieza-viviendas-vacacionales` → `LimpiezaViviendas`
- `/vacation-rental-cleaning` → misma página (variante EN, fuerza `i18n.changeLanguage('en')` al montar)
- `/vacation-rental-management` → nueva variante EN de `GestionVacacional`

`/gestion-vacacional` se mantiene y se reemplaza su contenido.

### 2. Menú principal (`src/components/Header.tsx`)
Sustituir "Limpieza" (ancla) por dos entradas de ruta:
- **Limpieza de Viviendas** → `/limpieza-viviendas-vacacionales` (o `/vacation-rental-cleaning` según idioma)
- **Gestión Vacacional** → `/gestion-vacacional` (o `/vacation-rental-management`)

Nuevas claves i18n en `nav`: `cleaningPage`, `managementPage`.

### 3. Página nueva `src/pages/LimpiezaViviendas.tsx`
Estructura: Header → Hero (H1 + subtítulo azul) → Intro → "Qué incluye" (lista con iconos) → "Tres perfiles" (3 cards H3) → "Zonas" (chips) → FAQ (Accordion) → CTA WhatsApp → Footer + WhatsAppButton + SocialFloatingButtons.
Usa `react-helmet-async` para meta title/description + JSON-LD FAQPage. Textos vía `t('cleaningPage.*')`.
Detecta idioma por ruta y fuerza `i18n.changeLanguage`.

### 4. Página reemplazada `src/pages/GestionVacacional.tsx`
Reescribir con nueva estructura: Hero H1 "Gestión Integral..." → Intro → "Qué incluye" (5 bloques H3) → "Cómo funciona" (4 pasos numerados) → "Modelo claro sin sorpresas" → "Cumplimiento normativo" → FAQ → CTA. Igual, Helmet + JSON-LD.

### 5. Traducciones (`src/i18n/locales/es.json` + `en.json`)
Añadir bloques `cleaningPage` y `managementPage` con todos los textos (H1, intros, bullets, H3 perfiles, FAQ items, zonas, CTA). Añadir `nav.cleaningPage` y `nav.managementPage`.

### 6. Home (`src/components/Services.tsx`)
- Tarjeta nueva "Limpieza de Viviendas Vacacionales" (icono `Sparkles`) → link a `/limpieza-viviendas-vacacionales`.
- Tarjeta "Gestión 360°" existente: actualizar título/descripción y confirmar link a `/gestion-vacacional`.

Grid pasa a 5 tarjetas (`md:grid-cols-2 lg:grid-cols-3`).

### 7. Teaser home (`src/components/HolidayCleaning.tsx` o nuevo bloque)
Reemplazar el bloque "360°" actual bajo "Limpieza" con:
- H2 "Limpieza de Viviendas Vacacionales, con el mismo rigor que tu lavandería"
- Texto + CTA `Ver todos los detalles` → `/limpieza-viviendas-vacacionales`

### 8. Provider Helmet (`src/main.tsx`)
Instalar `react-helmet-async` y envolver `App` con `HelmetProvider`.

### 9. `public/sitemap.xml`
Añadir las 3 nuevas URLs.

### Sección técnica
- Idioma por ruta: hook `useEffect` en cada página EN que llame `i18n.changeLanguage('en')`; ES equivalente en la ES.
- WhatsApp CTAs usan el patrón existente `https://wa.me/34641819577?text=...`.
- JSON-LD FAQPage inline con `JSON.stringify` dentro de `<Helmet>`.
- Sin cambios en backend/business logic.

Confirma y aplico todo en una tanda.