const fs = require("fs");
const path = require("path");

// Configuration de votre site
const SITE_URL = "https://votre-domaine.com"; // Remplacez par votre URL
const PAGES_DIR = "./app"; // Votre structure App Router

// Pages à exclure du sitemap
const EXCLUDED_PATHS = [
  "_app",
  "_document",
  "_error",
  "404",
  "500",
  "api",
  "admin",
  "test",
];

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);

    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

function generateSitemap() {
  let allFiles = [];

  try {
    allFiles = getAllFiles(PAGES_DIR);
  } catch (error) {
    console.error("Erreur lors de la lecture du dossier:", error.message);
    return;
  }

  // Filtrer et convertir les fichiers en routes
  const routes = allFiles
    .filter((file) => {
      // Garder seulement les fichiers de pages
      return (
        (file.endsWith(".tsx") ||
          file.endsWith(".ts") ||
          file.endsWith(".js") ||
          file.endsWith(".jsx")) &&
        (file.includes("page.") || file.includes("index.")) &&
        !file.includes("layout.") &&
        !file.includes("loading.") &&
        !file.includes("error.") &&
        !file.includes(".test.") &&
        !file.includes(".spec.")
      );
    })
    .map((file) => {
      // Convertir le chemin de fichier en URL
      let route = file
        .replace(PAGES_DIR, "")
        .replace(/\\/g, "/")
        .replace(/\/page\.(tsx|ts|jsx|js)$/, "")
        .replace(/\/index\.(tsx|ts|jsx|js)$/, "")
        .replace(/\.(tsx|ts|jsx|js)$/, "");

      // Nettoyer la route
      if (route === "" || route === "/") {
        route = "/";
      } else if (!route.startsWith("/")) {
        route = "/" + route;
      }

      return route;
    })
    .filter((route) => {
      // Exclure les routes non désirées
      return !EXCLUDED_PATHS.some(
        (excluded) =>
          route.includes(excluded) ||
          route.includes("[") || // Routes dynamiques
          route.includes("(") // Route groups
      );
    })
    .filter((route, index, array) => array.indexOf(route) === index) // Supprimer les doublons
    .sort();

  // Générer le XML du sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route === "/" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  // Écrire le sitemap
  fs.writeFileSync("./public/sitemap.xml", sitemap);

  console.log("✅ Sitemap généré avec succès !");
  console.log(`📍 ${routes.length} pages trouvées :`);
  routes.forEach((route) => console.log(`   ${SITE_URL}${route}`));
}

// Exécuter le générateur
generateSitemap();
