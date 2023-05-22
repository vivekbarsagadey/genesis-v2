import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../utils/prisma';
import { handleApiMiddleware } from '../middleware';

// DELETE /api/widgets/:id
const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  await handleApiMiddleware(req, res);
  const id = req.query?.id?.toString();
  if (req.method === 'DELETE') {
    const widgets = await prisma.widgets.delete({
      where: { id },
    });
    res.json(widgets);
  } else if (req.method === 'GET') {
    const widgets = await prisma.widgets.findUnique({
      where: { id },
    });
    res.json(widgets);
  } else if (req.method === 'PUT') {
    const widgets = await prisma.widgets.update({
      where: { id },
      data: req.body,
    });
    res.json(widgets);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    );
  }
};

export default handle;
