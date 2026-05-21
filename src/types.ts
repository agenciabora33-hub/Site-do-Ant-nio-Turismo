export interface TourItem {
  id: string;
  title: string;
  seoKeyword: string;
  tagline: string;
  description: string;
  duration: string;
  image: string;
  highlights: string[];
}

export interface RouteItem {
  id: string;
  origin: string;
  destinations: string[];
  description: string;
  duration: string;
  seoKeyword: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  source: "Google Reviews";
}

export interface BookingFormData {
  nome: string;
  dataIda: string;
  dataVolta: string;
  passageiros: number;
  servico: string;
  observacoes?: string;
}
