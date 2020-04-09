export interface UrlParams {
  title: string;
  issueNumber: string;
}

interface Tag {
  label: string;
  color: string;
}

interface Reaction {
  content: string;
  user: string;
}

interface Attributes {
  description: string;
  imagePath?: string;
  imageDescription?: string;
}

export interface Post {
  author: string;
  authorUrl: string;
  avatarUrl: string;
  content: string;
  attributes?: Attributes;
  datePublish: string;
  reactions: Reaction[];
  readingTime: string;
  tags: Tag[];
  title: string;
  urlGitHub: string;
}
