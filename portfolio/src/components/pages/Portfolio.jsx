import React from "react";

import Jate from "../images/jate.png";
import Vacation from "../images/vacation-awaits.png";
import Celebrity from "../images/screenshot.png";
import Api from "../images/api.png";
import Employee from "../images/employee.png";
import Readme from "../images/readme.png";
import Ecommerce from "../images/ecommerce.png";
import Cloud1 from "../images/cloudproject5.png";
import Cloud2 from "../images/cloudproject2.png";

export default function Portfolio() {
  return (
    <>
      <main>
        <div className="card m-3">
          <div className="text-center mx-auto d-block">
            <h2 className=" text-center  h1 ">Projects</h2>
          </div>
        </div>
        <div className="row row-col row-cols-md-2 g-4 mb-4 text-center">
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title text-center">Vacation Awaits</h5>
                <p className="card-title text-center">Full Stack Application</p>
                <div className="grid gap-3">
                  <img src={Vacation} className="card-img-top"></img>
                  <button type="button" className="btn btn-dark mt-3">
                    <a
                      href="https://github.com/callanhunter/vacation-awaits"
                      className="card-link text-white text-decoration-none gap-3"
                      target="_blank"
                    >
                      GitHub link
                    </a>
                  </button>
                  <button type="button" className="btn btn-dark  mt-3">
                    <a
                      href="https://vacation-awaits.herokuapp.com/"
                      className="card-link text-white text-decoration-none gap-3"
                      target="_blank"
                    >
                      Deployed link
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col ">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title text-center">Management System</h5>
                <p className="card-title text-center">Back End Application</p>
                <img src={Employee} className="card-img-top"></img>
                <button type="button" className="btn btn-dark  mt-3 ">
                  <a
                    href="https://github.com/callanhunter/management-system"
                    className="card-link text-white text-decoration-none gap-3"
                    target="_blank"
                  >
                    Deployed link
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title text-center">Cloud Project</h5>
                <p className="card-title text-center">
                  Migrating a Database to Amazon RDS
                </p>
                <img src={Cloud1} className="card-img-top"></img>
                <div className="container mt-3 p-4">
                  <button
                    type="button"
                    className="btn btn-dark h-100 "
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                  >
                    Details
                  </button>
                </div>
                <div className="modal" id="myModal">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      {/* <!-- Modal Header --> */}
                      <div className="modal-header">
                        <h4 className="modal-title text-white">Details</h4>
                        <button
                          type="button"
                          className="btn-close btn-dark"
                          data-bs-dismiss="modal"
                        ></button>
                      </div>

                      {/* <!-- Modal body --> */}
                      <div className="card sub-card m-3 list-group-item-dark">
                        <div className="card-body text-center">
                          <h4 className="card-title">
                            Migrating a Database to Amazon RDS
                          </h4>
                          <div className="container">
                            <div className="row">
                              Migrated a MariaDB database that runs on an EC2
                              instance to a MariaDB database that runs on Amazon
                              RDS, while updated to web application to use the
                              new database for future use
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <!-- Modal footer --> */}
                      <div className="modal-footer">
                        <div className="row">
                          Skills: MariaDB · Amazon Relational Database Service
                          (RDS) · Amazon EC2 · AWS Systems Manager · Amazon Web
                          Services (AWS)
                        </div>
                        <button
                          type="button"
                          className="btn btn-dark h-100"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title text-center">Cloud Project</h5>
                <p className="card-title text-center">
                  Creating a Dynamic Website for a Cafe
                </p>
                <img src={Cloud2} className="card-img-top"></img>

                <div className="container mt-3 p-4">
                  <button
                    type="button"
                    className="btn btn-dark h-100"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                  >
                    Details
                  </button>
                </div>
                <div className="modal" id="myModal">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      {/* <!-- Modal Header --> */}
                      <div className="modal-header">
                        <h4 className="modal-title text-white">Details</h4>
                        <button
                          type="button"
                          className="btn-close btn-dark"
                          data-bs-dismiss="modal"
                        ></button>
                      </div>

                      {/* <!-- Modal body --> */}
                      <div className="card sub-card m-3 list-group-item-dark">
                        <div className="card-body text-center">
                          <h4 className="card-title">
                            Creating a Dynamic Website for a Cafe
                          </h4>
                          <div className="container">
                            <div className="row">
                              Deployed an application on an Amazon EC2 instance,
                              enabling the cafe to accept online orders. This
                              application works for the first AWS Region (the
                              development environment) and the second AWS Region
                              (the production environment) after creating an AMI
                              from the EC2 instance
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <!-- Modal footer --> */}
                      <div className="modal-footer">
                        <div className="row">
                          Skills: Amazon EC2 · Cloud9 IDE · AWS Systems Manager
                          · Amazon Machine Image (AMI)
                        </div>
                        <button
                          type="button"
                          className="btn btn-dark"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
