import { AM } from '@/services/api';
import { mapIssueAMToPostVM } from './post-details.mappers';
import { Post } from './post-details.vm';

describe('mapIssueAMToPostVM =>', () => {
  test('should return null when pass an empty Issue', () => {
    const result = mapIssueAMToPostVM(null);
    expect(result).toBeNull();
  });

  test('should return a valid Post when pass a valid Issue', () => {
    const expectedPost: Post = {
      author: {
        avatarUrl: 'irrelevant avatarUrl',
        name: 'irrelevant login',
        url: 'irrelevant url',
      },
      attributes: undefined,
      content: 'irrelevant body',
      datePublish: 'April 10, 2020',
      reactions: [],
      readingTime: '1 min read',
      tags: [],
      title: 'irrelevant title',
      urlGitHub: 'irrelevant url',
    };

    const issue: AM.Issue = {
      author: {
        avatarUrl: 'irrelevant avatarUrl',
        login: 'irrelevant login',
        url: 'irrelevant url',
      },
      body: 'irrelevant body',
      bodyText: 'irrelevant bodyText',
      number: 1,
      title: 'irrelevant title',
      updatedAt: new Date('04/10/2020').toLocaleString(),
      labels: {
        nodes: [],
      },
      reactions: {
        nodes: [],
      },
      url: 'irrelevant url',
    };

    const result = mapIssueAMToPostVM(issue);

    expect(result).toEqual(expectedPost);
  });
});
