import React from "react";

import Jate from "../images/jate.png";
import Vacation from "../images/vacation-awaits.png";
import Celebrity from "../images/screenshot.png";
import Api from "../images/api.png";
import Employee from "../images/employee.png";
import Readme from "../images/readme.png";

export default function Portfolio() {
  return (
    <>
      <main>
        <div className="card m-3">
          <div className="text-center mx-auto d-block">
            <h2 className=" text-center  h1 ">Projects</h2>
          </div>
        </div>
        <div className="row row-cols-2 row-cols-md-3 g-4 mb-4">
          <div className="">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">J.A.T.E</h5>
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
                <h5 className="card-title">Celebrity Matchmaker</h5>
                <img src={Celebrity} className="card-img-top"></img>
                <a
                  href="https://mayaimorales.github.io/celebrity-matchmaker/"
                  className="card-link"
                  target="_blank"
                >
                  GitHub link
                </a>
                <a
                  href="mayaimorales.github.io/celebrity-matchmaker/"
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
                <h5 className="card-title">Vacation Awaits</h5>
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
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Social Network API</h5>
                <img src={Api} className="card-img-top "></img>
                <a
                  href="https://github.com/callanhunter/social-network-api"
                  className="card-link "
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
                <h5 className="card-title">README Generator</h5>
                <img src={Readme} className="card-img-top"></img>
                <a
                  href="https://github.com/callanhunter/readme-generator"
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
                <h5 className="card-title">Management System</h5>
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
        </div>
      </main>
    </>
  );
}
