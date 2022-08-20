import React from "react";
import Container from "@mui/material/Container";

// const complexExample = (id) => {
//   var arr = ["day-1", "day-2", "day-3"];
//   for (let x of arr) {
//     document.getElementById(x).style.display = "none";
//     document.getElementById(x + "1").classList.remove("active");
//   }
//   document.getElementById(id).style.display = "block";
//   document.getElementById(id + "1").classList.add("active");
// };

// const complexExample1 = (id) => {
//   var arr = ["day-1", "day-2", "day-3"];
//   for (let x of arr) {
//     document.getElementById(x).style.display = "none";
//     document.getElementById(x + "2").classList.remove("active");
//   }
//   document.getElementById(id).style.display = "block";
//   document.getElementById(id + "2").classList.add("active");
// };

const Activities = () => {
  return (
    <Container
      fixed
      sx={{ px: "2rem", mt: "3rem" }}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <section className="schedule">
        <div data-aos="fade-up">
          <div className="section-header">
            <h2>ACTIVITIES</h2>
            <p>Yearly Plan Schedule</p>
          </div>

          <ul
            className="nav nav-tabs"
            role="tablist"
            data-aos="fade-up"
            data-aos-delay="100"
            id="lg"
          >
            <li className="nav-item">
              <p
                className="nav-link"
                id="day-11"
                role="tab"
                data-bs-toggle="tab"
                // onClick={() => complexExample("day-1")}
              >
                Web Development
              </p>
            </li>
            <li className="nav-item">
              <p
                className="nav-link"
                id="day-21"
                role="tab"
                data-bs-toggle="tab"
                // onClick={() => complexExample("day-2")}
              >
                Android Development
              </p>
            </li>
            <li className="nav-item">
              <p
                className="nav-link"
                id="day-31"
                role="tab"
                data-bs-toggle="tab"
                // onClick={() => complexExample("day-3")}
              >
                Competitive Programming
              </p>
            </li>
          </ul>

          <ul
            className="nav nav-tabs"
            role="tablist"
            data-aos="fade-up"
            data-aos-delay="100"
            id="sm"
          >
            <li className="nav-item">
              <p
                className="nav-link"
                id="day-12"
                role="tab"
                data-bs-toggle="tab"
                // onClick={() => complexExample1("day-1")}
              >
                Web
              </p>
            </li>
            <li className="nav-item">
              <p
                className="nav-link"
                id="day-22"
                role="tab"
                data-bs-toggle="tab"
                // onClick={() => complexExample1("day-2")}
              >
                Android
              </p>
            </li>
            <li className="nav-item">
              <p
                className="nav-link"
                id="day-32"
                role="tab"
                data-bs-toggle="tab"
                // onClick={() => complexExample1("day-3")}
              >
                Programming
              </p>
            </li>
          </ul>

          <h3 className="sub-heading">Yearly Plan - 2022</h3>

          <div
            className="tab-content row justify-content-center "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div role="tabpanel" className="col-lg-9 tab-pane " id="day-1">
              <div className="row schedule-item">
                <div className="col-md-2">
                  <time>EVEN SEMESTER VACATION</time>
                </div>
                <div className="col-md-10">
                  <h4>Competitive Programming BootCamp</h4>
                </div>
              </div>

              <div className="row schedule-item">
                <div className="col-md-2">
                  <time>ODD SEMESTER</time>
                </div>
                <div className="col-md-10">
                  <h4>
                    <ol style={{ color: "white" }}>
                      <li>Programming contest two weeks once</li>
                      <li>
                        Lets's learn together: Web and Mobile Apps Development
                      </li>
                      <li>Webinar once for every month</li>
                      <li>Some fun stuffs to know others well</li>
                    </ol>
                  </h4>
                </div>
              </div>

              <div className="row schedule-item">
                <div className="col-md-2">
                  <time>ODD SEMESTER HOLIDAYS</time>
                </div>
                <div className="col-md-10">
                  <h4>Webinar on Placement Guidance</h4>
                </div>
              </div>

              <div className="row schedule-item">
                <h3 className="sub-heading">EVEN SEMESTER</h3>

                <div className="col-md-12 " style={{ textAlign: "center" }}>
                  <h4>Team Selection , Pratice & Participation in ICPC</h4>
                </div>
              </div>

              <div className="row schedule-item">
                <div className="col-md-2">
                  <time>1st & 2nd Month</time>
                </div>
                <div className="col-md-10">
                  <h4>Data Structures and Algorithms and OOPS concepts</h4>
                </div>
              </div>

              <div className="row schedule-item">
                <div className="col-md-2">
                  <time>3nd Month</time>
                </div>
                <div className="col-md-10">
                  <h4>Coding Club Main Event</h4>
                </div>
              </div>

              <div className="row schedule-item">
                <div className="col-md-2">
                  <time>4th Month</time>
                </div>
                <div className="col-md-10">
                  <h4>Mock-placement & Year-end events</h4>
                </div>
              </div>
            </div>

            {/* <div role="tabpanel" className="col-lg-9  tab-pane " id="day-2">
              <div className="row schedule-item">
                <div className="col-md-2">
                  <time>10:00 AM</time>
                </div>
                <div className="col-md-10">
                  <div className="speaker">
                    <img src={new1} alt="Brenden Legros" />
                  </div>
                  <h4>
                    Libero corrupti explicabo itaque.{" "}
                    <span>Brenden Legros</span>
                  </h4>
                  <p>Facere provident incidunt quos voluptas.</p>
                </div>
              </div>

              <div className="row schedule-item">
                <div className="col-md-2">
                  <time>11:00 AM</time>
                </div>
                <div className="col-md-10">
                  <div className="speaker">
                    <img src={new1} alt="Brenden Legros" />
                  </div>
                  <h4>
                    Et voluptatem iusto dicta nobis. <span>Hubert Hirthe</span>
                  </h4>
                  <p>
                    Maiores dignissimos neque qui cum accusantium ut sit sint
                    inventore.
                  </p>
                </div>
              </div>
            </div> */}
            {/* 
            <div role="tabpanel" className="col-lg-9  tab-pane " id="day-3">
              <div className="row schedule-item">
                <div className="col-md-2">
                  <time>10:00 AM</time>
                </div>
                <div className="col-md-10">
                  <div className="speaker">
                    <img src={new1} alt="Brenden Legros" />
                  </div>
                  <h4>
                    Et voluptatem iusto dicta nobis. <span>Hubert Hirthe</span>
                  </h4>
                  <p>
                    Maiores dignissimos neque qui cum accusantium ut sit sint
                    inventore.
                  </p>
                </div>
              </div>

              <div className="row schedule-item">
                <div className="col-md-2">
                  <time>11:00 AM</time>
                </div>
                <div className="col-md-10">
                  <div className="speaker">
                    <img src={new1} alt="Brenden Legros" />
                  </div>
                  <h4>
                    Explicabo et rerum quis et ut ea. <span>Cole Emmerich</span>
                  </h4>
                  <p>
                    Veniam accusantium laborum nihil eos eaque accusantium
                    aspernatur.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Activities;
