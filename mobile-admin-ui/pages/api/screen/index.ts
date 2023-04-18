import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const {  name } = req.body;
  
  if (req.method === "POST") {
    const result = await prisma.screen.create({
      data: {
        name,
      },
    });
    res.json(result);
  } else if (req.method === "GET") {
    const screens = await prisma.screen.findMany();
    res.json(screens);
  } else {
    res.status(404).send({ message: "Method is not supported" });
  }
}
