import { gql } from '@apollo/client';

export const GET_REPOSITORY = gql`
  query ($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      name
      description
      updatedAt
      forks: forkCount
      stars: stargazerCount
      codeOfConduct {
        key
      }
      url: homepageUrl
      lastOpenedIssue: issues(states: OPEN, last: 1) {
        nodes {
          createdAt
        }
      }
      lastClosedIssue: issues(states: CLOSED, last: 1) {
        nodes {
          closedAt
        }
      }
      closedIssues: issues(states: CLOSED) {
        totalCount
      }
      openIssues: issues(states: OPEN) {
        totalCount
      }
      issueTemplates {
        name
      }
      lastOpenedPullRequest: pullRequests(states: OPEN, last: 1) {
        nodes {
          createdAt
        }
      }
      lastClosedPullRequest: pullRequests(states: CLOSED, last: 1) {
        nodes {
          closedAt
        }
      }
      openPullRequests: pullRequests(states: OPEN) {
        totalCount
      }
      closedPullRequests: pullRequests(states: CLOSED) {
        totalCount
      }
      pullRequestTemplates {
        name: filename
      }
      license: licenseInfo {
        key
      }
      topics: repositoryTopics {
        totalCount
      }
      readme: object(expression: "HEAD:README.md") {
        ... on Blob {
          text
        }
      }
    }
  }
`;
