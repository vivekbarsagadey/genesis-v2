import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '../../../../utils/prisma';
import { handleApiMiddleware } from '../../middleware';

// POST /api/template/dashbaord
const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  await handleApiMiddleware(req, res);
  if (req.method === 'POST') {
    const result = await prisma.dashboardTemplate.create({
      data: req.body,
    });
    res.json(result?.id);
  } else if (req.method === 'GET') {
    const dashboardTemplate = await prisma.dashboardTemplate.findMany();
    res.json(dashboardTemplate);
  } else {
    res.status(404).send({ message: 'Method is not supported' });
  }
};

export default handle;
