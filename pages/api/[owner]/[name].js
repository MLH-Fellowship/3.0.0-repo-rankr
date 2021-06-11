// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
  generateSvg,
  getRepository,
  parseRepositoryData,
  rankRepository
} from '../../../lib/';

export default async (req, res) => {
  const { owner, name, badge } = req.query;

  const data = await getRepository(owner, name);

  const model = parseRepositoryData(data);
  const score = rankRepository(model);
  const svg = generateSvg(score);

  if (!!badge && badge === 'true') {
    res.writeHead(200, { 'Content-Type': 'image/svg+xml' });
    res.write(svg);
    res.end();
  } else {
    res.status(200).json(score);
  }
};
