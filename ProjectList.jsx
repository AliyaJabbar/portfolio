

function ProjectList(){
    const name="john Doe";
    const profession="Full Stack Developer";
    
  const projects = [
    {
      title: "Project One",
      description: "A web application built using React and Node.js",
      link: "#"
    },
    {
      title: "Project Two",
      description: "An e-commerce platform built using React and Node.js",
      link: "#",
    },
  ];

return(
<section id="projects" className="projects-section">
<h2>Projects</h2>
<div className="projects-list">
  {projects.map((project, index) => (
    <div key={index} className="project-item">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.link} target='_blank' rel="noopener noreferre">View Project</a>
    </div>
  ))}
</div>
</section>);
}
export default ProjectList;
