import React from "react";

import Imagenew from "../images/image2.jpg";
import Image from "../images/newImg.jpg";

export default function Home() {
  return (
    <article className="card bg-dark p-6">
      <div className="card-header text-center">
        <img
          className="img-container"
          src={Imagenew}
          alt="professional picture"
          style={{ width: "60%" }}
        />
        <h2 className="carousel-caption display-4 text-dark">Welcome!</h2>
      </div>
    </article>
  );
}
