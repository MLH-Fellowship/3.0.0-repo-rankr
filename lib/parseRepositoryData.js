const filter = require('object-key-filter');
/**
 * https://github.com/apollographql/apollo-client/issues/2881#issuecomment-455488805
 */
const cleanData = data => {
  return typeof data === 'object' ? filter(data, ['__typename'], true) : data;
};

/**
 * Counts the number of images, badges, links,
 * TODO: get master list of badges to count
 */
const parseReadme = (text) => {
  const REG_EXPS = {
    links: /\[(.*?)\]\((.*?)\)/gim,
    images: /!\[(.*?)\]\((.*?)\)/gim,
    badges: /!\[(.*?)\]\((.*?)\)/gim,
  };

  const readme = {};

  Object.entries(REG_EXPS).forEach(([prop, regex]) => {
    readme[prop] = (text.match(regex) || []).length;
  });

  return readme;
}

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
    readme: parseReadme(data.readme?.text || "")
  };

  return model;
};

export default parseRepositoryData;
