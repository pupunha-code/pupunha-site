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
    id: 'lorena-montes',
    name: 'Lorena Montes',
    title: 'Engineering Manager',
    company: 'ArcoTech',
    bio: 'Engineering Manager com foco em desenvolvimento de pessoas e crescimento de carreira em tecnologia.',
    links: {
      github: 'https://github.com/lorenalgm',
      linkedin: 'https://www.linkedin.com/in/lorenagmontes/',
    },
  },
  {
    id: 'caio-quintas',
    name: 'Caio Quintas',
    title: 'Tech Lead',
    company: 'Turing / Zappis',
    bio: 'Tech Lead e fundador, com experiência em arquitetura de software e crescimento de produtos pós-MVP.',
    links: {
      github: 'https://github.com/Quinntas',
      linkedin: 'https://www.linkedin.com/in/caio-quintas/',
    },
  },
  {
    id: 'luma-goes',
    name: 'Luma Góes',
    title: 'Software Engineer',
    company: 'ArcoTech / Thetaharpia',
    bio: 'Software Engineer e fundadora, com foco em arquitetura orientada à necessidade e usabilidade.',
    links: {
      github: 'https://github.com/lumamontes',
      linkedin: 'https://www.linkedin.com/in/lumamontes/',
    },
  },
  {
    id: 'pedro-viana',
    name: 'Pedro Viana',
    title: 'Software Engineer',
    company: 'Thetaharpia',
    bio: 'Engenheiro de software com foco em arquitetura e infraestrutura orientadas a problemas reais.',
    links: {
      github: 'https://github.com/pedrovian4',
      linkedin: 'https://www.linkedin.com/in/pedro-viana/',
    },
  },
  {
    id: 'mateus-bezerra',
    name: 'Mateus Bezerra',
    title: 'Frontend Engineer',
    company: 'Builders (EUA)',
  },
  {
    id: 'mateus-gurgel',
    name: 'Mateus Gurgel',
    title: 'Software Engineer',
    bio: 'Engenheiro de software com foco em LLMs, sistemas agênticos e machine learning aplicado.',
    links: {
      github: 'https://github.com/mateusgurgel',
    },
  },
];

// Sessions for Day 1
const day1Date = '2025-10-01';
const day1Sessions: Session[] = [
  {
    id: 'credenciamento',
    title: 'Credenciamento',
    description: 'Recepção e credenciamento dos participantes.',
    startTime: createDateTime(day1Date, '14:00'),
    endTime: createDateTime(day1Date, '14:30'),
    speakers: [],
    type: 'opening',
  },
  {
    id: 'abertura',
    title: 'Abertura',
    description: 'Abertura oficial do meetup Pupunha Code.',
    startTime: createDateTime(day1Date, '14:30'),
    endTime: createDateTime(day1Date, '14:45'),
    speakers: [],
    type: 'opening',
  },
  {
    id: 'roda-carreira-gringa',
    title: 'Roda de conversa: Carreira como dev na gringa',
    description:
      'Bate-papo sobre carreira internacional, cultura de trabalho, contratos e posicionamento global.',
    startTime: createDateTime(day1Date, '14:45'),
    endTime: createDateTime(day1Date, '15:15'),
    speakers: ['caio-quintas', 'mateus-bezerra', 'pedro-viana'],
    type: 'panel',
  },
  {
    id: 'licoes-software',
    title: 'Lições de software: arquitetura e infraestrutura orientadas à necessidade',
    description: 'Como decisões de arquitetura devem partir do problema real e da usabilidade.',
    startTime: createDateTime(day1Date, '15:15'),
    endTime: createDateTime(day1Date, '15:45'),
    speakers: ['luma-goes', 'pedro-viana'],
    type: 'talk',
  },
  {
    id: 'intervalo',
    title: 'Intervalo',
    description: 'Pausa para networking e café.',
    startTime: createDateTime(day1Date, '15:45'),
    endTime: createDateTime(day1Date, '16:00'),
    speakers: [],
    type: 'break',
  },
  {
    id: 'brag-document',
    title: 'Criando um brag document: a importância na visibilidade da sua carreira em tech',
    description:
      'Como documentar conquistas, aprendizados e impacto para crescimento profissional.',
    startTime: createDateTime(day1Date, '16:00'),
    endTime: createDateTime(day1Date, '16:30'),
    speakers: ['lorena-montes'],
    type: 'talk',
  },
  {
    id: 'pos-mvp',
    title: 'Pós-MVP: quando a gambiarra deixa de ser aceitável',
    description: 'Desafios de escalar software após o MVP e evitar caos técnico.',
    startTime: createDateTime(day1Date, '16:30'),
    endTime: createDateTime(day1Date, '17:00'),
    speakers: ['caio-quintas'],
    type: 'talk',
  },
  {
    id: 'sistemas-agenticos',
    title: 'Sistemas Agênticos e Machine Learning: o que são e como aplicar?',
    description: 'Introdução a agentes baseados em LLMs e machine learning clássico aplicado.',
    startTime: createDateTime(day1Date, '17:00'),
    endTime: createDateTime(day1Date, '17:30'),
    speakers: ['mateus-gurgel'],
    type: 'talk',
  },
  {
    id: 'encerramento',
    title: 'Encerramento',
    description: 'Encerramento oficial do evento.',
    startTime: createDateTime(day1Date, '17:30'),
    endTime: createDateTime(day1Date, '17:45'),
    speakers: [],
    type: 'closing',
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

export const pupunhaCode2025: ConferenceEvent = {
  id: 'pupunha-code-2025',
  name: 'Pupunha Code Meetup',
  theme: 'Tecnologia, carreira e software na prática',
  startDate: '2025-10-01',
  endDate: '2025-10-01',
  location: 'Amapá, Brasil',
  description:
    'Meetup do Pupunha Code focado em carreira, arquitetura de software, pós-MVP e novas tecnologias.',
  speakers,
  days: [day1],
  imageUrl:
    'https://www.pupunhacode.com/primeiro-meetup-2025/gallery/WhatsApp%20Image%202025-10-11%20at%2018.37.24%20(1).jpeg',
  gallery: [
    'https://www.pupunhacode.com/primeiro-meetup-2025/gallery/WhatsApp%20Image%202025-10-11%20at%2018.37.24%20(1).jpeg',
    'https://www.pupunhacode.com/primeiro-meetup-2025/gallery/WhatsApp%20Image%202025-10-11%20at%2018.37.24%20(2).jpeg',
    'https://www.pupunhacode.com/primeiro-meetup-2025/gallery/WhatsApp%20Image%202025-10-11%20at%2018.37.24%20(3).jpeg',
    'https://www.pupunhacode.com/primeiro-meetup-2025/gallery/WhatsApp%20Image%202025-10-11%20at%2018.37.24%20(4).jpeg',
    'https://www.pupunhacode.com/primeiro-meetup-2025/gallery/WhatsApp%20Image%202025-10-11%20at%2018.37.24%20(5).jpeg'
  ],
};