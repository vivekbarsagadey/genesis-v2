const createScreen = async (screen) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/screens`, {
    credentials: "include",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({name:screen}),
  });
  return response;
};

export { createScreen };
