import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../utils/prisma";
import { handleApiMiddleware } from "../middleware";

// DELETE /api/customer/:id
const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  await handleApiMiddleware(req, res);
  const id = req.query?.id?.toString();
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
      data: req.body,
    });
    res.json(customer);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
};

export default handle;
