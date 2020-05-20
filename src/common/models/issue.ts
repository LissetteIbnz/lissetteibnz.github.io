import type { Author } from './author';

export interface Label {
  color: string;
  id: string;
  name: string;
}

export interface Reaction {
  content: string;
  user: Pick<Author, 'login'>;
}

export interface Issue {
  author: Author;
  body: string;
  bodyHTML: string;
  bodyText: string;
  id: number;
  labels?: { nodes: Label[] };
  number: number;
  reactions?: { nodes: Reaction[] };
  title: string;
  updatedAt: string;
  url?: string;
}
