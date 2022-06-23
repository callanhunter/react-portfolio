import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-center text-white fixed-bottom ">
      <h2 className="h6 text-center  d-inline p-2">Contact Me</h2>
      <div className="container p-0">
        <section className="mb-2 container-fluid">
          <a
            className="btn btn-outline-light rounded-circle"
            href="https://www.linkedin.com/in/callan-hunter-195816196/"
            target="_blank"
            role="button"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            className="btn btn-outline-light rounded-circle"
            href="https://github.com/callanhunter"
            target="_blank"
            role="button"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="mailto:callan57hunter@gmail.com"
            rel="noreferrer"
            target="_blank"
            className="btn btn-outline-light rounded-circle"
            role="button"
          >
            <i className="bi bi-google"></i>
          </a>
        </section>
      </div>
    </footer>
  );
}
