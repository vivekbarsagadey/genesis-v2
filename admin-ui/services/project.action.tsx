const createProject = async (projects) => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
		credentials: 'include',
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(projects),
	});
	return response;
};
const updateProject = async (id, projects) => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/projects/${id}`,
		{
			credentials: 'include',
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(projects),
		},
	);
	return response;
};

const deleteProject = async (id) => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/projects/${id}`,
		{
			credentials: 'include',
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
		},
	);
	return response;
};
export { createProject, updateProject, deleteProject };
