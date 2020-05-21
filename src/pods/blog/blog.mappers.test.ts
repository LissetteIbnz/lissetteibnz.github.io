import * as AM from '@/common/models';
import { mapIssueAMToVM } from './blog.mappers';
import { Post } from './blog.vm';

describe('mapIssueAmToVM =>', () => {
  test('should return an empty array when pass an empty issue list', () => {
    const issue: AM.Issue = undefined;
    const result = mapIssueAMToVM(issue);
    expect(result).toEqual(undefined);
  });

  test('should return a valid Post when pass a valid Issue', () => {
    const issue: AM.Issue = {
      author: {
        avatarUrl: 'url',
        login: 'Irrelevant author',
        url: 'url',
      },
      body: 'Irrelevant body',
      bodyText: 'Irrelevant bodyText',
      number: 1,
      labels: {
        nodes: [
          {
            color: 'red',
            id: '1',
            name: 'blog',
          },
          {
            color: 'red',
            id: '2',
            name: 'label 1',
          },
        ],
      },
      title: 'Irrelevant title',
      updatedAt: '2020-03-29',
    };

    const expected: Post = {
      id: 1,
      content: `Irrelevant bodyText`,
      datePublish: '29 Marzo 2020',
      tags: [{ color: '#red', label: 'label 1' }],
      readingTime: '1',
      title: 'Irrelevant title',
      author: {
        avatarUrl: 'url',
        url: 'url',
        name: 'Irrelevant Author',
      },
      brief: '',
      reactions: [],
      urlGitHub: '',
      attributes: {
        description: '',
      },
    };

    const result = mapIssueAMToVM(issue);

    expect(result).toEqual(expected);
  });
});
