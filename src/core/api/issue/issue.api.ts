import { gql } from 'apollo-boost';
import { config } from '@/core/config';
import { FILTERS } from './issue.model';

// FIXME: Pass the count of issues to fetch
export const GET_LAST_ISSUES = gql`
  query GetLastIssues($offSet: Int!) {
    repository(owner: "${config.githubUserName}", name: "${config.githubRepo}") {
      issues(first: $offSet, states: ${FILTERS.IssueState}, filterBy: { labels: "${config.tagFilterBlog}" }) {
        nodes {
          body
          bodyHTML
          bodyText
          id
          number
          title
          updatedAt
          url
          author {
            url
            avatarUrl
            login
          }
          labels(first: ${FILTERS.Labels}) {
            nodes {
              color
              name
            }
          }
          reactions(first: ${FILTERS.Reactions}){
            nodes {
              content
              user {
                login
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_ISSUE_BY_NUMBER = gql`
  query GetIssueByNumber($issueNumber: Int!) {
    repository(owner: "${config.githubUserName}", name: "${config.githubRepo}") {
      issue(number: $issueNumber) {
        body
        bodyHTML
        id
        number
        title
        updatedAt
        url
        author {
          url
          avatarUrl
          login
        }
        labels(first: ${FILTERS.Labels}) {
          nodes {
            name
            color
          }
        }
        reactions(first:${FILTERS.Reactions}){
          nodes {
            content
            user {
              login
            }
          }
        }
      }
    }
  }
`;
