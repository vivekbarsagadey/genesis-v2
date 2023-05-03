const createCompany = async (company) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/companies`, {
    credentials: 'include',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(company),
  });
  return response;
};
const updateCompany = async (id, company) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/companies/${id}`,
    {
      credentials: 'include',
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(company),
    },
  );
  return response;
};

const deleteCompany = async (id) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/companies/${id}`,
    {
      credentials: 'include',
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    },
  );
  // console.log("this is createBranch Deleted",response);

  return response;
};
export { createCompany, updateCompany, deleteCompany };
