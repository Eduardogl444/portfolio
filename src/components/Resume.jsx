import React from 'react';

function Resume() {
  const proficiencies = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML'];

  return (
    <section>
      <h2>Resume</h2>
      <a href="path/to/resume.pdf" download>Download Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        {proficiencies.map((proficiency, index) => (
          <li key={index}>{proficiency}</li>
        ))}
      </ul>
    </section>
  );
}

export default Resume;
