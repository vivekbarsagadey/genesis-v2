import ProjectEditComponent from '.'

const page = ({ params } : any) => {
  const id =params.id
  return (
    <>
        <ProjectEditComponent   id={id} />
    </>
  )
}

export default page