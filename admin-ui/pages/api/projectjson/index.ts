<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '../../../utils/prisma';
import { handleApiMiddleware } from '../middleware';
=======
import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../../utils/prisma";
import { handleApiMiddleware } from "../middleware";
>>>>>>> dev

// POST /api/projectJson
const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  await handleApiMiddleware(req, res);
<<<<<<< HEAD
  if (req.method === 'POST') {
    const result = await prisma.projectJson.create({
      data: req.body,
    });
    res.json(result?.id);
  } else if (req.method === 'GET') {
    const projectJson = await prisma.projectJson.findMany();
    res.json(projectJson);
  } else {
    res.status(404).send({ message: 'Method is not supported' });
  }
};

=======
  if (req.method === "POST") {
    const result = await prisma.projectJson.create({
      data: req.body,
    }); 
    res.json(result?.id);
  } else if (req.method === "GET") {
    const projectJson = await prisma.projectJson.findMany();
    res.json(projectJson);
  } else {
    res.status(404).send({ message: "Method is not supported" });
  }
};



>>>>>>> dev
export default handle;
