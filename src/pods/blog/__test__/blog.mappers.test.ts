import { mapIssueAMToVM } from '../blog.mappers';
import { IssueNode } from '../api';
import { Post } from '../blog.vm';

describe('mapIssueAmToVM =>', () => {
  test('should return an empty array when pass an empty issue list', () => {
    const issue: IssueNode = undefined;
    const result = mapIssueAMToVM(issue);
    expect(result).toEqual(undefined);
  });

  test('should to convert a valid Post when pass a valid Issue', () => {
    const issue: IssueNode = {
      author: {
        avatarUrl: 'url',
        login: 'Irrelevant author',
        url: 'url',
      },
      body: `#Irrelevant H1
      Lorem ipsum`,
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
      content: `#Irrelevant H1
      Lorem ipsum`,
      datePublish: 'March 29, 2020',
      tags: [{ color: '#red', label: 'label 1' }],
      readingTime: '0 min read',
      title: 'Irrelevant title',
    };

    const result = mapIssueAMToVM(issue);

    expect(result).toEqual(expected);
  });
});
