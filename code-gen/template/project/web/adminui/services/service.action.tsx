
{% set service_Cap = service['name'].capitalize() -%}
{% set service_Sm = service['name'] -%}

{const create{{service_Cap}} = async ({{service_Sm}}) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/{{service_Sm}}`, {
    credentials: 'include',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({{service_Sm}}),
  });
  return response;
};
const update{{service_Cap}} = async (id, {{service_Sm}}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/{{service_Sm}}/${id}`,
    {
      credentials: 'include',
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({{service_Sm}}),
    },
  );
  return response;
};

const delete{{service_Cap}} = async (id) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/{{service_Sm}}/${id}`,
    {
      credentials: 'include',
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    },
  );
  // console.log("this is createBranch Deleted",response);

  return response;
};
export { create{{service_Cap}}, update{{service_Cap}}, delete{{service_Cap}} };}
