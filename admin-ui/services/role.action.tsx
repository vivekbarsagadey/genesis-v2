const createRoles = async (roles) => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/roles`, {
		credentials: 'include',
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(roles),
	});
	return response;
};
const updateRoles = async (id, roles) => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/roles/${id}`, {
		credentials: 'include',
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(roles),
	});
	return response;
};

const deleteRoles = async (id) => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/roles/${id}`, {
		credentials: 'include',
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json' },
	});
	return response;
};

export { createRoles, updateRoles, deleteRoles };
