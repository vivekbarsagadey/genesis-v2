import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../utils/prisma';
import { handleApiMiddleware } from '../middleware';

// DELETE /api/theme/:id
const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  await handleApiMiddleware(req, res);
  const id = req.query?.id?.toString();
  if (req.method === 'DELETE') {
    const theme = await prisma.theme.delete({
      where: { id },
    });
    res.json(theme);
  } else if (req.method === 'GET') {
    const theme = await prisma.theme.findUnique({
      where: { id },
    });
    res.json(theme);
  } else if (req.method === 'PUT') {
    const theme = await prisma.theme.update({
      where: { id },
      data: req.body,
    });
    res.json(theme);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
};

export default handle;
