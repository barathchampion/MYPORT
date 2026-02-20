import React from "react";
import CV from "../CV";
import NavBar from "../Navbar";
import Header from "../Header/header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Wrapper from './style';
import { useTheme } from '../../../context/ThemeContext';

const PortfolioBoard = () => {
  const { isLightMode, toggleTheme } = useTheme();

  return (
    <Wrapper isLightMode={isLightMode}>
      <CV>
        <NavBar mode={isLightMode} ActionHandler={toggleTheme} />
      </CV>

      <div className={isLightMode ? "LightMode" : "DarkMode"}>
        {/* Batman-themed background elements for dark mode */}
        {!isLightMode && (
          <div className="batman-bg-elements">
            {/* Gotham Skyline */}
            <div className="gotham-skyline"></div>
            
            {/* Floating Bats on buildings */}
            <div className="floating-bats">
              {[...Array(15)].map((_, i) => (
                <div 
                  key={`bat-${i}`} 
                  className="bat" 
                  style={{
                    top: `${15 + (i * 5) % 75}%`,
                    left: `${(i * 8) % 95}%`,
                    animationDelay: `${i * 0.6}s`,
                    animationDuration: `${10 + (i % 8)}s`,
                    transform: `scale(${0.4 + (i % 5) * 0.15})`,
                    opacity: 0.6 + (i % 3) * 0.1
                  }}
                />
              ))}
            </div>
            
            {/* Bat Signal */}
            <div className="bat-signal-container">
              <div className="bat-signal-beam"></div>
              <div className="bat-signal-logo">🦇</div>
            </div>
            
            {/* Searchlight */}
            <div className="searchlight"></div>
            
            {/* Gotham Fog */}
            <div className="gotham-fog"></div>
            
            {/* Rain Effect */}
            <div className="gotham-rain"></div>
            
            {/* Distant Flying Bats */}
            <div className="distant-bats">
              {[...Array(10)].map((_, i) => (
                <div 
                  key={`distant-bat-${i}`} 
                  className="distant-bat"
                  style={{
                    '--dx': i % 2 === 0 ? 1.2 : -1.2,
                    '--dy': i % 3 === 0 ? 1.1 : -0.9,
                    top: `${10 + (i * 9) % 80}%`,
                    left: `${(i * 12) % 90}%`,
                    animationDelay: `${i * 2.5}s`,
                    animationDuration: `${18 + (i % 12)}s`,
                    transform: `scale(${0.5 + (i % 4) * 0.2})`
                  }}
                />
              ))}
            </div>

            {/* Additional floating bats - middle layer */}
            <div className="floating-bats middle-layer">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={`mid-bat-${i}`} 
                  className="bat medium"
                  style={{
                    top: `${25 + (i * 8) % 60}%`,
                    left: `${(i * 15) % 85}%`,
                    animationDelay: `${i * 1.2}s`,
                    animationDuration: `${14 + (i % 6)}s`,
                    transform: `scale(${0.5 + (i % 3) * 0.2}) rotate(${i * 15}deg)`,
                    opacity: 0.5 + (i % 4) * 0.1
                  }}
                />
              ))}
            </div>

            {/* City lights flicker effect */}
            <div className="city-lights"></div>
            
            {/* Distant thunder effect (rare flashes) */}
            <div className="thunder-flash"></div>
          </div>
        )}

        <Header mode={isLightMode} />
        
        <main className="main-content">
          <Outlet context={{ mode: isLightMode }} />
        </main>
        
        <Footer mode={isLightMode} />
      </div>
    </Wrapper>
  );
};

export default PortfolioBoard;