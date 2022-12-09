import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const {  name } = req.body;
  
  if (req.method === "POST") {
    const result = await prisma.module.create({
      data: {
        name,
      },
    });
    res.json(result);
  } else if (req.method === "GET") {
    const modules = await prisma.module.findMany();
    res.json(modules);
  } else {
    res.status(404).send({ message: "Method is not supported" });
  }
}
