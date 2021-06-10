// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var path = require('path');
const { makeBadge } = require('badge-maker');

export default (req, res) => {
  const score = req.query.score ?? '100';
  const format = {
    label: 'Rankr',
    message: score,
    color: getColor(score)
  };

  const svg = makeBadge(format);

  res.writeHead(200, { 'Content-Type': 'image/svg+xml' });
  res.write(svg);
  res.end();
};

const getColor = score => {
  const intScore = parseInt(score);
  if (intScore >= 90) {
    return 'brightgreen';
  } else if (intScore >= 75) {
    return 'green';
  } else if (intScore >= 60) {
    return 'yellow';
  } else if (intScore >= 45) {
    return 'yellowgreen';
  } else if (intScore >= 30) {
    return 'orange';
  } else {
    return 'red';
  }
};
