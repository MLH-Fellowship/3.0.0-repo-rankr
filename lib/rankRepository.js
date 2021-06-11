//
// Basic Checkers
//
const existenceCheck = o => !!o;
const lengthCheck = (a, b) => c => c?.length >= a && c?.length <= b;
const issueRanker = ({
  open,
  closed,
  templates,
  lastOpenedDate,
  lastClosedDate
}) => {
  return (
    (closed / open) * Math.log10(closed + open) + existenceCheck(templates)
  );
};
const licenseCheck = l => !!l;

const evaluator = {
  repositoryName: lengthCheck(1, 25),
  // issues: issueRanker,
  // pullRequests: issueRanker,
  url: existenceCheck,
  topics: lengthCheck(2, 10),
  description: lengthCheck(10, 70),
  contributors: cnt => Math.ceil(Math.log2(cnt)),
  usedBy: users => (users ? Math.ceil(Math.log10(users)) : 0),
  stars: stars => Math.ceil(Math.log10(stars)),
  forks: forks => Math.ceil(Math.log2(forks)),
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
