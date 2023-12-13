import React from 'react';
import { MOCK_PROJECTS } from './MockProjects';
import ProjectList from './ProjectList';
import { Project } from './Project';

function ProjectsPage() {
  const onSave = (project: Project) => {
    console.log('saving project');
  }

  return (
    <>
      <h1>Projects</h1>
        <ProjectList 
          projects={MOCK_PROJECTS} 
          onSave={onSave}
        />
    </>
  );
};

export default ProjectsPage;
