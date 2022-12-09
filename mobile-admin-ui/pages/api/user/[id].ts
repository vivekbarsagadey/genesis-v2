import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const id = req.query?.id;
  console.log("this is id",id)
  
  if (req.method === "DELETE") {
    const user = await prisma.user.delete({
      where: { id: id },
    });
    res.json(user);
  } else if (req.method === "GET") {
    const user = await prisma.user.findUnique({
      where: { id: id },
    });
    res.json(user);
  } else if (req.method === "PUT") {
    const { email, name } = req.body;
    const result = await prisma.user.update({
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
