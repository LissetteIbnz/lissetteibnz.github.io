import readingTime from 'reading-time';
import * as AM from '@/common/models';
import { config } from '@/core/config';

export const getValidLabels = (labels: AM.Label[]): AM.Label[] =>
  labels && labels.filter(label => label.name !== config.tagFilterBlog);

export const normalizeString = (expression: string) =>
  expression.replace(/([a-z])([A-Z])/g, '$1 $2');

export const getReadingTime = (content: string): string =>
  content.length && Math.ceil(readingTime(content).minutes).toString();

export const normalizeColor = (color: string): string =>
  color.length && color.startsWith('#') ? color : `#${color}`;

export const transformedDate = (expression: string): string => {
  enum months {
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  }
  const date = new Date(expression);
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
};

export const isFormattedExpression = (
  expression: string,
  beginningMark: string,
  endingMark: string
): boolean =>
  expression.length > beginningMark.length + endingMark.length &&
  expression.startsWith(beginningMark) &&
  expression.indexOf(endingMark) > -1;

export const extractAttributesFromMD = (markdown: string) => {
  const { beginningMark, endingMark } = config;

  const blockTextWithoutBeginningMark = markdown.substr(beginningMark.length);
  const indexOfEndAttributeBlock = blockTextWithoutBeginningMark.indexOf(endingMark);
  const block = blockTextWithoutBeginningMark.substring(0, indexOfEndAttributeBlock);

  return block.trim();
};

export const convertAttributesInObject = (attributes: string) =>
  attributes.split('\n').reduce((acc, item) => {
    const [key, value] = item.split(config.separatedAttribute);
    return {
      ...acc,
      [key.trim()]: value && value.trim(),
    };
  }, {});
