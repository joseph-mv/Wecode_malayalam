export interface Resource {
    id: string;
    title: string;
    description: string;
    type: 'tutorial' | 'challenge' | 'interview' | 'video' | 'tool';
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    tags: string[];
    author: string;
    dateAdded: string;
  }
  
  export interface Contributor {
    id: string;
    name: string;
    avatar: string;
    contributions: number;
  }