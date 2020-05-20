import type { Issue } from './issue';

export interface Repository {
  issues: {
    nodes: Issue[];
  };
}
