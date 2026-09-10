export type Language = 'es' | 'en';
export type Theme = 'light' | 'dark';
export type StudioKey = 'calaka' | 'plush';

// Abstracción para limpiar el código y no repetir la misma estructura
export interface LocalizedString {
  es: string;
  en: string;
}

export interface Game {
  id: string;
  title: string;
  studio: string;
  studioKey: StudioKey;
  shortDescription: LocalizedString;
  longDescription: LocalizedString;
  coverImage: string;
  tag: LocalizedString;
  tagColor: string;
  releaseYear: string;
  status: LocalizedString;
  features: LocalizedString; 
  featureList: {
    es: string[];
    en: string[];
  };
  steamLink?: string;
  epicLink?: string;
  discordLink?: string;
  gallery?: string[];
  pressKitUrl?: string;
}

export interface TeamMember {
  name: string;
  role: LocalizedString;
  photo?: string;
}

export interface SocialLink {
  type: 'twitter' | 'youtube' | 'discord' | 'merch' | 'github' | 'portfolio';
  url: string;
  label: string;
}

export interface Team {
  id: string;
  name: string;
  key: StudioKey;
  tagline: LocalizedString;
  description: LocalizedString;
  gradient: string;
  borderClass: string;
  icon: {
    light: string;
    dark: string;
  };
  members?: TeamMember[];
  founded?: string;
  location?: string;
  longDescription?: LocalizedString;
  gallery?: string[];
  pressKitUrl?: string;
  socialLinks?: SocialLink[];
}

export interface Translations {
  nav_about: string;
  nav_games: string;
  nav_team: string;
  nav_community: string;
  about_title: string;
  about_subtitle: string;
  about_p1: string;
  about_p2: string;
  about_accent_title: string;
  about_accent_body: string;
  games_title: string;
  games_subtitle: string;
  games_all_filter: string;
  team_title: string;
  team_subtitle: string;
  footer_rights: string;
  hero_new_release: string;
  hero_coop_fun: string;
  game_details: string;
  wishlist_btn: string;
  wishlist_added: string;
  explore_btn: string;
  quiz_title: string;
  quiz_subtitle: string;
  quiz_q1: string;
  quiz_q1_a1: string;
  quiz_q1_a2: string;
  quiz_q2: string;
  quiz_q2_a1: string;
  quiz_q2_a2: string;
  quiz_result_calaka: string;
  quiz_result_plush: string;
  quiz_result_btn: string;
  quiz_reset_btn: string;
  about_badge1_title: string;
  about_badge1_body: string;
  about_badge2_title: string;
  about_badge2_body: string;
}