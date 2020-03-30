import { AM } from '@/services/api';
import { Post } from './post-details.vm';
import { getReadingTime } from '@/common/utils';

// TODO: Pending to implement reactions and tags found
export const mapIssueAMToPostVM = (issue: AM.Issue): Post =>
  issue && {
    author: issue.author.login,
    avatarUrl: issue.author.avatarUrl,
    content: issue.body,
    datePublish: issue.updatedAt,
    readingTime: getReadingTime(issue.body),
    title: issue.title,
    urlGitHub: issue.url,
    reactions: [],
    tags: [],
  };
