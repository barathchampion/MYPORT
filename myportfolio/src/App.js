// import logo from "./logo.svg";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useLocation,
// } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import Landing from "./components/pages/landing/index";

// import Project from "./components/pages/Projects";
// import Home from "./components/pages/Home/home";

// import PortfolioBoard from "./components/pages/PortfolioBoard";
// import { ThemeContext } from "styled-components";
// import Aboutme from "./components/pages/Aboutme";

// function App() {
  
//   return (
//     <div className="App">
//       <ThemeContext>
//       <Router>
//         <Routes>

//           <Route element={<Landing />} path="/" />

//           <Route element={<PortfolioBoard />}>
//             <Route index element={<Home />} path="/home" />
//             <Route element={<Project />} path="/projects" />
//             <Route element={<Aboutme />} path="/aboutme" />
//           </Route>

//         </Routes>
//       </Router>
//       </ThemeContext>
//     </div>
//   );
// }

// export default App;
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Landing from "./components/pages/landing/index";
import Project from "./components/pages/Projects";
import Home from "./components/pages/Home/home";
import PortfolioBoardContent from "./components/pages/PortfolioBoard";
import Aboutme from "./components/pages/Aboutme";
import { ThemeProvider } from "./context/ThemeContext";
import { GlobalThemeStyle } from "./components/pages/PortfolioBoard/style";

function App() {
  return (
    <ThemeProvider>
      <GlobalThemeStyle />
      <div className="App">
        <Router>
          <Routes>
            <Route element={<Landing />} path="/" />
            <Route element={<PortfolioBoardContent />}>
              <Route index element={<Home />} path="/home" />
              <Route element={<Project />} path="/projects" />
              <Route element={<Aboutme />} path="/aboutme" />
            </Route>
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;