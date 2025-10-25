import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "./style";

const Landing = () => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setClicked(true);
    console.log("clicked");
    console.log("object");

    setTimeout(() => {
      navigate("/myportfolio");
    }, 1000);
  };

  return (
    <Wrapper>   
      <div className="content">
        <div className="heading-container">                  
          <h1 className="bangers-uniquifier">WELCOME!</h1>
          <h3 className="letr-spc">
            "Explore my work – where code meets Creativity."
          </h3>
          <p className="spcr">Frontend Architect | React & Angular Dev</p>
          <button className={`expand-button batman ${clicked ? "active" : ""}`} onClick={handleClick}>
            <span>
              CLICK TO<br></br>VIEW PORTFOLIO!!
            </span>
          </button>
        </div>
      </div> 
    </Wrapper>  
  );
};

export default Landing;
