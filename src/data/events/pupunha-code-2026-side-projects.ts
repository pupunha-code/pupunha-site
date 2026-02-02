import type { ConferenceEvent, EventDay, Session, Speaker } from "../../types";

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
  {
    id: 'luma-montes',
    name: 'Luma Montes',
    title: 'Desenvolvedora Fullstack',
    company: 'Arcotech',
    bio: 'Luma é de Macapá e atua como desenvolvedora fullstack no setor de tecnologia educacional, trabalhando com frontend, backend e mobile.',
    links: {
      github: 'https://github.com/lumamontes',
      linkedin: 'https://www.linkedin.com/in/lumamontes/',
    },
  },
  {
    id: 'johnathan-rocha',
    name: 'Johnathan Rocha',
    title: 'Desenvolvedor Flutter Sênior',
    company: 'UNIFAP',
    bio: 'John atua como Desenvolvedor Flutter Sênior e é estudante de Ciência da Computação na UNIFAP, trabalhando no desenvolvimento de aplicações móveis escaláveis utilizando Flutter.',
    links: {
      linkedin: 'https://www.linkedin.com/in/johnathan-rocha/',
    },
  },
  {
    id: 'kayky-azevedo',
    name: 'Kayky Azevedo',
    title: 'Engenheiro DevOps',
    company: '',
    bio: 'Kayky atua como Engenheiro DevOps, com ampla experiência em infraestrutura, automação e sistemas distribuídos.',
    links: {
      linkedin: 'https://www.linkedin.com/in/kayky-azevedo/',
    },
  },
  {
    id: 'alessandro-rodrigues',
    name: 'Alessandro Rodrigues',
    title: 'Desenvolvedor de Software',
    company: 'Squadfy',
    bio: 'Alessandro atua como Desenvolvedor de Software na Squadfy e é formado em Sistemas Para Internet na Faculdade META.',
    links: {
      linkedin: 'https://www.linkedin.com/in/alessandrordgs/',
    },
  },
  {
    id: 'lorena-montes',
    name: 'Lorena Montes',
    title: 'Engineering Manager',
    company: 'Arco Educação',
    bio: 'Lorena é de Macapá, formada em Ciências da Computação pela UNIFAP e atua como Engineering Manager na Arco Educação.',
    links: {
      github: 'https://github.com/lorenalgm',
      linkedin: 'https://www.linkedin.com/in/lorenagmontes/',
    },
  },
];

// Sessions for Day 1
const day1Date = '2026-02-07';
const day1Sessions: Session[] = [
  {
    id: 'credenciamento',
    title: 'Credenciamento',
    description: 'Check-in e credenciamento dos participantes.',
    startTime: createDateTime(day1Date, '14:00'),
    endTime: createDateTime(day1Date, '14:30'),
    speakers: [],
    type: 'break',
  },
  {
    id: 'abertura',
    title: 'Abertura',
    description: 'Abertura oficial do meetup Pupunha Code — Side Projects.',
    startTime: createDateTime(day1Date, '14:30'),
    endTime: createDateTime(day1Date, '15:00'),
    speakers: [],
    type: 'opening',
  },
  {
    id: 'ci-cd-quality-gate',
    title: 'CI/CD & Quality Gate (Python + Github Actions + SonarCloud)',
    description: 'Demonstração prática de esteira CI/CD com Quality Gate usando Python, Github Actions e SonarCloud.',
    startTime: createDateTime(day1Date, '15:00'),
    endTime: createDateTime(day1Date, '15:30'),
    speakers: ['lucas-quintela'],
    type: 'talk',
  },
  {
    id: 'amapa-points',
    title: 'Amapá Points — Turismo e gamificação (Flutter)',
    description: 'Apresentação do Amapá Points, projeto de turismo e gamificação desenvolvido com Flutter.',
    startTime: createDateTime(day1Date, '15:30'),
    endTime: createDateTime(day1Date, '16:00'),
    speakers: ['johnathan-rocha'],
    type: 'talk',
  },
  {
    id: 'ssh-manager',
    title: 'Tunneler — SSH Manager nativo (Go + React)',
    description: 'Apresentação do Tunneler, um SSH Manager nativo, e discussão sobre criação de aplicações desktop modernas utilizando Go e React.',
    startTime: createDateTime(day1Date, '16:00'),
    endTime: createDateTime(day1Date, '16:30'),
    speakers: ['kayky-azevedo'],
    type: 'talk',
  },
  {
    id: 'pupunha-conf',
    title: 'PupunhaConf: App de eventos (React + Expo + Zustand)',
    description: 'Apresentação do PupunhaConf, um aplicativo de eventos desenvolvido com React, Expo e Zustand.',
    startTime: createDateTime(day1Date, '16:30'),
    endTime: createDateTime(day1Date, '17:00'),
    speakers: ['luma-montes'],
    type: 'talk',
  },
  {
    id: 'marco-zero',
    title: 'Marco Zero — Plataforma offline para pesquisas de campo',
    description: 'Apresentação do Marco Zero, plataforma offline para coleta e gestão de pesquisas de campo.',
    startTime: createDateTime(day1Date, '17:00'),
    endTime: createDateTime(day1Date, '17:30'),
    speakers: ['alessandro-rodrigues'],
    type: 'talk',
  },
  {
    id: 'roadmap-carreira',
    title: 'Plataforma web de roadmap de carreira (Streamlit + Python)',
    description: 'Apresentação da plataforma web de roadmap de carreira desenvolvida com Streamlit e Python.',
    startTime: createDateTime(day1Date, '17:30'),
    endTime: createDateTime(day1Date, '18:00'),
    speakers: ['lorena-montes'],
    type: 'talk',
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