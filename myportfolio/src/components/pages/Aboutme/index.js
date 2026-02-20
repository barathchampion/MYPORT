import React from 'react';
import { useOutletContext } from "react-router-dom";
import AboutStyles from './style';

const Aboutme = () => {
  const { mode } = useOutletContext();

  const personalInfo = {
    name: "Barathlin",
    role: "Frontend Developer",
    location: "Gotham City",
    email: "barathlin.dev@email.com",
    bio: "Passionate frontend developer with 5+ years of experience crafting beautiful, responsive, and user-friendly web applications. I thrive on solving complex problems and creating seamless user experiences.",
    funFact: "I code better at night, just like Batman! 🦇"
  };

  const timeline = [
    {
      id: 1,
      type: "education",
      title: "B.E. Computer Science",
      subtitle: "Anna University",
      location: "Chennai, India",
      period: "2015 - 2019",
      description: "Graduated with First Class distinction (85%). Specialized in web technologies and software engineering.",
      achievements: ["University Rank Holder", "Best Project Award", "Technical Club President"],
      icon: "🎓",
      color: "#00d2ff"
    },
    {
      id: 2,
      type: "work",
      title: "Senior Frontend Developer",
      subtitle: "TechCorp Solutions",
      location: "Bangalore, India",
      period: "2022 - Present",
      description: "Leading frontend development team in building scalable enterprise applications.",
      achievements: ["Led 5+ major React projects", "Mentored 4 junior developers", "40% faster deployments"],
      icon: "💼",
      color: "#3a7bd5"
    },
    {
      id: 3,
      type: "work",
      title: "Frontend Developer",
      subtitle: "InnovateLabs",
      location: "Chennai, India",
      period: "2019 - 2022",
      description: "Started as junior developer and grew to take ownership of multiple client projects.",
      achievements: ["Promoted in 18 months", "Rising Star Award 2021", "95+ Lighthouse score"],
      icon: "🚀",
      color: "#00d2ff"
    },
    {
      id: 4,
      type: "education",
      title: "Higher Secondary",
      subtitle: "St. John's Matriculation School",
      location: "Chennai, India",
      period: "2013 - 2015",
      description: "Computer Science stream with 92% aggregate.",
      achievements: ["School Topper in CS", "State Hackathon Participant"],
      icon: "📚",
      color: "#3a7bd5"
    }
  ];

  const skills = {
    frontend: ["React", "JavaScript", "TypeScript", "Next.js"],
    styling: ["Styled Components", "Tailwind", "CSS3", "SASS"],
    tools: ["Git", "Webpack", "Figma", "VS Code"],
    soft: ["Leadership", "Communication", "Problem Solving", "Team Work"]
  };

  const stats = [
    { value: "5+", label: "Years", icon: "⏳" },
    { value: "20+", label: "Projects", icon: "🚀" },
    { value: "10+", label: "Clients", icon: "🤝" },
    { value: "100%", label: "Satisfaction", icon: "⭐" }
  ];

  return (
    <AboutStyles mode={mode}>
      <div className={`about-page ${mode ? 'light-mode' : 'dark-mode'}`}>
        {/* Header with Profile Summary */}
        <div className="profile-header">
          <div className="profile-avatar">
            <span className="avatar-emoji">👨‍💻</span>
          </div>
          <div className="profile-summary">
            <h1 className="profile-name">{personalInfo.name}</h1>
            <p className="profile-role">{personalInfo.role}</p>
            <p className="profile-bio">{personalInfo.bio}</p>
            <div className="profile-contact">
              <span className="contact-item">
                <span className="contact-icon">📍</span>
                {personalInfo.location}
              </span>
              <span className="contact-item">
                <span className="contact-icon">📧</span>
                {personalInfo.email}
              </span>
            </div>
            <p className="fun-fact">{personalInfo.funFact}</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <span className="stat-icon">{stat.icon}</span>
              <div className="stat-info">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modern Timeline */}
        <div className="timeline-section">
          <h2 className="section-title">
            <span className="title-icon">📅</span>
            My Journey
          </h2>
          
          <div className="timeline-container">
            {timeline.map((item, index) => (
              <div key={item.id} className="timeline-item">
                <div className="timeline-marker" style={{ '--item-color': item.color }}>
                  <span className="marker-icon">{item.icon}</span>
                </div>
                
                <div className="timeline-content" style={{ '--item-color': item.color }}>
                  <div className="timeline-header">
                    <h3 className="timeline-title">{item.title}</h3>
                    <span className="timeline-period">{item.period}</span>
                  </div>
                  
                  <div className="timeline-subtitle">
                    <span className="subtitle-icon">🏢</span>
                    {item.subtitle}
                  </div>
                  
                  <div className="timeline-location">
                    <span className="location-icon">📍</span>
                    {item.location}
                  </div>
                  
                  <p className="timeline-description">{item.description}</p>
                  
                  <div className="timeline-achievements">
                    {item.achievements.map((achievement, i) => (
                      <span key={i} className="achievement-badge">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-section">
          <h2 className="section-title">
            <span className="title-icon">🛠️</span>
            Skills & Technologies
          </h2>
          
          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="category-title">
                <span className="category-icon">⚛️</span>
                Frontend
              </h3>
              <div className="skill-items">
                {skills.frontend.map((skill, i) => (
                  <span key={i} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
            
            <div className="skill-category">
              <h3 className="category-title">
                <span className="category-icon">🎨</span>
                Styling
              </h3>
              <div className="skill-items">
                {skills.styling.map((skill, i) => (
                  <span key={i} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
            
            <div className="skill-category">
              <h3 className="category-title">
                <span className="category-icon">🔧</span>
                Tools
              </h3>
              <div className="skill-items">
                {skills.tools.map((skill, i) => (
                  <span key={i} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
            
            <div className="skill-category">
              <h3 className="category-title">
                <span className="category-icon">💡</span>
                Soft Skills
              </h3>
              <div className="skill-items">
                {skills.soft.map((skill, i) => (
                  <span key={i} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="about-cta">
          <h3>Let's work together!</h3>
          <p>I'm currently available for freelance work and full-time opportunities.</p>
          <button className="cta-button">Get In Touch</button>
        </div>
      </div>
    </AboutStyles>
  );
};

export default Aboutme;