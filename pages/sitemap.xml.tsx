import { GetServerSideProps } from "next";
import { getAllProjects } from "@/lib/projects";
import { siteConfig } from "@/config/site";

function generateSiteMap() {
  const baseUrl = "https://nicolas-planche.fr";
  const projects = getAllProjects();

  // Pages statiques
  const staticPages = [
    "",
    "/a-propos",
    "/projets",
    "/competences",
    "/xp",
    "/education",
    "/contact",
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${staticPages
       .map((page) => {
         return `
       <url>
           <loc>${baseUrl}${page}</loc>
           <lastmod>${new Date().toISOString()}</lastmod>
           <changefreq>weekly</changefreq>
           <priority>${page === "" ? "1.0" : "0.8"}</priority>
       </url>
     `;
       })
       .join("")}
     ${projects
       .map((project) => {
         return `
       <url>
           <loc>${baseUrl}/projet/${project.slug}</loc>
           <lastmod>${new Date().toISOString()}</lastmod>
           <changefreq>monthly</changefreq>
           <priority>0.7</priority>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;