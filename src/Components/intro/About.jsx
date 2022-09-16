import React from "react";
import "./about.css";
import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const About = () => {
  return (
    <div id="about">
      <div className="a">
    
        <div className="a-right">
          <h1 className="a-title" >ABOUT ME</h1>
          {/* <p className="a-sub">Hello I'm Abhishek Bhosale</p> */}
          <p className="a-desc">
          Hi! I'm Pratik Ganjale, a full-stack web developer with core knowledge of MERN stack technology.
        
        I can say that doing coding has been the best decision I have ever made in my life.
        
         I love to learn new technologies and flex my creativity to create amazing things.
         
          Looking forward to applying and enhancing my skills and knowledge as a developer. 
          </p>
          <p className="a-desc">Drop a mail pratikganjale55@gmail.com </p>

          <div
            id="a-right-div1"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "50%",
              margin: "auto",
              padding: "20px",
            }}
          >
       
            <h2 style={{ fontSize: "32px" }}>
              {" "}
              <a
                style={{ color: "black" }}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/pratikganjale55"
              >
                {" "}
                <FaGithub />{" "}
              </a>
            </h2>
            <h2 style={{ fontSize: "32px" }}>
              {" "}
              <a
                rel="noreferrer"
                target="_blank"
                style={{ color: "black" }}
                href="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=pratikganjale55@gamil.com&hl=en-GB"
              >
                {" "}
                <MdEmail />
              </a>
            </h2>
            <h2 style={{ fontSize: "32px" }}>
              {" "}
              <a
                rel="noreferrer"
                target="_blank"
                style={{ color: "#0077b5" }}
                href="https://www.linkedin.com/in/pratik-ganjale-4920aa166/"
              >
                <img
                  width="30px"
                  alt=""
                  src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"
                />
              </a>{" "}
            </h2>
            {/* <FaLinkedin/> */}
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default About;
