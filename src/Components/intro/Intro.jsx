import React from "react";
import "./Intro.css";
import hero_image from "../images/hero_image_back.png"

const Intro = () => {
  return (
    <div className="i" id="main">
      
      <div className="i-left">
      
        <div className="i-left-wrapper">
            <div className="blur hero_blur "></div>
          <h1
          
            style={{
              display: "flex",
              fontSize: "50px",
              marginBottom: "-40px",
              marginTop: "15px",
              color : "white"
            }}
          >
           <span className="stroke_text" >Hello</span> <span> 👋</span>
          </h1>
          <h1 className="i-name">
           <span style={{ color: "white" }}>I'm </span> <span style={{ color: "#f48915" }}>Pratik</span>
          </h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">MERN Stack Developer</div>
              {/* <div className="i-title-item">Content Creator</div> */}
              <div className="i-title-item">FrontEnd Developer</div>
            </div>
          </div>
          {/* <p className="i-desc">
          Quick learner and an aspiring full-stack web developer with core knowledge of MERN stack technology. Looking forward to applying and enhancing my skills and knowledge as a developer.
          </p> */}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://drive.google.com/file/d/1_lwFIRUDU3co8bKa5jdeBqrc4rJGzDGa/view"
          >
            {" "}
            <button
              style={{
                cursor: "pointer",
                background: "#f48915",
                color: "white",
                border: "none",
              
              }}
              id="btnresume"
            >
              Resume
            </button>
          </a>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg">
          {" "}
          
          <img src="https://i.ibb.co/P9wXZWD/my-Profile.jpg" alt="AB" className="i-img " />
          
        </div>
      </div>
    </div>
  );
};

export default Intro;
