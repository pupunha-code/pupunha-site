export interface Speaker {
  id: string;
  name: string;
  title: string;
  company?: string;
  bio?: string;
  links?: {
    github?: string;
    linkedin?: string;
    website?: string;
  };
}

export interface Session {
  id: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  speakers: string[];
  type: 'opening' | 'closing' | 'talk' | 'panel' | 'break' | 'workshop';
}

export interface EventDay {
  id: string;
  date: string;
  label: string;
  sessions: Session[];
}

export interface ConferenceEvent {
  id: string;
  name: string;
  theme: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  speakers: Speaker[];
  days: EventDay[];
  imageUrl?: string;
  gallery?: string[];
}