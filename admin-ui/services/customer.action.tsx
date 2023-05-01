const createCustomer = async (customer) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/customer`, {
    credentials: 'include',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(customer),
  });
  return response;
};
const updateCustomer = async (id, customer) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/customer/${id}`,
    {
      credentials: 'include',
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(customer),
    }
  );
  return response;
};

const deleteCustomer = async (id) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/customer/${id}`,
    {
      credentials: 'include',
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    }
  );
  return response;
};

export { createCustomer, updateCustomer, deleteCustomer };
