export interface Project {
  title: string;
  slug: string;
  category: 'development' | 'database' | 'web';
  image: string; // TODO: ajouter les vraies images
  description: string;
  details: string;
  technologies: string[];
  learnings?: string[];
  gallery?: { src: string; caption: string; tag?: string }[];
  link?: string;
}

export interface Education {
  period: string;
  school: string;
  diploma: string;
  description: string;
}

export interface Interest {
  name: string;
  image: string; // TODO: ajouter les vraies images
  description: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'language' | 'tool' | 'framework';
  tag?: string;
}

export interface Experience {
  period: string;
  company: string;
  slug: string;
  role: string;
  image: string;
  description: string;
  details: string;
  technologies: string[];
  learnings?: string[];
  gallery?: { src: string; caption: string; tag?: string }[];
  link?: string;
}

export const personalInfo = {
  name: 'Jean-Christophe Lay',
  shortName: 'Jean-Christophe Lay',
  title: 'Étudiant en 2ème année de BUT Informatique',
  school: 'IUT de Montreuil',
  age: 21,
  email: 'jeanchristophe.lay0@gmail.com',
  phone: '07 82 86 69 78',
  linkedin: 'https://www.linkedin.com/in/jc-lay/',
  github: 'https://github.com/JcTactac',
  cvLink: '', // TODO: ajouter le lien vers le CV
};

export const aboutText =
  "Bonjour, je m'appelle Jean-Christophe Lay, j'ai 21 ans et bienvenue sur mon portfolio. " +
  "Immergé dans le monde de l'informatique depuis tout petit, j'ai rapidement " +
  "eu un désir de comprendre ce monde, de comprendre comment il fonctionne, d'apprendre et d'en faire " +
  "mon métier." +
  "Je suis actuellement en 2ème année de BUT Informatique et j'envisage, après l'avoir terminé, de " +
  "poursuivre mes études en intégrant une école d'ingénieur pour à terme travailler en tant qu'ingénieur " +
  "dans la data. N'hésitez pas à me contacter pour toute question, que ce soit " +
  "sur mes compétences, mes motivations, mes notes...";

export const education: Education[] = [
  {
    period: '2020 - 2023',
    school: 'Lycée Polyvalent Paul Robert',
    diploma: 'Baccalauréat Général',
    description:
      "Obtention du baccalauréat de la filière générale (mention bien) avec les spécialités Physique-Chimie, SVT et Maths Complémentaires.",
  },
  {
    period: '2023 - 2024',
    school: 'Sorbonne Université',
    diploma: 'PASS',
    description:
      "Tentative d'accès aux études de médecine via ce parcours d'accès spécifique santé avec option Sciences (Physique).",
  },
  {
    period: '2024 - Présent',
    school: 'IUT de Montreuil',
    diploma: 'BUT Informatique - Parcours A',
    description:
      "Parcours A dans le développement d'applications : acquisition de vastes compétences en allant du développement, aux réseaux et architecture des ordinateurs, tout en passant par les bases de données.",
  },
];

export const projects: Project[] = [
  {
    title: 'Morpion',
    slug: 'morpion',
    category: 'development',
    image: '/images/morpion.png',
    description: 'Jeu de morpion amélioré en Java avec IA à plusieurs niveaux de difficulté, réalisé en binôme.',
    details: "Jeu de morpion amélioré développé en Java en binôme. L'objectif est d'aligner cinq pions sur un plateau à deux dimensions, en jouant tour par tour.\n\nLe jeu propose un mode 1v1 où deux joueurs s'affrontent via le terminal, ainsi qu'un mode contre une IA avec trois niveaux de difficulté (facile, moyen, difficile). Selon le niveau choisi, le bot utilise des stratégies de plus en plus avancées pour contrer le joueur. L'interface se fait entièrement en terminal avec un affichage dynamique du plateau.",
    technologies: ['Java'],
    learnings: [
      'Programmation orientée objet en Java et écriture de tests JUnit',
      'Conception et implémentation d\'algorithmes pour l\'IA du bot',
      'Travail en binôme avec Git, synchronisation du code entre cours et maison',
      'Réflexion algorithmique sur les stratégies de jeu',
    ],
    link: 'https://github.com/JcTactac/Morpion',
  },
  {
    title: 'Terraria-Like',
    slug: 'terraria',
    category: 'development',
    image: '/images/terraria.png',
    description: 'Jeu Sandbox-RPG dark fantasy en Java/JavaFX inspiré de Terraria, réalisé en équipe.',
    details: "Jeu de type Sandbox-Aventure-RPG en dark fantasy, développé en équipe de 4 et inspiré de l'univers de Terraria. Le joueur évolue dans un monde en ruines à l'ambiance sombre, où il peut explorer, miner des ressources, construire, crafter des objets et affronter des ennemis jusqu'au boss final.\n\nLe jeu intègre de nombreuses mécaniques : une carte avec scrolling et relief, un système de combat avec plusieurs armes (épées, katana, arc, pistolet), un inventaire complet avec craft et équipement d'armures, ainsi que des ennemis dynamiques (Goblin, Ogre, Sage Millénaire). Un PNJ forgeron permet de consulter les recettes de craft, renforçant l'aspect RPG.\n\nLe projet a été développé en deux phases : une première version fonctionnelle, puis une refactorisation complète avec mise en place de design patterns et d'une architecture MVC.",
    technologies: ['Java', 'JavaFX', 'Git'],
    learnings: [
      'Architecture MVC avec pattern Observer via les propriétés JavaFX (bindings, ChangeListener, ObservableList)',
      'Implémentation d\'un algorithme A* pour le pathfinding des ennemis avec détection de distance',
      'Moteur physique : gravité, gestion des vélocités, collisions tile-based et mécanique de saut',
      'Système d\'inventaire en grille 2D avec empilement intelligent, craft par recettes et stations (Établi, Forge, Four)',
      'Hiérarchie d\'entités polymorphique (Joueur, Ennemis, PNJ) avec comportements conditionnels (vu/pas vu)',
      'Rendu tilemap avec TilePane, caméra dynamique liée au joueur et système de projectiles typés',
    ],
    link: 'https://github.com/JcTactac/Terraria-Like',
  },
  {
    title: 'IConnect',
    slug: 'iconnect',
    category: 'development',
    image: '/images/iconnect.png',
    description: 'Plateforme web de gestion de buvette associative avec comptes numériques et gestion des stocks.',
    details: "IConnect est une plateforme web développée pour moderniser la gestion des buvettes associatives. L'objectif était de remplacer le système de cartes physiques à cases par une solution numérique plus souple : les adhérents créent un compte, y déposent de l'argent, puis sont débités automatiquement à chaque achat au comptoir.\n\nL'application gère trois profils d'utilisateurs distincts : les clients qui consultent leur solde et historique d'achats, les barmen qui valident les transactions au comptoir, et les gestionnaires qui gèrent les stocks, les inventaires et les rapports de trésorerie. Le système calcule automatiquement les pertes et écarts de stock après inventaire.\n\nL'ensemble est conçu pour fonctionner sur mobile (la majorité de l'utilisation se fait au comptoir sur terminal mobile) et permet de gérer plusieurs associations de manière indépendante.",
    technologies: ['PHP', 'SQL', 'JavaScript', 'Bootstrap', 'Git', 'Figma'],
    learnings: [
      'Architecture MVC en PHP natif avec routing par modules, couche Modèle abstraite et PDO (requêtes préparées)',
      'Système d\'authentification sécurisé : hachage de mots de passe, tokens CSRF et contrôle d\'accès par rôles (Client, Barman, Gestionnaire, Admin)',
      'Logique e-commerce : panier avec gestion de stock, vérification de solde et calcul automatique des prix',
      'Gestion d\'inventaire avec suivi des pertes, historique de restocking par fournisseur et rapports de trésorerie',
      'Interface responsive avec Bootstrap 5 optimisée pour une utilisation au comptoir sur mobile',
      'Conception UML (cas d\'utilisation, diagrammes de classes, séquence) et rédaction de user stories',
    ],
    gallery: [
      { src: '/images/iconnect-associations.png', caption: 'Mes associations', tag: 'Client' },
      { src: '/images/iconnect-produits.png', caption: 'Produits disponibles', tag: 'Client' },
      { src: '/images/iconnect-recharger.png', caption: 'Rechargement du compte', tag: 'Client' },
      { src: '/images/iconnect-panier.png', caption: 'Panier d\'achat', tag: 'Client' },
      { src: '/images/iconnect-historique.png', caption: 'Historique des commandes', tag: 'Client' },
      { src: '/images/iconnect-barman-commandes.png', caption: 'Commandes du jour', tag: 'Barman' },
      { src: '/images/iconnect-barman-historique.png', caption: 'Historique', tag: 'Barman' },
      { src: '/images/iconnect-barman-stock.png', caption: 'Stocks', tag: 'Barman' },
      { src: '/images/iconnect-admin-demandes.png', caption: 'Demandes de création', tag: 'Admin' },
      { src: '/images/iconnect-admin-liste.png', caption: 'Liste des associations', tag: 'Admin' },
      { src: '/images/iconnect-gestionnaire-inventaire.png', caption: 'Inventaire', tag: 'Gestionnaire' },
      { src: '/images/iconnect-gestionnaire-comptes.png', caption: 'Gestion des comptes', tag: 'Gestionnaire' },
      { src: '/images/iconnect-gestionnaire-fournisseurs.png', caption: 'Fournisseurs', tag: 'Gestionnaire' },
      { src: '/images/iconnect-gestionnaire-demandes.png', caption: 'Demandes d\'inscription', tag: 'Gestionnaire' },
      { src: '/images/iconnect-gestionnaire-rapport.png', caption: 'Rapport de trésorerie', tag: 'Gestionnaire' },
      { src: '/images/iconnect-gestionnaire-restock.png', caption: 'Restock', tag: 'Gestionnaire' },
      { src: '/images/iconnect-gestionnaire-historique-restock.png', caption: 'Historique restocks', tag: 'Gestionnaire' },
    ],
  },
  {
    title: 'Campus Flow',
    slug: 'campus-flow',
    category: 'development',
    image: '/images/accueilCampusFlow.png',
    description: 'Application de gestion des visiteurs pour la Journée Portes Ouvertes de l\'IUT, réalisée en trinôme.',
    details: "Application web développée en équipe de 3 pour la Journée Portes Ouvertes de l'IUT de Montreuil. L'objectif est de collecter et gérer les données des visiteurs (lycéens) afin de mesurer leur motivation et faciliter le suivi (rappels, propositions d'immersion).\n\nCôté visiteur, l'interface est simplifiée et optimisée tablette pour une saisie rapide au comptoir : nom, prénom, bac préparé, email et département visité. Côté gestionnaire, un tableau de bord complet permet la consultation des visiteurs avec filtrage, tri et pagination, l'export CSV, la visualisation graphique des données et la gestion des paramètres de l'application.\n\nL'architecture sépare un frontend en TypeScript (React) d'une API REST backend en Python, avec une base de données relationnelle. L'application est conforme au RGPD avec suppression automatique des données après la période Parcoursup.",
    technologies: ['TypeScript', 'React', 'Python', 'SQL', 'Git'],
    learnings: [
      'Architecture fullstack en couches : contrôleurs, services et repositories côté Flask, composants React avec hooks personnalisés côté frontend',
      'Validation des données des deux côtés : Zod pour les formulaires React, Pydantic pour les DTOs Flask',
      'Visualisation de données avec Chart.js (diagrammes circulaires pour les statistiques visiteurs) et export CSV',
      'Authentification par tokens avec vérification côté API et stockage en sessionStorage',
      'Formulaire multi-étapes avec progression conditionnelle, filtrage, pagination et tri des données',
    ],
    gallery: [
      { src: '/images/formulaireCampusFlow.png', caption: 'Formulaire visiteur', tag: 'Visiteur' },
      { src: '/images/dashboard.png', caption: 'Tableau de bord', tag: 'Gestionnaire' },
      { src: '/images/parametreCampusFlow.png', caption: 'Paramètres', tag: 'Gestionnaire' },
      { src: '/images/listeUsersCampusFlow.png', caption: 'Liste des visiteurs', tag: 'Gestionnaire' },
      { src: '/images/statsCampusFlow.png', caption: 'Statistiques', tag: 'Gestionnaire' },
    ],
    link: 'https://github.com/JcTactac/CampusFlow-front',
  },
  {
    title: 'WeJeux',
    slug: 'wejeux',
    category: 'database',
    image: '/images/wejeux.png',
    description: 'Base de données pour une entreprise fictive de jeux vidéo, conçue en trinôme.',
    details: "Projet réalisé en équipe de 3 autour de la conception et du développement d'une base de données pour \"WeJeux\", une entreprise fictive spécialisée dans le jeu vidéo.\n\nL'objectif était de modéliser un système permettant de stocker et gérer des données liées aux jeux, aux clients et aux transactions, puis de les exploiter à travers des requêtes SQL variées. Le projet couvrait à la fois la modélisation conceptuelle (MCD, MLD) et l'implémentation concrète avec des requêtes d'interrogation et de manipulation avancées.",
    technologies: ['SQL', 'PostgreSQL'],
    learnings: [
      'Création de MCD et MCT pour structurer les données de manière logique et cohérente',
      'Écriture de requêtes SQL complexes et optimisation des performances',
      'Extraction et manipulation de données pour répondre aux besoins métier',
      'Collaboration efficace en trinôme avec organisation et répartition des tâches',
    ],
  },
  {
    title: 'ScreenTech',
    slug: 'screentech',
    category: 'database',
    image: '/images/screentech.png',
    description: 'Base de données modélisant un site de vente en ligne d\'écrans, réalisée en trinôme.',
    details: "Projet mené en équipe de 3, portant sur la conception complète d'une base de données relationnelle pour un site de vente en ligne spécialisé dans les écrans.\n\nLe travail couvrait l'ensemble du cycle : de la modélisation conceptuelle à l'implémentation, en passant par l'administration et l'exploitation des données. La base gère les produits (écrans), les clients, les commandes et les avis, avec des requêtes SQL permettant d'analyser les ventes et le catalogue.",
    technologies: ['SQL', 'PostgreSQL'],
    learnings: [
      'Rédaction d\'un scénario textuel pour modéliser l\'activité du site',
      'Conception de MCD et MLD à partir d\'un cahier des charges',
      'Requêtes SQL complexes : jointures, sous-requêtes, agrégations, vues',
      'Écriture de scripts de création de base et insertion de données en PostgreSQL',
      'Documentation du travail et organisation en groupe',
    ],
  },
  {
    title: 'Jeux Olympiques',
    slug: 'jeux-olympiques',
    category: 'web',
    image: '/images/jo.png', // TODO: remplacer par la vraie image
    description: 'Site web informatif sur les JO 2028 de Los Angeles, réalisé en équipe.',
    details: "Projet collaboratif réalisé en équipe de 4, consistant à créer un site web dédié aux Jeux Olympiques de Los Angeles 2028. Le site présente les infrastructures sportives, les transports et les différentes disciplines prévues pour l'événement.\n\nChaque membre de l'équipe s'est chargé de la rédaction de contenus, de la structure des pages ou du design. Ce projet m'a permis de mettre en pratique la création d'interfaces web et la navigation multi-pages, dans un cadre de travail en équipe organisé.",
    technologies: ['HTML', 'CSS', 'JavaScript'],
    learnings: [
      'Création de pages web structurées et responsives en HTML/CSS',
      'Navigation multi-pages et organisation du contenu',
      'Travail en équipe avec répartition des tâches et coordination',
      'Intégration de médias et mise en forme graphique cohérente',
    ],
    link: 'https://github.com/JcTactac/SAE-JO',
  },
];

const devicon = (name: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}`;

export const skills: Skill[] = [
  { name: 'HTML', icon: devicon('html5/html5-original.svg'), category: 'language', tag: 'BUT1/BUT2' },
  { name: 'CSS', icon: devicon('css3/css3-original.svg'), category: 'language', tag: 'BUT1' },
  { name: 'JavaScript', icon: devicon('javascript/javascript-original.svg'), category: 'language', tag: 'BUT2' },
  { name: 'Python', icon: devicon('python/python-original.svg'), category: 'language', tag: 'BUT2' },
  { name: 'Java', icon: devicon('java/java-original.svg'), category: 'language', tag: 'BUT1/BUT2' },
  { name: 'C', icon: devicon('c/c-original.svg'), category: 'language', tag: 'BUT1/BUT2' },
  { name: 'C#', icon: devicon('csharp/csharp-original.svg'), category: 'language', tag: 'Stage BUT2' },
  { name: 'PHP', icon: devicon('php/php-original.svg'), category: 'language', tag: 'BUT2' },
  { name: 'SQL', icon: devicon('azuresqldatabase/azuresqldatabase-original.svg'), category: 'language', tag: 'BUT1/BUT2' },
  { name: 'NoSQL', icon: devicon('mongodb/mongodb-original.svg'), category: 'language', tag: 'BUT2' },
  { name: 'Bash', icon: devicon('bash/bash-original.svg'), category: 'language', tag: 'BUT1/BUT2' },
  { name: 'React', icon: devicon('react/react-original.svg'), category: 'framework', tag: 'BUT2' },
  { name: 'Blazor', icon: devicon('blazor/blazor-original.svg'), category: 'framework', tag: 'Stage BUT2' },
  { name: 'Flask', icon: devicon('flask/flask-original.svg'), category: 'framework', tag: 'BUT2' },
  { name: 'Git', icon: devicon('git/git-original.svg'), category: 'tool', tag: 'BUT1/BUT2' },
  { name: 'GitHub', icon: devicon('github/github-original.svg'), category: 'tool', tag: 'BUT1/BUT2' },
  { name: 'GitLab', icon: devicon('gitlab/gitlab-original.svg'), category: 'tool', tag: 'Stage BUT2' },
  { name: 'Linux', icon: devicon('linux/linux-original.svg'), category: 'tool', tag: 'BUT1/BUT2' },
  { name: 'VS Code', icon: devicon('vscode/vscode-original.svg'), category: 'tool', tag: 'BUT1/BUT2' },
  { name: 'WebStorm', icon: devicon('webstorm/webstorm-original.svg'), category: 'tool', tag: 'BUT1/BUT2' },
  { name: 'IntelliJ', icon: devicon('intellij/intellij-original.svg'), category: 'tool', tag: 'BUT1/BUT2' },
  { name: 'DBeaver', icon: devicon('dbeaver/dbeaver-original.svg'), category: 'tool', tag: 'BUT1/BUT2' },
  { name: 'PostgreSQL', icon: devicon('postgresql/postgresql-original.svg'), category: 'tool', tag: 'BUT1/BUT2' },
  { name: 'MySQL', icon: devicon('mysql/mysql-original.svg'), category: 'tool', tag: 'BUT1' },
  { name: 'MongoDB', icon: devicon('mongodb/mongodb-original.svg'), category: 'tool', tag: 'BUT2' },
  { name: 'Trello', icon: devicon('trello/trello-original.svg'), category: 'tool', tag: 'BUT1/BUT2' },
  { name: 'LLBLGen Pro', icon: '', category: 'tool', tag: 'Stage BUT2' },
];

export const experiences: Experience[] = [
  {
    period: 'Avril 2026 - Juillet 2026',
    company: 'Operis (DLM Soft)',
    slug: 'operis',
    role: 'Stagiaire développeur fullstack',
    image: '/images/operisDashboard.png',
    description: 'Application interne de gestion de tickets et suivi du temps passé, développée en stage.',
    details: "Operis est une application web interne développée durant mon stage de 16 semaines chez DLM Soft, une entreprise spécialisée dans le développement de logiciels métier pour les collectivités territoriales. L'objectif était de moderniser et fusionner deux outils existants : BugTracker et OroTimeSheet, en une solution unique de gestion de tickets et de suivi du temps passé, destinée à l'équipe interne et aux clients.\n\nMa mission s'est articulée en deux phases. La première consistait à remplacer le framework UI provisoire par DLMSoft Common Blazor, le framework interne de l'entreprise, en adaptant plus de 130 fichiers Razor pour assurer la compatibilité. La seconde portait sur la conception de la base de données PostgreSQL, la migration des données depuis les deux bases existantes (avec conversion de formats DokuWiki vers HTML, gestion des données orphelines et transposition des mappings en C#), puis la mise en place d'une API REST avec architecture CQRS et MediatR pour connecter le frontend Blazor aux données réelles.\n\nL'application gère les tâches, projets, commentaires, pièces jointes et droits utilisateurs, avec authentification JWT et notifications en temps réel via SignalR.",
    technologies: ['C#', 'Blazor', 'PostgreSQL', 'SQL', 'Git'],
    learnings: [
      'Architecture CQRS avec MediatR : séparation des Commands (écriture) et Queries (lecture) dans une architecture en couches',
      'Migration de données complexe : conversion de formats (DokuWiki → HTML via regex), gestion des données orphelines et transposition de mappings SQL en C#',
      'Refactoring à grande échelle : remplacement d\'un framework UI sur 130+ fichiers Blazor avec résolution de problèmes d\'encodage et de compatibilité',
      'ORM LLBLGen Pro : génération d\'entités, requêtes LINQ spécifiques et synchronisation code/schéma',
      'Authentification JWT, gestion de droits par rôles et notifications temps réel avec SignalR',
    ],
  },
];

export const interests: Interest[] = [
  {
    name: 'Lecture',
    image: '/images/interest-lecture.jpg',
    description: 'Mangas, novels...',
  },
  {
    name: 'Gaming',
    image: '/images/interest-gaming.jpg',
    description: 'Minecraft, Roblox...',
  },
  {
    name: 'Sciences',
    image: '/images/interest-sciences.jpg',
    description: 'Corps humain, astronomie...',
  },
];

export const techLogos: Record<string, string> = {
  'HTML': `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg`,
  'CSS': `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg`,
  'JavaScript': `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg`,
  'TypeScript': `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg`,
  'PHP': `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg`,
  'SQL': `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg`,
  'PostgreSQL': `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg`,
  'Java': `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg`,
  'Python': `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg`,
  'C': `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg`,
  'C#': `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg`,
  'React': `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg`,
  'Bootstrap': `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg`,
  'Git': `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg`,
  'Figma': `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg`,
  'Blazor': `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blazor/blazor-original.svg`,
  'JavaFX': `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg`,
};

export const projectCategories = {
  development: 'Projets de Développement',
  database: 'Projets de Bases de Données',
  web: 'Projets de Développement Web',
} as const;
