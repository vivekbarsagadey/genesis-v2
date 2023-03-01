import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../../utils/prisma";
import { handleApiMiddleware } from "../middleware";


const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  await handleApiMiddleware(req, res);
  if (req.method === "POST") {
    const result = await prisma.project.create({
      data: req.body,
    }); 
    res.json(result?.id);
  } else if (req.method === "GET") {
    const projects = await prisma.project.findMany();
    res.json(projects);
  } else {
    res.status(404).send({ message: "Method is not supported" });
  }
};



export default handle;
