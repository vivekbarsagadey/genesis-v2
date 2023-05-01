import ProjectEditComponent from '.';

const page = ({ params }: any) => {
	const { id } = params;
	return <ProjectEditComponent id={id} />;
};

export default page;
