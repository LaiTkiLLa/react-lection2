export const ProjectList = ({projects}) => {
    return (
        <div className='containerCards'>
            {projects.map(projects => (
                <img src={projects.img} alt=""/>
            ))}
        </div>
    )
}