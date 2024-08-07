import projectData from '../utils/projectdata.json'
import Project from '../components/Project';
export default function Portfolio() {

  return (
    <div>
      <h1>My Portfolio</h1>
      <p>
        {projectData.map(project=>(
          <Project project={project} key={project.name} />
        ))}
      </p>
    </div>
  );
}
