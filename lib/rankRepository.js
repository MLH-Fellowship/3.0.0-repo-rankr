//
// Basic Checkers
//
const existenceCheck = o => !!o;
const lengthCheck = (a, b) => c => c.length >= a && c.length <= b;
const issueRanker = ({
  open,
  closed,
  hasTemplate,
  lastOpenedDate,
  lastClosedDate
}) => {
  return (closed / open) * Math.log10(closed + open) + hasTemplate;
};
const licenseCheck = l => !!l;

const evaluator = {
  repositoryName: lengthCheck(1, 25),
  issues: issueRanker,
  pullRequests: issueRanker,
  url: existenceCheck,
  topics: lengthCheck(3, 10),
  description: lengthCheck(10, 50),
  contributors: cnt => Math.ceil(Math.log2(cnt)),
  usedBy: users => Math.ceil(Math.log10(users)),
  license: licenseCheck,
  codeOfConduct: existenceCheck,
  contributing: existenceCheck,
  readme: r => !!r.images + !!r.badges + !!r.links + !!r.hasSetup
};

export default function (model) {
  return Object.keys(model).reduce(
    (acc, param) => prev + evaluator[param](model[param]),
    0
  );
}
