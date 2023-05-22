import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../utils/prisma';
import { handleApiMiddleware } from '../middleware';

// DELETE /api/{{page['name']}}/:id
const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  await handleApiMiddleware(req, res);
  const id = req.query?.id?.toString();
  if (req.method === 'DELETE') {
    const {{page['name']}} = await prisma.{{page['name']}}.delete({
      where: { id },
    });
    res.json({{page['name']}});
  } else if (req.method === 'GET') {
    const {{page['name']}} = await prisma.{{page['name']}}.findUnique({
      where: { id },
    });
    res.json({{page['name']}});
  } else if (req.method === 'PUT') {
    const {{page['name']}} = await prisma.{{page['name']}}.update({
      where: { id },
      data: req.body,
    });
    res.json({{page['name']}});
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    );
  }
};

export default handle;
