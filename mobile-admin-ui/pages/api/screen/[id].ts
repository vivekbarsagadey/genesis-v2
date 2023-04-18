import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const id = req.query?.id;
  console.log("this is id",id)
  
  if (req.method === "DELETE") {
    const screen = await prisma.screen.delete({
      where: { id: id },
    });
    res.json(screen);
  } else if (req.method === "GET") {
    const screen = await prisma.screen.findUnique({
      where: { id: id },
    });
    res.json(screen);
  } else if (req.method === "PUT") {
    const { email, name } = req.body;
    const result = await prisma.screen.update({
      where: { id: id },
      data: {
        email,
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
