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
      </article>
    </main>
  );
}
