import data from "./data/projects.json";
import ProjectCard from "./components/ProjectCard";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>My Projects</h1>

      <div className="grid">
        {data.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default App;