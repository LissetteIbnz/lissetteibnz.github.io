export interface Label {
  color: string;
  name: string;
  id: string;
}

interface Author {
  url: string;
  avatarUrl: string;
  login: string;
}

export interface IssueNode {
  number: number;
  title: string;
  body: string;
  labels: {
    nodes: Label[];
  };
  author: Author;
  updatedAt: string;
}

export interface GetPostResponse {
  repository: {
    issues: {
      nodes: IssueNode[];
    };
  };
}
