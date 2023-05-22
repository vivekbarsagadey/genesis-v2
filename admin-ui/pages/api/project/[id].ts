import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../utils/prisma';
import { handleApiMiddleware } from '../middleware';

// DELETE /api/project/:id
const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  await handleApiMiddleware(req, res);
  const id = req.query?.id?.toString();
  if (req.method === 'DELETE') {
    const project = await prisma.project.delete({
      where: { id },
    });
    res.json(project);
  } else if (req.method === 'GET') {
    const project = await prisma.project.findUnique({
      where: { id },
    });
    res.json(project);
  } else if (req.method === 'PUT') {
    const project = await prisma.project.update({
      where: { id },
      data: req.body,
    });
    res.json(project);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    );
  }
};

export default handle;
