const filter = require('object-key-filter');
/**
 * https://github.com/apollographql/apollo-client/issues/2881#issuecomment-455488805
 */
const cleanData = data => {
  return typeof data === 'object' ? filter(data, ['__typename'], true) : data;
};

const parseRepositoryData = data => {
  data = cleanData(data);

  // flattens api response with null fallback
  const model = {
    ...data,
    codeOfConduct: data.codeOfConduct?.key || null,
    lastOpenedIssue: data.lastOpenedIssue.nodes[0]?.createdAt || null,
    lastClosedIssue: data.lastClosedIssue.nodes[0]?.closedAt || null,
    closedIssues: data.closedIssues.totalCount,
    openIssues: data.openIssues.totalCount,
    issueTemplates: data.issueTemplates.length,
    lastOpenedPullRequest: data.lastOpenedPullRequest.nodes[0]?.createdAt || null,
    lastClosedPullRequest: data.lastClosedPullRequest.nodes[0]?.closedAt || null,
    closedPullRequests: data.closedPullRequests.totalCount,
    openPullRequests: data.openPullRequests.totalCount,
    pullRequestTemplates: data.pullRequestTemplates.length,
    license: data.license?.key || null,
    topics: data.topics.totalCount,
    readme: data.readme?.text || null,
  };

  return model;
};

export default parseRepositoryData;
