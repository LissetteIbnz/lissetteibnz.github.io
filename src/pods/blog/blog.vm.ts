export interface Tag {
  label: string;
  color: string;
}

export interface Post {
  content: string;
  datePublish: string;
  id: number;
  readingTime: string;
  tags: Tag[];
  title: string;
}
