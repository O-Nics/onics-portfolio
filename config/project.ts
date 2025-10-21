import { CalendarIcon } from "@heroicons/react/24/outline";

import {
  AboutIcon,
  CoffeeIcon,
  ContactIcon,
  DocIcon,
  GithubIcon,
  IntroIcon,
  LinkedinIcon,
  ProjectsIcon,
  SchoolIcon,
  XpIcon,
} from "@/components/icons";

export type Project = typeof project;

export const project = [
  {
    name: "Da Auto Sport",
    slug: "da-auto-sport",
    shortDescription: "Garage spécialisé BMW — site et application mobile vitrines connectées.",
    longDescription:
      "Conception et développement complet du site vitrine et de l’application mobile de Da Auto Sport, un garage automobile spécialisé dans les véhicules BMW. Le projet permet de présenter le catalogue de véhicules en temps réel avec un affichage dynamique des caractéristiques, photos et historiques. L’écosystème repose sur une API Laravel connectée au logiciel interne SpiderVO (flux XML), un front-end Nuxt.js optimisé SEO et une application Flutter responsive iOS/Android intégrant un système de recommandations et de notifications personnalisées.",
    platform: ["web", "mobile"],
    technologies: ["Laravel",
      "Nuxt.js",
      "Tailwind CSS",
      "Flutter",
      "MySQL",
      "Google Cloud",
      "OneSignal",
      "SpiderVO (XML Integration)"],
    startDate: "2025-05",
    endDate: "2025-09",
    status: "completed",
    images: [
    ],
    type: "Professionnel",
    links: [
      {
        url: "https://daautosport.com",
        text: "Visiter le site",
        title: "Da Auto Sport - Site e-commerce",
        alt: "Da Auto Sport",
        target: "_blank",
      },
      {
        url: "https://apps.apple.com/fr/app/da-auto-sport/id6746983342",
        text: "Application mobile IOs",
        title: "Da Auto Sport - Application mobile IOs",
        alt: "Da Auto Sport",
        target: "_blank",
      },
      {
        url: "https://play.google.com/store/apps/details?id=com.daautosport.app&pcampaignid=web_share",
        text: "Application mobile Android",
        title: "Da Auto Sport - Application mobile Android",
        alt: "Da Auto Sport",
        target: "_blank",
      },
    ],
    features: [
      "Catalogue complet des véhicules avec fiches détaillées (moteur, kilométrage, options, historique)",
      "Sauvegarde des recherches et ajout aux favoris",
      "Recommandations personnalisées basées sur l’historique et les favoris",
      "Notifications push lors d’ajouts, suppressions ou modifications de véhicules",
      "Authentification sécurisée (JWT) sur  mobile",
      "Mode clair/sombre natif (synchronisé avec les préférences du système)",
      "Interface responsive adaptée smartphones et tablettes",
      "Filtrage par 11 filtres : marque, modèle, kilométrage, année...",
      "Visualisation de l’historique de contact et des véhicules consultés",
    ],
    challenges: [
      "Implémentation d’un algorithme de recommandations pertinent basé sur les favoris et recherches récentes",
      "Intégration fiable du flux XML SpiderVO et transformation en données exploitables",
      "Gestion conditionnelle de l’affichage selon les informations disponibles pour chaque véhicule",
      "Mise en place du thème dark/light dynamique sur Flutter ",
    ],
    lessonLearned: [
      "Développement complet d’un écosystème (API + front web + app mobile) de A à Z jusqu’à la mise en production",
      "Gestion de projet en autonomie : priorisation, planification et testing continu",
      "Conception d’une architecture API-first sécurisée avec protection des routes",
      "Mise en place d’un design system cohérent et d’une gestion fluide du thème sur Flutter",
    ],
  },
  {
    name: "Amazing Icons",
    slug: "amazing-icons",
    shortDescription:
      "Bibliothèque open-source de plus de 5000 icônes multi-styles, optimisée pour Flutter, Web et Desktop.",
    longDescription:
      "Amazing Icons est une bibliothèque open-source d’icônes conçue pour offrir performance, flexibilité et cohérence visuelle sur toutes les plateformes. Le projet comprend plus de 5000 icônes réparties en 6 styles différents, intégrées sous forme de polices pour les environnements mobiles et exportables en SVG/PNG depuis le site web. Développée avec Next.js et Flutter, la solution met l’accent sur la légèreté (≈1 MB pour l’ensemble) et sur l’expérience développeur, avec une documentation complète et un moteur de recherche interactif accessible sur toutes les plateformes.",
    platform: ["web", "mobile", "desktop", "linux"],
    technologies: ["Next.js", "Flutter"],
    startDate: "2025-09",
    status: "active",
    type: "Open Source",
    images: [
      // Ex: captures du site, aperçu des styles d’icônes, interface de recherche, etc.
    ],
    links: [
      {
        url: "https://amazingicons.dev",
        text: "Site officiel",
        title: "Amazing Icons - Bibliothèque d’icônes open-source",
        alt: "Logo Amazing Icons",
        target: "_blank",
      },
      {
        url: "https://pub.dev/packages/amazing_icons",
        text: "Package Flutter",
        title: "Amazing Icons - Package Flutter",
        alt: "Amazing Icons sur Pub.dev",
        target: "_blank",
      },
      {
        url: "https://github.com/O-Nicks/amazing_icons",
        text: "Documentation & Code source",
        title: "Amazing Icons - Documentation GitHub",
        alt: "GitHub Amazing Icons",
        target: "_blank",
      },
    ],
    features: [
      "6 styles d’icônes inclus dans le package (Outline, Bulk, TwoTone, etc.) + 1 style exclusif sur le site web",
      "Poids ultra-léger : environ 1 MB pour plus de 5000 icônes",
      "Icônes converties en polices optimisées pour les performances sur mobile et desktop",
      "Téléchargement possible en SVG ou PNG avec couleur personnalisée depuis le site web",
      "Moteur de recherche d’icônes rapide et intuitif avec aperçu en direct",
      "Compatible multi-plateforme : Web, iOS, Android, Windows, macOS, Linux",
    ],
    challenges: [
      "Gestion des icônes TwoTone sans dépendance à flutter_svg en les scindant en deux polices superposables",
      "Maintien d’un poids minimal tout en conservant la qualité vectorielle",
      "Assurer la compatibilité du rendu entre Flutter, Web et Desktop",
      "Organisation et génération automatique des polices à partir de milliers de fichiers SVG",
    ],
    lessonLearned: [
      "Utilisation efficace du tree-shaking grâce à la séparation modulaire des imports Flutter",
      "Transformation avancée des SVG en polices pour maximiser les performances et la compatibilité",
      "Structuration d’un écosystème complet (site, package, documentation) autour d’un même jeu d’icônes",
      "Optimisation du workflow de génération et déploiement automatisé sur plusieurs plateformes",
    ],
  },

];
