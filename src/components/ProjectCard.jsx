function ProjectCard({ project }) {
  return (
    <div className="card">
      <img src={project.main_img} alt={project.title} />

      <h2>{project.title}</h2>

      <a href={project.live_url} target="_blank">
        Visit Project
      </a>
    </div>
  );
}

export default ProjectCard;
