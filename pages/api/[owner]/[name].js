// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
  generateSvg,
  getRepository,
  parseRepositoryData,
  rankRepository,
  evaluateModel
} from '../../../lib/';

export default async (req, res) => {
  const { owner, name, badge, info } = req.query;

  const data = await getRepository(owner, name);

  const model = parseRepositoryData(data);
  const score = rankRepository(model);
  const svg = generateSvg(100);

  if (!!badge && badge === 'true') {
    res.writeHead(200, { 'Content-Type': 'image/svg+xml' });
    res.write(svg);
    res.end();
  } else {
    if (info) {
      req.status(200).json(evaluateModel(model));
    }
    res.status(200).json(score);
  }
};
