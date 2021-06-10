// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import getRepository from '../../../lib/getRepository';
import generateSvg from '../../../lib/generateSvg';

export default async (req, res) => {
  const { owner, name } = req.query;
  const data = await getRepository(owner, name);

  const score = req.query.score ?? '100';
  const svg = generateSvg(score);

  // res.writeHead(200, { 'Content-Type': 'image/svg+xml' });
  // res.write(svg);
  res.status(200).json(data);
};