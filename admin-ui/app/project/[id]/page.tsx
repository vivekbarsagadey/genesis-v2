import ProjectEditComponent from '.'

const page = ({ params }) => {
  const id =params.id
  return (
    <>
        <ProjectEditComponent   id={id} />
    </>
  )
}

export default page