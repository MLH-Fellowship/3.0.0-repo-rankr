import { gql } from '@apollo/client';

// TODO: @navn-r
export const GET_REPOSITORY = gql`
  query ($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      name
      description
      updatedAt
      forkCount
      stargazerCount
      codeOfConduct {
        key
        name
      }
      updatedAt
      homepageUrl
      issues {
        totalCount
      }
      pullRequests {
        totalCount
      }
      licenseInfo {
        key
        name
      }
      repositoryTopics {
        totalCount
      }
    }
  }
`;
