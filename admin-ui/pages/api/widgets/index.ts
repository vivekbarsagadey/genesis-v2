import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '../../../utils/prisma';
import { handleApiMiddleware } from '../middleware';

// POST /api/widgets
const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  await handleApiMiddleware(req, res);
  if (req.method === 'POST') {
    const result = await prisma.widgets.create({
      data: req.body,
    });
    res.json(result?.id);
  } else if (req.method === 'GET') {
    const widgets = await prisma.widgets.findMany();
    res.json(widgets);
  } else {
    res.status(404).send({ message: 'Method is not supported' });
  }
};

export default handle;
