import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const id = req.query?.id;
  console.log("this is id",id)
  if (req.method === "DELETE") {
    const project = await prisma.project.delete({
      where: { id: id },
    });
    
    res.json(project);
  } else if (req.method === "GET") {
    const project = await prisma.project.findUnique({
      where: { id: id },
    });
    res.json(project);
  } else if (req.method === "PUT") {
    const { title,
      name,
      logo} = req.body;
    const result = await prisma.project.update({
      where: { id: id },
      data: {
        title,
        name,
        logo
      },
    });
    res.json(result);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
