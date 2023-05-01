const createTemplates = async (templates) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/templates`, {
    credentials: 'include',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(templates),
  });
  return response;
};
const updateTemplates = async (id, templates) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/templates/${id}`,
    {
      credentials: 'include',
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(templates),
    }
  );
  return response;
};

const deleteTemplates = async (id) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/templates/${id}`,
    {
      credentials: 'include',
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    }
  );

  return response;
};

export { createTemplates, updateTemplates, deleteTemplates };
