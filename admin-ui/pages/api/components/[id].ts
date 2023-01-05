import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../utils/prisma";
import { handleApiMiddleware } from "../middleware";

// DELETE /api/component/:id
const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  await handleApiMiddleware(req, res);
  const id = req.query?.id?.toString();
  if (req.method === "DELETE") {
    const component = await prisma.component.delete({
      where: { id: id },
    });
    res.json(component);
  } else if (req.method === "GET") {
    const component = await prisma.component.findUnique({
      where: { id: id },
    });
    res.json(component);
  } else if (req.method === "PUT") {
    const component = await prisma.component.update({
      where: { id: id },
      data: req.body,
    });
    res.json(component);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
};

export default handle;
