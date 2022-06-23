import React from "react";
import "../App.css";

import Imagenew from "../images/picture.jpeg";
import Image from "../images/newImg.jpg";
import Vacation from "../images/vacation-awaits.png";
import Celebrity from "../images/screenshot.png";

export default function Home() {
  return (
    <main>
      <article className="card m-3">
        <div className="card-header text-center object-fit">
          <h2 className="display-6">Welcome</h2>
          <img
            className="rounded-circle"
            src={Imagenew}
            style={{ width: "60%" }}
          />
          <h2 className="display-6">to my Portfolio</h2>
        </div>
        <div className="card sub-card m-3">
          <div className="card-body text-center">
            <h4 className="card-title">A little about me</h4>
            <p className="card-text">
              Hello, I'm Callan Hunter, an aspiring Software Engineer who is a
              recent graduate at UC Berkeley Extension Coding Bootcamp.
              Previously I attended the University of Oregon and Lane Community
              College in Eugene, Oregon. I have experience working with UX
              Design, Front End applications, Back End applications, and Full
              Stack Web applications.
            </p>
          </div>
        </div>
        <div className="card sub-card m-3">
          <div className="card-body text-center">
            <h4 className="card-title">List of Skills</h4>
            <div className="container">
              <div className="row">
                <ul className="list-group text-center col-sm">
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
                  <li className="list-group-item">Unit Test with JEST</li>
                  <li className="list-group-item">Node.js</li>
                  <li className="list-group-item">Apollo GraphQL</li>
                  <li className="list-group-item">Frontend Development</li>
                  <li className="list-group-item">Backend Development</li>
                </ul>
                <ul className="list-group text-center col-sm">
                  <li className="list-group-item">Webpack</li>
                  <li className="list-group-item">Web API</li>
                  <li className="list-group-item">jQuery</li>
                  <li className="list-group-item">Psuedocode</li>
                  <li className="list-group-item">Redux</li>
                  <li className="list-group-item">JWT Javascript Web Token</li>
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
                  <li className="list-group-item">Non-Relational Databases</li>
                  <li className="list-group-item">ES6</li>
                  <li className="list-group-item">Command Line</li>
                  <li className="list-group-item">bcrypt</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
