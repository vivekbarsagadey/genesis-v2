import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../utils/prisma';
import { handleApiMiddleware } from '../middleware';

// DELETE /api/roles/:id
const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  await handleApiMiddleware(req, res);
  const id = req.query?.id?.toString();
  if (req.method === 'DELETE') {
    const roles = await prisma.roles.delete({
      where: { id },
    });
    res.json(roles);
  } else if (req.method === 'GET') {
    const roles = await prisma.roles.findUnique({
      where: { id },
    });
    res.json(roles);
  } else if (req.method === 'PUT') {
    const roles = await prisma.roles.update({
      where: { id },
      data: req.body,
    });
    res.json(roles);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
};

export default handle;
