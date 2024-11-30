export interface Event {
    id: string;
    title: string;
    description: string;
    shortDescription: string;
    date: string;
    time: string;
    type: 'Workshop' | 'Seminar' | 'Webinar' | 'Conference';
    category: string;
    venue?: string;
    speakers: string[];
    isRegistered: boolean;
  }