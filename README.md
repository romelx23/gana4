# Gana4 · Sitio web

Landing y documentos legales de la app **Gana4** (Cuatro en Línea, `com.romel.gana4`),
construidos con **Astro 6 + Tailwind CSS 4**. Sitio 100 % estático, sin JavaScript de cliente.

| Ruta          | Contenido                                                        |
| ------------- | ---------------------------------------------------------------- |
| `/`           | Landing: características, capturas y botón de Google Play        |
| `/privacidad` | Política de privacidad (requerida por Google Play Console)       |
| `/terminos`   | Términos de uso                                                   |
| `/sitemap-index.xml` | Sitemap generado con `@astrojs/sitemap`                    |

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # sirve dist/ en local
```

## Deploy en Cloudflare Pages

1. Repositorio conectado: `github.com/romelx23/gana4`
2. En Cloudflare → **Workers & Pages → Create → Pages → Connect to Git**.
3. Ajustes del proyecto:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (la raíz del repo es el proyecto)

El dominio del sitio se toma automáticamente de la variable `CF_PAGES_URL` que define
Cloudflare en cada build, por lo que los `canonical` y el sitemap siempre apuntan a la
URL real. Para builds locales se usa `https://gana4.pages.dev`.

## Estructura

```
public/                 assets (icono, gráfico de características, capturas)
src/layouts/Base.astro  head SEO, Open Graph, tipografías
src/components/         Nav, Footer, Hero, Features, Screenshots, Cta
src/pages/              index, privacidad, terminos
src/styles/global.css   tokens de color espejo de lib/theme/app_theme.dart
```

## Notas

- Los tokens de color del sitio replican la paleta oscura de la app
  (`AppColors` en `gana4/lib/theme/app_theme.dart`).
- Las versiones de `astro`, `tailwindcss` y `@tailwindcss/vite` van **fijas** y con un
  override de `vite` a la rama 7: con Vite 8 el plugin de Tailwind falla en el build.
