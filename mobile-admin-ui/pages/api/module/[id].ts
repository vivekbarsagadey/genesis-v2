import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const id = req.query?.id;
  
  console.log("this is id",id)
  if (req.method === "DELETE") {
    const module = await prisma.module.delete({
      where: { id: id },
    });
    res.json(module);
  } else if (req.method === "GET") {
    const module = await prisma.module.findUnique({
      where: { id: id },
    });
    res.json(module);
  } else if (req.method === "PUT") {
    const {  name } = req.body;
    const result = await prisma.module.update({
      where: { id: id },
      data: {
        name,
      },
    });
    res.json(result);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
