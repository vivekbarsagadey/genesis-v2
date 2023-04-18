import ICompany from "../company.model";

const deleteCompany = async (item: ICompany) => {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}\\companies/${item._id}`, {
    method: "DELETE",
  });
};

const createCompany = async (_company: ICompany) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(_company),
  };
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}\\companies`, requestOptions);
};

const updateCompany = async (newCompany: ICompany) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newCompany),
  };
  await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}\\companies/${newCompany._id}`,
    requestOptions
  );
};

export { deleteCompany, createCompany, updateCompany };
