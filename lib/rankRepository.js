//
// Basic Checkers
//
import licenses from './licenses';

const existenceCheck = o => !!o;
const lengthCheck = (a, b) => c =>
  c.length ? c.length >= a && c.length <= b : c >= a && c <= b;
const issueRanker = ({
  open,
  closed,
  templates,
  lastOpenedDate,
  lastClosedDate
}) => {
  const logSum = closed + open != 0 ? Math.log2(closed + open) : 1;
  const fraction = open == 0 ? closed : closed / open;
  const exist = existenceCheck(templates);

  return Math.ceil(fraction * logSum + exist);
};
const licenseCheck = l => licenses[l] || 0;
const logFactor = c => (c == 0 ? 0 : Math.ceil(Math.log2(c)));

const evaluator = {
  repositoryName: lengthCheck(1, 25),
  issues: issueRanker,
  pullRequests: issueRanker,
  url: existenceCheck,
  topics: lengthCheck(2, 10),
  description: lengthCheck(10, 70),
  contributors: logFactor,
  usedBy: users => (users ? logFactor(users) : 0),
  stars: logFactor,
  forks: logFactor,
  license: licenseCheck,
  codeOfConduct: existenceCheck,
  contributing: existenceCheck,
  readme: r => !!r.images + !!r.badges + !!r.links + !!r.hasSetup
};

export function evaluateModel(model) {
  return Object.keys(evaluator).reduce(
    (acc, param) => ({ ...acc, [param]: evaluator[param](model[param]) }),
    {}
  );
}

export default function (model) {
  return Object.keys(evaluator).reduce(
    (acc, param) => acc + evaluator[param](model[param]),
    0
  );
}
