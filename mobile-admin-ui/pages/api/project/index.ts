import prisma from "../../../lib/prisma";


export default async function handle(req, res) {
  const { title, name,
    logo } = req.body;
  if (req.method === "POST") {
    const result = await prisma.project.create({
      data: {
        title,
        name,
        logo
      },
    });
    res.json(result);
  } else if (req.method === "GET") {
    const projects = await prisma.project.findMany();
    res.json(projects);
  } else {
    res.status(404).send({ message: "Method is not supported" });
  }
}
