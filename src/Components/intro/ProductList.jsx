import React from "react";

import { FaGithub } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import "./ProductList.css";
import gymimg from "../images/Screenshot (14).png"
const ProductList = () => {
  return (
    <>
    <br/>
    <br/>
    <hr className="hr"/>
    <div id="projects">
      
      
      <h2  className="heading_project">
        Projects
      </h2>

      {/* ////////////////////////////////        fitmeals        ///////////////////// */}
      <div className="container">
      <div className="card">
          <div className="box">
            <div className="content" style={{ paddingTop: "40px" }}>
              {/* <h2>04</h2> */}
              <div>
                {" "}
                <img src="/Fitmeal.png" alt="" />
              </div>

              <h3 style={{ marginTop: "30px", color:"#041E42" }}>FitMeal Clone</h3>
              <p
                id="hoverwhite"
                style={{ fontSize: "16px", textAlign: "left" }}
              >
                Fitmeal – Healthy Food and Nutrition WordPress Theme created especially for Food store & Delivery, Fitness Diet, Health Coach & Diet, Fitness Meal. <br />{" "}
                <br />
                <strong >
                  Tech Stack:{" "}
                </strong>
               React | Redux | Javascript | HTML | CSS <br /> 
                {/* <br/> */}
              <p>A collaborative project, built in 5 days by a team of 6 developers</p>

              </p>

              <div id="buttonnn">
                <a
                  rel="noreferrer"
                  className="one"
                  href="https://github.com/pratikganjale55/FitMealsCLone"
                  target="_blank"
                >
                  <FaGithub /> Github
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="one"
                  href="https://flourishing-brigadeiros-066ec5.netlify.app/"
                >
                  <FaPlay /> Live Link
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ////////////////////////////////        ONNBike         ///////////////////// */}
        <div className="card">
          <div className="box" id="boxx">
            <div className="content" style={{ paddingTop: "30px" }}>
              {/* <h2>01</h2> */}
              <div>
                {" "}
                <img src="https://user-images.githubusercontent.com/99397606/161417863-556b9988-cbef-400a-bb15-5eefe0b8d74c.png" height={"100%"} alt="" />
              </div>
              <br/>
              <h3 style={{color:"#041E42"}}>ONNBike Clone</h3>
              <p
                id="hoverwhite"
                style={{ fontSize: "16px", textAlign: "left" }}
              >
               ONNBike.com is online bike booking website here customer can pay using debit/creadit card and take a ride based as hourly, daily and monthly.
                <br/>
                <strong >
                  Tech Stack:{" "}
                </strong>
                 Javascript | HTML | CSS | Bootstrap
                 
                 <p>A collaborative project, built in 5 days by a team of 6 developers</p>
                
              </p>

              <div id="buttonnn">
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="one"
                  href="https://github.com/pratikganjale55/ONNbikes"
                >
                  <FaGithub /> Github
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="one"
                  href="https://loquacious-biscochitos-48b0b9.netlify.app/"
                >
                  <FaPlay /> Live Link
                </a>
              </div>
            </div>
          </div>
        </div>
             {/* //////////////////////  gymApp /////////////////// */}
             <div className="card">
          <div className="box">
            <div className="content" style={{ marginTop: "30px" }}>
              {/* <h2>01</h2> */}
              <div >
                {" "}
                <img src={gymimg}  alt="" />
              </div>

              <h3 style={{color:"#041E42"}}>Gym App</h3>
              <p style={{ textAlign: "left", fontSize: "16px" }}>
              In Gym app have homepage , here consider different design aspect and layout.
                <br />
                <br />
                <strong >
                  Tech Stack:{" "}
                </strong>{" "}
                React | Javascript | HTML | CSS
                <br />
                <br />

                <p>Single project built within 2 days </p>
                
              </p>

              <div id="buttonnn">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="one"
                  href="https://github.com/pratikganjale55/GymApp"
                >
                  <FaGithub /> Github
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="one"
                  href="https://tangerine-flan-9180b2.netlify.app/"
                >
                  <FaPlay /> Live Link
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ////////////////////////////////     KFC            ///////////////////// */}
        <div className="card">
          <div className="box">
            <div className="content" style={{ marginTop: "30px" }}>
              {/* <h2>01</h2> */}
              <div>
                {" "}
                <img src="https://user-images.githubusercontent.com/99641288/171843057-6bf12c27-db8a-46eb-9bf4-3282c1d2687e.png"  alt="" />
              </div>

              <h3 style={{color:"#041E42"}}>KFC Clone</h3>
              <p style={{ textAlign: "left", fontSize: "16px" }}>
              KFC is online food base website, which offers digital and offline experiences in food products store.
                <br />
                <br />
                <strong >
                  Tech Stack:{" "}
                </strong>{" "}
                Javascript | HTML | CSS
                <br />
                <br />

                <p>A collaborative project built by a team of 6, executed in 5 days.</p>
                
              </p>

              <div id="buttonnn">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="one"
                  href="https://github.com/pratikganjale55/ProjectFirst"
                >
                  <FaGithub /> Github
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="one"
                  href="https://upbeat-archimedes-96c5f3.netlify.app/index.html"
                >
                  <FaPlay /> Live Link
                </a>
              </div>
            </div>
          </div>
        </div>

       
        
      </div>
    </div>
    </>
  );

};

export default ProductList;
