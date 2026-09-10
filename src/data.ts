import { Game, Team, Translations } from './types';

export const translations: Record<'es' | 'en', Translations> = {
  es: {
    nav_about: "Nosotros",
    nav_games: "Proyectos",
    nav_team: "Estudios",
    nav_community: "Comunidad",
    about_title: "Desarrollo de Videojuegos Independientes",
    about_subtitle: "Quiénes Somos",
    about_p1: "Full House Studio es una productora mexicana que agrupa equipos creativos independientes para el desarrollo y publicación de videojuegos.",
    about_p2: "Creemos que los mejores videojuegos nacen de ideas con personalidad. Diseñamos experiencias donde la jugabilidad, la dirección artística y la atención al detalle se combinan para crear momentos memorables para los jugadores.",
    about_accent_title: "Hecho en México",
    about_accent_body: "Buscamos apoyar el desarrollo de proyectos originales impulsados por la creatividad, el talento local y la pasión de hacer videojuegos de gran calidad dentro de México.",
    about_badge1_title: "100% Indie",
    about_badge1_body: "Desarrollo original",
    about_badge2_title: "PC Gaming",
    about_badge2_body: "Publicamos en Steam e Itch.io",
    games_title: "Catálogo de Juegos",
    games_subtitle: "Explora los proyectos lanzados y en desarrollo activo de nuestros estudios.",
    games_all_filter: "Ver Todos",
    team_title: "Estudios Asociados",
    team_subtitle: "Dos enfoques de diseño bajo la misma red de publicación",
    footer_rights: "© 2026 Full House Studio. Todos los derechos reservados.",
    hero_new_release: "Próximo Lanzamiento",
    hero_coop_fun: "En desarrollo",
    game_details: "Detalles",
    explore_btn: "Ficha del Juego",
  },
  en: {
    nav_about: "About Us",
    nav_games: "Games",
    nav_team: "Studios",
    nav_community: "Community",
    about_title: "Independent Game Development",
    about_subtitle: "About Us",
    about_p1: "Full House Studio is a Mexican production company that brings together independent creative teams for the development and publishing of video games.",
    about_p2: "We believe the best video games are born from unique ideas. We design experiences where gameplay, artistic direction, and attention to detail combine to create memorable moments for players.",
    about_accent_title: "Made in Mexico",
    about_accent_body: "We aim to support the development of original projects driven by creativity, local talent, and the passion for creating high-quality video games within Mexico.",
    about_badge1_title: "100% Indie",
    about_badge1_body: "Original development",
    about_badge2_title: "PC Gaming",
    about_badge2_body: "Published on Steam and Itch.io",
    games_title: "Game Catalog",
    games_subtitle: "Explore released and actively developing projects from our studios.",
    games_all_filter: "All Games",
    team_title: "Associated Studios",
    team_subtitle: "Two design approaches within the same publishing network",
    footer_rights: "© 2026 Full House Studio. All rights reserved.",
    hero_new_release: "Upcoming Release",
    hero_coop_fun: "In Development",
    game_details: "Details",
    explore_btn: "Game Profile",
  }
};

export const games: Game[] = [
  {
    id: "none-left-to-hear-it",
    title: "None Left to Hear It",
    studio: "Calaka Studio",
    studioKey: "calaka",
    shortDescription: {
      es: "La única salida está al otro lado de la ciudad... si logras sobrevivir al hospital.",
      en: "The only way out is across the city... if you can survive the hospital."
    },
    longDescription: {
      es: [
        "Tras un accidente de coche, Sam despierta confundido en un hospital vacío... o al menos, eso parece. Los pasillos están ahora infestados de extrañas criaturas... figuras altas y retorcidas, hechas de carne y hueso.",
        "Los únicos sonidos que resuenan en este mundo desolado son los gruñidos de estas criaturas y el eco metálico de una transmisión de emergencia que se repite constantemente, anunciando un lugar seguro en el centro comercial. Aferrándose a cualquier atisbo de esperanza, Sam debe atravesar pasillos oscuros e infestados, mientras estas criaturas la persiguen sin descanso.",
        "¿Podrás tú, junto con Sam, escapar de esta pesadilla?"
      ],
      en: [
        "After a car accident, Sam wakes up confused in an empty hospital... or so it seems. The hallways are now infested with strange creatures... tall, twisted figures made of flesh and bone.",
        "The only sounds left in this desolate world are the grunts of these creatures and the metalic echo of an emergency broadcast, that constantly repeats itself announcing a safe place located in the mall. Holding on to any kind of hope, Sam must go through dark and infested halls, meanwhile these creatures hunt her down retlenlessly.",
        "Will you, alongside Sam be able to escape this nightmare?"
      ]
    },
    coverImage: "/public/covers/c_None.png",
    tag: {
      es: "Suspenso Psicológico",
      en: "Psychological Suspense"
    },
    tagColor: "bg-red-700",
    releaseYear: "2026",
    status: {
      es: "Próximamente",
      en: "Coming Soon"
    },
    features: {
      es: [
        "Mecánicas de vigilancia",
        "Diseño de audio estéreo posicional",
        "Múltiples desenlaces según el nivel de alerta",
        "Inspirado en leyendas locales y en videojuegos de terror clásicos"
      ],
      en: [
        "Surveillance mechanics",
        "Positional stereo audio design",
        "Multiple outcomes based on alert levels",
        "Inspired by local legends and classic horror video games"
      ]
    },
    steamLink: "https://store.steampowered.com/app/4077680/Nadie_te_Escucha/",
    //discordLink: "https://discord.com",   // Placeholder Discord link, replace with actual Discord link if available
    gallery: [  // Placeholder gallery images, replace with actual gallery images
      "/public/screenshots/s_None1.jpg",
      "/public/screenshots/s_None2.jpg",
      "/public/screenshots/s_None3.jpg"
    ],
    pressKitUrl: "https://drive.google.com/drive/folders/1hAxFpKIFDTHcnsOZeiESiMsww2wDGSex?usp=sharing" // Placeholder press kit URL, replace with actual press kit link
  },
  {
    id: "magical-flavour",
    title: "Magical Flavour",
    studio: "PlushCraft Studios",
    studioKey: "plush",
    shortDescription: {
      es: "Los grandes alquimistas no siguen recetas, solamente sobreviven al caos mágico.",
      en: "Great alchemists don't follow recipes, they just survive the magical chaos."
    },
    longDescription: {
      es: [
        "En un mundo donde la magia forma parte de la vida cotidiana, preparar una simple receta puede convertirse en un verdadero desastre. En una pequeña cocina llena de ingredientes, pociones y artefactos mágicos, un grupo de jóvenes alquimistas se prepara para demostrar que son capaces de dominar las recetas más complicadas.",
        "¿Podrán trabajar juntos, dominar la magia y completar sus recetas antes de que el caos se apodere de la cocina?"
      ],
      en: [
        "In a world where magic is part of everyday life, preparing a simple recipe can turn into a real disaster. In a small kitchen filled with ingredients, potions, and magical artifacts, a group of young alchemists is ready to prove they can master the most complicated recipes.",
        "Will they be able to work together, master the magic, and complete their recipes before the chaos takes over the kitchen?"
      ]
    },
    coverImage: "/public/covers/c_Magical.png",
    tag: {
      es: "Aventura Caótica / Cooperativa",
      en: "Chaotic Adventure / Cooperative"
    },
    tagColor: "bg-brand-blue-light",
    releaseYear: "2025",
    status: {
      es: "Próximamente",
      en: "Coming Soon"
    },
    features: {
      es: [
        "Juego cooperativo para 1-4 participantes de forma local",
        "Físicas aplicadas a la interacción entre objetos",
        "Nivel de dificultad adaptable para diferentes edades"
      ],
      en: [
        "Cooperative gameplay for 1-4 players locally",
        "Physics-based interactions with objects",
        "Adaptable difficulty for different age ranges"
      ]
    },
    //steamLink: "https://store.steampowered.com",
    itchLink: "https://spectragx.itch.io/magical-flavour",
    //discordLink: "https://discord.com",
    gallery: [
      "/public/screenshots/s_Magical1.png",
      "/public/screenshots/s_Magical2.png",
      "/public/screenshots/s_Magical3.png"
    ],
    pressKitUrl: "https://drive.google.com/drive/folders/1h8DyfwFzhVyUqjiGoau19SH-xSovDckq?usp=sharing"
  },
  {
    id: "malware-strikes",
    title: "Malware Strikes",
    studio: "Calaka Studio",
    studioKey: "calaka",
    shortDescription: {
      es: "Ábrete paso entre firewalls, antivirus y enjambres de código para convertirte en el malware definitivo.",
      en: "Break through firewalls, antivirus, and swarms of code to become the ultimate malware."
    },
    longDescription: {
      es: [
        "Tu misión es destruir todas las protecciones y archivos de una supercomputadora para convertirte en el malware más peligroso de todos los tiempos. Tu objetivo es dominar a la humanidad y, para lograrlo, debes derrotar a todo lo que se cruce en tu camino.",
        "¿Podrás destruir todas las defensas, conquistar el sistema y convertirte en el malware que llevará a la humanidad al borde del colapso?"
      ],
      en: [
        "Your mission is to destroy all the protections and files of a supercomputer to become the most dangerous malware of all time. Your goal is to dominate humanity, and to achieve this, you must defeat everything that stands in your way.",
        "Will you be able to destroy all defenses, conquer the system, and become the malware that will bring humanity to the brink of collapse?"
      ]
    },
    coverImage: "/public/covers/c_Malware.png", 
    tag: {
      es: "Accion / Disparos",
      en: "Action / Shooters"
    },
    tagColor: "bg-red-800",
    releaseYear: "2024",
    status: {
      es: "Valoraciones Positivas",
      en: "Positive Reviews"
    },
    features: {
      es: [
        "Pixel Art con animaciones fluidas y efectos de partículas",
        "Gran dificultad y variedad de enemigos y patrones de ataque",
        "Banda sonora ambiental con arreglos instrumentales locales",
        "Opciones de idioma en español y lenguas locales"
      ],
      en: [
        "Pixel Art with fluid animations and particle effects",
        "High difficulty and variety of enemies and attack patterns",
        "Ambient soundtrack with local instrumental arrangements",
        "Language options in Spanish and regional dialects"
      ]
    },
    itchLink: "https://elxavi.itch.io/malware-strikes",
    gallery: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=800"
    ],
    pressKitUrl: "https://drive.google.com/"
  },
  {
    id: "plush-out",
    title: "Plush Out",
    studio: "PlushCraft Studios",
    studioKey: "plush",
    shortDescription: {
      es: "Acelera o explota: corre, derrapa y destruye a tus rivales en carreras llenas de caos y velocidad.",
      en: "Speed up or explode: run, slide, and destroy your rivals in races full of chaos and speed."
    },
    longDescription: {
      es: [
        "¡Velocidad, caos y peluches! Compite en la carrera más caótica, donde deberás acelerar, sobrevivir y evitar explotar en un mundo lleno de adorables y peligrosos plushies.",
        "¿Podrás dominar la pista y convertirte en el rey de los plushies?"
      ],
      en: [
        "Speed, chaos, and plushies! Race through the most chaotic competition where you must accelerate, survive, and avoid exploding in a world full of adorable yet dangerous plushies.",
        "Can you master the track and become the king of the plushies?"
      ]
    },
    coverImage: "/public/covers/c_Plush.png",
    tag: {
      es: "Arcade Racing / Multijugador",
      en: "Arcade Racing / Multiplayer"
    },
    tagColor: "bg-blue-500",
    releaseYear: "2024",
    status: {
      es: "En Desarrollo",
      en: "In Development"
    },
    features: {
      es: [
        "Modo de juego cooperativo y de enfrentamiento",
        "Control directo intuitivo y curva de aprendizaje progresiva",
        "Compatibilidad con multijugador local"
      ],
      en: [
        "Cooperative and versus game modes",
        "Intuitive direct controls and progressive learning curve",
        "Local multiplayer support"
      ]
    },
    itchLink: "https://plushcraftstudios.itch.io/plushout",
    gallery: [
      "/public/screenshots/s_Plush1.png",
      "/public/screenshots/s_Plush.png",
      "/public/screenshots/s_Plush2.png"
    ],
    pressKitUrl: "https://drive.google.com" 
  },
  {
    id: "serbia",
    title: "S E R B I A",
    studio: "Calaka Studio",
    studioKey: "calaka",
    shortDescription: {
      es: "Corre, dispara y sobrevive al caos de una prisión en motín donde cada segundo puede ser el último..",
      en: "Run, shoot, and survive the chaos of a prison in riot where every second could be your last.."
    },
    longDescription: {
      es: [
        "En lo más profundo de la tundra serbia se encuentra una prisión aislada del resto del mundo. Nadie sabe exactamente qué ocurre dentro de sus muros, pero una cosa queda clara cuando el caos comienza: algo ha salido terriblemente mal.",
        "Alguien o Algo destruyo gran parte de las celdas de la prisión y gracias a eso se creo un motín donde todos los prisioneros lograron escapar...en una de las celdas un tipo misterioso con heridas se da cuenta de la situación y aprovecha para escapar pero tendrá que esquivar todas las trampas, obstáculos, guardias y los sangrientos pasillos  que dirigen hacia la libertad...pero tienes que escapar rapido porque tendrás muy poco tiempo.",
        "¿Aceptaras el reto? Atrévete"
      ],
      en: [
        "Deep in the Serbian tundra lies a prison isolated from the rest of the world. No one knows exactly what happens within its walls, but one thing becomes clear when chaos erupts: something has gone terribly wrong.",
        "Someone or something has destroyed a significant portion of the prison cells, leading to a riot where all the prisoners have managed to escape. In one of the cells, a mysterious figure with injuries realizes the situation and seizes the opportunity to escape. However, they must navigate through traps, obstacles, guards, and the bloody corridors that lead to freedom... but you must escape quickly because time is running out.",
        "Will you accept the challenge? Dare to try."
      ]
    },
    coverImage: "/public/covers/c_Serbia.png", 
    tag: {
      es: "Acción / Aventura",
      en: "Action / Adventure"
    },
    tagColor: "bg-red-950",
    releaseYear: "2023",
    status: {
      es: "Prototipo",
      en: "Prototype"
    },
    features: {
      es: [
        "Ilustración pixel art en alto contraste realizada a mano",
        "Gran dificultad y variedad de enemigos y patrones de ataque",
        "Aventura arcade corta y divertida"
      ],
      en: [
        "Handmade high-contrast pixel art style",
        "High difficulty and variety of enemies and attack patterns",
        "Short and fun arcade adventure"
      ]
    },
    itchLink: "https://elxavi.itch.io/serbia",
    gallery: [
      "/public/screenshots/s_Serbia1.png",
      "/public/screenshots/s_Serbia2.png",
      "/public/screenshots/s_Serbia3.png"
    ],
    pressKitUrl: "https://drive.google.com"
  }
];

export const teams: Team[] = [
  {
    id: "calaka-studio",
    name: "Calaka Studio",
    key: "calaka",
    tagline: {
      es: "Misterio y leyendas populares",
      en: "Mystery and popular folklore"
    },
    description: {
      es: "Equipo enfocado en juegos de suspenso y exploración en primera persona. Desarrollamos narrativas de tensión a partir de leyendas regionales y un diseño sonoro diseñado para el aislamiento.",
      en: "Team focused on suspense games and first-person exploration. We build tense stories based on regional myths and audio design crafted to simulate isolation."
    },
    longDescription: {
      es: "Fundado a partir de un proyecto escolar que poco a poco se convirtió en un estudio independiente, Calaka Studio se especializa en la creación de experiencias de suspenso psicológico y terror atmosférico. Nuestro objetivo es crear mundos inmersivos donde la rica mitología de nuestra región sirva como lienzo para juegos de horror y suspenso en primera persona. Nos enorgullece construir atmósferas opresivas, narrativas intrigantes y un diseño de audio binaural que sumerja completamente al jugador en la pesadilla.",
      en: "Founded from a school project that gradually evolved into an independent studio, Calaka Studio specializes in creating psychological suspense and atmospheric horror experiences. Our goal is to craft immersive worlds where the rich mythology of our region serves as a canvas for first-person horror and suspense games. We take pride in building oppressive atmospheres, intriguing narratives, and binaural audio design that fully immerses the player in the nightmare."
    },
    founded: "2024",
    location: "SLP, México",
    gallery: [
      "/public/photos/p_Calaka1.JPG",
      "/public/photos/p_Calaka2.JPG",
      "/public/photos/p_Calaka3.JPG"
    ],
    pressKitUrl: "https://drive.google.com/",
    socialLinks: [
      { type: 'twitter', url: 'https://twitter.com', label: 'Twitter/X' },
      { type: 'youtube', url: 'https://www.youtube.com/watch?v=a6Qyny2IDGM', label: 'YouTube' },
      { type: 'instagram', url: 'https://www.instagram.com/calakastudio/', label: 'Instagram' }
    ],
    gradient: "from-[#1a1a1a] via-[#2d1111] to-[#121212]",
    borderClass: "border-brand-red",
    icon: {
      light: "/public/C_Icon.png",
      dark: "/public/C_IcoW.png"
    },
    members: [
      { name: 'Ethan Cardenas', role: { es: 'Director Creativo & Project Manager', en: 'Creative Director & Project Manager' }, photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300" },
      { name: 'Diego Muñoz', role: { es: 'Programadora de Gameplay', en: 'Gameplay Programmer' }, photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300" },
      { name: 'Jazmin Garcia', role: { es: 'Artista 3D & Diseñadora de Entornos', en: '3D Artist & Environment Designer' }, photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300" },
      { name: 'Javier Flores', role: { es: 'Lider artístico y Escritor Narrativo', en: 'Artistic Leader & Narrative Writer' }, photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300" },
      { name: 'Miguel Sánchez', role: { es: 'Auxiliar Game Producer', en: 'Game Producer Assistant' }, photo: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&q=80&w=300" }
    ]
  },
  {
    id: "plushcraft-studios",
    name: "PlushCraft Studios",
    key: "plush",
    tagline: {
      es: "Experiencias caoticas y cooperativas",
      en: "Chaotic and cooperative experiences"
    },
    description: {
      es: "Estudio dedicado a la creación de experiencias colaborativas para varios jugadores. Diseñamos rompecabezas mecánicos en entornos accesibles para promover la coordinación en equipo.",
      en: "Studio dedicated to creating cooperative multiplayer experiences. We design mechanical puzzles in accessible layouts to promote team coordination."
    },
    longDescription: {
      es: "PlushCraft Studios se especializa en la creación de experiencias de juego cooperativo y caótico. Creemos firmemente que los mejores recuerdos de juego se crean al jugar juntos, por lo que diseñamos rompecabezas y aventuras cooperativas donde las interacciones complejas basadas en la física generan situaciones divertidas e inesperadas para todas las edades. Diseñamos con un estilo artístico vibrante, caricaturesco y altamente amigable.",
      en: "PlushCraft Studios specializes in creating chaotic and cooperative gaming experiences. We firmly believe that the best gaming memories are made when playing together, which is why we design cooperative puzzles and adventures where complex physics-based interactions create fun and unexpected situations for players of all ages. We design with a vibrant, cartoonish, and highly friendly art style."
    },
    founded: "2024",
    location: "SLP, México",
    gallery: [
      "/public/photos/p_Plush1.jpg",
      "/public/photos/p_Plush2.jpeg",
      "/public/photos/p_Plush3.jpg"
    ],
    pressKitUrl: "https://drive.google.com/drive/folders/1cYqUGKaY-QocSff7FZK7zUwjizYmFMDN?usp=sharing",
    socialLinks: [
      { type: 'twitter', url: 'https://x.com/PlushCraftStd', label: 'Twitter/X' },
      { type: 'instagram', url: 'https://www.instagram.com/plushcraftstudios/', label: 'Instagram' }
    ],
    gradient: "from-[#0d2a4a] via-[#1b3b5f] to-[#141d26]",
    borderClass: "border-brand-blue-light",
    icon: {
      light: "/public/P_Icon.png",
      dark: "/public/P_IcoW.png"
    },
    members: [
      { name: 'Fernando Mendoza', role: { es: 'Lider de programación & Project Manager', en: 'Programming Director & Project Manager' }, photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300" },
      { name: 'Ariadna Reyes', role: { es: 'Directora de Arte & Diseño de Niveles', en: 'Art Director & Level Design' }, photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300" },
      { name: 'Brenda Martinez', role: { es: 'Artista 3D', en: '3D Artist' }, photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300" },
      { name: 'Enrique Yunge', role: { es: 'Community Manager', en: 'Community Manager' }, photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300" }
    ]
  }
];
