import React from 'react';

function Portfolio() {
  const projects = [
    { title: 'Project 1', url: 'https://github.com/username/project1', demo: 'https://project1.demo' },
    // Add more projects here
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div>
        {projects.map((project, index) => (
          <div key={index}>
            <h3>{project.title}</h3>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a> |
            <a href={project.url} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
