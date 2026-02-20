// import styled from 'styled-components'

// const NavWrapper = styled.div`

// .navbarstyle {
 
//   position: fixed;
//   top: 0;
//   width: 100%;
//   border-bottom: 1px solid #dfdbd0;
//   padding: 15px;
//   z-index: 1000;
//   /* Frosted glass effect (basic) */
//   backdrop-filter: blur(10px);
// }
 
//    .nav_img {
//    width: 17%;
//     height: auto;
//     margin-right:10px;
//    }
//    .nav_img2 {
//    width: 26px;
//     height: auto;
//     margin-right:10px;
//     margin-bottom: 5px;
//    }
//    .nav_img3 {
//    width: 22px;
//     height: auto;

//    }
//    .yellowBg {
//       background-color: #f6f648;
//    }
//    .DarkBg {
//       background-color: #070707;
//       color: #ffffff;
//       border: #070707;
//    }

//    @media only screen and (max-width: 735px) {
//       .dnone {
//          display: none !important;
//       }
//       .iconer {
//          margin-right: 0px !important;
//          width: 50% !important;
//       }
//       .mr_none {
//          margin-right: 0px !important;
//       }
//    }
//    @media only screen and (max-width: 480px) {
//       .navbarstyle {
//          display: flex !important;
//          flex-wrap: wrap !important;
//          flex-direction: column !important;
//          align-items: center !important;
//          gap: 20px !important;
//       }
//    }
// `;

// export default NavWrapper;
import styled from 'styled-components';

const NavWrapper = styled.div`
  .navbarstyle {
    position: fixed;
    top: 0;
    width: 100%;
    border-bottom: ${props => props.mode === 'true' 
      ? '1px solid rgba(0, 0, 0, 0.1)' 
      : '1px solid rgba(255, 215, 0, 0.3)'};
    padding: 12px 20px;
    z-index: 1000;
    backdrop-filter: blur(10px);
    /* background: ${props => props.mode === 'true' 
      ? 'rgba(255, 255, 255, 0.95)' 
      : 'rgba(0, 0, 0, 0.95)'}; */
    transition: all 0.3s ease;
    box-shadow: ${props => props.mode === 'true' 
      ? '0 2px 10px rgba(0, 0, 0, 0.1)' 
      : '0 2px 20px rgba(255, 215, 0, 0.2)'};
  }

  /* Emoji Styles */
  .nav-emoji {
    font-size: 2rem;
    margin-right: 10px;
    filter: ${props => props.mode === 'true' ? 'none' : 'drop-shadow(0 0 5px rgba(255, 215, 0, 0.5))'};
    transition: all 0.3s ease;
  }

  .nav-emoji-small {
    font-size: 1.3rem;
    margin-right: 5px;
    filter: ${props => props.mode === 'true' ? 'none' : 'drop-shadow(0 0 3px rgba(255, 215, 0, 0.3))'};
    transition: all 0.3s ease;
  }

  .theme-icon {
    font-size: 1.2rem;
    margin-right: 5px;
  }

  /* Brand Button */
  .brand-button {
    background: transparent !important;
    border: none !important;
    padding: 8px 15px !important;
    transition: all 0.3s ease;
  }

  .brand-text {
    font-size: 1.1rem;
    font-weight: 600;
    background: ${props => props.mode === 'true' 
      ? 'linear-gradient(135deg, #00d2ff, #3a7bd5)' 
      : 'linear-gradient(135deg, #ffd700, #ffaa00)'};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease;
  }

  /* Navigation Buttons */
  .nav-button {
    background: ${props => props.mode === 'true' 
      ? 'rgba(255, 255, 255, 0.8)' 
      : 'rgba(0, 0, 0, 0.5)'} !important;
    border: 1px solid ${props => props.mode === 'true' 
      ? 'rgba(0, 0, 0, 0.1)' 
      : 'rgba(255, 215, 0, 0.3)'} !important;
    color: ${props => props.mode === 'true' ? '#000000' : '#ffd700'} !important;
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);
    padding: 8px 16px;
    display: flex;
    align-items: center;
    gap: 5px;
    
    &:hover {
      background: ${props => props.mode === 'true' 
        ? '#ffffff' 
        : 'rgba(255, 215, 0, 0.15)'} !important;
      border-color: ${props => props.mode === 'true' 
        ? '#00d2ff' 
        : '#ffd700'} !important;
      transform: translateY(-2px);
      box-shadow: ${props => props.mode === 'true' 
        ? '0 5px 15px rgba(0, 210, 255, 0.3)' 
        : '0 5px 15px rgba(255, 215, 0, 0.3)'};
      
      .nav-emoji-small {
        transform: scale(1.1);
      }
    }
  }

  .nav-text {
    font-weight: 500;
    letter-spacing: 0.5px;
  }

  /* GitHub Button */
  .github-button {
    padding: 8px 12px !important;
    
    &:hover {
      transform: translateY(-2px);
      
      .anticon-github {
        animation: spin 0.5s ease;
      }
    }
  }

  /* Theme Button */
  .theme-button {
    padding: 8px 16px !important;
    min-width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .yellowBg {
    background: linear-gradient(135deg, #ffd700, #ffaa00) !important;
    color: #000000 !important;
    border: none !important;
    box-shadow: 0 0 15px rgba(255, 215, 0, 0.5);
    
    &:hover {
      background: linear-gradient(135deg, #ffed4a, #ffbb00) !important;
      box-shadow: 0 0 25px rgba(255, 215, 0, 0.8);
    }
  }
  
  .DarkBg {
    background: linear-gradient(135deg, #2a2a2a, #1a1a1a) !important;
    color: #ffd700 !important;
    border: 1px solid rgba(255, 215, 0, 0.3) !important;
    box-shadow: 0 0 15px rgba(255, 215, 0, 0.2);
    
    &:hover {
      background: linear-gradient(135deg, #3a3a3a, #2a2a2a) !important;
      box-shadow: 0 0 25px rgba(255, 215, 0, 0.4);
      border-color: rgba(255, 215, 0, 0.5) !important;
    }
  }

  /* Animations */
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  /* Responsive Design */
  @media only screen and (max-width: 735px) {
    .dnone {
      display: none !important;
    }
    
    .nav-button {
      padding: 8px 12px !important;
    }
    
    .theme-button {
      min-width: 40px;
    }
    
    .nav-emoji-small {
      margin-right: 0;
    }
    
    .brand-text {
      font-size: 1rem;
    }
  }
  
  @media only screen and (max-width: 480px) {
    .navbarstyle {
      display: flex !important;
      flex-wrap: wrap !important;
      flex-direction: column !important;
      align-items: center !important;
      gap: 15px !important;
      padding: 10px !important;
    }
    
    .nav-emoji {
      font-size: 1.8rem;
    }
    
    .nav-button {
      padding: 6px 10px !important;
    }
  }
`;

export default NavWrapper;