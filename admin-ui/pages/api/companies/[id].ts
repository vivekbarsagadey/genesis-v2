import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../utils/prisma';
import { handleApiMiddleware } from '../middleware';

// DELETE /api/company/:id
const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  await handleApiMiddleware(req, res);
  const id = req.query?.id?.toString();
  if (req.method === 'DELETE') {
    const company = await prisma.company.delete({
      where: { id },
    });
    res.json(company);
  } else if (req.method === 'GET') {
    const company = await prisma.company.findUnique({
      where: { id },
    });
    res.json(company);
  } else if (req.method === 'PUT') {
    const company = await prisma.company.update({
      where: { id },
      data: req.body,
    });
    res.json(company);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    );
  }
};

export default handle;
