<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

import prisma from '../../../utils/prisma';
import { handleApiMiddleware } from '../middleware';
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import prisma from "../../../utils/prisma";
import { handleApiMiddleware } from "../middleware";

>>>>>>> dev

// POST /api/customer
const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  await handleApiMiddleware(req, res);
<<<<<<< HEAD
  if (req.method === 'POST') {
    const result = await prisma.customer.create({
      data: req.body,
    });
    res.json(result?.id);
  } else if (req.method === 'GET') {
    const customer = await prisma.customer.findMany();
    res.json(customer);
  } else {
    res.status(404).send({ message: 'Method is not supported' });
  }
};

=======
  if (req.method === "POST") {
    const result = await prisma.customer.create({
      data: req.body,
    }); 
    res.json(result?.id);
  } else if (req.method === "GET") {
    const companies = await prisma.customer.findMany();
    res.json(companies);
  } else {
    res.status(404).send({ message: "Method is not supported" });
  }
};


>>>>>>> dev
export default handle;
