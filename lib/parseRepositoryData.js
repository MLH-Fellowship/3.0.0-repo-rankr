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
const parseReadme = text => {
  const REG_EXPS = {
    links: /\[(.*?)\]\((.*?)\)/gim,
    images: /!\[(.*?)\]\((.*?)\)/gim,
    badges: /!\[(.*?)\]\((.*?)\)/gim
  };

  const readme = {};

  Object.entries(REG_EXPS).forEach(([prop, regex]) => {
    readme[prop] = (text.match(regex) || []).length;
  });

  return readme;
};

const parseRepositoryData = data => {
  data = cleanData(data);

  const model = {
    name: data.name,
    url: data.url,
    forks: data.forks,
    stars: data.stars,
    updatedAt: data.updatedAt,
    description: data.description,
    topics: data.topics.totalCount,
    contributors: data.contributors,
    license: data.license?.key || null,
    readme: parseReadme(data.readme?.text || ''),
    codeOfConduct: data.codeOfConduct?.key || null,
    issues: {
      open: data.closedIssues.totalCount,
      closed: data.openIssues.totalCount,
      templates: data.issueTemplates.length,
      lastOpenedDate: data.lastOpenedIssue.nodes[0]?.createdAt || null,
      lastClosedDate: data.lastClosedIssue.nodes[0]?.closedAt || null
    },
    pullRequests: {
      open: data.closedPullRequests.totalCount,
      closed: data.openPullRequests.totalCount,
      templates: data.pullRequestTemplates.length,
      lastOpenedDate: data.lastOpenedPullRequest.nodes[0]?.createdAt || null,
      lastClosedDate: data.lastClosedPullRequest.nodes[0]?.closedAt || null
    }
  };

  return model;
};

export default parseRepositoryData;
