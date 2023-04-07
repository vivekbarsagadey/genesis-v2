import ProjectEditComponent from '.'

const page = ({ params }) => {
  const id =params.id
  return (
    <div>
        <ProjectEditComponent   id={id} />
    </div>
  )
}

export default page