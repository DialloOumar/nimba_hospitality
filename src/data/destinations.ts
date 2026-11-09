export type RegionId = 'maritime' | 'moyenne' | 'haute' | 'forestiere';

export interface Region {
  id: RegionId;
  name: string;
  subtitle: string;
  description: string;
  photo: string;
}

export interface Destination {
  slug: string;
  name: string;
  kicker: string;
  region: RegionId;
  photo: string;
  gallery?: string[];
  excerpt: string;
  lead: string;
  body: string[];
  highlights: string[];
  info: {
    location: string;
    fromConakry: string;
    season: string;
    idealFor: string;
  };
  featured?: boolean;
}

export const REGIONS: Region[] = [
  {
    id: 'maritime',
    name: 'Guinée Maritime',
    subtitle: "Le littoral et ses îles",
    description:
      "Près de 300 km de côtes atlantiques, des mangroves, des îles et la capitale : la Basse-Guinée est la porte d'entrée du pays, entre océan et premiers reliefs.",
    photo: 'kassa',
  },
  {
    id: 'moyenne',
    name: 'Moyenne-Guinée',
    subtitle: 'Le Fouta-Djalon',
    description:
      "Plateaux d'altitude, falaises, cascades et villages peuls : le « château d'eau de l'Afrique de l'Ouest », au climat doux toute l'année.",
    photo: 'fouta',
  },
  {
    id: 'haute',
    name: 'Haute-Guinée',
    subtitle: 'Les savanes du Niger',
    description:
      "Terre mandingue des grandes savanes, traversée par le jeune fleuve Niger, berceau d'une culture musicale et orale d'une immense richesse.",
    photo: 'haut-niger',
  },
  {
    id: 'forestiere',
    name: 'Guinée Forestière',
    subtitle: 'Forêts et montagnes',
    description:
      "Forêts denses, montagnes et traditions vivantes : le sud-est du pays abrite les monts Nimba, le massif du Ziama et une biodiversité exceptionnelle.",
    photo: 'nimba',
  },
];

export const DESTINATIONS: Destination[] = [
  // ---------------- Guinée Maritime ----------------
  {
    slug: 'iles-de-loos',
    name: 'Îles de Loos',
    kicker: 'Au large de Conakry',
    region: 'maritime',
    photo: 'kassa',
    gallery: ['loos'],
    featured: true,
    excerpt: "Un archipel de sable et de palmiers, à une courte traversée de la capitale.",
    lead:
      "À quelques encablures de Conakry, l'archipel des îles de Loos offre une parenthèse insulaire : plages bordées de palmiers, eaux calmes et villages de pêcheurs.",
    body: [
      "L'archipel compte trois îles principales — Kassa, Room et Tamara — ainsi que plusieurs îlots. Kassa, la plus proche de la capitale, est la plus animée le week-end ; Room séduit par ses criques plus confidentielles. Une légende tenace veut d'ailleurs que l'île ait inspiré à Robert Louis Stevenson son Île au trésor.",
      "Sur Tamara, les vestiges de l'ancien pénitencier de Fotoba rappellent une page plus sombre de l'histoire. Entre baignade, balades à l'ombre des manguiers et poisson braisé sur la plage, les îles de Loos sont l'escapade idéale d'une journée ou d'un week-end.",
    ],
    highlights: [
      'Les plages de Kassa et de Room',
      "Les vestiges du pénitencier de Fotoba, sur l'île de Tamara",
      "Un poisson braisé face à l'océan",
      'Le coucher de soleil lors du retour en bateau',
    ],
    info: {
      location: 'Archipel au large de Conakry',
      fromConakry: '≈ 30 à 45 min de bateau',
      season: 'Novembre à mai (saison sèche)',
      idealFor: "Plage, détente, escapade d'un jour",
    },
  },
  {
    slug: 'conakry',
    name: 'Conakry',
    kicker: 'La capitale',
    region: 'maritime',
    photo: 'mosquee-faycal',
    gallery: ['ont-conakry-soir', 'ont-conakry-centre'],
    featured: true,
    excerpt: 'Une presqu’île vibrante entre océan, marchés animés et grands monuments.',
    lead:
      "Bâtie sur la presqu'île de Kaloum et prolongée vers le continent, Conakry est la porte d'entrée du pays : une capitale tournée vers l'océan, dense, musicale et chaleureuse.",
    body: [
      "Inaugurée au début des années 1980, la Grande Mosquée Fayçal compte parmi les plus vastes d'Afrique de l'Ouest et domine la ville de ses minarets. Au cœur de Kaloum, le Musée national présente masques, instruments et objets rituels venus de toutes les régions du pays.",
      "Le marché de Madina, l'un des plus grands de la sous-région, les ateliers d'artisans, la corniche au coucher du soleil et une scène musicale héritière des grands orchestres guinéens complètent le portrait d'une ville qui se vit d'abord au contact de ses habitants.",
    ],
    highlights: [
      'La Grande Mosquée Fayçal',
      'Les collections du Musée national',
      "L'effervescence du marché de Madina",
      "Un dîner sur la corniche, face à l'Atlantique",
    ],
    info: {
      location: "Presqu'île de Kaloum, Guinée Maritime",
      fromConakry: 'Aéroport international de Conakry-Gbessia',
      season: "Toute l'année ; plus agréable de novembre à avril",
      idealFor: 'Culture, gastronomie, vie nocturne',
    },
  },
  {
    slug: 'voile-de-la-mariee',
    name: 'Voile de la Mariée',
    kicker: 'Kindia',
    region: 'maritime',
    photo: 'voile-mariee',
    featured: true,
    excerpt: "Une chute fine comme un voile de dentelle, dans un écrin de verdure.",
    lead:
      "Près de Kindia, l'eau glisse le long d'une paroi rocheuse en un rideau si délicat qu'il a valu au site son nom poétique : le Voile de la Mariée.",
    body: [
      "Nichée au pied des reliefs qui annoncent le Fouta-Djalon, la cascade tombe dans un bassin entouré de bambous et de végétation tropicale. Le site, aménagé pour l'accueil des visiteurs, est l'une des excursions les plus prisées depuis Conakry.",
      "La région de Kindia, réputée pour ses vergers et ses fruits, mérite qu'on s'y attarde : son marché coloré et les panoramas du mont Gangan prolongent agréablement la visite.",
    ],
    highlights: [
      "Le rideau d'eau, spectaculaire en fin de saison des pluies",
      'La baignade dans le bassin naturel',
      'Les bosquets de bambous géants',
      'Les fruits du marché de Kindia',
    ],
    info: {
      location: 'Préfecture de Kindia, Guinée Maritime',
      fromConakry: '≈ 3 h de route',
      season: "Août à décembre pour le débit ; accessible toute l'année",
      idealFor: 'Excursion nature, baignade, famille',
    },
  },
  {
    slug: 'boke-rio-nunez',
    name: 'Boké & le Rio Nunez',
    kicker: 'Histoire du littoral nord',
    region: 'maritime',
    photo: 'boke',
    excerpt: 'Un musée dans un fort du XIXᵉ siècle, sur les rives du Rio Nunez.',
    lead:
      "Au nord du littoral, Boké raconte une histoire profonde : celle des comptoirs du Rio Nunez, de la traite et de la résistance, conservée dans les murs de son ancien fort colonial.",
    body: [
      "Le musée régional de Boké occupe un fort érigé à la fin du XIXᵉ siècle au bord du Rio Nunez. Ses salles retracent l'histoire de la région, de la traite négrière aux luttes pour l'indépendance, et présentent une belle collection d'objets d'art des peuples du littoral.",
      "Les rives du Rio Nunez, bordées de mangroves, se découvrent en pirogue. Plus au nord, la région s'ouvre sur un littoral sauvage d'estuaires et d'îles, encore préservé du tourisme de masse.",
    ],
    highlights: [
      "Le musée régional installé dans l'ancien fort",
      'Une balade en pirogue sur le Rio Nunez',
      'Les mangroves et estuaires du littoral nord',
      "L'artisanat des peuples du littoral",
    ],
    info: {
      location: 'Région de Boké, Guinée Maritime',
      fromConakry: '≈ 5 à 6 h de route',
      season: 'Novembre à mai',
      idealFor: 'Histoire, culture, nature',
    },
  },

  // ---------------- Moyenne-Guinée ----------------
  {
    slug: 'fouta-djalon',
    name: 'Plateaux du Fouta-Djalon',
    kicker: "Le château d'eau de l'Afrique de l'Ouest",
    region: 'moyenne',
    photo: 'fouta',
    gallery: ['fouta-plateau'],
    featured: true,
    excerpt: 'Plateaux, falaises et villages peuls, sous un climat étonnamment frais.',
    lead:
      "Surnommé le « château d'eau de l'Afrique de l'Ouest », le Fouta-Djalon voit naître le Sénégal, la Gambie et plusieurs affluents du Niger. Ses plateaux d'altitude, au climat étonnamment frais, sont un paradis pour la randonnée.",
    body: [
      "De Mamou à Labé en passant par Dalaba et Pita, la route traverse un paysage de collines verdoyantes, de falaises de grès et de vallées où se nichent les villages peuls aux cases rondes. Dalaba, ancienne station climatique, a gardé de cette époque ses forêts de pins et ses villas.",
      "Les sentiers de Doucki, près de Pita, comptent parmi les plus beaux treks du pays : canyons, grottes, ponts naturels et points de vue spectaculaires, à parcourir avec des guides locaux.",
    ],
    highlights: [
      'Les randonnées et canyons de Doucki',
      'La fraîcheur de Dalaba et ses forêts de pins',
      "L'architecture des villages peuls",
      'Le lait caillé et le fonio des marchés du Fouta',
    ],
    info: {
      location: 'Mamou, Dalaba, Pita, Labé — Moyenne-Guinée',
      fromConakry: "≈ 5 à 8 h de route selon l'étape",
      season: "Octobre à avril ; cascades au plus fort d'août à octobre",
      idealFor: 'Randonnée, climat frais, culture peule',
    },
  },
  {
    slug: 'chutes-de-kambadaga',
    name: 'Chutes de Kambadaga',
    kicker: 'Pita · Fouta-Djalon',
    region: 'moyenne',
    photo: 'kambadaga',
    featured: true,
    excerpt: 'Des cascades en gradins sur le Kokoulo, au cœur du Fouta.',
    lead:
      "Près de Pita, la rivière Kokoulo se jette en plusieurs paliers dans une vallée verdoyante : les chutes de Kambadaga sont parmi les plus impressionnantes du pays.",
    body: [
      "Selon la saison, les chutes se présentent en un large rideau tumultueux ou en une série de cascades plus sages qui laissent apparaître la roche. Plusieurs belvédères permettent d'admirer le site sous différents angles, et un sentier descend vers le pied des chutes.",
      "Le site se combine aisément avec les randonnées de Doucki et la découverte de Pita, l'une des villes les plus dynamiques du Fouta.",
    ],
    highlights: [
      'Le panorama depuis les belvédères',
      'La descente au pied des chutes',
      'Le spectacle à la fin de la saison des pluies',
      'Une halte à Pita',
    ],
    info: {
      location: 'Préfecture de Pita, Moyenne-Guinée',
      fromConakry: '≈ 7 h de route',
      season: 'Août à novembre pour le débit',
      idealFor: 'Photographie, randonnée, nature',
    },
  },
  {
    slug: 'chute-de-ditinn',
    name: 'Chute de Ditinn',
    kicker: 'Dalaba · Fouta-Djalon',
    region: 'moyenne',
    photo: 'ditinn',
    excerpt: "L'une des plus hautes chutes de Guinée, tombant d'une falaise vertigineuse.",
    lead:
      "Non loin de Dalaba, la chute de Ditinn plonge d'une haute falaise de grès dans un écrin de forêt : l'une des cascades les plus hautes et les plus spectaculaires du pays.",
    body: [
      "L'approche se fait par un sentier qui serpente dans la forêt-galerie jusqu'au bassin, d'où l'on mesure toute la hauteur de la paroi. À la saison sèche, le filet d'eau se fait plus discret, mais la falaise ocre reste saisissante.",
      'Ditinn est une étape naturelle de tout circuit dans le Fouta, entre Dalaba et Pita.',
    ],
    highlights: [
      'La vue sur la falaise depuis le bassin',
      'La marche en forêt-galerie',
      'Un circuit combiné avec Dalaba et Kambadaga',
    ],
    info: {
      location: 'Préfecture de Dalaba, Moyenne-Guinée',
      fromConakry: '≈ 6 h de route',
      season: 'Juillet à novembre',
      idealFor: 'Randonnée, nature',
    },
  },
  {
    slug: 'chutes-de-saala',
    name: 'Chutes de Saala',
    kicker: 'Labé · Fouta-Djalon',
    region: 'moyenne',
    photo: 'saala',
    excerpt: 'Une succession de cascades sur de larges dalles de roche.',
    lead:
      "Dans la région de Labé, la rivière dévale une série de dalles rocheuses en cascades successives : les chutes de Saala forment l'un des sites les plus photogéniques du Fouta-Djalon.",
    body: [
      "Le site, encadré de forêt, se découvre à pied en longeant les gradins de roche. Les bassins naturels invitent à la pause, et l'accueil des villages voisins fait pleinement partie de l'expérience.",
      'Labé, capitale historique du Fouta, est la base idéale pour rayonner : marchés, mosquées anciennes, artisanat du cuir et du tissage.',
    ],
    highlights: ['Les cascades en gradins', 'Les bassins naturels', 'Labé, capitale historique du Fouta'],
    info: {
      location: 'Région de Labé, Moyenne-Guinée',
      fromConakry: '≈ 8 h de route',
      season: 'Août à décembre',
      idealFor: 'Nature, photographie',
    },
  },
  {
    slug: 'dame-de-mali',
    name: 'La Dame de Mali',
    kicker: 'Mont Loura · Mali',
    region: 'moyenne',
    photo: 'dame-mali',
    featured: true,
    excerpt: "Un profil de femme sculpté par l'érosion, face aux plateaux du nord.",
    lead:
      "Aux confins nord du Fouta-Djalon, près de la ville de Mali, une falaise du mont Loura dessine le profil d'un visage de femme : la célèbre Dame de Mali.",
    body: [
      "Le mont Loura, l'un des points culminants du Fouta-Djalon, offre depuis ses hauteurs des panoramas immenses sur les plateaux. La silhouette de la Dame, née de l'érosion de la roche, est devenue l'un des symboles touristiques de la Guinée.",
      'La région de Mali, la plus élevée du Fouta, est aussi réputée pour sa fraîcheur et ses paysages de bowé — ces plateaux dénudés typiques du massif.',
    ],
    highlights: [
      'Le profil de la Dame au lever du jour',
      'Les panoramas depuis le mont Loura',
      'Les plateaux de bowé',
      'La fraîcheur de la région de Mali',
    ],
    info: {
      location: 'Préfecture de Mali, Moyenne-Guinée',
      fromConakry: '≈ 10 h de route (étape à Labé conseillée)',
      season: 'Novembre à mars',
      idealFor: 'Trek, panoramas, aventure',
    },
  },

  // ---------------- Haute-Guinée ----------------
  {
    slug: 'parc-national-du-haut-niger',
    name: 'Parc national du Haut-Niger',
    kicker: 'Faranah · Haute-Guinée',
    region: 'haute',
    photo: 'haut-niger',
    excerpt: 'Savanes boisées et forêt sèche le long du jeune fleuve Niger.',
    lead:
      "Créé pour protéger l'un des derniers grands massifs de forêt sèche d'Afrique de l'Ouest, le parc national du Haut-Niger s'étend autour du cours supérieur du Niger, non loin de Faranah.",
    body: [
      "Savanes arborées, forêts-galeries et forêt de Mafou composent un territoire où vivent chimpanzés, buffles, antilopes et une avifaune remarquable. Le fleuve Niger, encore jeune, y serpente avant d'entamer son long voyage vers le Mali, le Niger et le Nigeria.",
      "Faranah est la porte d'entrée du parc. La Haute-Guinée, terre mandingue, se prolonge jusqu'à Kankan, ville de savoir et de musique, sur les rives du Milo.",
    ],
    highlights: [
      'La forêt sèche de Mafou',
      "L'observation de la faune et des oiseaux",
      'Le cours supérieur du fleuve Niger',
    ],
    info: {
      location: 'Région de Faranah, Haute-Guinée',
      fromConakry: '≈ 8 à 9 h de route',
      season: 'Décembre à avril',
      idealFor: 'Safari, nature, observation',
    },
  },

  // ---------------- Guinée Forestière ----------------
  {
    slug: 'monts-nimba',
    name: 'Monts Nimba',
    kicker: "Patrimoine mondial de l'UNESCO",
    region: 'forestiere',
    photo: 'nimba',
    gallery: ['hero-nimba', 'nimba-clouds'],
    featured: true,
    excerpt: "Le toit de la Guinée, sanctuaire de biodiversité classé par l'UNESCO.",
    lead:
      "Culminant à 1 752 mètres, le mont Nimba est le point le plus élevé de la Guinée. La réserve naturelle intégrale qui le protège, partagée avec la Côte d'Ivoire, est inscrite au patrimoine mondial de l'UNESCO depuis 1981.",
    body: [
      "Ses pentes passent de la forêt dense humide aux prairies d'altitude, souvent noyées dans la brume. Ce gradient exceptionnel abrite une faune et une flore uniques, dont le crapaud vivipare du Nimba — une espèce qui n'existe nulle part ailleurs au monde — ainsi que des chimpanzés.",
      "Réserve intégrale, le site se visite dans un cadre réglementé, avec les autorisations et l'accompagnement de guides habilités. C'est à cette montagne, majestueuse et fragile, que notre groupe doit son nom.",
    ],
    highlights: [
      "Les prairies d'altitude dans la brume",
      'Une biodiversité endémique unique au monde',
      'Les chimpanzés de Bossou, au pied du massif',
      'N’Zérékoré et la culture de la Guinée forestière',
    ],
    info: {
      location: 'Préfecture de Lola, Guinée Forestière',
      fromConakry: "≈ 1 000 km ; vol intérieur vers N'Zérékoré selon disponibilité",
      season: 'Novembre à mars',
      idealFor: 'Trek encadré, biodiversité, photographie',
    },
  },
  {
    slug: 'chimpanzes-de-bossou',
    name: 'Chimpanzés de Bossou',
    kicker: 'Lola · Guinée Forestière',
    region: 'forestiere',
    photo: 'bossou',
    featured: true,
    excerpt: 'Une communauté de chimpanzés célèbre dans le monde scientifique.',
    lead:
      "Au pied des monts Nimba, les collines boisées de Bossou abritent une communauté de chimpanzés étudiée depuis les années 1970 et célèbre pour son usage d'outils.",
    body: [
      "Les chimpanzés de Bossou utilisent notamment des pierres comme marteau et enclume pour casser les noix de palme — un comportement observé et documenté par les chercheurs depuis des décennies. Pour les habitants, ces primates sont aussi liés aux croyances locales, ce qui a contribué à leur protection.",
      'Les visites se font en petits groupes, accompagnées de guides, dans le strict respect des règles sanitaires et de distance qui protègent les animaux.',
    ],
    highlights: [
      "L'observation des chimpanzés en milieu naturel",
      'Les explications des guides et des chercheurs',
      'Le lien ancien entre la communauté et la forêt',
    ],
    info: {
      location: 'Bossou, préfecture de Lola, Guinée Forestière',
      fromConakry: "≈ 1 000 km ; via N'Zérékoré",
      season: 'Novembre à mars',
      idealFor: 'Écotourisme, faune',
    },
  },
  {
    slug: 'ponts-de-lianes',
    name: 'Ponts de lianes',
    kicker: 'Sur le Diani · Guinée Forestière',
    region: 'forestiere',
    photo: 'pont-lianes',
    gallery: ['ont-pont-lianes', 'ont-village-forestier', 'ont-masque'],
    excerpt: 'Des passerelles tressées à la main, héritage d’un savoir-faire ancestral.',
    lead:
      "Dans les forêts du sud, des ponts suspendus faits de lianes tressées enjambent les rivières, comme sur le Diani. Ils sont l'œuvre de communautés qui se transmettent ce savoir-faire depuis des générations.",
    body: [
      "Entièrement construits à partir de matériaux de la forêt, ces ponts sont régulièrement entretenus et reconstruits par les villageois, souvent au cours de cérémonies traditionnelles. Les franchir, sous la canopée, est une expérience aussi émouvante que spectaculaire.",
      "Ils sont l'occasion de découvrir la culture des peuples de la Guinée forestière — Kpelle, Toma, Kissi ou Manon — leurs masques, leurs danses et leur rapport intime à la forêt.",
    ],
    highlights: [
      "La traversée d'un pont de lianes",
      "L'accueil des villages et leurs traditions",
      'Les masques et les danses de la forêt',
    ],
    info: {
      location: "Région de Macenta et N'Zérékoré, Guinée Forestière",
      fromConakry: '≈ 900 à 1 000 km',
      season: 'Novembre à mars',
      idealFor: 'Culture, aventure',
    },
  },
  {
    slug: 'massif-du-ziama',
    name: 'Massif du Ziama',
    kicker: 'Macenta · Guinée Forestière',
    region: 'forestiere',
    photo: 'ziama',
    excerpt: "Une forêt dense humide, réserve de biosphère de l'UNESCO.",
    lead:
      "Près de Sérédou, dans la préfecture de Macenta, le massif du Ziama protège l'un des plus beaux blocs de forêt dense humide de Guinée. Il est reconnu réserve de biosphère par l'UNESCO depuis 1980.",
    body: [
      "Sa canopée abrite des éléphants de forêt, des céphalophes, de nombreux primates et une avifaune d'une grande richesse. Les reliefs, couverts d'une forêt de montagne souvent baignée de brume, composent des paysages saisissants.",
      "Le massif s'explore avec des guides locaux et des agents de la conservation, dans une démarche d'écotourisme respectueuse des communautés riveraines.",
    ],
    highlights: [
      'La forêt dense et ses arbres géants',
      "La faune forestière, dont l'éléphant de forêt",
      'Les points de vue sur le massif',
    ],
    info: {
      location: 'Préfecture de Macenta, Guinée Forestière',
      fromConakry: '≈ 900 km',
      season: 'Décembre à mars',
      idealFor: 'Écotourisme, randonnée, faune',
    },
  },
];

export const regionById = (id: RegionId) => REGIONS.find((r) => r.id === id)!;
export const destinationsIn = (id: RegionId) => DESTINATIONS.filter((d) => d.region === id);
