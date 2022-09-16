import React, { useState } from "react";
// import logo from "./img/logo.png"
import styles from "./Navbar.module.css";
import { Link } from "react-scroll";
import bars from "./images/bars.png" ;
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [meanuOpen, setMeanuopen ] = useState(false) ;
 
  const changeBackground = () => {
    if (window.screenY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  const mobile = window.innerWidth <= 768 ? true :  false ;


  window.addEventListener("scroll", changeBackground);
  return (
    <nav className={nav}>
      <Link to="main" smooth={true} duration={1000}>
        {/* <h2 style={{padding:"20px",color:"skyblue"}}>Abhishek</h2> */}
        <img
          className={styles.ablogo}
          src="https://thumbs.dreamstime.com/b/pg-logo-p-g-design-white-letter-initial-linked-circle-uppercase-monogram-196990860.jpg"
          alt=""
        />
      </Link>
   {

    meanuOpen === false && mobile === true? (
      <div 
      style={{
        backgroundColor : "var(--appColor)" ,
        padding : "0.5rem" ,
        borderRadius : "5px"
      }}
      onClick={() => setMeanuopen(true)}
      >
        <img src={bars} style={{ width : "1.5rem", height: "1.5rem"}} alt=""/>
      </div>
    ) : (
      <ul className={styles.menu}>
        <li>
          <Link
            to="main"
            style={{ cursor: "pointer" }}
            smooth={true}
            duration={900}
          >
            Introduction
          </Link>
        </li>
        <li>
          <Link
            to="about"
            style={{ cursor: "pointer" }}
            smooth={true}
            duration={1000}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            style={{ cursor: "pointer" }}
            smooth={true}
            duration={1000}
          >
            skills
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            style={{ cursor: "pointer" }}
            smooth={true}
            duration={1000}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            style={{ cursor: "pointer" }}
            smooth={true}
            duration={1000}
          >
            Contact
          </Link>
        </li>
      </ul>
      )
   }
    </nav>
  );
};

export default Navbar;
