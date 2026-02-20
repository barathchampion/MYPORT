import React from 'react';
import { useOutletContext } from "react-router-dom";
import ProjectStyles from './style';

const Project = () => {
  const { mode } = useOutletContext();

  const projects = [
    {
      id: 1,
      title: "TracRight",
      tagline: "Real-Time Fleet Tracking",
      description: "Live tracking software for goods trucks and fleet management with real-time GPS monitoring.",
      emoji: "🚛",
      category: "Logistics",
      image: "🚚",
      features: [
        "Real-time GPS tracking",
        "Route optimization",
        "Geofencing alerts",
        "Driver analytics"
      ],
      techStack: ["React", "Node.js", "MongoDB", "WebSockets"],
      color: "#00d2ff",
      darkColor: "#ffd700",
      status: "Live",
      stats: {
        vehicles: "500+",
        accuracy: "99.9%"
      },
      links: {
        demo: "https://tracright-demo.com",
        caseStudy: "/case-studies/tracright"
      }
    },
    {
      id: 2,
      title: "Hasching",
      tagline: "Loan & Rental Platform",
      description: "Connect with lenders and find rental homes through a secure, verified platform.",
      emoji: "🏠",
      category: "FinTech",
      image: "💰",
      features: [
        "Loan comparison",
        "Property listings",
        "Eligibility calculator",
        "Secure messaging"
      ],
      techStack: ["React", "Next.js", "PostgreSQL", "TypeScript"],
      color: "#3a7bd5",
      darkColor: "#ffaa00",
      status: "Beta",
      stats: {
        users: "10K+",
        satisfaction: "94%"
      },
      links: {
        demo: "https://hasching-demo.com",
        caseStudy: "/case-studies/hasching"
      }
    },
    {
      id: 3,
      title: "Future Project",
      tagline: "Coming Soon",
      description: "An innovative solution in development. Stay tuned for updates!",
      emoji: "🚧",
      category: "In Development",
      image: "🔮",
      features: [
        "Feature planning",
        "UI/UX design",
        "Architecture setup",
        "Coming soon"
      ],
      techStack: ["TBD", "TBD", "TBD", "TBD"],
      color: "#888888",
      darkColor: "#cccccc",
      status: "Coming Soon",
      stats: {
        progress: "40%",
        eta: "2024"
      },
      links: {
        demo: "#",
        caseStudy: "#"
      }
    }
  ];

  const handleButtonClick = (link) => {
    if (link && link !== '#') {
      window.open(link, '_blank');
    }
  };

  return (
    <ProjectStyles mode={mode}>
      <div className={`projects-page ${mode ? 'light-mode' : 'dark-mode'}`}>
        <div className="projects-header">
          <h1 className="page-title">
            <span className="title-emoji">🚀</span>
            Featured Projects
          </h1>
          <p className="page-subtitle">
            Innovative solutions in logistics, fintech, and more
          </p>
        </div>

        <div className="projects-flex-container">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card ${index % 2 === 0 ? 'left' : 'right'}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="card-content">
                <div className="project-image-section">
                  <div className="project-image">
                    <span className="image-emoji">{project.image}</span>
                  </div>
                  <div className="project-icon">
                    <span className="icon-emoji">{project.emoji}</span>
                  </div>
                </div>

                <div className="project-info">
                  <h2 className="project-title">{project.title}</h2>
                  <p className="project-tagline">{project.tagline}</p>
                  
                  <div className="project-meta">
                    <span className="project-category">{project.category}</span>
                    <span className={`project-status status-${project.status.toLowerCase().replace(' ', '-')}`}>
                      <span className="status-dot"></span>
                      {project.status}
                    </span>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-features">
                    <h3 className="section-title">Features</h3>
                    <div className="features-list">
                      {project.features.map((feature, i) => (
                        <div key={i} className="feature-item">
                          <span className="feature-bullet">▹</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="project-tech">
                    <h3 className="section-title">Tech Stack</h3>
                    <div className="tech-list">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-stats">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="stat-item">
                        <span className="stat-value">{value}</span>
                        <span className="stat-label">{key}</span>
                      </div>
                    ))}
                  </div>

                  <div className="project-actions">
                    <button 
                      className="action-btn primary"
                      onClick={() => handleButtonClick(project.links.demo)}
                      disabled={project.links.demo === '#'}
                    >
                      Live Demo
                    </button>
                    <button 
                      className="action-btn secondary"
                      onClick={() => handleButtonClick(project.links.caseStudy)}
                      disabled={project.links.caseStudy === '#'}
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Simple CTA */}
        <div className="projects-cta">
          <h3>Interested in working together?</h3>
          <button className="cta-btn">Let's Talk</button>
        </div>
      </div>
    </ProjectStyles>
  );
};

export default Project;