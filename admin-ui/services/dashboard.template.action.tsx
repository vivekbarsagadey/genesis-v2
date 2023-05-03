
const createDashboardTemplate = async (templates) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/template/dashboard`, {
    credentials: 'include',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(templates),
  });
  return response;
};
const updateDashboardTemplate = async (id:string, templates) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/templates/dashboard/${id}`,
    {
      credentials: 'include',
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(templates),
    },
  );
  return response;
};

const deleteDashboardTemplate = async (id) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/templates/dashboard/${id}`,
    {
      credentials: 'include',
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    },
  );

  return response;
};

export { createDashboardTemplate, updateDashboardTemplate, deleteDashboardTemplate };
