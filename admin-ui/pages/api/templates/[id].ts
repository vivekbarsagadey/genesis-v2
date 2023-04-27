import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../utils/prisma";
import { handleApiMiddleware } from "../middleware";

// DELETE /api/template/:id
const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  await handleApiMiddleware(req, res);
  const id = req.query?.id?.toString();
  if (req.method === "DELETE") {
    const template = await prisma.template.delete({
      where: { id: id },
    });
    res.json(template);
  } else if (req.method === "GET") {
    const template = await prisma.template.findUnique({
      where: { id: id },
    });
    res.json(template);
  } else if (req.method === "PUT") {
    const template = await prisma.template.update({
      where: { id: id },
      data: req.body,
    });
    res.json(template);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
};

export default handle;
