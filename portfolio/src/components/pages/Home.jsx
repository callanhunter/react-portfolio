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
            <h4 className="card-title">Featured Projects</h4>
            <div className="row row-cols-1 row-cols-md-2 g-4 mb-4">
              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Celebrity Matchmaker</h5>
                    <img src={Celebrity} className="card-img-top"></img>
                    <a
                      href="https://mayaimorales.github.io/celebrity-matchmaker/"
                      className="card-link"
                    >
                      GitHub link
                    </a>
                    <a
                      href="mayaimorales.github.io/celebrity-matchmaker/"
                      className="card-link"
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
                    >
                      GitHub link
                    </a>
                    <a
                      href="https://vacation-awaits.herokuapp.com/"
                      className="card-link"
                    >
                      Deployed link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
    // <article className="card bg-dark">
    //   <div className="card-header text-center img-fluid">
    //     <img
    //       className=""
    //       src={Imagenew}
    //       alt="professional picture"
    //       style={{ width: "60%" }}
    //     />
    //     <h2 className="carousel-caption display-4 text-dark">Welcome!</h2>
    //   </div>
    // </article>
    // <article className="bg-dark col-md-6">
    //   <div>
    //     <img
    //       src={Imagenew}
    //       className="card-img-top img-container img-fluid"
    //     ></img>
    //     <h2 className="carousel-caption thumbnail bg-dark text-left text-center">
    //       Welcome
    //     </h2>
    //   </div>
    // </article>
  );
}
