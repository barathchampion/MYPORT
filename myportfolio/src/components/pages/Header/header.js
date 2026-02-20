// import React from 'react'

// const Header = () => {
//   return (
//     <>
//     <div style={{paddingTop: '20px',}}>
//         &nbsp;&nbsp;
//     </div>
//     </>

//   )
// }

// export default Header
import React from "react";
import styled from "styled-components";

const Header = ({ mode }) => {
  return (
    <HeaderWrapper mode={mode}>
      <div className="header-container">
        <div className="header-content">
          <div className="breadcrumb my-breadcrumb">
            <span className="current-page">MY Portfolio</span>
          </div>

          <div className="header-status">
            <div className={`status-dot ${mode ? "light" : "dark"}`}></div>
            <span className="status-text">
              {mode ? "Banglore City" : "Banglore City"}
            </span>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  .header-container {
    padding-top: 80px; /* To account for fixed navbar */
    width: 100%;
    background: ${(props) =>
      props.mode
        ? "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(245,247,250,0.95) 100%)"
        : "linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(10,10,10,0.95) 100%)"};
    backdrop-filter: blur(10px);
    border-bottom: ${(props) =>
      props.mode
        ? "1px solid rgba(0,0,0,0.1)"
        : "1px solid rgba(255,215,0,0.3)"};
    transition: all 0.3s ease;
    position: relative;
    z-index: 5;
  }

  .header-content {
    width: 100%;
    margin: 0 auto;
    padding: 0.05rem 1.4rem 0.55rem 1.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;
    font-size: 1rem;

    .home-indicator {
      font-size: 1.2rem;
      filter: ${(props) => (props.mode ? "none" : "brightness(0) invert(1)")};
    }

    .separator {
      color: ${(props) => (props.mode ? "#666" : "#ffd700")};
      opacity: 0.7;
    }

    .current-page {
      color: ${(props) => (props.mode ? "#333" : "#ffd700")};
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 0.9rem;
    }
  }

  div.my-breadcrumb {
    margin-bottom: 0;
  }

  .header-status {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    background: ${(props) =>
      props.mode ? "rgba(0,0,0,0.05)" : "rgba(255,215,0,0.1)"};
    border: 1px solid
      ${(props) => (props.mode ? "rgba(0,0,0,0.1)" : "rgba(255,215,0,0.2)")};

    .status-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      animation: pulse 2s infinite;

      &.light {
        background: #00d2ff;
        box-shadow: 0 0 10px #00d2ff;
      }

      &.dark {
        background: #ffd700;
        box-shadow: 0 0 10px #ffd700;
      }
    }

    .status-text {
      font-size: 0.85rem;
      font-weight: 500;
      color: ${(props) => (props.mode ? "#666" : "#ffd700")};
      letter-spacing: 0.5px;
    }
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.5;
      transform: scale(1.2);
    }
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .header-content {
      padding: 1rem;
    }

    .breadcrumb {
      font-size: 0.9rem;

      .home-indicator {
        font-size: 1rem;
      }
    }

    .header-status {
      padding: 0.4rem 0.8rem;

      .status-text {
        font-size: 0.75rem;
      }
    }
  }

  @media (max-width: 480px) {
    .header-content {
      margin-top: 35px;
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`;

export default Header;
