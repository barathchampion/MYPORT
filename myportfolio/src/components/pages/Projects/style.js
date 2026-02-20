import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`;

const ProjectStyles = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

  .projects-page {
    min-height: 100vh;
    font-family: 'Space Grotesk', sans-serif;
    padding: 2rem;
    /* padding-top: 100px; */
    transition: all 0.3s ease;
  }

  /* Light Mode */
  .projects-page.light-mode {
    background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
    color: #131313;

    .project-card {
      background: white;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
    }

    .project-title {
      color: #131313;
    }

    .project-tagline {
      color: #00d2ff;
    }

    .tech-badge {
      background: rgba(0, 210, 255, 0.1);
      border: 1px solid rgba(0, 210, 255, 0.2);
      color: #0066cc;
    }

    .stat-value {
      color: #00d2ff;
    }

    .action-btn.primary {
      background: linear-gradient(135deg, #00d2ff, #3a7bd5);
      color: white;
      
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }

    .action-btn.secondary {
      border: 1px solid #00d2ff;
      color: #00d2ff;
      background: transparent;
      
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }

    .project-image {
      background: linear-gradient(135deg, rgba(0, 210, 255, 0.1), rgba(58, 123, 213, 0.1));
    }
  }

  /* Dark Mode */
  .projects-page.dark-mode {
    background: transparent;
    color: #ffffff;

    .project-card {
      background: rgba(0, 0, 0, 0.8);
      border: 1px solid rgba(255, 215, 0, 0.2);
      box-shadow: 0 5px 20px rgba(255, 215, 0, 0.1);
      backdrop-filter: blur(10px);
    }

    .project-title {
      color: #ffffff;
    }

    .project-tagline {
      color: #ffd700;
    }

    .tech-badge {
      background: rgba(255, 215, 0, 0.1);
      border: 1px solid rgba(255, 215, 0, 0.2);
      color: #ffd700;
    }

    .stat-value {
      color: #ffd700;
    }

    .action-btn.primary {
      background: linear-gradient(135deg, #ffd700, #ffaa00);
      color: #000000;
      
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }

    .action-btn.secondary {
      border: 1px solid #ffd700;
      color: #ffd700;
      background: transparent;
      
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }

    .project-image {
      background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 170, 0, 0.1));
    }
  }

  /* Header */
  .projects-header {
    text-align: center;
    /* margin-bottom: 3rem; */
    animation: ${fadeIn} 0.6s ease;
  }

  .page-title {
    font-size: 2.5rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .title-emoji {
    font-size: 2.5rem;
    animation: ${float} 3s ease-in-out infinite;
  }

  .page-subtitle {
    font-size: 1rem;
    opacity: 0.8;
  }

  /* Projects Flex Container */
  .projects-flex-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    padding: 1rem;
  }

  /* Project Card */
  .project-card {
    width: 100%;
    max-width: 380px;
    flex: 0 1 380px;
    border-radius: 20px;
    padding: 1.5rem;
    transition: all 0.3s ease;
    animation: ${fadeIn} 0.6s ease;
    animation-fill-mode: both;
  }

  .project-card:hover {
    transform: translateY(-5px);
  }

  /* Optional: Different styles for left/right if needed */
  .project-card.left {
    /* Any specific styles for left cards */
  }

  .project-card.right {
    /* Any specific styles for right cards */
  }

  .card-content {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  /* Image Section */
  .project-image-section {
    position: relative;
    display: flex;
    justify-content: center;
    margin-bottom: 0.5rem;
  }

  .project-image {
    width: 100px;
    height: 100px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  .project-card:hover .project-image {
    transform: scale(1.05) rotate(3deg);
  }

  .image-emoji {
    font-size: 3.5rem;
    animation: ${float} 4s ease-in-out infinite;
  }

  .project-icon {
    position: absolute;
    top: -5px;
    right: 30%;
    width: 35px;
    height: 35px;
    background: ${props => props.mode ? 'white' : 'rgba(0,0,0,0.8)'};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${props => props.mode ? '#00d2ff' : '#ffd700'};
  }

  .icon-emoji {
    font-size: 1.2rem;
  }

  /* Project Info */
  .project-info {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .project-title {
    font-size: 1.6rem;
    font-weight: 700;
    margin: 0;
  }

  .project-tagline {
    font-size: 0.9rem;
    font-weight: 500;
    margin: 0;
  }

  .project-meta {
    display: flex;
    gap: 0.8rem;
    align-items: center;
    flex-wrap: wrap;
  }

  .project-category {
    font-size: 0.75rem;
    padding: 0.3rem 0.8rem;
    border-radius: 50px;
    background: rgba(128, 128, 128, 0.1);
  }

  .project-status {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.75rem;
    padding: 0.3rem 0.8rem;
    border-radius: 50px;
    background: rgba(128, 128, 128, 0.1);
  }

  .status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    animation: ${pulse} 2s infinite;
  }

  .status-live .status-dot {
    background: #00ff00;
    box-shadow: 0 0 8px #00ff00;
  }

  .status-beta .status-dot {
    background: #ffaa00;
    box-shadow: 0 0 8px #ffaa00;
  }

  .status-coming-soon .status-dot {
    background: #888888;
    box-shadow: 0 0 8px #888888;
  }

  .project-description {
    font-size: 0.85rem;
    line-height: 1.5;
    opacity: 0.9;
    margin: 0;
  }

  /* Sections */
  .section-title {
    font-size: 0.9rem;
    font-weight: 600;
    margin: 0 0 0.5rem 0;
    opacity: 0.8;
  }

  /* Features */
  .features-list {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .feature-item {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.8rem;
  }

  .feature-bullet {
    color: ${props => props.mode ? '#00d2ff' : '#ffd700'};
    font-size: 0.9rem;
  }

  /* Tech Stack */
  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .tech-badge {
    padding: 0.2rem 0.6rem;
    border-radius: 50px;
    font-size: 0.7rem;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  .tech-badge:hover {
    transform: scale(1.05);
  }

  /* Stats */
  .project-stats {
    display: flex;
    gap: 1.5rem;
    margin: 0.3rem 0;
    flex-wrap: wrap;
  }

  .stat-item {
    text-align: center;
    flex: 1 1 auto;
  }

  .stat-value {
    font-size: 1.1rem;
    font-weight: 700;
    display: block;
  }

  .stat-label {
    font-size: 0.6rem;
    opacity: 0.7;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  /* Actions */
  .project-actions {
    display: flex;
    gap: 0.8rem;
    margin-top: 0.3rem;
  }

  .action-btn {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 50px;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    flex: 1;
    background: transparent;
  }

  .action-btn.primary:hover:not(:disabled),
  .action-btn.secondary:hover:not(:disabled) {
    transform: translateY(-2px);
  }

  /* CTA */
  .projects-cta {
    max-width: 400px;
    margin: 4rem auto 0;
    text-align: center;
    padding: 1.5rem;
    border-radius: 15px;
    background: rgba(0, 255, 231, 0.12);
    /* backdrop-filter: blur(10px); */
    animation: ${fadeIn} 0.6s ease 0.4s both;
  }

  .projects-cta h3 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  .cta-btn {
    padding: 0.6rem 1.5rem;
    border: none;
    border-radius: 50px;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    background: ${props => props.mode ? 'linear-gradient(135deg, #00d2ff, #3a7bd5)' : 'linear-gradient(135deg, #ffd700, #ffaa00)'};
    color: ${props => props.mode ? 'white' : '#000000'};
    transition: all 0.3s ease;
  }

  .cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px ${props => props.mode ? 'rgba(0, 210, 255, 0.3)' : 'rgba(255, 215, 0, 0.3)'};
  }

  /* Responsive */
  @media (max-width: 1200px) {
    .projects-flex-container {
      max-width: 900px;
    }
    
    .project-card {
      max-width: 350px;
      flex: 0 1 350px;
    }
  }

  @media (max-width: 768px) {
    .projects-page {
      padding: 1rem;
      /* padding-top: 90px; */
    }

    .projects-flex-container {
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
    }

    .project-card {
      max-width: 100%;
      width: 100%;
    }

    .page-title {
      font-size: 2rem;
    }

    .project-image {
      width: 80px;
      height: 80px;
    }

    .image-emoji {
      font-size: 2.8rem;
    }

    .project-icon {
      right: 35%;
    }
  }

  @media (max-width: 480px) {
    .project-title {
      font-size: 1.4rem;
    }

    .project-stats {
      gap: 1rem;
    }

    .project-actions {
      flex-direction: column;
    }

    .projects-cta {
      margin-top: 3rem;
      padding: 1.2rem;
    }
  }
`;

export default ProjectStyles;