import React from "react";
import { team } from "../data/Team";
import devimam from "../assets/img/team_photos/devimam.jpg";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";

const Team = () => {
  return (
    <Container
      fixed
      md={{ px: "2rem", mt: "3rem" }}
      sx={{ px: "1rem", mt: "3rem" }}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <section className="speakers">
        <div className="section-header">
          <h2>TEAM 2022</h2>
          <p>A crew of passionate developers with resonating ideas</p>
        </div>

        <Grid container rowSpacing={8} justifyContent="center" sx={{ mb: 7 }}>
          <Grid item xs={12} md={4}>
            <div className="profile-img">
              <img
                src={devimam}
                alt="not loaded"
                style={{
                  position: "relative",
                  width: "170px",
                  height: "170px",
                  borderRadius: "50%",
                  border: "5px hsl(46, 100%, 47%) solid",
                  margin: "0 0.5rem",
                }}
              ></img>
            </div>
            <Card
              sx={{
                backgroundColor: "transparent",
                color: "white",
                marginTop: "50px",
                borderRadius: "0",
                border: 0,
              }}
            >
              <CardContent className="profile">
                <h3>Devi R</h3>
                <p>
                  Assistant Professor at GCT Coimbatore<br></br>Club Advisor
                </p>
              </CardContent>

              <CardActions className="profile-icon ">
                <a
                  href="https://www.linkedin.com/in/devi-r-b659a6122/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <IconButton aria-label="share">
                    <LinkedInIcon
                      sx={{ color: "hsl(46, 100%, 47%);" }}
                      fontSize="small"
                    />
                  </IconButton>
                </a>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        <Grid
          container
          rowSpacing={8}
          // columnSpacing={2}

          justifyContent="center"
        >
          {/* <Grid item md={6} xs={12}>
            <div
              className="profile-img"
              style={{
                backgroundColor: "hsla(46, 100%, 47%, 0.199)",
                width: "100%",
                height: "120px",
                position: "relative",
                top: "50px",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              <img
                src=""
                alt="not loaded"
                style={{
                  position: "relative",
                  width: "150px",
                  height: "200px",
                }}
              ></img>
            </div>
            <Card
              sx={{
                backgroundColor: "transparent",
                color: "white",
                marginTop: "50px",
                borderRadius: "0",
                border: 0,
              }}
            >
              <CardContent className="profile">
                <h3>Mr. C. Rajkumar Madhuram</h3>
                <p>
                  CTO of C1X Inc.<br></br>Alumini Mentor
                </p>
              </CardContent>

              <CardActions className="profile-icon ">
                <a href="https://www.linkedin.com/in/rmadhuram">
                  <IconButton aria-label="share">
                    <LinkedInIcon
                      sx={{ color: "hsl(46, 100%, 47%);" }}
                      fontSize="small"
                    />
                  </IconButton>
                </a>
              </CardActions>
            </Card>
          </Grid> */}

          {team.map((person) => (
            <Grid item md={4} xs={6} key={person.id}>
              <div className="profile-img">
                <img
                  src={person.img}
                  alt="not loaded"
                  style={{
                    position: "relative",
                    width: "170px",
                    height: "170px",
                    borderRadius: "50%",
                    border: "5px hsl(46, 100%, 47%) solid",
                    margin: "0 0.5rem",
                  }}
                ></img>
              </div>
              <Card
                sx={{
                  backgroundColor: "transparent",
                  color: "white",
                  marginTop: "50px",
                  borderRadius: "0",
                  border: 0,
                }}
              >
                <CardContent className="profile">
                  <h3>{person.name}</h3>
                  <p>{person.designation}</p>
                </CardContent>

                <CardActions className="profile-icon ">
                  {person.linkedin && (
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <IconButton aria-label="share">
                        <LinkedInIcon
                          sx={{ color: "hsl(46, 100%, 47%);" }}
                          fontSize="small"
                        />
                      </IconButton>
                    </a>
                  )}
                  {person.github && (
                    <a href={person.github} target="_blank"
                          rel="noreferrer">
                      <IconButton aria-label="add to favorites">
                        <GitHubIcon
                          sx={{ color: "hsl(46, 100%, 47%);" }}
                          fontSize="small"
                        />
                      </IconButton>
                    </a>
                  )}

                  {person.website && (
                    <a href={person.website} target="_blank"
                          rel="noreferrer">
                      <IconButton aria-label="share">
                        <LanguageIcon
                          sx={{ color: "hsl(46, 100%, 47%);" }}
                          fontSize="small"
                        />
                      </IconButton>
                    </a>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </section>
    </Container>
  );
};

export default Team;
