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

export interface Post {
  author: string;
  authorUrl: string;
  avatarUrl: string;
  content: string;
  datePublish: string;
  reactions: Reaction[];
  readingTime: string;
  tags: Tag[];
  title: string;
  urlGitHub: string;
}
