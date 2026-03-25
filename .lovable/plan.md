

## Plan: Rediseno CRO + SEO de lavanderiafuengirola.com

### Resumen
Rediseno completo orientado a conversion (CRO) con psicologia de ventas, nuevas secciones (testimonios, tabla comparativa), textos optimizados para SEO local, y mejoras UX (tooltip WhatsApp, modal WiFi restaurado).

---

### Cambios por archivo

#### 1. `index.html` — Metadatos SEO
- Actualizar Title a: "Lavandería 24h Fuengirola | OpenBlue: Lavado, Secado y Gestión Airbnb"
- Meta description: "La lavandería #1 en Fuengirola. Autoservicio 24h, recogida a domicilio y especialistas en textiles para alquiler vacacional. ¡Desde 6€ con jabón incluido!"
- Actualizar OG y Twitter cards con los mismos textos

#### 2. `src/i18n/locales/es.json` — Textos nuevos
- Hero: H1 = "Deja de perder horas lavando. Recupera tu tiempo hoy." / Subtitulo = "Lavandería industrial 24h y gestión estratégica..."
- Hero CTAs: "Solicitar Recogida a Domicilio" (primario, WhatsApp) + "Ver Servicios 24h" (scroll)
- Servicios: 4 tarjetas con textos nuevos (Autoservicio, Especial Airbnb, Puerta a Puerta, Gestión 360)
- About: texto nuevo de autoridad
- Nuevas claves para testimonios (3 testimonios con nombre, texto, tipo)
- Nuevas claves para tabla comparativa (casa vs OpenBlue)
- WhatsApp tooltip: "Presupuesto para tu Airbnb en 2 minutos"
- WiFi modal textos

#### 3. `src/components/Hero.tsx` — Rediseno Hero
- H1 con texto de aversion a la perdida
- Subtitulo persuasivo
- CTA primario: boton que abre WhatsApp directamente (recogida a domicilio)
- CTA secundario: scroll a servicios
- Mantener precios y badge

#### 4. `src/components/Services.tsx` — Tarjetas interactivas
- Cambiar de banners horizontales a 4 tarjetas en grid (2x2)
- Hover effect con elevacion y borde azul
- Cada tarjeta: icono, titulo, descripcion, CTA
- Mantener modales existentes

#### 5. **Nuevo: `src/components/Testimonials.tsx`** — Seccion de prueba social
- 3 testimonios con avatar placeholder, nombre, rol, estrellas (5/5), texto
- Diseno estilo tarjetas con foto circular, estrellas doradas
- Animacion con framer-motion

#### 6. **Nuevo: `src/components/ComparisonTable.tsx`** — Tabla de contraste
- Dos columnas: "Lavar en Casa" vs "Lavar en OpenBlue"
- Items con iconos check/x
- Visual: columna casa en gris/rojo, columna OpenBlue en azul/verde

#### 7. `src/components/About.tsx` — Texto de autoridad
- Actualizar parrafos con nuevo texto

#### 8. `src/components/WhatsAppButton.tsx` — Tooltip
- Anadir tooltip visible: "Presupuesto para tu Airbnb en 2 minutos"
- Animacion de aparicion del tooltip

#### 9. `src/components/WifiModal.tsx` — Restaurar
- Restaurar boton flotante WiFi con texto "Escanea y conectate gratis mientras esperas"

#### 10. `src/pages/Index.tsx` — Nueva estructura
- Orden: Header > Hero > Testimonials > Services > ComparisonTable > About > Contact > Footer
- Restaurar WifiModal

#### 11. `src/components/Footer.tsx` — Anadir horario 24h y enlace Google Maps resenas

---

### Seccion tecnica

**Nuevos componentes:**
- `Testimonials.tsx`: Grid de 3 cards con avatar, estrellas (Star icon de lucide con fill), texto, nombre y rol
- `ComparisonTable.tsx`: Grid 2 columnas con iconos X (rojo) y Check (verde), fondo diferenciado

**Servicios como tarjetas:**
- Grid `md:grid-cols-2` con cards que tienen `hover:shadow-elevated hover:border-primary/50 transition-all`
- Cada card mantiene su onClick para abrir el modal correspondiente

**Hero CTA primario:**
- Link directo a WhatsApp con mensaje: "Hola, quiero solicitar recogida a domicilio en Fuengirola"

**SEO:**
- H1 en Hero.tsx (ya existe como `<h1>`)
- ALT tags actualizados en imagenes existentes
- JSON-LD ya implementado, solo actualizar description

