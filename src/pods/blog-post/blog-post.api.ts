import { gql } from 'apollo-boost';
import { config } from '@/core/config';

const issueNumber = parseInt(window.location.href.split('/').pop());

export const GET_POST = gql`{
  repository(owner: "${config.githubUserName}", name: "${config.githubRepo}") {
    issue(number: ${issueNumber}) {
      title
      body
      bodyHTML
      url
      bodyText
      number
      bodyHTML
      author {
        url
        avatarUrl
        login
      }
      reactions(first:100){
        nodes{
          content
          user{
            id
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
