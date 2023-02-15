import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../utils/prisma";
import { handleApiMiddleware } from "../middleware";

// DELETE /api/screen/:id
const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  await handleApiMiddleware(req, res);
  const id = req.query?.id?.toString();
  if (req.method === "DELETE") {
    const screen = await prisma.screen.delete({
      where: { id: id },
    });
    res.json(screen);
  } else if (req.method === "GET") {
    const screen = await prisma.screen.findUnique({
      where: { id: id },
    });
    res.json(screen);
  } else if (req.method === "PUT") {
    const screen = await prisma.screen.update({
      where: { id: id },
      data: req.body,
    });
    res.json(screen);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
};

export default handle;
