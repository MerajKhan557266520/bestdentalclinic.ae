import { ReactNode } from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  price?: string;
  icon?: ReactNode;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface BlogPost {
  id: number;
  title: string;
  summary: string;
  date: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
}
