import React from "react";

interface PersonSchema {
  name: string;
  jobTitle: string;
  url: string;
  sameAs: string[];
  image?: string;
}

export const PersonJsonLd = ({
  name,
  jobTitle,
  url,
  sameAs,
  image,
}: PersonSchema) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    url,
    sameAs,
    ...(image && { image }),
  };

  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      type="application/ld+json"
    />
  );
};

interface WebsiteSchema {
  name: string;
  description: string;
  url: string;
}

export const WebsiteJsonLd = ({ name, description, url }: WebsiteSchema) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    description,
    url,
  };

  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      type="application/ld+json"
    />
  );
};

interface ProjectSchema {
  name: string;
  description: string;
  url: string;
  image?: string;
  author: {
    "@type": "Person";
    name: string;
  };
  datePublished?: string;
}

export const ProjectJsonLd = ({
  name,
  description,
  url,
  image,
  author,
  datePublished,
}: ProjectSchema) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name,
    description,
    url,
    author,
    ...(image && { image }),
    ...(datePublished && { datePublished }),
  };

  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      type="application/ld+json"
    />
  );
};
