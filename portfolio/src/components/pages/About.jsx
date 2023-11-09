import React from "react";
// import "../App.css";

import Imagenew from "../images/picture.jpeg";
import Resume from "./Resume";
import Jate from "../images/jate.png";
import Vacation from "../images/vacation-awaits.png";
import Employee from "../images/employee.png";

export default function About(handlePageChange) {
  return (
    <main>
      <article className="card m-3 ">
        <div className="card-header text-center object-fit">
          <img
            className="rounded-circle float-start"
            src={Imagenew}
            style={{ width: "30%" }}
          />
          <h4 className="card-title">A little about me</h4>
          <p className="card-text">
            I attended a full-stack web development bootcamp through UC Berkeley
            extension where over 300 classroom hours were spent learning
            hands-on coding in Javascript, MongoDB, Express, React, Node, HTML,
            CSS. My thirst for knowledge wasn’t quite satisfied however, I
            wanted to learn more! To further my knowledge, I am a current cloud
            computing student at Fullstack Academy specializing in AWS and
            Azure.
          </p>
          <div className="container mt-3">
            <button
              type="button"
              className="btn btn-dark"
              data-bs-toggle="modal"
              data-bs-target="#myModal"
            >
              List of Skills
            </button>
          </div>
          <div className="modal" id="myModal">
            <div className="modal-dialog">
              <div className="modal-content">
                {/* <!-- Modal Header --> */}
                <div className="modal-header">
                  <h4 className="modal-title text-white">List of Skills</h4>
                  <button
                    type="button"
                    className="btn-close btn-dark"
                    data-bs-dismiss="modal"
                  ></button>
                </div>

                {/* <!-- Modal body --> */}
                <div className="card sub-card m-3 list-group-item-dark">
                  <div className="card-body text-center">
                    <h4 className="card-title">List of Skills</h4>
                    <div className="container">
                      <div className="row">
                        <ul className="list-group text-center col-sm list-group-item-dark">
                          <li className="list-group-item">JavaScript</li>
                          <li className="list-group-item">React.js</li>
                          <li className="list-group-item">REST APIs</li>
                          <li className="list-group-item">Node.js</li>
                          <li className="list-group-item">
                            Cascading Style Sheets (CSS)
                          </li>
                          <li className="list-group-item">
                            Full-Stack Development
                          </li>
                          <li className="list-group-item">
                            Back-End Development
                          </li>
                          <li className="list-group-item">Express.js</li>
                          <li className="list-group-item">HTML5</li>
                          <li className="list-group-item">Git</li>
                          <li className="list-group-item">GitHub</li>
                          <li className="list-group-item">SQL</li>
                          <li className="list-group-item">
                            Responsive Web Design
                          </li>
                          <li className="list-group-item">
                            Document Object Model (DOM)
                          </li>
                          <li className="list-group-item">
                            Object-Oriented Programming (OOP)
                          </li>
                          <li className="list-group-item">MongoDB</li>
                          {/* <li className="list-group-item">Webpack</li> */}
                        </ul>
                        <ul className="list-group text-center col-sm">
                          <li className="list-group-item">Cloud Computing</li>
                          <li className="list-group-item">
                            Amazon Web Services
                          </li>
                          <li className="list-group-item">Microsoft Azure</li>
                          {/* <li className="list-group-item">Redux</li>
                          <li className="list-group-item">
                            JWT Javascript Web Token
                          </li>
                          <li className="list-group-item">
                            Object-oriented Programming (OOP)
                          </li>
                          <li className="list-group-item">React Hooks</li>
                          <li className="list-group-item">
                            Data Structures and Algorithms
                          </li>
                          <li className="list-group-item">Context API</li>
                          <li className="list-group-item">Express.js</li>
                          <li className="list-group-item">PWA</li>
                          <li className="list-group-item">
                            Non-Relational Databases
                          </li>
                          <li className="list-group-item">ES6</li>
                          <li className="list-group-item">Command Line</li>
                          <li className="list-group-item">bcrypt</li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Modal footer --> */}
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-dark"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
