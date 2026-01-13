export interface Character {
  id: string;
  name: string;
  role: string;
  species: string;
  mbti: string;
  height: string;
  build: string;
  description: string;
  quote?: string;
  color?: string;
}

export interface WorldSectionData {
  title: string;
  originalName: string;
  description: string;
  details: string[];
  imageUrl?: string;
}

export interface Phase {
  title: string;
  description: string;
  quote: string;
}