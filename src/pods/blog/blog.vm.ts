export interface Tag {
  label: string;
  color: string;
}

export interface Post {
  id: number;
  title: string;
  readingTime: string;
  tags: Tag[];
  content: string;
  datePublish: string;
}
