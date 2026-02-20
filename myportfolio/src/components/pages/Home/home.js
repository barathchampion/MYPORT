
import React from 'react';
import { useOutletContext } from "react-router-dom";
import Styler from './style.js';

const Home = () => {
  // Get mode from outlet context
  const { mode } = useOutletContext();
  
  return (
    <Styler mode={mode}>
      <div className={`home-container ${mode ? 'light-mode' : 'dark-mode'}`}>
        {/* Main content */}
        <div className="content">
          {/* Profile section */}
          <div className="profile-section">
            <div className="avatar-container">
              <div className="avatar-glow"></div>
              <div className="avatar">
                <span className="avatar-emoji">👨‍💻</span>
              </div>
            </div>
            <h1 className={`glowing-text ${mode ? 'light-text' : 'dark-text'}`}>
              Hi, I'm <span className="highlight">Barathlin</span>
            </h1>
            <h2 className={`subtitle ${mode ? 'light-subtitle' : 'dark-subtitle'}`}>
              Frontend Developer
            </h2>
            <p className={`bio ${mode ? 'light-bio' : 'dark-bio'}`}>
              Crafting beautiful, responsive, and user-friendly web experiences 
              with modern technologies.
            </p>
          </div>

          {/* Skills section */}
          <div className="skills-section">
            <h3 className={`section-title ${mode ? 'light-section-title' : 'dark-section-title'}`}>
              Tech Stack
            </h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className={`skill-card ${mode ? 'light-skill-card' : 'dark-skill-card'}`}>
                  <div className="skill-icon">{skill.icon}</div>
                  <span className={`skill-name ${mode ? 'light-skill-name' : 'dark-skill-name'}`}>
                    {skill.name}
                  </span>
                  <div 
                    className={`skill-level ${mode ? 'light-skill-level' : 'dark-skill-level'}`} 
                    style={{width: `${skill.level}%`}}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured work preview */}
          <div className="featured-section">
            <h3 className={`section-title ${mode ? 'light-section-title' : 'dark-section-title'}`}>
              Featured Projects
            </h3>
            <div className="projects-grid">
              {featuredProjects.map((project, index) => (
                <div key={index} className={`project-card ${mode ? 'light-project-card' : 'dark-project-card'}`}>
                  <div className="project-image">{project.emoji}</div>
                  <h4 className={`project-title ${mode ? 'light-project-title' : 'dark-project-title'}`}>
                    {project.title}
                  </h4>
                  <p className={`project-description ${mode ? 'light-project-description' : 'dark-project-description'}`}>
                    {project.description}
                  </p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className={`tag ${mode ? 'light-tag' : 'dark-tag'}`}>{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="cta-section">
            <button className={`cta-button primary ${mode ? 'light-primary' : 'dark-primary'}`}>
              <span className="button-text">View My Work</span>
              <span className="button-icon">→</span>
            </button>
            <button className={`cta-button secondary ${mode ? 'light-secondary' : 'dark-secondary'}`}>
              <span className="button-text">Contact Me</span>
            </button>
          </div>

          {/* Social links */}
          {/* <div className="social-links">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.url} 
                className={`social-link ${mode ? 'light-social-link' : 'dark-social-link'}`} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div> */}
        </div>
      </div>
    </Styler>
  );
};

// Data arrays
const skills = [
  { name: 'React', icon: '⚛️', level: 90 },
  { name: 'JavaScript', icon: '📜', level: 85 },
  { name: 'TypeScript', icon: '🔷', level: 80 },
  { name: 'HTML5', icon: '🌐', level: 95 },
  { name: 'CSS3', icon: '🎨', level: 90 },
  { name: 'Next.js', icon: '▲', level: 75 },
  { name: 'Tailwind', icon: '🌊', level: 85 },
  { name: 'Vue.js', icon: '🖖', level: 70 },
];

const featuredProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with real-time inventory',
    emoji: '🛍️',
    tags: ['React', 'Node.js', 'MongoDB']
  },
  {
    title: 'Weather Dashboard',
    description: 'Beautiful weather app with interactive maps',
    emoji: '🌤️',
    tags: ['React', 'API', 'Charts']
  },
  {
    title: 'Task Manager',
    description: 'Productivity app with drag-and-drop functionality',
    emoji: '✅',
    tags: ['Vue.js', 'Vuex', 'Firebase']
  }
];

const socialLinks = [
  { icon: '📱', url: 'https://github.com' },
  { icon: '💼', url: 'https://linkedin.com' },
  { icon: '🐦', url: 'https://twitter.com' },
  { icon: '📧', url: 'mailto:email@example.com' }
];

export default Home;