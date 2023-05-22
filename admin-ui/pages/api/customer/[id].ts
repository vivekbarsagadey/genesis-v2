<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../utils/prisma';
import { handleApiMiddleware } from '../middleware';
=======
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../utils/prisma";
import { handleApiMiddleware } from "../middleware";
>>>>>>> dev

// DELETE /api/customer/:id
const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  await handleApiMiddleware(req, res);
  const id = req.query?.id?.toString();
<<<<<<< HEAD
  if (req.method === 'DELETE') {
    const customer = await prisma.customer.delete({
      where: { id },
    });
    res.json(customer);
  } else if (req.method === 'GET') {
    const customer = await prisma.customer.findUnique({
      where: { id },
    });
    res.json(customer);
  } else if (req.method === 'PUT') {
    const customer = await prisma.customer.update({
      where: { id },
=======
  if (req.method === "DELETE") {
    const customer = await prisma.customer.delete({
      where: { id: id },
    });
    res.json(customer);
  } else if (req.method === "GET") {
    const customer = await prisma.customer.findUnique({
      where: { id: id },
    });
    res.json(customer);
  } else if (req.method === "PUT") {
    const customer = await prisma.customer.update({
      where: { id: id },
>>>>>>> dev
      data: req.body,
    });
    res.json(customer);
  } else {
    throw new Error(
<<<<<<< HEAD
      `The HTTP ${req.method} method is not supported at this route.`,
=======
      `The HTTP ${req.method} method is not supported at this route.`
>>>>>>> dev
    );
  }
};

export default handle;
