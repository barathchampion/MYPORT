
// import styled from "styled-components";

// const Styler= styled.div`

// @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

// .home-container {
//   min-height: 100vh;
//   background: inherit;
//   /* background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%); */
//   font-family: 'Space Grotesk', sans-serif;
//   color: inherit;
//   /* color: white; */
//   position: relative;
//   overflow-x: hidden;
//   transition: background-color 0.3s ease, color 0.3s ease;
// }

// /* Light mode styles */
// .home-container.light-mode {
//   background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
//   /* color: #333; */
//    color: inherit;
// }

// /* Stars Animation - only for dark mode */
// @keyframes move-twink-back {
//   from {background-position: 0 0;}
//   to {background-position: -10000px 5000px;}
// }

// @keyframes move-clouds-back {
//   from {background-position: 0 0;}
//   to {background-position: 10000px 0;}
// }

// .stars, .twinkling, .clouds {
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   width: 100%;
//   height: 100%;
//   display: block;
// }

// .stars {
//   /* background: #000 url('http://www.script-tutorials.com/demos/360/images/stars.png') repeat top center; */
//   z-index: 0;
// }

// .twinkling {
//   /* background: transparent url('http://www.script-tutorials.com/demos/360/images/twinkling.png') repeat top center; */
//   z-index: 1;
//   animation: move-twink-back 200s linear infinite;
// }

// .clouds {
//   /* background: transparent url('http://www.script-tutorials.com/demos/360/images/clouds3.png') repeat top center; */
//   z-index: 2;
//   opacity: 0.4;
//   animation: move-clouds-back 200s linear infinite;
// }

// /* Main Content */
// .content {
//   position: relative;
//   z-index: 3;
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 2rem;
//   padding-top: 4rem;
// }

// /* Profile Section */
// .profile-section {
//   text-align: center;
//   margin-bottom: 4rem;
//   animation: fadeInUp 1s ease;
// }

// .avatar-container {
//   position: relative;
//   width: 150px;
//   height: 150px;
//   margin: 0 auto 2rem;
// }

// .avatar {
//   width: 100%;
//   height: 100%;
//   background: linear-gradient(45deg, #00d2ff, #3a7bd5);
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 4rem;
//   position: relative;
//   z-index: 2;
//   animation: float 6s ease-in-out infinite;
//   box-shadow: 0 0 30px rgba(0, 210, 255, 0.3);
// }

// .light-mode .avatar {
//   box-shadow: 0 0 30px rgba(0, 210, 255, 0.2);
// }

// .avatar-glow {
//   position: absolute;
//   top: -10px;
//   left: -10px;
//   right: -10px;
//   bottom: -10px;
//   background: linear-gradient(45deg, #00d2ff, #3a7bd5);
//   border-radius: 50%;
//   filter: blur(20px);
//   opacity: 0.7;
//   z-index: 1;
//   animation: pulse 3s ease-in-out infinite;
// }

// .avatar-emoji {
//   filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
// }

// /* Typography */
// .glowing-text {
//   font-size: 3rem;
//   margin-bottom: 0.5rem;
//   text-shadow: 0 0 10px rgba(0, 210, 255, 0.5);
//   animation: fadeInUp 1s ease 0.2s both;
//   transition: color 0.3s ease;
// }

// .glowing-text.light-text {
//   /* color: #333; */
//    color: inherit;
//   text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// }

// .highlight {
//   background: linear-gradient(45deg, #00d2ff, #3a7bd5);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-clip: text;
// }

// .subtitle {
//   font-size: 1.5rem;
//   /* color: rgba(255, 255, 255, 0.8); */
//  color: inherit;
//   margin-bottom: 1rem;
//   animation: fadeInUp 1s ease 0.4s both;
//   transition: color 0.3s ease;
// }

// .subtitle.light-subtitle {
//   /* color: #666; */
//    color: inherit;
// }

// .bio {
//   max-width: 600px;
//   margin: 0 auto;
//   /* color: rgba(255, 255, 255, 0.7); */
//    color: inherit;
//   line-height: 1.6;
//   animation: fadeInUp 1s ease 0.6s both;
//   transition: color 0.3s ease;
// }

// .bio.light-bio {
//   /* color: #555; */
//    color: inherit;
// }

// /* Skills Section */
// .skills-section {
//   margin-bottom: 4rem;
//   animation: fadeInUp 1s ease 0.8s both;
// }

// .section-title {
//   font-size: 2rem;
//   text-align: center;
//   margin-bottom: 2rem;
//   background: linear-gradient(45deg, #fff, #00d2ff);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-clip: text;
//   transition: all 0.3s ease;
// }

// .section-title.light-section-title {
//   background: linear-gradient(45deg, #333, #00d2ff);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-clip: text;
// }

// .skills-grid {
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
//   gap: 1.5rem;
//   padding: 1rem;
// }

// .skill-card {
//   background: rgba(255, 255, 255, 0.05);
//   backdrop-filter: blur(10px);
//   /* border: 1px solid rgba(255, 255, 255, 0.1); */
//    border: 1px solid rgba(124, 193, 187, 0.85);
//   border-radius: 15px;
//   padding: 1.5rem 1rem;
//   text-align: center;
//   position: relative;
//   overflow: hidden;
//   transition: all 0.3s ease;
//   cursor: pointer;
// }

// .skill-card.light-skill-card {
//   background: white;
//   border: 1px solid rgba(0, 0, 0, 0.1);
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// }

// .skill-card:hover {
//   transform: translateY(-5px);
//   box-shadow: 0 10px 30px rgba(0, 210, 255, 0.2);
//   border-color: rgba(0, 210, 255, 0.5);
// }

// .skill-card.light-skill-card:hover {
//   box-shadow: 0 10px 30px rgba(0, 210, 255, 0.3);
// }

// .skill-icon {
//   font-size: 2.5rem;
//   margin-bottom: 0.5rem;
//   animation: float 3s ease-in-out infinite;
// }

// .skill-name {
//   display: block;
//   font-weight: 500;
//   margin-bottom: 0.5rem;
//   /* color: white; */
//    color: inherit;
//   transition: color 0.3s ease;
// }

// .skill-name.light-skill-name {
//   /* color: #333; */
//    color: inherit;
// }

// .skill-level {
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   height: 3px;
//   background: linear-gradient(90deg, #00d2ff, #3a7bd5);
//   transition: width 1s ease;
// }

// .skill-level.light-skill-level {
//   background: linear-gradient(90deg, #00d2ff, #0066cc);
// }

// /* Projects Section */
// .featured-section {
//   margin-bottom: 4rem;
//   animation: fadeInUp 1s ease 1s both;
// }

// .projects-grid {
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 2rem;
//   padding: 1rem;
// }

// .project-card {
//   background: rgba(255, 255, 255, 0.05);
//   backdrop-filter: blur(10px);
//   /* border: 1px solid rgba(255, 255, 255, 0.1);   */
//    border: 1px solid rgba(124, 193, 187, 0.85);
//   border-radius: 20px;
//   padding: 2rem;
//   transition: all 0.3s ease;
//   position: relative;
//   overflow: hidden;
// }

// .project-card.light-project-card {
//   background: white;
//   border: 1px solid rgba(0, 0, 0, 0.1);
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// }

// .project-card::before {
//   content: '';
//   position: absolute;
//   top: 0;
//   left: -100%;
//   width: 100%;
//   height: 100%;
//   background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
//   transition: left 0.5s ease;
// }

// .project-card:hover {
//   transform: translateY(-5px) scale(1.02);
//   box-shadow: 0 20px 40px rgba(0, 210, 255, 0.2);
//   border-color: rgba(0, 210, 255, 0.5);
// }

// .project-card.light-project-card:hover {
//   box-shadow: 0 20px 40px rgba(0, 210, 255, 0.3);
// }

// .project-card:hover::before {
//   left: 100%;
// }

// .project-image {
//   font-size: 3rem;
//   margin-bottom: 1rem;
// }

// .project-title {
//   font-size: 1.25rem;
//   margin-bottom: 0.5rem;
//   /* color: #fff; */
//    color: inherit;
//   transition: color 0.3s ease;
// }

// .project-title.light-project-title {
//   /* color: #333; */
//    color: inherit;
// }

// .project-description {
//   /* color: rgba(255, 255, 255, 0.7); */
//    color: inherit;
//   font-size: 0.9rem;
//   margin-bottom: 1rem;
//   line-height: 1.5;
//   transition: color 0.3s ease;
// }

// .project-description.light-project-description {
//   /* color: #666; */
//    color: inherit;
// }

// .project-tags {
//   display: flex;
//   flex-wrap: wrap;
//   gap: 0.5rem;
// }

// .tag {
//   background: rgba(0, 210, 255, 0.1);
//   border: 1px solid rgba(0, 210, 255, 0.3);
//   border-radius: 20px;
//   padding: 0.25rem 0.75rem;
//   font-size: 0.8rem;
//   /* color: #00d2ff; */
//    color: inherit;
//   transition: all 0.3s ease;
// }

// .tag.light-tag {
//   background: rgba(0, 210, 255, 0.1);
//   border: 1px solid rgba(0, 210, 255, 0.5);
//   /* color: #0066cc; */
//   color: inherit;
// }

// /* CTA Section */
// .cta-section {
//   display: flex;
//   justify-content: center;
//   gap: 1.5rem;
//   margin-bottom: 3rem;
//   animation: fadeInUp 1s ease 1.2s both;
// }

// .cta-button {
//   padding: 1rem 2rem;
//   border: none;
//   border-radius: 50px;
//   font-size: 1rem;
//   font-weight: 600;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   position: relative;
//   overflow: hidden;
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
// }

// .cta-button.primary {
//   background: linear-gradient(45deg, #00d2ff, #3a7bd5);
//   /* color: white; */
//   color: inherit;
//   box-shadow: 0 5px 20px rgba(0, 210, 255, 0.4);
// }

// .cta-button.primary.light-primary {
//   box-shadow: 0 5px 20px rgba(0, 210, 255, 0.3);
// }

// .cta-button.primary:hover {
//   transform: translateY(-2px);
//   box-shadow: 0 10px 30px rgba(0, 210, 255, 0.6);
// }

// .cta-button.secondary {
//   background: transparent;
//   border: 2px solid rgba(255, 255, 255, 0.3);
//    border: ${props => props.mode ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid #dfdbd0"};
//   /* color: white; */
//   color: inherit;
//   transition: all 0.3s ease;
// }

// .cta-button.secondary.light-secondary {
//   border: 2px solid rgba(0, 0, 0, 0.2);
//   /* color: #333; */
//   color: inherit;
// }

// .cta-button.secondary:hover {
//   border-color: #00d2ff;
//   background: rgba(0, 210, 255, 0.1);
//   transform: translateY(-2px);
// }

// .cta-button.secondary.light-secondary:hover {
//   background: rgba(0, 210, 255, 0.1);
//   border-color: #00d2ff;
//   /* color: #333; */
//   color: inherit;
// }

// .button-icon {
//   transition: transform 0.3s ease;
// }

// .cta-button:hover .button-icon {
//   transform: translateX(5px);
// }

// /* Social Links */
// .social-links {
//   display: flex;
//   justify-content: center;
//   gap: 2rem;
//   animation: fadeInUp 1s ease 1.4s both;
// }

// .social-link {
//   text-decoration: none;
//   font-size: 2rem;
//   /* color: white; */
//   color: inherit;
//   transition: all 0.3s ease;
//   position: relative;
// }

// .social-link.light-social-link {
//   /* color: #333; */
//   color: inherit;
// }

// .social-link:hover {
//   transform: translateY(-5px);
//   text-shadow: 0 0 20px #00d2ff;
// }

// .social-link.light-social-link:hover {
//   /* color: #00d2ff; */
//   color: inherit;
//   text-shadow: 0 0 20px rgba(0, 210, 255, 0.5);
// }

// /* Animations */
// @keyframes fadeInUp {
//   from {
//     opacity: 0;
//     transform: translateY(30px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// }

// @keyframes float {
//   0%, 100% {
//     transform: translateY(0);
//   }
//   50% {
//     transform: translateY(-10px);
//   }
// }

// @keyframes pulse {
//   0%, 100% {
//     opacity: 0.5;
//     transform: scale(1);
//   }
//   50% {
//     opacity: 0.8;
//     transform: scale(1.1);
//   }
// }

// /* Responsive Design */
// @media (max-width: 768px) {
//   .glowing-text {
//     font-size: 2rem;
//   }
  
//   .subtitle {
//     font-size: 1.25rem;
//   }
  
//   .skills-grid {
//     grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
//   }
  
//   .projects-grid {
//     grid-template-columns: 1fr;
//   }
  
//   .cta-section {
//     flex-direction: column;
//     align-items: center;
//   }
  
//   .cta-button {
//     width: 100%;
//     max-width: 300px;
//     justify-content: center;
//   }
  
// }

// @media (max-width: 480px) {
//   .content {
//     padding: 1rem;
//   }
  
//   .avatar-container {
//     width: 120px;
//     height: 120px;
//   }
  
//   .glowing-text {
//     font-size: 1.5rem;
//   }
  
//   .social-links {
//     gap: 1.5rem;
//   }
  
//   .social-link {
//     font-size: 1.5rem;
//   }

// }

// `;
// export default Styler;
import styled, { keyframes } from "styled-components";

// Animations
const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Styler = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .home-container {
    min-height: 100vh;
    font-family: 'Space Grotesk', sans-serif;
    position: relative;
    overflow-x: hidden;
    transition: all 0.3s ease;
  }

  /* LIGHT MODE STYLES */
  .home-container.light-mode {
    background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
    color: #131313;
  }

  .light-mode .glowing-text {
    color: #131313;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .light-mode .subtitle {
    color: #444;
  }

  .light-mode .bio {
    color: #555;
  }

  .light-mode .skill-card,
  .light-mode .project-card {
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .light-mode .skill-card:hover,
  .light-mode .project-card:hover {
    box-shadow: 0 10px 30px rgba(0, 210, 255, 0.2);
    border-color: rgba(0, 210, 255, 0.3);
  }

  .light-mode .skill-name {
    color: #333;
  }

  .light-mode .skill-level {
    background: linear-gradient(90deg, #00d2ff, #0066cc);
  }

  .light-mode .section-title {
    background: linear-gradient(45deg, #333, #00d2ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .light-mode .project-title {
    color: #333;
  }

  .light-mode .project-description {
    color: #666;
  }

  .light-mode .tag {
    background: rgba(0, 210, 255, 0.1);
    border: 1px solid rgba(0, 210, 255, 0.3);
    color: #0066cc;
  }

  .light-mode .cta-button.primary {
    background: linear-gradient(45deg, #00d2ff, #3a7bd5);
    color: white;
  }

  .light-mode .cta-button.secondary {
    border: 2px solid rgba(0, 0, 0, 0.2);
    color: #333;
  }

  .light-mode .cta-button.secondary:hover {
    background: rgba(0, 210, 255, 0.1);
    border-color: #00d2ff;
  }

  .light-mode .social-link {
    color: #333;
  }

  .light-mode .social-link:hover {
    color: #00d2ff;
    text-shadow: 0 0 20px rgba(0, 210, 255, 0.5);
  }

  /* DARK MODE STYLES - Batman Theme */
  .home-container.dark-mode {
    background: transparent;
    color: #ffffff;
  }

  .dark-mode .glowing-text {
    color: #ffffff;
    text-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
  }

  .dark-mode .subtitle {
    color: rgba(255, 255, 255, 0.9);
  }

  .dark-mode .bio {
    color: rgba(255, 255, 255, 0.8);
  }

  .dark-mode .skill-card,
  .dark-mode .project-card {
    background: rgba(0, 0, 0, 0.8);
    border: 1px solid rgba(255, 215, 0, 0.2);
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.1);
    backdrop-filter: blur(10px);
  }

  .dark-mode .skill-card:hover,
  .dark-mode .project-card:hover {
    border-color: rgba(255, 215, 0, 0.5);
    box-shadow: 0 0 30px rgba(255, 215, 0, 0.2);
  }

  .dark-mode .skill-name {
    color: #ffffff;
  }

  .dark-mode .skill-level {
    background: linear-gradient(90deg, #ffd700, #ffaa00);
  }

  .dark-mode .section-title {
    background: linear-gradient(45deg, #ffd700, #ffaa00);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .dark-mode .project-title {
    color: #ffffff;
  }

  .dark-mode .project-description {
    color: rgba(255, 255, 255, 0.9);
  }

  .dark-mode .tag {
    background: rgba(255, 215, 0, 0.1);
    border: 1px solid rgba(255, 215, 0, 0.3);
    color: #ffd700;
  }

  .dark-mode .cta-button.primary {
    background: linear-gradient(45deg, #ffd700, #ffaa00);
    color: #000000;
    box-shadow: 0 5px 20px rgba(255, 215, 0, 0.4);
  }

  .dark-mode .cta-button.secondary {
    border: 2px solid rgb(255, 184, 0);
    background-color: #000000;
    color: #ffffff;
  }

  .dark-mode .cta-button.secondary:hover {
    background: rgba(255, 215, 0, 0.1);
    border-color: #ffd700;
  }

  .dark-mode .social-link {
    color: #ffffff;
  }

  .dark-mode .social-link:hover {
    color: #ffd700;
    text-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
  }

  /* Common Styles */
  .content {
    position: relative;
    z-index: 10;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 2rem 0;
  }

  .profile-section {
    text-align: center;
    margin-bottom: 4rem;
    animation: ${fadeInUp} 1s ease;
  }

  .avatar-container {
    position: relative;
    width: 150px;
    height: 150px;
    margin: 0 auto 2rem;
  }

  .avatar {
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #00d2ff, #3a7bd5);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    position: relative;
    z-index: 2;
    animation: ${float} 6s ease-in-out infinite;
    box-shadow: 0 0 30px rgba(0, 210, 255, 0.3);
  }

  .dark-mode .avatar {
    box-shadow: 0 0 30px rgba(255, 215, 0, 0.3);
  }

  .light-mode .avatar {
    box-shadow: 0 0 30px rgba(0, 210, 255, 0.2);
  }

  .avatar-glow {
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: linear-gradient(45deg, #00d2ff, #3a7bd5);
    border-radius: 50%;
    filter: blur(20px);
    opacity: 0.7;
    z-index: 1;
    animation: ${pulse} 3s ease-in-out infinite;
  }

  .dark-mode .avatar-glow {
    background: linear-gradient(45deg, #ffd700, #ffaa00);
  }

  .avatar-emoji {
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
  }

  /* Typography */
  .glowing-text {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    transition: color 0.3s ease;
    animation: ${fadeInUp} 1s ease 0.2s both;
  }

  .highlight {
    background: linear-gradient(45deg, #00d2ff, #3a7bd5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .dark-mode .highlight {
    background: linear-gradient(45deg, #ffd700, #ffaa00);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .subtitle {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    animation: ${fadeInUp} 1s ease 0.4s both;
  }

  .bio {
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
    animation: ${fadeInUp} 1s ease 0.6s both;
  }

  /* Skills Section */
  .skills-section {
    margin-bottom: 4rem;
    animation: ${fadeInUp} 1s ease 0.8s both;
  }

  .section-title {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
    transition: all 0.3s ease;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5rem;
    padding: 1rem;
  }

  .skill-card {
    border-radius: 15px;
    padding: 1.5rem 1rem;
    text-align: center;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .skill-icon {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    animation: ${float} 3s ease-in-out infinite;
  }

  .skill-name {
    display: block;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .skill-level {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    transition: width 1s ease;
  }

  /* Projects Section */
  .featured-section {
    margin-bottom: 4rem;
    animation: ${fadeInUp} 1s ease 1s both;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 1rem;
  }

  .project-card {
    border-radius: 20px;
    padding: 2rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .project-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s ease;
  }

  .project-card:hover::before {
    left: 100%;
  }

  .project-image {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .project-title {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  .project-description {
    font-size: 0.9rem;
    margin-bottom: 1rem;
    line-height: 1.5;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tag {
    border-radius: 20px;
    padding: 0.25rem 0.75rem;
    font-size: 0.8rem;
    transition: all 0.3s ease;
  }

  /* CTA Section */
  .cta-section {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 3rem;
    animation: ${fadeInUp} 1s ease 1.2s both;
  }

  .cta-button {
    padding: 1rem 2rem;
    border: none;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .cta-button:hover {
    transform: translateY(-2px);
  }

  .button-icon {
    transition: transform 0.3s ease;
  }

  .cta-button:hover .button-icon {
    transform: translateX(5px);
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    animation: ${fadeInUp} 1s ease 1.4s both;
  }

  .social-link {
    text-decoration: none;
    font-size: 2rem;
    transition: all 0.3s ease;
    position: relative;
  }

  .social-link:hover {
    transform: translateY(-5px);
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .glowing-text {
      font-size: 2rem;
    }
    
    .subtitle {
      font-size: 1.25rem;
    }
    
    .skills-grid {
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    }
    
    .projects-grid {
      grid-template-columns: 1fr;
    }
    
    .cta-section {
      flex-direction: column;
      align-items: center;
    }
    
    .cta-button {
      width: 100%;
      max-width: 300px;
      justify-content: center;
    }
  }

  @media (max-width: 480px) {
    .content {
      padding: 1rem;
    }
    
    .avatar-container {
      width: 120px;
      height: 120px;
    }
    
    .glowing-text {
      font-size: 1.5rem;
    }
    
    .social-links {
      gap: 1.5rem;
    }
    
    .social-link {
      font-size: 1.5rem;
    }
  }
`;

export default Styler;