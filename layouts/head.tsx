import React from "react";
import NextHead from "next/head";

import { siteConfig } from "@/config/site";

interface HeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  keywords?: string;
}

export const Head = ({
  title,
  description,
  image = "/images/og-image.png",
  url,
  type = "website",
  keywords = "développeur full-stack, développeur mobile, Flutter, Laravel, React, Next.js, Vue.js, Nuxt.js, Tailwind CSS, portfolio développeur, Nicolas Planche"
}: HeadProps = {}) => {
  const siteTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const siteDescription = description || siteConfig.description;
  const siteUrl = url || "https://nicolas-planche.fr";
  const ogImage = image.startsWith("http") ? image : `${siteUrl}${image}`;

  return (
    <NextHead>
      {/* Balises de base */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Nicolas Planche" />
      <meta
        key="viewport"
        name="viewport"
        content="viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />

      {/* Langue */}
      <meta httpEquiv="content-language" content="fr" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="Nicolas Planche" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@nicolasplanche" />

      {/* Icônes */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

      {/* Canonical URL */}
      <link rel="canonical" href={siteUrl} />

      {/* Robots */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
    </NextHead>
  );
};
