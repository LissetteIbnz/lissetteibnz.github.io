import { gql } from 'apollo-boost';
import { config } from '@/core/config';

enum Filters {
  FIRST_100_ITEMS = 100,
}

export const getPostByIssue = (issueNumber: string) => gql`{
  repository(owner: "${config.githubUserName}", name: "${config.githubRepo}") {
    issue(number: ${issueNumber}) {
      title
      body
      bodyHTML
      url
      number
      author {
        url
        avatarUrl
        login
      }
      labels(first: ${Filters.FIRST_100_ITEMS}) {
        nodes {
          name
          color
        }
      }
      reactions(first:${Filters.FIRST_100_ITEMS}){
        nodes {
          content
          user {
            login
          }
        }
      }
      updatedAt
      id
    }
  }
}
`;
