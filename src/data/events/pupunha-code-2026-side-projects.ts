import { ConferenceEvent, EventDay, Session, Speaker } from '@/types';

/**
 * Helper to create ISO datetime string from date and time
 */
const createDateTime = (dateStr: string, timeStr: string): string => {
  const [hours, minutes] = timeStr.split(':').map(Number);
  const date = new Date(dateStr);
  date.setHours(hours, minutes, 0, 0);
  return date.toISOString();
};

const speakers: Speaker[] = [
  {
    id: 'lucas-quintela',
    name: 'Lucas Quintela',
    title: 'Software Development Engineer in Test',
    company: 'LuizaLabs',
    bio: 'Software Development Engineer in Test na LuizaLabs, trabalhando com automação de testes e qualidade de software ao longo de todo o ciclo de desenvolvimento.',
    links: {
      github: 'https://github.com/LucasQuintela23',
      linkedin: 'https://www.linkedin.com/in/lucasquintela23/',
    },
  },
];

// Sessions for Day 1
const day1Date = '2026-02-07';
const day1Sessions: Session[] = [
  {
    id: 'abertura',
    title: 'Abertura',
    description: 'Abertura oficial do meetup Pupunha Code — Side Projects.',
    startTime: createDateTime(day1Date, '14:00'),
    endTime: createDateTime(day1Date, '14:15'),
    speakers: [],
    type: 'opening',
  },
  {
    id: 'ci-cd-quality-gate',
    title: 'Demonstração: Esteira CI/CD com Quality Gate',
    description: 'Demonstração prática de esteira CI/CD com Quality Gate usando Python, Github Actions e SonarCloud.',
    startTime: createDateTime(day1Date, '14:15'),
    endTime: createDateTime(day1Date, '14:45'),
    speakers: ['lucas-quintela'],
    type: 'talk',
  },
  {
    id: 'perguntas-networking',
    title: 'Perguntas e Networking',
    description: 'Momento aberto para perguntas, troca de experiências e networking entre os participantes.',
    startTime: createDateTime(day1Date, '14:45'),
    endTime: createDateTime(day1Date, '15:30'),
    speakers: [],
    type: 'panel',
  },
];

// Convert date string to ISO format (YYYY-MM-DD -> ISO with time 00:00:00)
const day1DateISO = new Date(day1Date + 'T00:00:00').toISOString();

const day1: EventDay = {
  id: 'day-1',
  date: day1DateISO,
  label: 'Dia 1',
  sessions: day1Sessions,
};

export const pupunhaCode2026SideProjects: ConferenceEvent = {
  id: 'pupunha-code-2026-side-projects',
  name: 'Pupunha Code Meetup — Side Projects',
  theme: 'Side projects, aprendizado e experimentação',
  startDate: '2026-02-07',
  endDate: '2026-02-07',
  location: 'Prédio da Proesc',
  description:
    'Meetup dedicado à apresentação de side projects desenvolvidos fora do ambiente formal de trabalho, com foco em aprendizado, experimentação e resolução de problemas reais. As apresentações são curtas e seguidas de momento aberto para perguntas e networking.',
  speakers,
  days: [day1],
  imageUrl: 'https://www.pupunhacode.com/meetup-side-projects-2026/cover.png',
};