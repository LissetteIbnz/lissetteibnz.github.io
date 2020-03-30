import { AM } from '@/services/api';
import { normalizeColor, transformedDate, getValidLabels, getReadingTime } from '@/common/utils';
import { Post, Tag } from './blog.vm';

const mapLabelAMToVM = (label: AM.Label): Tag =>
  label && { label: label.name, color: normalizeColor(label.color) };

export const mapIssueAMToVM = (issue: AM.Issue): Post =>
  issue && {
    id: issue.number,
    title: issue.title,
    datePublish: transformedDate(issue.updatedAt),
    content: issue.bodyText,
    tags: getValidLabels(issue.labels.nodes).map(mapLabelAMToVM),
    readingTime: getReadingTime(issue.body),
  };

export const mapIssueListAMToVM = (issues: AM.Issue[]): Post[] =>
  issues && issues.map(mapIssueAMToVM);
