import React from "react";

import Jate from "../images/jate.png";
import Vacation from "../images/vacation-awaits.png";
import Celebrity from "../images/screenshot.png";
import Api from "../images/api.png";
import Employee from "../images/employee.png";
import Readme from "../images/readme.png";
import Ecommerce from "../images/ecommerce.png";

export default function Portfolio() {
  return (
    <>
      <main>
        <div className="card m-3">
          <div className="text-center mx-auto d-block">
            <h2 className=" text-center  h1 ">Projects</h2>
          </div>
        </div>
        <div className="row row-cols-2 row-cols-md-2 g-4 mb-4 text-center">
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

          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title text-center">Management System</h5>
                <p className="card-title text-center">Back End Application</p>
                <img src={Employee} className="card-img-top"></img>
                <a
                  href="https://github.com/callanhunter/management-system"
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
                <h5 className="card-title text-center">Cloud Project</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title text-center">Cloud Project</h5>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
