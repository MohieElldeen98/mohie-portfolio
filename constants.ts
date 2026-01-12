import { Wallet, Clock, Compass } from 'lucide-react';
import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'finance',
    title: 'My Finance',
    description: 'مساعد مالي شخصي مصمم خصيصاً لمتخصصي الرعاية الصحية لتنظيم المداخيل والمصروفات بدقة وسهولة.',
    buttonText: 'فتح المشروع',
    link: 'https://drmohieelldeen.online/finance',
    screenshot: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    icon: Wallet
  },
  {
    id: 'delay-tracker',
    title: 'Delay Tracker',
    description: 'نظام ذكي لتتبع الحضور والتأخير اليومي، يساعد في إدارة وقت العمل بالمستشفى وتحسين الانضباط الإداري.',
    buttonText: 'فتح المشروع',
    link: 'https://drmohieelldeen.online/delay-tracker',
    screenshot: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1000',
    icon: Clock
  },
  {
    id: 'bosla',
    title: 'Bosla | بوصلة',
    description: 'منصة مجتمعية وإعلامية تهدف لتوجيه وإرشاد الطلاب والخريجين، وتقديم محتوى هادف يساعد في بناء الوعي ورسم المسار المهني.',
    buttonText: 'فيسبوك',
    link: 'https://www.facebook.com/boslaa',
    instagram: 'https://www.instagram.com/boslaa26/',
    screenshot: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1000',
    icon: Compass
  }
];