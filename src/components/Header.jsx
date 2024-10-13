import React from 'react';

function Header({ currentSection, setCurrentSection }) {
  const sections = ['About', 'Portfolio', 'Contact', 'Resume'];

  return (
    <header>
      <h1>Developer's Name</h1>
      <nav>
        <ul>
          {sections.map((section) => (
            <li
              key={section}
              className={currentSection === section ? 'highlighted' : ''}
              onClick={() => setCurrentSection(section)}
            >
              {section}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
