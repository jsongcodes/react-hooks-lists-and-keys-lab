import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  // const projectItemComponent = ProjectItem.map((project) => {
  //   return <h1 key={project.id}></h1>
  // });
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map(p => <ProjectItem {...p} key={p.id} />)}
      </div>
    </div>
  );
}

export default ProjectList;
