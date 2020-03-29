import { IssueNode, Label } from './api';
import { getValidLabels, getReadingTime, normalizeColor, transformedDate } from './blog.business';
import { Post, Tag } from './blog.vm';

const mapLabelAMToVM = (label: Label): Tag =>
  label && { label: label.name, color: normalizeColor(label.color) };

export const mapIssueAMToVM = (issue: IssueNode): Post =>
  issue && {
    id: issue.number,
    title: issue.title,
    datePublish: transformedDate(issue.updatedAt),
    content: issue.body,
    tags: getValidLabels(issue.labels.nodes).map(mapLabelAMToVM),
    readingTime: getReadingTime(issue.body),
  };

export const mapIssueListAMToVM = (issues: IssueNode[]): Post[] =>
  issues && issues.map(mapIssueAMToVM);
