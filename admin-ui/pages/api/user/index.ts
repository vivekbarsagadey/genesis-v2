import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '../../../utils/prisma';
import { handleApiMiddleware } from '../middleware';

// POST /api/user
const handle = async (req: NextApiRequest, res: NextApiResponse) => {
	await handleApiMiddleware(req, res);
	if (req.method === 'POST') {
		const result = await prisma.user.create({
			data: req.body,
		});
		res.json(result?.id);
	} else if (req.method === 'GET') {
		const users = await prisma.user.findMany();
		res.json(users);
	} else {
		res.status(404).send({ message: 'Method is not supported' });
	}
};

export default handle;
