import { gql } from 'apollo-boost';
import { config } from '@/core/config';

enum Filters {
  FIRST_100_ITEMS = 100,
  STATE_POST = 'OPEN',
}

export const getPosts = () => gql`
{
  repository(owner: "${config.githubUserName}", name: "${config.githubRepo}") {
    issues(first: ${Filters.FIRST_100_ITEMS}, states: ${Filters.STATE_POST}, filterBy: { labels: "${config.tagFilterBlog}" }) {
      nodes {
        title
        body
        bodyText
        number
        labels(first: ${Filters.FIRST_100_ITEMS}) {
          nodes {
            color
            name
          }
        }
        updatedAt
      }
    }
  }
}
`;
