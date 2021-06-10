// const a = {
//   data: {
//     repository: {
//       __typename: 'Repository',
//       name: 'react',
//       description:
//         'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
//       updatedAt: '2021-06-10T18:42:23Z',
//       forks: 34260,
//       stars: 169666,
//       codeOfConduct: {
//         __typename: 'CodeOfConduct',
//         key: 'contributor_covenant'
//       },
//       url: 'https://reactjs.org',
//       lastOpenedIssue: {
//         __typename: 'IssueConnection',
//         nodes: [{ __typename: 'Issue', createdAt: '2021-06-10T11:04:07Z' }]
//       },
//       lastClosedIssue: {
//         __typename: 'IssueConnection',
//         nodes: [{ __typename: 'Issue', closedAt: '2021-06-10T17:14:31Z' }]
//       },
//       closedIssues: { __typename: 'IssueConnection', totalCount: 9880 },
//       openIssues: { __typename: 'IssueConnection', totalCount: 536 },
//       issueTemplates: [{ __typename: 'IssueTemplate', name: '🐛 Bug Report' }],
//       lastOpenedPullRequest: {
//         __typename: 'PullRequestConnection',
//         nodes: [
//           { __typename: 'PullRequest', createdAt: '2021-06-10T19:16:47Z' }
//         ]
//       },
//       lastClosedPullRequest: {
//         __typename: 'PullRequestConnection',
//         nodes: [{ __typename: 'PullRequest', closedAt: '2021-06-09T08:06:46Z' }]
//       },
//       openPullRequests: {
//         __typename: 'PullRequestConnection',
//         totalCount: 189
//       },
//       closedPullRequests: {
//         __typename: 'PullRequestConnection',
//         totalCount: 3192
//       },
//       pullRequestTemplates: [
//         { __typename: 'PullRequestTemplate', name: 'PULL_REQUEST_TEMPLATE.md' }
//       ],
//       license: { __typename: 'License', key: 'mit' },
//       topics: { __typename: 'RepositoryTopicConnection', totalCount: 6 }
//     }
//   },
//   loading: false,
//   networkStatus: 7
// };

const parseRepositoryData = data => {
  return data;
};

export default parseRepositoryData;
