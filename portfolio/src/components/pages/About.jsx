import React from "react";

import Image from "../images/image.jpg";

export default function About() {
  return (
    <article className="card m-3">
      <div className="card-header text-center">
        <img src={Image} class="img-fluid img-thumbnail" />
        <h2 className="display-4">I'm Callan Hunter</h2>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </article>
  );
}
