import { config } from '@/core/config';
import { literals } from '@/core/i18n';
import * as AM from '@/common/models';
import {
  normalizeColor,
  transformedDate,
  getValidLabels,
  getReadingTime,
  isFormattedExpression,
  convertAttributesInObject,
  extractAttributesFromMD,
} from '@/common/utils';
import { Post, Tag } from './blog.vm';

const mapLabelAMToVM = (label: AM.Label): Tag =>
  label && { label: label.name, color: normalizeColor(label.color) };

// TODO: Reactions, labels....
export const mapIssueAMToVM = (issue: AM.Issue): Post =>
  issue && {
    id: issue.number,
    author: {
      name: issue.author.login,
      url: issue.author.url,
      avatarUrl: issue.author.avatarUrl,
    },
    brief: issue.bodyText,
    content: issue.body,
    attributes: isFormattedExpression(issue.body, config.beginningMark, config.endingMark)
      ? (convertAttributesInObject(extractAttributesFromMD(issue.body)) as Post['attributes'])
      : undefined,
    datePublish: transformedDate(issue.updatedAt),
    readingTime: `${getReadingTime(issue.body)} ${literals.post.timeToRead}`,
    title: issue.title,
    urlGitHub: issue.url,
    reactions: [],
    tags: getValidLabels(issue.labels.nodes).map(mapLabelAMToVM),
  };

export const mapIssueListAMToVM = (issues: AM.Issue[]): Post[] =>
  issues && issues.map(mapIssueAMToVM);
