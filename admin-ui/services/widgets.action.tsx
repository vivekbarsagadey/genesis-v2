const createWidgets = async (widgets) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/widgets`, {
      credentials: 'include',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(widgets),
  });
  return response;
}
const updateWidgets = async (id,widgets) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/widgets/${id}`, {
      credentials: 'include',
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(widgets),
  });
  return response;
}

const deleteWidgets = async (id) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/widgets/${id}`, {
      credentials: 'include',
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
  });
  // console.log("this is createBranch Deleted",response);

  return response;
}
export {createWidgets, updateWidgets ,deleteWidgets}
