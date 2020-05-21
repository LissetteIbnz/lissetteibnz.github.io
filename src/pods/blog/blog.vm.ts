export interface Tag {
  label: string;
  color: string;
}

// export interface Post {
//   content: string;
//   datePublish: string;
//   id: number;
//   readingTime: string;
//   tags: Tag[];
//   title: string;
// }

interface Reaction {
  content: string;
  user: string;
}

interface Attributes {
  description: string;
  imagePath?: string;
  imageDescription?: string;
}

interface Author {
  name: string;
  url: string;
  avatarUrl: string;
}

export interface Post {
  id: number;
  author: Author;
  brief: string;
  content: string;
  attributes?: Attributes;
  datePublish: string;
  reactions: Reaction[];
  readingTime: string;
  tags: Tag[];
  title: string;
  urlGitHub: string;
}
