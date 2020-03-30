import { AM } from '@/services/api';

export interface GetPostsListResponse {
  repository: {
    issues: {
      nodes: AM.Issue[];
    };
  };
}
