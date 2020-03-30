interface Author {
  url: string;
  avatarUrl: string;
  login: string;
}

export interface Label {
  color: string;
  name: string;
  id: string;
}

export interface Reaction {
  content: string;
  user: Pick<Author, 'login'>;
}

export interface Issue {
  number: number;
  title: string;
  body: string;
  bodyText: string;
  labels?: {
    nodes: Label[];
  };
  author: Author;
  updatedAt: string;
  reactions?: { nodes: Reaction[] };
  url?: string;
}
