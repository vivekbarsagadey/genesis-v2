import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../utils/prisma";
import { handleApiMiddleware } from "../middleware";

// DELETE /api/projectJson/:id
const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  await handleApiMiddleware(req, res);
  const id = req.query?.id?.toString();
  if (req.method === "DELETE") {
    const projectJson = await prisma.projectJson.delete({
      where: { id: id },
    });
    res.json(projectJson);
  } else if (req.method === "GET") {
    const projectJson = await prisma.projectJson.findUnique({
      where: { id: id },
    });
    res.json(projectJson);
  } else if (req.method === "PUT") {
    const projectJson = await prisma.projectJson.update({
      where: { id: id },
      data: req.body,
    });
    res.json(projectJson);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
};

export default handle;
