import React from 'react';

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  year: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  priceStart?: string;
  icon: React.ElementType;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}