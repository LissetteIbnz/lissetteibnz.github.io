import { AM } from '@/services/api';
import {
  getReadingTime,
  transformedDate,
  extractAttributesFromMD,
  convertAttributesInObject,
  isFormattedExpression,
} from '@/common/utils';
import { config } from '@/core/config';
import { Post } from './post-details.vm';

// TODO: Pending to implement reactions and tags found
export const mapIssueAMToPostVM = (issue: AM.Issue): Post =>
  issue && {
    author: {
      name: issue.author.login,
      url: issue.author.url,
      avatarUrl: issue.author.avatarUrl,
    },
    content: issue.body,
    attributes: isFormattedExpression(issue.body, config.beginningMark, config.endingMark)
      ? (convertAttributesInObject(extractAttributesFromMD(issue.body)) as Post['attributes'])
      : undefined,
    datePublish: transformedDate(issue.updatedAt),
    readingTime: getReadingTime(issue.body),
    title: issue.title,
    urlGitHub: issue.url,
    reactions: [],
    tags: [],
  };

export const createEmptyPost = (): Post => ({
  author: {
    name: '',
    url: '',
    avatarUrl: '',
  },
  content: '',
  datePublish: '',
  reactions: [],
  readingTime: '',
  tags: [],
  title: '',
  urlGitHub: '',
});
