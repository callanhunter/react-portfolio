import React from "react";
import Resume from "./resume.pdf";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Header({ currentPage, handlePageChange }) {
  return (
    <>
      <nav className="navbar navbar-expand-md card navbar-dark bg-dark nav-tabs fixed-top">
        <div className="container-fluid ">
          <a
            href="#home"
            onClick={() => handlePageChange("Home")}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Home"
                ? "nav-link active  h4 "
                : "nav-link text-white h4"
            }
          >
            Callan Hunter
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end "
            id="navbarNavDropdown"
          >
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About"
                  ? "nav-link nav-item active "
                  : "nav-link text-white "
              }
              aria-current="page"
            >
              About
            </a>
            <a
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio"
                  ? "nav-link active "
                  : "nav-link text-white "
              }
              aria-current="page"
            >
              Projects
            </a>

            <a
              href={Resume}
              onClick={() => handlePageChange({ Resume })}
              className="text-white"
              aria-current="page"
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
