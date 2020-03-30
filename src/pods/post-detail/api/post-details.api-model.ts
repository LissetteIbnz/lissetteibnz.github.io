import { AM } from '@/services/api';

export interface GetPostResponse {
  repository: {
    issue: AM.Issue;
  };
}
