import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  instagram?: string;
  screenshot?: string;
  icon: LucideIcon;
  buttonText: string;
}