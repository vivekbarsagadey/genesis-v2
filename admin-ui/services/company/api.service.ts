

const findAll = (url:string) => fetch(`${process.env.NEXT_PUBLIC_API_URL}/${url}`).then(res => res.json());
const findById = (url:string, id:string) => fetch(`${process.env.NEXT_PUBLIC_API_URL}/${url}/${id}`).then(res => res.json());

export { findAll,findById }

