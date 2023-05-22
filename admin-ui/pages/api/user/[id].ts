import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../utils/prisma';
import { handleApiMiddleware } from '../middleware';

// DELETE /api/user/:id
const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  await handleApiMiddleware(req, res);
  const id = req.query?.id?.toString();
  if (req.method === 'DELETE') {
    const user = await prisma.user.delete({
      where: { id },
    });
    res.json(user);
  } else if (req.method === 'GET') {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    res.json(user);
  } else if (req.method === 'PUT') {
    const user = await prisma.user.update({
      where: { id },
      data: req.body,
    });
    res.json(user);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    );
  }
};

export default handle;
