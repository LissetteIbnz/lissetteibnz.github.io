import { AM } from '@/services/api';
import {
  getReadingTime,
  transformedDate,
  extractAttributesFromMD,
  convertAttributesInObject,
  IsFormattedExpression,
} from '@/common/utils';
import { config } from '@/core/config';
import { Post } from './post-details.vm';

// TODO: Pending to implement reactions and tags found
export const mapIssueAMToPostVM = (issue: AM.Issue): Post =>
  issue && {
    author: issue.author.login,
    authorUrl: issue.author.url,
    avatarUrl: issue.author.avatarUrl,
    content: issue.body,
    attributes: IsFormattedExpression(issue.body, config.beginningMark, config.endingMark)
      ? (convertAttributesInObject(extractAttributesFromMD(issue.body)) as Post['attributes'])
      : ({} as Post['attributes']),
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
