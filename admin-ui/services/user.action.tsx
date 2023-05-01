const createUser = async (user) => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
		credentials: 'include',
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(user),
	});
	return response;
};

const updateUser = async (id, user) => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/user/${id}`,
		{
			credentials: 'include',
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(user),
		},
	);
	return response;
};

const deleteUser = async (id) => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/user/${id}`,
		{
			credentials: 'include',
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
		},
	);
	return response;
};
export { createUser, updateUser, deleteUser };
