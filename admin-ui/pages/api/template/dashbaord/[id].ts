import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../utils/prisma';
import { handleApiMiddleware } from '../../middleware';

// DELETE /api/template/dashbaord/:id
const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  await handleApiMiddleware(req, res);
  const id = req.query?.id?.toString();
  if (req.method === 'DELETE') {
    const dashboardTemplate = await prisma.dashboardTemplate.delete({
      where: { id },
    });
    res.json(dashboardTemplate);
  } else if (req.method === 'GET') {
    const dashboardTemplate = await prisma.dashboardTemplate.findUnique({
      where: { id },
    });
    res.json(dashboardTemplate);
  } else if (req.method === 'PUT') {
    const dashboardTemplate = await prisma.dashboardTemplate.update({
      where: { id },
      data: req.body,
    });
    res.json(dashboardTemplate);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    );
  }
};

export default handle;
