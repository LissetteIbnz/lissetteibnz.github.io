import React from 'react';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { useComponentIsMounted, useNotFound } from '@/common/hooks';
import { Issue, createEmptyIssue } from '@/common/models';
import {
  GetIssuesResponse,
  GetIssuesParams,
  GetIssueByNumber,
  GetIssueByNumberParams,
} from './issue.model';
import { GET_LAST_ISSUES, GET_ISSUE_BY_NUMBER } from './issue.api';

// TODO: Implementar control de errores mediante toast y contexto

export const useFetchLastIssues = (count = 3): { issues: Issue[]; loading: boolean } => {
  const isMounted = useComponentIsMounted();
  const notFound = useNotFound();
  const [issues, setIssues] = React.useState<Issue[]>([]);
  const { loading, error, data } = useQuery<GetIssuesResponse, GetIssuesParams>(GET_LAST_ISSUES, {
    variables: { offSet: count },
  });

  React.useEffect(() => {
    if (isMounted && !loading) {
      Boolean(data) && setIssues(data?.repository?.issues?.nodes);
    }
  }, [loading, data, data?.repository?.issues?.nodes, isMounted]);

  React.useEffect(() => {
    if (error) {
      console.error(error);
      notFound();
    }
  }, [error, notFound]);

  return {
    loading,
    issues,
  };
};

export const useFetchIssueByNumber = (issueNumber: number): { issue: Issue; loading: boolean } => {
  const isMounted = useComponentIsMounted();
  const notFound = useNotFound();
  const [issue, setIssue] = React.useState(createEmptyIssue());
  // TODO: I've to fetch from cache
  const { issues, loading: loadingFetchIssues } = useFetchLastIssues();
  const [
    getIssueByNumber,
    { called, loading: loadingFetchIssueByNumber, error, data: issueByNumber },
  ] = useLazyQuery<GetIssueByNumber, GetIssueByNumberParams>(GET_ISSUE_BY_NUMBER, {
    variables: {
      issueNumber,
    },
  });

  React.useEffect(() => {
    if (isMounted && !loadingFetchIssues && issues.length > 0) {
      const cachePost = issues.find(post => post.number === Number(issueNumber));

      if (Boolean(cachePost)) {
        setIssue(cachePost);
      } else {
        getIssueByNumber();
        !loadingFetchIssueByNumber && setIssue(issueByNumber?.repository?.issue);
      }
    }
  }, [
    isMounted,
    loadingFetchIssues,
    issues,
    loadingFetchIssueByNumber,
    issueNumber,
    issueByNumber?.repository?.issue,
    getIssueByNumber,
  ]);

  React.useEffect(() => {
    if (error) {
      console.error(error);
      notFound();
    }
  }, [error, notFound]);

  const loading = React.useMemo(() => (called && loadingFetchIssueByNumber) || loadingFetchIssues, [
    called,
    loadingFetchIssueByNumber,
    loadingFetchIssues,
  ]);

  return {
    issue,
    loading,
  };
};
