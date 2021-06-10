// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var path = require('path');
const { makeBadge } = require('badge-maker');

export default (req, res) => {
  const score = req.query.score ?? '100';
  const format = {
    label: 'Rankr',
    message: score,
    color: 'success'
  };

  const svg = makeBadge(format);

  res.writeHead(200, { 'Content-Type': 'image/svg+xml' });
  res.write(svg);
  res.end();
};
