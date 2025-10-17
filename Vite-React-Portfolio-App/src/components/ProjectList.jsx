function ProjectList(props) {
  // const projects = [
  //   {
  //     title: "Project 1",
  //     description: "Ecommerece Platform built using Spring Boot and React",
  //     link: "#",
  //   },
  //   {
  //     title: "Project 2",
  //     description: "Saloon appointment booking app built using MERN stack",
  //     link: "#",
  //   },
  // ];
  // const projects = props.project_list;  // Alternative way to access props
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-list">
        {props.project_list.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectList;
