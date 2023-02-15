import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { runMiddleware } from "../../utils/cors-middleware";
import prisma from "../../utils/prisma";
import Cors from "cors";

const cors = Cors({
  methods: ["GET", "POST", "PUT", "HEAD", "PATCH", "DELETE", "OPTIONS"],
});


const handleApiMiddleware = async (req: NextApiRequest, res: NextApiResponse) =>{
  await runMiddleware(req, res, cors);
  const session = await getSession({ req });
}

export {handleApiMiddleware}