const createPage = async (jsonData) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project`, {
    credentials: "include",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ projectJson: jsonData }),
  });
  return response;
};

export { createPage };
