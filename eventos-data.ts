export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  type: 'meetup' | 'workshop' | 'hackathon' | 'tech-talk';
  status: 'upcoming' | 'past' | 'cancelled';
  participants?: number;
  thumbnail: string;
  gallery?: {
    enabled: boolean;
    images?: {
      url: string;
      alt?: string;
    }[];
  };
  organizer?: string;
  tags: string[];
}

import { getEventThumbnail, getEventGalleryImages, getR2ImageUrl } from './src/utils/r2';

export const eventos: Event[] = [
  {
    id: 'primeiro-meetup-2025',
    title: 'Primeiro Meetup PupunhaCode 2025',
    description: 'Nosso meetup inaugural com apresentações sobre desenvolvimento web moderno e networking com a comunidade local.',
    date: '2025-10-11',
    location: 'Sebrae Amapá',
    type: 'meetup',
    status: 'past',
    participants: 25,
    thumbnail: getEventThumbnail('primeiro-meetup-2025'),
    gallery: {
      enabled: true
    },
    organizer: 'Equipe PupunhaCode',
    tags: ['networking', 'software development', 'community']
  },
  {
    id: 'meetup-side-projects-2026',
    title: 'Pupunha Code Meetup — Side Projects',
    description: 'Meetup dedicado à apresentação de side projects desenvolvidos fora do ambiente formal de trabalho, com foco em aprendizado, experimentação e resolução de problemas reais. As apresentações são curtas e seguidas de momento aberto para perguntas e networking.',
    date: '2026-02-07',
    location: 'Prédio da Proesc',
    type: 'meetup',
    status: 'past',
    participants: 30,
    thumbnail: getR2ImageUrl('meetup-side-projects-2026/cover.jpg'),
    gallery: {
      enabled: true
    },
    organizer: 'PupunhaCode',
    tags: ['side projects', 'learning', 'experimentation']
  },
];

export function getEventById(id: string): Event | undefined {
  return eventos.find(event => event.id === id);
}

export function getEventsByStatus(status: Event['status']): Event[] {
  return eventos.filter(event => event.status === status);
}

export async function getEventWithGallery(eventId: string): Promise<Event | undefined> {
  const event = getEventById(eventId);
  if (!event || !event.gallery?.enabled) {
    return event;
  }

  try {
    const galleryImages = await getEventGalleryImages(eventId);
    return {
      ...event,
      gallery: {
        ...event.gallery,
        images: galleryImages
      }
    };
  } catch (error) {
    console.error(`Error fetching gallery for event ${eventId}:`, error);
    return event;
  }
}