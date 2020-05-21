import * as AM from '@/common/models';

export const FILTERS = {
  Labels: 3,
  Reactions: 50,
  IssueState: 'OPEN',
} as const;

export interface GetIssuesResponse {
  repository: {
    issues: {
      nodes: AM.Issue[];
    };
  };
}

export interface GetIssuesParams {
  offSet: number;
}

export interface GetIssueByNumber {
  repository: {
    issue: AM.Issue;
  };
}

export interface GetIssueByNumberParams {
  issueNumber: number;
}
