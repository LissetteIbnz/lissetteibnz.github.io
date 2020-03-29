import { Label } from './api';
import readingTime from 'reading-time';

export const getValidLabels = (labels: Label[]): Label[] =>
  labels && labels.filter(label => label.name !== 'blog');

export const getReadingTime = (content: string): string =>
  content.length && `${Math.round(readingTime(content).minutes)} min read`;

export const normalizeColor = (color: string): string =>
  color.length && color.startsWith('#') ? color : `#${color}`;

enum months {
  'January',
  'February',
  'March',
  'April',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
}

export const transformedDate = (expression: string): string => {
  const date = new Date(expression);
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};
