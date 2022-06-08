import React from "react";

import Jate from "../images/jate.png";
import Vacation from "../images/vacation-awaits.png";
import Celebrity from "../images/screenshot.png";

export default function Portfolio() {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">J.A.T.E</h5>
            <img src={Jate} class="card-img-top"></img>
            <a
              href="https://github.com/callanhunter/text-editor"
              class="card-link"
            >
              GitHub link
            </a>
            <a href="https://callan-jate-2000.herokuapp.com/" class="card-link">
              Deployed link
            </a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">Celebrity Matchmaker</h5>
            <img src={Celebrity} class="card-img-top"></img>
            <a
              href="https://github.com/callanhunter/celebrity-matchmaker"
              class="card-link"
            >
              GitHub link
            </a>
            <a
              href="mayaimorales.github.io/celebrity-matchmaker/"
              class="card-link"
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
            <img src={Vacation} class="card-img-top"></img>
            <a
              href="https://github.com/callanhunter/vacation-awaits"
              class="card-link"
            >
              GitHub link
            </a>
            <a href="https://vacation-awaits.herokuapp.com/" class="card-link">
              Deployed link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
