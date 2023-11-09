import React from "react";
import "../App.css";

import Imagenew from "../images/picture.jpeg";
import Image from "../images/newImg.jpg";
import Jate from "../images/jate.png";
import Vacation from "../images/vacation-awaits.png";
import Employee from "../images/employee.png";

export default function Home() {
  return (
    <main>
      <article className="card m-3">
        <div className="card-header text-center object-fit">
          <h2 className="display-6">Welcome to my Portfolio</h2>
          <img
            className="rounded-circle"
            src={Imagenew}
            style={{ width: "60%" }}
          />
          <h2 className="display-6">
            I'm a Software Engineer and AWS Solutions Architect
          </h2>
        </div>

        <div className="card m-4">
          <div className="text-center mx-auto d-block">
            <h2 className=" text-center  h1 ">Featured Projects</h2>
          </div>
        </div>
        <div className="row row-cols-2 row-cols-md-3 g-4 mb-4 text-center">
          <div className="">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">J.A.T.E</h5>
                <p className="card-title text-center">PWA Application</p>
                <img src={Jate} className="card-img-top"></img>
                <a
                  href="https://github.com/callanhunter/text-editor"
                  className="card-link"
                  target="_blank"
                >
                  GitHub link
                </a>
                <a
                  href="https://callan-jate-2000.herokuapp.com/"
                  className="card-link"
                  target="_blank"
                >
                  Deployed link
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title text-center">Management System</h5>
                <p className="card-title text-center">Back End Application</p>
                <img src={Employee} className="card-img-top"></img>
                <a
                  href="https://github.com/callanhunter/employee-management-system"
                  className="card-link"
                  target="_blank"
                >
                  GitHub link
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title text-center">Vacation Awaits</h5>
                <p className="card-title text-center">Full Stack Application</p>
                <img src={Vacation} className="card-img-top"></img>
                <a
                  href="https://github.com/callanhunter/vacation-awaits"
                  className="card-link "
                  target="_blank"
                >
                  GitHub link
                </a>
                <a
                  href="https://vacation-awaits.herokuapp.com/"
                  className="card-link"
                  target="_blank"
                >
                  Deployed link
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
