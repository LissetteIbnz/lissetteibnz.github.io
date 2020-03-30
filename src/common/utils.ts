import readingTime from 'reading-time';
import { AM } from '@/services/api';
import { config } from '@/core/config';

export const getValidLabels = (labels: AM.Label[]): AM.Label[] =>
  labels && labels.filter(label => label.name !== config.tagFilterBlog);

export const getReadingTime = (content: string): string =>
  content.length && `${Math.round(readingTime(content).minutes)} min read`;

export const normalizeColor = (color: string): string =>
  color.length && color.startsWith('#') ? color : `#${color}`;

export const transformedDate = (expression: string): string => {
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
  const date = new Date(expression);
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};
