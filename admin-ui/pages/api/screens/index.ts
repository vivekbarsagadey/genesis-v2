import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import prisma from "../../../utils/prisma";
import { handleApiMiddleware } from "../middleware";


// POST /api/screen
const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  await handleApiMiddleware(req, res);
  if (req.method === "POST") {
    const result = await prisma.screen.create({
      data: req.body,
    }); 
    res.json(result?.id);
  } else if (req.method === "GET") {
    const screens = await prisma.screen.findMany();
    res.json(screens);
  } else {
    res.status(404).send({ message: "Method is not supported" });
  }
};


export default handle;
