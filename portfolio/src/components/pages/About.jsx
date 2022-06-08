import React from "react";

import Imagenew from "../images/image2.jpg";

export default function About() {
  return (
    <article className="card m-2">
      <div className="card-header text-center">
        <img src={Imagenew} class="img-fluid"></img>
        <h2 className="carousel-caption text-info bg-dark">
          A little about me. I'm Callan Hunter, an aspiring Software Engineer
          who will be graduating from UC Berkeley Coding Bootcamp June 13th.
        </h2>
      </div>
    </article>
  );
}
