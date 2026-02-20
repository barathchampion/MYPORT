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

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const AboutStyles = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

  .about-page {
    min-height: 100vh;
    font-family: 'Space Grotesk', sans-serif;
    padding: 2rem;
    padding-top: 100px;
    transition: all 0.3s ease;
  }

  /* Light Mode */
  .about-page.light-mode {
    background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
    color: #131313;

    .profile-header {
      background: white;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .stat-card {
      background: white;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    }

    .timeline-content {
      background: white;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
    }

    .skill-item {
      background: rgba(0, 210, 255, 0.1);
      border: 1px solid rgba(0, 210, 255, 0.2);
      color: #0066cc;
    }

    .category-title {
      color: #00d2ff;
    }

    .timeline-marker {
      background: white;
      border: 2px solid #00d2ff;
    }
  }

  /* Dark Mode */
  .about-page.dark-mode {
    background: transparent;
    color: #ffffff;

    .profile-header {
      background: rgba(0, 0, 0, 0.8);
      border: 1px solid rgba(255, 215, 0, 0.2);
      backdrop-filter: blur(10px);
    }

    .stat-card {
      background: rgba(0, 0, 0, 0.8);
      border: 1px solid rgba(255, 215, 0, 0.2);
      backdrop-filter: blur(10px);
    }

    .timeline-content {
      background: rgba(0, 0, 0, 0.8);
      border: 1px solid rgba(255, 215, 0, 0.2);
      backdrop-filter: blur(10px);
    }

    .skill-item {
      background: rgba(255, 215, 0, 0.1);
      border: 1px solid rgba(255, 215, 0, 0.2);
      color: #ffd700;
    }

    .category-title {
      color: #ffd700;
    }

    .timeline-marker {
      background: #000;
      border: 2px solid #ffd700;
    }

    .about-cta {
      background: rgba(0, 0, 0, 0.8);
      border: 1px solid rgba(255, 215, 0, 0.2);
    }
  }

  /* Profile Header */
  .profile-header {
    max-width: 800px;
    margin: 0 auto 3rem;
    padding: 2rem;
    border-radius: 30px;
    display: flex;
    gap: 2rem;
    align-items: center;
    animation: ${fadeIn} 0.6s ease;
  }

  .profile-avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: linear-gradient(135deg, #00d2ff, #3a7bd5);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${float} 4s ease-in-out infinite;
  }

  .dark-mode .profile-avatar {
    background: linear-gradient(135deg, #ffd700, #ffaa00);
  }

  .avatar-emoji {
    font-size: 3.5rem;
  }

  .profile-summary {
    flex: 1;
  }

  .profile-name {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.3rem;
  }

  .profile-role {
    font-size: 1.1rem;
    opacity: 0.9;
    margin-bottom: 0.8rem;
  }

  .profile-bio {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1rem;
    opacity: 0.9;
  }

  .profile-contact {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.9rem;
    opacity: 0.8;
  }

  .contact-icon {
    font-size: 1rem;
  }

  .fun-fact {
    font-size: 0.9rem;
    font-style: italic;
    padding: 0.4rem 1rem;
    border-radius: 50px;
    background: rgba(128, 128, 128, 0.1);
    display: inline-block;
  }

  /* Stats Container */
  .stats-container {
    max-width: 800px;
    margin: 0 auto 3rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    animation: ${fadeIn} 0.6s ease 0.1s both;
  }

  .stat-card {
    padding: 1.2rem;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: all 0.3s ease;
  }

  .stat-card:hover {
    transform: translateY(-5px);
  }

  .stat-icon {
    font-size: 2rem;
    animation: ${float} 3s ease-in-out infinite;
  }

  .stat-info {
    display: flex;
    flex-direction: column;
  }

  .stat-value {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.2;
  }

  .stat-label {
    font-size: 0.8rem;
    opacity: 0.7;
  }

  /* Section Title */
  .section-title {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .title-icon {
    font-size: 2rem;
    animation: ${float} 3s ease-in-out infinite;
  }

  /* Timeline Section */
  .timeline-section {
    max-width: 800px;
    margin: 0 auto 3rem;
    animation: ${fadeIn} 0.6s ease 0.2s both;
  }

  .timeline-container {
    position: relative;
    padding-left: 2rem;
  }

  .timeline-container::before {
    content: '';
    position: absolute;
    left: 1rem;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${props => props.mode ? 'rgba(0, 210, 255, 0.3)' : 'rgba(255, 215, 0, 0.3)'};
  }

  .timeline-item {
    position: relative;
    margin-bottom: 2rem;
    animation: ${slideIn} 0.5s ease;
    animation-fill-mode: both;
  }

  .timeline-item:nth-child(1) { animation-delay: 0.1s; }
  .timeline-item:nth-child(2) { animation-delay: 0.2s; }
  .timeline-item:nth-child(3) { animation-delay: 0.3s; }
  .timeline-item:nth-child(4) { animation-delay: 0.4s; }

  .timeline-marker {
    position: absolute;
    left: -2rem;
    top: 0;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    box-shadow: 0 0 20px var(--item-color);
    transition: all 0.3s ease;
  }

  .timeline-marker:hover {
    transform: scale(1.1);
    box-shadow: 0 0 30px var(--item-color);
  }

  .marker-icon {
    font-size: 1.2rem;
  }

  .timeline-content {
    padding: 1.5rem;
    border-radius: 20px;
    transition: all 0.3s ease;
    margin-left: 1rem;
  }

  .timeline-content:hover {
    transform: translateX(5px);
  }

  .timeline-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .timeline-title {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .timeline-period {
    font-size: 0.8rem;
    padding: 0.3rem 1rem;
    border-radius: 50px;
    background: rgba(128, 128, 128, 0.1);
    font-weight: 500;
  }

  .timeline-subtitle,
  .timeline-location {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
    opacity: 0.8;
  }

  .timeline-description {
    font-size: 0.9rem;
    line-height: 1.5;
    margin: 0.8rem 0;
    opacity: 0.9;
  }

  .timeline-achievements {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .achievement-badge {
    font-size: 0.75rem;
    padding: 0.3rem 1rem;
    border-radius: 50px;
    background: rgba(128, 128, 128, 0.1);
    border: 1px solid rgba(128, 128, 128, 0.2);
  }

  /* Skills Section */
  .skills-section {
    max-width: 800px;
    margin: 0 auto 3rem;
    animation: ${fadeIn} 0.6s ease 0.3s both;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .skill-category {
    padding: 1.5rem;
    border-radius: 20px;
    background: rgba(128, 128, 128, 0.05);
  }

  .category-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  .category-icon {
    font-size: 1.3rem;
  }

  .skill-items {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .skill-item {
    padding: 0.4rem 1rem;
    border-radius: 50px;
    font-size: 0.85rem;
    transition: all 0.3s ease;
  }

  .skill-item:hover {
    transform: scale(1.05);
  }

  /* CTA Section */
  .about-cta {
    max-width: 600px;
    margin: 3rem auto 0;
    padding: 2rem;
    border-radius: 30px;
    text-align: center;
    background: rgba(128, 128, 128, 0.05);
    backdrop-filter: blur(10px);
    animation: ${fadeIn} 0.6s ease 0.4s both;
  }

  .about-cta h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .about-cta p {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    opacity: 0.9;
  }

  .cta-button {
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    background: ${props => props.mode ? 'linear-gradient(135deg, #00d2ff, #3a7bd5)' : 'linear-gradient(135deg, #ffd700, #ffaa00)'};
    color: ${props => props.mode ? 'white' : '#000000'};
    transition: all 0.3s ease;
  }

  .cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px ${props => props.mode ? 'rgba(0, 210, 255, 0.4)' : 'rgba(255, 215, 0, 0.4)'};
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .about-page {
      padding: 1rem;
      padding-top: 90px;
    }

    .profile-header {
      flex-direction: column;
      text-align: center;
      padding: 1.5rem;
    }

    .profile-contact {
      justify-content: center;
    }

    .stats-container {
      grid-template-columns: repeat(2, 1fr);
    }

    .skills-grid {
      grid-template-columns: 1fr;
    }

    .timeline-container {
      padding-left: 1.5rem;
    }

    .timeline-header {
      flex-direction: column;
      align-items: flex-start;
    }

    .timeline-marker {
      width: 2rem;
      height: 2rem;
      left: -1.5rem;
    }

    .marker-icon {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    .profile-name {
      font-size: 1.6rem;
    }

    .profile-avatar {
      width: 100px;
      height: 100px;
    }

    .avatar-emoji {
      font-size: 3rem;
    }

    .stats-container {
      grid-template-columns: 1fr;
    }

    .stat-card {
      justify-content: center;
    }

    .section-title {
      font-size: 1.5rem;
    }

    .timeline-content {
      padding: 1rem;
    }

    .timeline-achievements {
      flex-direction: column;
    }

    .achievement-badge {
      text-align: center;
    }
  }
`;

export default AboutStyles;