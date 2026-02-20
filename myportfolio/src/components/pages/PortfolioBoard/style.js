// import styled from "styled-components";

// const Wrapper = styled.div`
//   .DarkMode {
//     background-color: #131313;
//     color: #ffffff;
//     transition: background-color 0.3s ease, color 0.3s ease;
//   }

//   .LightMode {
//     background-color: #ffffff;
//     color: #131313;
//     transition: background-color 0.3s ease, color 0.3s ease;
//   }
// `;

// export default Wrapper;
import styled, { keyframes, createGlobalStyle } from "styled-components";

// Animation keyframes
const fly = keyframes`
  0% {
    transform: translate(0, 0) scale(1) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.8;
  }
  90% {
    opacity: 0.8;
  }
  100% {
    transform: translate(calc(100vw * var(--dx)), calc(-50vh * var(--dy))) scale(0.3) rotate(360deg);
    opacity: 0;
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-15px) translateX(8px);
  }
  50% {
    transform: translateY(8px) translateX(-8px);
  }
  75% {
    transform: translateY(-5px) translateX(5px);
  }
`;

const flicker = keyframes`
  0%, 100% {
    opacity: 0.8;
  }
  50% {
    opacity: 0.2;
  }
  75% {
    opacity: 0.6;
  }
`;

const rain = keyframes`
  0% {
    transform: translateY(-100vh);
  }
  100% {
    transform: translateY(100vh);
  }
`;

const searchlightMove = keyframes`
  0%, 100% {
    transform: rotate(-8deg) translateX(-50%);
    opacity: 0.3;
  }
  50% {
    transform: rotate(8deg) translateX(-50%);
    opacity: 0.6;
  }
`;

const fogMove = keyframes`
  0% {
    transform: translateX(-100%) translateY(0);
  }
  100% {
    transform: translateX(200%) translateY(-15%);
  }
`;

const batFly = keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg) scale(1);
    opacity: 0;
  }
  10% {
    opacity: 0.8;
  }
  90% {
    opacity: 0.8;
  }
  100% {
    transform: translate(calc(100vw * var(--dx)), calc(-30vh * var(--dy))) rotate(180deg) scale(0.5);
    opacity: 0;
  }
`;

// Global styles
export const GlobalThemeStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    transition: background-color 0.3s ease, color 0.3s ease;
    overflow-x: hidden;
  }

  body.dark-theme {
    background-color: #000000;
    color: #ffffff;
  }

  body.light-theme {
    background-color: #f5f7fa;
    color: #131313;
  }
`;

const Wrapper = styled.div`
  .DarkMode {
    background: radial-gradient(ellipse at bottom, #0a0a0a 0%, #000000 100%);
    color: #ffffff;
    transition: all 0.3s ease;
    position: relative;
    min-height: 100vh;
    overflow-x: hidden;
  }

  .LightMode {
    background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
    color: #131313;
    transition: all 0.3s ease;
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* Batman-themed background elements - only show in dark mode */
  .batman-bg-elements {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 1;
    overflow: hidden;
  }

  /* Gotham City Skyline */
  .gotham-skyline {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(180deg, transparent 0%, #0a0a0a 100%);
    z-index: 2;
    
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      background: repeating-linear-gradient(
        90deg,
        #1a1a1a 0px,
        #1a1a1a 25px,
        #2a2a2a 25px,
        #2a2a2a 50px
      );
      clip-path: polygon(
        0% 100%, 4% 35%, 8% 55%, 12% 25%, 16% 65%, 20% 35%, 24% 75%,
        28% 45%, 32% 85%, 36% 55%, 40% 25%, 44% 65%, 48% 35%, 52% 75%,
        56% 45%, 60% 85%, 64% 35%, 68% 65%, 72% 25%, 76% 55%, 80% 35%,
        84% 75%, 88% 45%, 92% 85%, 96% 55%, 100% 35%, 100% 100%
      );
      opacity: 0.4;
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      background: repeating-linear-gradient(
        90deg,
        transparent,
        transparent 35px,
        rgba(255, 215, 0, 0.15) 35px,
        rgba(255, 215, 0, 0.15) 36px
      );
      animation: ${flicker} 5s infinite;
    }
  }

  /* Floating Bats on buildings */
  .floating-bats {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
  }

  .bat {
    position: absolute;
    width: 35px;
    height: 25px;
    background: rgba(40, 40, 40, 0.9);
    clip-path: path('M17.5,0 C23,6 28,6 35,0 C32,10 28,15 17.5,15 C7,15 3,10 0,0 C6,6 12,6 17.5,0');
    opacity: 0.7;
    animation: ${float} 12s ease-in-out infinite;
    filter: drop-shadow(0 0 5px rgba(255, 215, 0, 0.3));
    
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      background: inherit;
      transform: translate(-50%, -50%) scaleX(-1);
      opacity: 0.3;
    }
  }

  /* Bat Signal */
  .bat-signal-container {
    position: absolute;
    top: 15%;
    right: 8%;
    width: 200px;
    height: 200px;
    z-index: 4;
    animation: ${float} 10s ease-in-out infinite;
  }

  .bat-signal-beam {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, transparent 70%);
    box-shadow: 0 0 150px rgba(255, 215, 0, 0.4);
    animation: ${flicker} 4s infinite;
  }

  .bat-signal-logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 5rem;
    color: rgba(255, 215, 0, 0.4);
    text-shadow: 0 0 40px rgba(255, 215, 0, 0.6);
    animation: ${flicker} 3s infinite;
    filter: blur(1px);
  }

  /* Searchlight */
  .searchlight {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 300px;
    height: 100vh;
    background: linear-gradient(
      180deg,
      rgba(255, 215, 0, 0.15) 0%,
      transparent 80%
    );
    animation: ${searchlightMove} 15s ease-in-out infinite;
    transform-origin: top center;
    filter: blur(70px);
    z-index: 3;
  }

  /* Gotham Fog */
  .gotham-fog {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(100, 100, 100, 0.15) 30%,
      rgba(150, 150, 150, 0.15) 50%,
      rgba(100, 100, 100, 0.15) 70%,
      transparent 100%
    );
    animation: ${fogMove} 30s linear infinite;
    pointer-events: none;
    z-index: 4;
  }

  /* Rain Effect */
  .gotham-rain {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
      transparent,
      transparent 4px,
      rgba(255, 215, 0, 0.05) 4px,
      rgba(255, 215, 0, 0.05) 8px
    );
    animation: ${rain} 20s linear infinite;
    opacity: 0.3;
    z-index: 3;
    pointer-events: none;
  }

  /* Distant Flying Bats */
  .distant-bats {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
  }

  .distant-bat {
    position: absolute;
    width: 20px;
    height: 15px;
    background: rgba(255, 215, 0, 0.2);
    clip-path: path('M10,0 C13,3 16,3 20,0 C18,5 16,8 10,8 C4,8 2,5 0,0 C3,3 7,3 10,0');
    animation: ${batFly} 25s linear infinite;
    filter: blur(1px);
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.2);
  }

  /* Main content area */
  .main-content {
    position: relative;
    z-index: 10;
    min-height: calc(100vh - 200px);
    /* padding-top: 80px; */
  }

  /* Dark mode specific styles */
  .DarkMode {
    .main-content {
      color: #ffffff;
    }
    
    h1, h2, h3, h4, h5, h6 {
      color: #ffffff;
      text-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
    }
    
    p {
      color: rgba(255, 255, 255, 0.9);
    }
  }

  /* Light mode specific styles */
  .LightMode {
    .main-content {
      color: #131313;
    }
    
    h1, h2, h3, h4, h5, h6 {
      color: #131313;
    }
    
    p {
      color: #333333;
    }
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .bat-signal-container {
      width: 120px;
      height: 120px;
      top: 10%;
      right: 5%;
    }
    
    .bat-signal-logo {
      font-size: 3rem;
    }
    
    .gotham-skyline {
      height: 150px;
    }
    
    .searchlight {
      width: 200px;
      filter: blur(50px);
    }
    
    .bat {
      width: 25px;
      height: 18px;
    }
  }

  @media (max-width: 480px) {
    .bat-signal-container {
      width: 80px;
      height: 80px;
    }
    
    .bat-signal-logo {
      font-size: 2rem;
    }
    
    .gotham-skyline {
      height: 100px;
    }
    
    .searchlight {
      width: 150px;
      filter: blur(40px);
    }
    
    .bat {
      width: 20px;
      height: 14px;
    }
  }
`;

export default Wrapper;