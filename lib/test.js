import { evaluateModel } from './rankRepository';
o = {
  repositoryName: 'jest',
  url: 'https://jestjs.io',
  forks: 5148,
  stars: 35423,
  updatedAt: '2021-06-11T22:47:22Z',
  description: 'Delightful JavaScript Testing.',
  topics: 9,
  contributors: 30,
  license: 'mit',
  readme: { links: 52, images: 4, badges: 4 },
  codeOfConduct: 'contributor_covenant',
  issues: {
    open: 4924,
    closed: 1316,
    templates: 4,
    lastOpenedDate: '2021-06-11T22:33:53Z',
    lastClosedDate: '2021-06-11T06:31:03Z'
  },
  pullRequests: {
    open: 986,
    closed: 167,
    templates: 1,
    lastOpenedDate: '2021-06-10T21:46:43Z',
    lastClosedDate: '2021-06-07T04:18:58Z'
  }
};

console.log(evaluateModel(o));
