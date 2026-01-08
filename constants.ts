import { Shirt, Camera, Users, Sparkles } from 'lucide-react';
import { ServiceItem, NavItem, PortfolioItem, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Usługi', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'O mnie', href: '#about' },
  { label: 'Kontakt', href: '#contact' },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: '1',
    title: 'Vogue Scandinavia',
    category: 'Edytorial',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1740&auto=format&fit=crop',
    year: '2023'
  },
  {
    id: '2',
    title: 'The Modern Gent',
    category: 'Kampania',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1740&auto=format&fit=crop',
    year: '2023'
  },
  {
    id: '3',
    title: 'Jedwab & Kamień',
    category: 'Lookbook',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1740&auto=format&fit=crop',
    year: '2022'
  },
  {
    id: '4',
    title: 'Miejska Cisza',
    category: 'Stylizacja Osobista',
    image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=1686&auto=format&fit=crop',
    year: '2024'
  },
  {
    id: '5',
    title: 'Biżuteria Lume',
    category: 'Stylizacja Produktu',
    image: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1740&auto=format&fit=crop',
    year: '2024'
  },
  {
    id: '6',
    title: 'Jesienne Przesilenie',
    category: 'Edytorial',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1742&auto=format&fit=crop',
    year: '2023'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Stylizacja Redakcyjna',
    description: 'Konceptualizacja i dobór stylizacji do magazynów, publikacji cyfrowych i projektów artystycznych. Skupienie na wizualnym opowiadaniu historii.',
    icon: Camera
  },
  {
    title: 'Garderoba Osobista',
    description: 'Pełny audyt szafy i kuratela. Budujemy szafę kapsułową, która odzwierciedla Twoje prawdziwe ja i styl życia.',
    icon: Shirt
  },
  {
    title: 'Dyrektor Artystyczny',
    description: 'Nadzór nad całą identyfikacją wizualną kampanii marki. Od tworzenia moodboardów po nadzór na planie zdjęciowym.',
    icon: Sparkles
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Elena ma oko do detali, które jest po prostu niezrównane. Przekształciła naszą kampanię w wizualną poezję.",
    author: "Anna Kamińska",
    role: "Redaktor, Magazyn Zwierciadło"
  },
  {
    quote: "Nigdy nie wiedziałem, że moja garderoba może być tak spokojna, a zarazem pełna siły. Podejście Japandi zmieniło to, jak się ubieram.",
    author: "Marek Dębski",
    role: "Architekt"
  }
];