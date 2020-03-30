import { getValidLabels, transformedDate } from './utils';
import { AM } from '@/services/api';

describe('getValidLabels =>', () => {
  test('should return an empty collection when pass an empty labels list', () => {
    expect(getValidLabels([])).toEqual([]);
  });

  test('should return a valid list without blog item', () => {
    const labelsWithBlog: AM.Label[] = [
      {
        color: 'irrelevant color',
        id: 'irrelevant id',
        name: 'blog',
      },
      {
        color: 'irrelevant color',
        id: 'irrelevant id',
        name: 'another',
      },
    ];

    const expectedLabels: AM.Label[] = [
      {
        color: 'irrelevant color',
        id: 'irrelevant id',
        name: 'another',
      },
    ];

    expect(getValidLabels(labelsWithBlog)).toEqual(expectedLabels);
  });

  test('should return an empty list when pass a list with just blog item', () => {
    const labelsWithBlog: AM.Label[] = [
      {
        color: 'irrelevant color',
        id: 'irrelevant id',
        name: 'blog',
      },
    ];

    expect(getValidLabels(labelsWithBlog)).toEqual([]);
  });
});

describe('transformedDate =>', () => {
  test("should return a string with follow format 'DayOfWeek, day month year'", () => {
    const validDate = new Date('03/29/2020');
    const result = transformedDate(validDate.toString());
    expect(result).toEqual('March 29, 2020');
  });
});
