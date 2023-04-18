import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const { email, name } = req.body;
  
  if (req.method === "POST") {
    const result = await prisma.user.create({
      data: {
        email,
        name,
      },
    });
    res.json(result);
  } else if (req.method === "GET") {
    const users = await prisma.user.findMany();
    res.json(users);
  } else {
    res.status(404).send({ message: "Method is not supported" });
  }
}
