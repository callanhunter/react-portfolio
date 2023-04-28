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
            Hello, I'm Callan Hunter, an aspiring Software Engineer who is a
            graduate of UC Berkeley Extension Coding Bootcamp. Previously I
            attended the University of Oregon and Lane Community College in
            Eugene, Oregon. I have experience working with UX Design, Front End
            applications, Back End applications, and Full Stack Web
            applications.
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
                          <li className="list-group-item">HTML</li>
                          <li className="list-group-item">Bootstrap</li>
                          <li className="list-group-item">Momentjs</li>
                          <li className="list-group-item">indexDB</li>
                          <li className="list-group-item">Fetch</li>
                          <li className="list-group-item">MySQL</li>
                          <li className="list-group-item">MongoDB</li>
                          <li className="list-group-item">Apollo GraphQL</li>
                          <li className="list-group-item">React</li>
                          <li className="list-group-item">JSX</li>
                          <li className="list-group-item">
                            Unit Test with JEST
                          </li>
                          <li className="list-group-item">Node.js</li>
                          <li className="list-group-item">Apollo GraphQL</li>
                          <li className="list-group-item">
                            Frontend Development
                          </li>
                          <li className="list-group-item">
                            Backend Development
                          </li>
                          <li className="list-group-item">Webpack</li>
                        </ul>
                        <ul className="list-group text-center col-sm">
                          <li className="list-group-item">Web API</li>
                          <li className="list-group-item">jQuery</li>
                          <li className="list-group-item">Psuedocode</li>
                          <li className="list-group-item">Redux</li>
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
                          <li className="list-group-item">bcrypt</li>
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
