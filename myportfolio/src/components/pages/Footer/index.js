// import React from "react";

// import styles from './style.module.css'

// const Footer = () => {
//   return (
//     <>
//         <div className={styles.mar}>fooooooooter</div>    
//     </>
//   );
// };

// export default Footer;
import React from "react";
import styles from './style.module.css';

const Footer = ({ mode }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`${styles.footer} ${mode ? styles.lightMode : styles.darkMode}`}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4 className={styles.footerTitle}>
            <span className={styles.logo}>👨‍💻</span>
            Barathlin.dev
          </h4>
          <p className={styles.footerDescription}>
            Crafting digital experiences with passion and precision.
          </p>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.footerTitle}>Quick Links</h4>
          <ul className={styles.footerLinks}>
            <li><a href="/home" className={styles.link}>Home</a></li>
            <li><a href="/projects" className={styles.link}>Projects</a></li>
            <li><a href="/aboutme" className={styles.link}>About Me</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.footerTitle}>Connect</h4>
          <div className={styles.socialIcons}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <span role="img" aria-label="GitHub">📱</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <span role="img" aria-label="LinkedIn">💼</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <span role="img" aria-label="Twitter">🐦</span>
            </a>
            <a href="mailto:email@example.com" className={styles.socialIcon}>
              <span role="img" aria-label="Email">📧</span>
            </a>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.footerTitle}>Location</h4>
          <p className={styles.location}>
            <span role="img" aria-label="Location">📍</span> Banglore City
          </p>
          <p className={styles.availability}>
            <span className={`${styles.statusDot} ${mode ? styles.lightDot : styles.darkDot}`}></span>
            Available for freelancing
          </p>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          © {currentYear} Barathlin. All rights reserved.
        </p>
        <p className={styles.themeCredit}>
          {mode ? '☀️ Light Mode' : '🦇 Dark Knight Mode'}
        </p>
      </div>

      {/* Batman-themed footer decoration for dark mode */}
      {!mode && (
        <div className={styles.batmanDecoration}>
          <div className={styles.batSymbol}>🦇</div>
          <div className={styles.gothamTagline}>Guardian of Gotham</div>
        </div>
      )}
    </footer>
  );
};

export default Footer;