import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../utils/prisma";
import { handleApiMiddleware } from "../middleware";

// DELETE /api/page/:id
const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  await handleApiMiddleware(req, res);
  const id = req.query?.id?.toString();
  if (req.method === "DELETE") {
    const page = await prisma.page.delete({
      where: { id: id },
    });
    res.json(page);
  } else if (req.method === "GET") {
    const page = await prisma.page.findUnique({
      where: { id: id },
    });
    res.json(page);
  } else if (req.method === "PUT") {
    const page = await prisma.page.update({
      where: { id: id },
      data: req.body,
    });
    res.json(page);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
};

export default handle;
