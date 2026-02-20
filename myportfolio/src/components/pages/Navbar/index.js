// import React, { useContext, useState } from "react";

// import NavWrapper from "./style";
// import { GithubOutlined, MoonOutlined, SunOutlined } from "@ant-design/icons";
// import { ToggleContext } from "../CV";
// import { useNavigate } from "react-router-dom";

// const NavBar = ({mode,ActionHandler}) => {
//   const { toggleModal } = useContext(ToggleContext);
//   const Navigate = useNavigate();

//   return (
//     <NavWrapper>
  
//       <div className="d-flex justify-content-between navbarstyle">
//         <div className="d-flex justify-content-center align-items-center">
//           <img
//             className="nav_img"
//             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAbNJREFUWEdjZCARSEnJ/ydRC4ryZ88eMpKinyTFIIMH3IH8QmZYQ4ib4yXY45MmLSAlADDU5uUlgMW+/hAH0x/fncIbSBiSg9aBMIe1de5C8fWWnX/B/IvHjMD0hg17yArBR4+egPXBQlDf6hyYf2yfJ96QhIfgkHPgtZvsYJ/de/ANbwhKSUHS0rNnkDQKA2ZmqijJZ82a/eC0jR6CMPW4QhJnCA5bB8LSWkiII94QDIy6gRJDuEKS6iE4aByIK+2R6kBYyMHSOnpaJDsEB70DcRWGgyYEB70DYSFFarUCKwdhuZhmaXDQOBDdh7A6mdSQg6lHDzmKQ3DIOJDcECNWH9nlILEWUKqOYgcumWdPqRtQ9Fs5bQfzlRS4UOpkkmsSmKmD1oEwh509tZYqIXjt2h2wObEJ5WA6JukgZSE4aB0I64vA0gQsBJWVZcgKybt3IX0SqoXgqAMpTYOjITgagiTm5ZGTi3GV7Og1CbHlIXrIwQIeVpPA6mSi+8WD3oG4fLR4QSeJqQ6/crJDcNA6EOZfXAOYVA0+PIahj7gSPcI6aBxIL4cQaw/Jo/zEGkwtdQBrbfJHElv02wAAAABJRU5ErkJggg=="
//             alt="file"
//           />
//           <button onClick={()=>Navigate('/home')} className="btn btn-light pl-3">barathlin.dev</button>
//         </div>
//         <div className="d-flex justify-content-evenly gap-2">
//           <button onClick={()=>Navigate('/projects')} type="button" className="btn btn-light">
//             <img
//               className="nav_img iconer"
//               alt="projects"
//               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAXlJREFUWEdjZBjkgHGQu48Bw4FcXFz/B9LR3759Q3HT0HEgesh9DQ1CCUju1evA/K9brFDFfY6B+d8OOKOIcznsBfPPnz+PIn7/9n28ERQUBrEXFpLwEBxyDhzIdEhUCA5aB5qZmWF124cPH6jq5i9fvqCY9+3bNzAfZg/ONDjqQGi4Df8Q3D/VEmuaM4zeTpW0SHEIDnoHwoKJ2rkXZi7FIThkHEgoqg+5e2JNk3Y78adVqoXgoHUgvdIeLPhJrkmGjAOTFiZRpdyDGTIpeBJW88gOwUHvQKoGHwMDA3ruHf5pEOZDq8bDVA3MXcWGsL4HirlEtwfRc/GgdyClwUco7aFXrQRb1NQuB2nuwPNLsde5sPYhrjoZFjJGa1dj7YOgxwzZaXDQO5DcNIir1YLLPLJDcNA7kNhi5li9LdgvbkuWkeSnJW4upPWLyS0HB8yBJAUHljoX1lohZA7d0iCpmYNgQQ1TMDrCSiCOCQ4BE0oj9JYf9KP8AAwOCkcMzeo6AAAAAElFTkSuQmCC"
//             />
//             <span className="dnone">PROJECTS</span>
//           </button>
//           <button className="btn btn-light pl-3" onClick={()=>Navigate('/aboutme')}>
//             <img
//               className="nav_img iconer"
//               alt="aboutme"
//               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAlFJREFUWEfVmLtKA0EUhg1iETD2ETtJbATFlHaxtLFSMAHB0sZOsPLSCGkkCj5BougrCNamWBMrQ6JdRDshEawk4pn9zcwwl911i9k0k90zc+afb8+cuaTG9L+hb0oZ6sRhMvZj6txZgSSsXNokOrX6JShhMBAelZ7gx9AP+VcRTJbAp3abRuJ5D1RixMAHe1Ccsh/ZvwzNStAlgcKnDUsmKEFdvUH/k0ydbkeIeZ5gMgViZP8lhPaZqUmlq8gEEyOQi41YYBYKS+RHBhA6BhXo3RKIvPV1dxSLMDhJFw/or0wyNEFnBWIN7jevBXKZxXXhedC6MZLV1Z/4YCuUTBJAsKJo82DiBILE7doyjfzq+Z3Kau1ESdBWP3aCtg5llbb6EQSO+0vdBvVVq7PY6zfZfhAdbs/PClpsBHX1RwKP/dm8QKXnPfr+vyn8uBhMuEBbErw/rAaKTZAb5cOYCDogEBLMn9omVGcPSw5+FDtq9wRqjpfhhO6W9wV4F+dbSpjpIou5fI5lg073RZi1cqNfgokRqPvsNIB8Li+NOFo0jsiJZw+dN56gmwKzjSERWjkrkUDuJsGPFUYu7p+879MSdF4glEPo9E6BXmFfhthDPZzKdIepoHZ532eKQbI5L5AbAcVktsGyT6Y8589eNutwN4ObB/lQFdZuI6m9m3FZIGBK+e8vb5EdpzEFAWpns9vuBXU5j49VtwRWeiwf7s2ob4UrPRaTMdiNN7VcP+KO2lmBEIZve/oqZqS3FnuurLISdrxH7bB2tJP9yPkw5brAHy6QY3VmdklZAAAAAElFTkSuQmCC"
//             />
//             <span className="dnone">ABOUT ME</span>
//           </button>
//           <button className="btn btn-light pl-3" onClick={toggleModal}>
//             <img
//               className="nav_img2 mr_none"
//               alt="cv"
//               src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS0+DQo8c3ZnIGZpbGw9IiMwMDAwMDAiIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDMyIDMyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8dGl0bGU+cHJvZmlsZTE8L3RpdGxlPg0KPHBhdGggZD0iTTIzIDExLjAzMWMwLTAuNTUzLTAuNDQ4LTEtMS0xaC0zYzAgMCAwLjAzMy0xLjIwNCAwLjAzMy0yLjk1NCAwLTEuNjI1LTEuMzQ2LTMuMTA4LTMuMDMzLTMuMTA4cy0yLjk4OCAxLjQxMS0yLjk4OCAzLjA5OWMwIDEuNjI1LTAuMDEyIDIuOTY0LTAuMDEyIDIuOTY0aC0zYy0wLjU1MyAwLTEgMC40NDctMSAxIDAgMC41NTIgMCAxLjkzOCAwIDEuOTM4aDE0YzAtMC4wMDEgMC0xLjM4NyAwLTEuOTM5ek0xNiA4Ljk2OWMtMC41NTMgMC0xLTAuNDQ4LTEtMSAwLTAuNTUzIDAuNDQ3LTEgMS0xIDAuNTUyIDAgMSAwLjQ0NyAxIDFzLTAuNDQ4IDEtMSAxek0yOCAxMS4wMzFsLTQtMC4wNjIgMC4wMjEgMy4xMDRoLTE2LjAyMXYtMi45NzlsLTQtMC4wNjJjLTEuMTA0IDAtMiAwLjg5Ni0yIDJ2MTRjMCAxLjEwNCAwLjg5NiAyIDIgMmgyNGMxLjEwNCAwIDItMC44OTYgMi0ydi0xNGMwLTEuMTA1LTAuODk2LTIuMDAxLTItMi4wMDF6TTEwIDE2Ljg0NGMxLjIwOCAwIDIuMTg4IDEuMjg3IDIuMTg4IDIuODc1cy0wLjk4IDIuODc1LTIuMTg4IDIuODc1LTIuMTg4LTEuMjg3LTIuMTg4LTIuODc1IDAuOTgtMi44NzUgMi4xODgtMi44NzV6TTUuNjY3IDI1Ljk3OWMwIDAgMC4yMzctMS45MDIgMC43NzYtMi4yNjFzMi4wOTAtMC41OTggMi4wOTAtMC41OTggMS4wMDYgMS4wNzUgMS40MzQgMS4wNzVjMC40MjcgMCAxLjQzMy0xLjA3NSAxLjQzMy0xLjA3NXMxLjU1MiAwLjIzOCAyLjA5MSAwLjU5OGMwLjYzMyAwLjQyMiAwLjc5MSAyLjI2MSAwLjc5MSAyLjI2MWgtOC42MTV6TTI2IDI1LjAzMWgtOXYtMWg5djF6TTI2IDIzLjAzMWgtOXYtMWg5djF6TTI2IDIxLjAzMWgtOXYtMWg5djF6TTI2IDE5LjAzMWgtOXYtMWg5djF6Ij48L3BhdGg+DQo8L3N2Zz4="
//             />
//             <span className="dnone">VIEW CV</span>
//           </button>
//           <button className="btn btn-light pl-3 rounded-pill">
//             <GithubOutlined />
//           </button>
//           <button
//             onClick={ActionHandler}
//             className={`btn btn-light pl-3 rounded-pill ${
//               mode === "true" ? "DarkBg" : "yellowBg"
//             }`}
//           >
//             {mode === "true" ? (
//               <MoonOutlined style={{ width: `19px` }} />
//             ) : (
//               <SunOutlined />
//             )}
//           </button>
//         </div>
//       </div>
//     </NavWrapper>
//   );
// };
// export default NavBar;
import React, { useContext } from "react";
import NavWrapper from "./style";
import { GithubOutlined } from "@ant-design/icons";
import { ToggleContext } from "../CV";
import { useNavigate } from "react-router-dom";

const NavBar = ({ mode, ActionHandler }) => {
  const { toggleModal } = useContext(ToggleContext);
  const Navigate = useNavigate();

  return (
    <NavWrapper mode={mode ? "true" : "false"}>
      <div className="d-flex justify-content-between navbarstyle">
        <div className="d-flex justify-content-center align-items-center">
          <span className="nav-emoji" role="img" aria-label="logo">👨‍💻</span>
          <button onClick={() => Navigate('/home')} className="btn btn-light pl-3 brand-button">
            <span className="brand-text">barathlin.dev</span>
          </button>
        </div>
        
        <div className="d-flex justify-content-evenly gap-2">
          {/* Projects Button */}
          <button 
            onClick={() => Navigate('/projects')} 
            type="button" 
            className="btn btn-light nav-button"
          >
            <span className="nav-emoji-small" role="img" aria-label="projects">🚀</span>
            <span className="dnone nav-text">PROJECTS</span>
          </button>
          
          {/* About Me Button */}
          <button 
            className="btn btn-light nav-button" 
            onClick={() => Navigate('/aboutme')}
          >
            <span className="nav-emoji-small" role="img" aria-label="about me">🤖</span>
            <span className="dnone nav-text">ABOUT ME</span>
          </button>
          
          {/* View CV Button */}
          <button className="btn btn-light nav-button" onClick={toggleModal}>
            <span className="nav-emoji-small" role="img" aria-label="cv">📄</span>
            <span className="dnone nav-text">VIEW CV</span>
          </button>
          
          {/* GitHub Button */}
          <button className="btn btn-light nav-button rounded-pill github-button">
            <GithubOutlined style={{ 
              color: mode ? '#000000' : '#ffd700',
              fontSize: '1.2rem'
            }} />
          </button>
          
          {/* Theme Changer Button */}
          <button
            onClick={ActionHandler}
            className={`btn btn-light nav-button rounded-pill theme-button ${
              mode ? "DarkBg" : "yellowBg"
            }`}
            aria-label="Toggle theme"
          >
            {mode ? (
              <>
                <span className="theme-icon" role="img" aria-label="dark mode">🌙</span>
                <span className="theme-text dnone">DARK</span>
              </>
            ) : (
              <>
                <span className="theme-icon" role="img" aria-label="light mode">☀️</span>
                <span className="theme-text dnone">LIGHT</span>
              </>
            )}
          </button>
        </div>
      </div>
    </NavWrapper>
  );
};

export default NavBar;