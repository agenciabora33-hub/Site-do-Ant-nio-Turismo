import { TourItem, RouteItem, ReviewItem } from "./types";

// Static premium images generated for the business
export const IMAGES = {
  hero: "/src/assets/images/hero_serra_gaucha_1779401783409.png",
  mariaFumaca: "/src/assets/images/maria_fumaca_tour_1779401800988.png",
  transferCar: "/src/assets/images/executive_transfer_car_1779401821221.png",
  logo: "/src/assets/images/brand_logo_1779403377598.png",
};

// Exact NAP values (Name, Address, Phone)
export const NAP_DATA = {
  name: "Antonio Turismo | City Tour, Passeios e Transfer em Gramado e Canela",
  shortName: "Antonio Turismo",
  phone: "(54) 98154-4043",
  phoneRaw: "+5554981544043",
  address: {
    street: "Rua Santa Maria, 16, Sala 02",
    city: "Gramado",
    state: "RS",
    zip: "95670-792",
    country: "Brasil"
  },
  hours: "Segunda a Domingo, das 07:00 às 21:00",
  hoursSchema: ["Mo-Su 07:00-21:00"],
  coverage: [
    "Gramado (RS)",
    "Canela (RS)",
    "Bento Gonçalves (RS)",
    "Nova Petrópolis (RS)",
    "Vale dos Vinhedos"
  ],
  coordinates: {
    latitude: -29.3807,
    longitude: -50.8719
  }
};

export const TOURS_DATA: TourItem[] = [
  {
    id: "city-tour",
    title: "City Tour Privativo",
    seoKeyword: "City tour privativo em Gramado e Canela",
    tagline: "Exclusividade e sofisticação no coração da Serra Gaúcha",
    description: "Um dia sob medida desenhado para sua família. Esqueça ônibus lotados e esperas. Nosso tour permite explorar Gramado e Canela no seu ritmo, acompanhados por guia nativo veterano. Paradas opcionais nos melhores pontos turísticos, segredos ecológicos e bistrôs artesanais locais.",
    duration: "6 a 8 horas (Personalizado)",
    image: IMAGES.hero,
    highlights: ["Lago Negro e Miniautodrómo", "Catedral de Pedra de Canela", "Paradas em fábricas de chocolate artesanal", "Pórtico de Gramado", "Segredos da arquitetura bávara regional"]
  },
  {
    id: "vale-vinhedos",
    title: "Tour pelas Vinícolas Premium",
    seoKeyword: "Tour pelas vinícolas",
    tagline: "Vinhos icônicos e gastronomia italiana no Vale dos Vinhedos",
    description: "Desfrute da verdadeira essência do vinho nacional. Elaboramos o roteiro com visitas guiadas às vinícolas mais consagradas e boutiques de autor no coração de Bento Gonçalves, com almoço típico em cantina italiana com massas artesanais.",
    duration: "8 a 10 horas",
    image: IMAGES.transferCar,
    highlights: ["Visita e degustação exclusiva", "Almoço harmonizado típico italiano", "Paisagem do Vale dos Vinhedos", "Varejo de queijos e fiambres artesanais", "Acesso aos vinhos de guarda limitados"]
  },
  {
    id: "maria-fumaca",
    title: "Tour Maria Fumaça Completo",
    seoKeyword: "Maria Fumaça Bento Gonçalves",
    tagline: "A autêntica viagem no tempo com música, vinho e alegria",
    description: "Experimente um dos episódios mais ricos da colonização italiana na região. O passeio inclui o bilhete da lendária Maria Fumaça Bento Gonçalves, repleto de apresentações musicais, tarantela, degustações de vinhos e suco de uva pura no vagão.",
    duration: "Dia Inteiro (Aprox. 10 horas)",
    image: IMAGES.mariaFumaca,
    highlights: ["Bilhete da Maria Fumaça (Bento - Carlos Barbosa)", "Ingresso para o Epopeia Italiana", "Degustações de espumantes e queijos", "Parada em malharia tradicional", "Transporte executivo privativo ida e volta"]
  }
];

export const TRANSFER_DATA: RouteItem[] = [
  {
    id: "transfer-poa",
    origin: "Porto Alegre (POA)",
    destinations: ["Gramado", "Canela", "Bento Gonçalves"],
    description: "Recepção VIP no portão de desembarque com placa nominal, assistência com as bagagens e transporte direto em veículo privativo blindado ao clima, com águas e carregadores.",
    duration: "Aprox. 2 horas",
    seoKeyword: "Transfer Aeroporto de Porto Alegre (POA) e Caxias do Sul (CXJ)"
  },
  {
    id: "transfer-cxj",
    origin: "Caxias do Sul (CXJ)",
    destinations: ["Gramado", "Canela", "Vale dos Vinhedos"],
    description: "A melhor e mais curta alternativa para chegar à serra. Nosso motorista estará aguardando no desembarque do aeroporto de Caxias para subir a serra de forma sutil e rápida.",
    duration: "Aprox. 1 hora e 10 minutos",
    seoKeyword: "Transfer Aeroporto de Porto Alegre (POA) e Caxias do Sul (CXJ)"
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Renato Silveira (São Paulo - SP)",
    rating: 5,
    date: "Abril de 2026",
    text: "Serviço espetacular! O transfer de Porto Alegre até Gramado foi super tranquilo. Carro limpíssimo, cheiroso, ar climatizado perfeito. O Antonio nos indicou restaurantes fantásticos e pontos turísticos escondidos da multidão. Recomendo de olhos fechados!",
    source: "Google Reviews"
  },
  {
    id: "rev-2",
    author: "Mariana Costa (Rio de Janeiro - RJ)",
    rating: 5,
    date: "Maio de 2026",
    text: "O Tour Maria Fumaça e Vale dos Vinhedos foi o ponto alto da nossa viagem. Toda a assessoria privativa do Antonio fez a diferença. Viajar com crianças exige conforto especial e a frota própria dele nos entregou exatamente isso. Nota 10!",
    source: "Google Reviews"
  },
  {
    id: "rev-3",
    author: "Felipe Albuquerque (Belo Horizonte - MG)",
    rating: 5,
    date: "Maio de 2026",
    text: "Fizemos o City Tour Privativo em Gramado e Canela. Super pontual, conhecimento histórico impressionante, o Antonio é nativo e sabe tudo da região. O carro da frota própria é completíssimo e muito confortável. Vale cada centavo pela segurança.",
    source: "Google Reviews"
  },
  {
    id: "rev-4",
    author: "Juliana Mendes (Curitiba - PR)",
    rating: 5,
    date: "Março de 2026",
    text: "O melhor transfer de Porto Alegre que já contratei. Placa nominal no aeroporto facilitou demais. Comodidade absoluta para subir a serra gaúcha. Conversamos muito, Antonio é extremamente profissional e confiável.",
    source: "Google Reviews"
  }
];
