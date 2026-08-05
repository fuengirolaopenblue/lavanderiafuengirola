#!/usr/bin/env node
/**
 * Post-build prerendering of the <head> for every public route.
 *
 * The app is a static Vite SPA: social crawlers (Facebook, LinkedIn, WhatsApp,
 * Slack, X) do not execute JS, so react-helmet-async tags never reach them.
 * This script writes one static HTML file per route (dist/<route>/index.html)
 * from the built dist/index.html, replacing title/description/canonical/og:*
 * with the route's own metadata. The React app still hydrates normally.
 */
import { readFile, writeFile, mkdir, copyFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { routes, SITE_URL, OG_IMAGE } from "./seo-routes.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const template = path.join(dist, "index.html");

const escape = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/** Remove head tags we are going to re-emit, so nothing is duplicated. */
function stripManagedTags(html) {
  return html
    .replace(/\n?\s*<title>[\s\S]*?<\/title>/i, "")
    .replace(/\n?\s*<meta\s+name="description"[^>]*>/gi, "")
    .replace(/\n?\s*<link\s+rel="canonical"[^>]*>/gi, "")
    .replace(/\n?\s*<meta\s+property="og:(title|description|url|image|image:width|image:height|locale)"[^>]*>/gi, "")
    .replace(/\n?\s*<meta\s+name="twitter:(title|description|image)"[^>]*>/gi, "");
}

function headBlock({ title, description, url, locale }) {
  const t = escape(title);
  const d = escape(description);
  return `
    <title>${t}</title>
    <meta name="description" content="${d}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:title" content="${t}" />
    <meta property="og:description" content="${d}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${OG_IMAGE}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:locale" content="${locale}" />
    <meta name="twitter:title" content="${t}" />
    <meta name="twitter:description" content="${d}" />
    <meta name="twitter:image" content="${OG_IMAGE}" />`;
}

async function main() {
  if (!existsSync(template)) {
    console.error(`[prerender] Missing ${template}. Run "vite build" first.`);
    process.exit(1);
  }

  const base = await readFile(template, "utf8");

  for (const route of routes) {
    const url = route.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${route.path}`;
    let html = stripManagedTags(base);
    html = html.replace(/<html\s+lang="[^"]*"/i, `<html lang="${route.lang}"`);
    html = html.replace(/<\/head>/i, `${headBlock({ ...route, url })}\n  </head>`);

    const outDir =
      route.path === "/" ? dist : path.join(dist, route.path.replace(/^\//, ""));
    await mkdir(outDir, { recursive: true });
    await writeFile(path.join(outDir, "index.html"), html, "utf8");
    console.log(`[prerender] ${route.path} -> ${path.relative(dist, path.join(outDir, "index.html"))}`);
  }

  // SPA fallback for unknown paths on static hosting (GitHub Pages).
  await copyFile(path.join(dist, "index.html"), path.join(dist, "404.html"));
  console.log("[prerender] 404.html written");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
