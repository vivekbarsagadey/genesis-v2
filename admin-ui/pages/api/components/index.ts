import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

import prisma from '../../../utils/prisma';
import { handleApiMiddleware } from '../middleware';

// POST /api/component
const handle = async (req: NextApiRequest, res: NextApiResponse) => {
	await handleApiMiddleware(req, res);
	if (req.method === 'POST') {
		const result = await prisma.component.create({
			data: req.body,
		});
		res.json(result?.id);
	} else if (req.method === 'GET') {
		const components = await prisma.component.findMany();
		res.json(components);
	} else {
		res.status(404).send({ message: 'Method is not supported' });
	}
};

export default handle;
