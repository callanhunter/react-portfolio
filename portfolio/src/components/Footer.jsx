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

    // <nav className="navbar fixed-bottom bg-light">
    //   <div className="">
    //     <a
    //       className="navbar-brand text-center"
    //       href="https://www.linkedin.com/in/callan-hunter-195816196/"
    //       target="_blank"
    //     >
    //       LinkedIn
    //     </a>
    //     <a
    //       className="navbar-brand text-center"
    //       href="https://github.com/callanhunter"
    //       target="_blank"
    //     >
    //       GitHub
    //     </a>
    //   </div>
    // </nav>

    // <footer class="page-footer font-small blue">
    //   <div class="footer text-center py-3">
    //     <a href="https://www.linkedin.com/in/callan-hunter-195816196/">
    //       LinkedIn
    //     </a>
    //     <a href="https://github.com/callanhunter"> Github</a>
    //   </div>
    // </footer>

    // <nav aria-label="breadcrumb fixed-bottom">

    //   <ol className="breadcrumb">
    //     <li className="breadcrumb-item">
    //       <a href="https://www.linkedin.com/in/callan-hunter-195816196/">
    //         LinkedIn
    //       </a>
    //     </li>
    //     <li className="breadcrumb-item">
    //       <a href="https://github.com/callanhunter">GitHub</a>
    //     </li>
    //   </ol>
    // </nav>
  );
}
