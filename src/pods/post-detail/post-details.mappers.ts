import { AM } from '@/services/api';
import { Post } from './post-details.vm';
import { getReadingTime, transformedDate } from '@/common/utils';

// TODO: Pending to implement reactions and tags found
export const mapIssueAMToPostVM = (issue: AM.Issue): Post =>
  issue && {
    author: issue.author.login,
    authorUrl: issue.author.url,
    avatarUrl: issue.author.avatarUrl,
    content: issue.body,
    datePublish: transformedDate(issue.updatedAt),
    readingTime: getReadingTime(issue.body),
    title: issue.title,
    urlGitHub: issue.url,
    reactions: [],
    tags: [],
  };

export const createEmptyPost = (): Post => ({
  author: '',
  authorUrl: '',
  avatarUrl: '',
  content: '',
  datePublish: '',
  reactions: [],
  readingTime: '',
  tags: [],
  title: '',
  urlGitHub: '',
});
