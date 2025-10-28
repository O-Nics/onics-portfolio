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
  keywords = "développeur full-stack, développeur mobile, Flutter, Laravel, React, Next.js, Vue.js, Nuxt.js, Tailwind CSS, portfolio développeur, Nicolas Planche",
}: HeadProps = {}) => {
  const siteTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const siteDescription = description || siteConfig.description;
  const siteUrl = url || "https://nicolas-planche.fr";
  const ogImage = image.startsWith("http") ? image : `${siteUrl}${image}`;

  return (
    <NextHead>
      {/* Balises de base */}
      <title>{siteTitle}</title>
      <meta content={siteDescription} name="description" />
      <meta content={keywords} name="keywords" />
      <meta content="Nicolas Planche" name="author" />
      <meta
        key="viewport"
        content="viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        name="viewport"
      />

      {/* Langue */}
      <meta content="fr" httpEquiv="content-language" />

      {/* Open Graph / Facebook */}
      <meta content={type} property="og:type" />
      <meta content={siteUrl} property="og:url" />
      <meta content={siteTitle} property="og:title" />
      <meta content={siteDescription} property="og:description" />
      <meta content={ogImage} property="og:image" />
      <meta content="1200" property="og:image:width" />
      <meta content="630" property="og:image:height" />
      <meta content="fr_FR" property="og:locale" />
      <meta content="Nicolas Planche" property="og:site_name" />

      {/* Twitter */}
      <meta content="summary_large_image" name="twitter:card" />
      <meta content={siteUrl} name="twitter:url" />
      <meta content={siteTitle} name="twitter:title" />
      <meta content={siteDescription} name="twitter:description" />
      <meta content={ogImage} name="twitter:image" />
      <meta content="@nicolasplanche" name="twitter:creator" />

      {/* Icônes */}
      <link href="/favicon.ico" rel="icon" />
      <link
        href="/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />

      {/* Canonical URL */}
      <link href={siteUrl} rel="canonical" />

      {/* Robots */}
      <meta content="index, follow" name="robots" />
      <meta content="index, follow" name="googlebot" />
    </NextHead>
  );
};
