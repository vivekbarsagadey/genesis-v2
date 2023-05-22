<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../utils/prisma';
import { handleApiMiddleware } from '../middleware';
=======
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../utils/prisma";
import { handleApiMiddleware } from "../middleware";
>>>>>>> dev

// DELETE /api/projectJson/:id
const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  await handleApiMiddleware(req, res);
  const id = req.query?.id?.toString();
<<<<<<< HEAD
  if (req.method === 'DELETE') {
    const projectJson = await prisma.projectJson.delete({
      where: { id },
    });
    res.json(projectJson);
  } else if (req.method === 'GET') {
    const projectJson = await prisma.projectJson.findUnique({
      where: { id },
    });
    res.json(projectJson);
  } else if (req.method === 'PUT') {
    const projectJson = await prisma.projectJson.update({
      where: { id },
=======
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
>>>>>>> dev
      data: req.body,
    });
    res.json(projectJson);
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
