import React from "react";

import Jate from "../images/jate.png";
import Vacation from "../images/vacation-awaits.png";
import Celebrity from "../images/screenshot.png";

export default function Portfolio() {
  return (
    <>
      <div className="card bg-dark">
        <div className="text-center mx-auto d-block">
          <h2 className="text-white text-center border-bottom d-inline h1 bg-dark ">
            Projects
          </h2>
        </div>
      </div>
      <div className="row row-cols-2 row-cols-md-3 g-4 bg-dark mb=4">
        <div className="">
          <div className="card">
            <div className="card-body bg-dark">
              <h5 className="card-title text-white">J.A.T.E</h5>
              <img src={Jate} className="card-img-top text-white"></img>
              <a
                href="https://github.com/callanhunter/text-editor"
                className="card-link text-white"
              >
                GitHub link
              </a>
              <a
                href="https://callan-jate-2000.herokuapp.com/"
                className="card-link text-white"
              >
                Deployed link
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body bg-dark">
              <h5 className="card-title text-white">Celebrity Matchmaker</h5>
              <img src={Celebrity} className="card-img-top"></img>
              <a
                href="https://github.com/callanhunter/celebrity-matchmaker"
                className="card-link text-white"
              >
                GitHub link
              </a>
              <a
                href="mayaimorales.github.io/celebrity-matchmaker/"
                className="card-link text-white"
              >
                Deployed link
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body bg-dark">
              <h5 className="card-title text-white">Vacation Awaits</h5>
              <img src={Vacation} className="card-img-top"></img>
              <a
                href="https://github.com/callanhunter/vacation-awaits"
                className="card-link text-white"
              >
                GitHub link
              </a>
              <a
                href="https://vacation-awaits.herokuapp.com/"
                className="card-link text-white"
              >
                Deployed link
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body bg-dark">
              <h5 className="card-title text-white">Social Network API</h5>
              <img src={Jate} className="card-img-top text-white"></img>
              <a
                href="https://github.com/callanhunter/social-network-api"
                className="card-link text-white"
              >
                GitHub link
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body bg-dark">
              <h5 className="card-title text-white">README Generator</h5>
              <img src={Celebrity} className="card-img-top"></img>
              <a
                href="https://github.com/callanhunter/readme-generator"
                className="card-link text-white"
              >
                GitHub link
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body bg-dark">
              <h5 className="card-title text-white">Management System</h5>
              <img src={Vacation} className="card-img-top"></img>
              <a
                href="https://github.com/callanhunter/vacation-awaits"
                className="card-link text-white"
              >
                GitHub link
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
