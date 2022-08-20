import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import InstallMobileTwoToneIcon from "@mui/icons-material/InstallMobileTwoTone";
import LanguageTwoToneIcon from "@mui/icons-material/LanguageTwoTone";

const About = () => {
  return (
    <div style={{ background: "rgba(32, 32, 32, 0.829)" }}>
      <Container fixed sx={{ py: "4rem" }}>
        <div className="section-header">
          <h2>About</h2>
          <p>A club exclusively for coding</p>
        </div>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          rowSpacing={2}
        >
          <Grid item xs={12} md={6}>
            <List sx={{ width: "100%" }} aria-label="contacts">
              <ListItem disablePadding>
                <ListItemIcon>
                  <CodeRoundedIcon sx={{ color: "#f1b900" }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="h6">
                      Here we practice and participate in programming
                      competitions, solving real-world problems
                    </Typography>
                  }
                />
              </ListItem>

              <ListItem disablePadding>
                <ListItemIcon>
                  <CodeRoundedIcon sx={{ color: "#f1b900" }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="h6">
                      Develop applications, providing tech support to our
                      college and working on open source contributions.
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: "#f1b900",
                textAlign: "center",
                mb: "1rem",
              }}
            >
              Domains
            </Typography>
            <div
              style={{
                display: "grid",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <List
                sx={{
                  width: "100%",
                  backgroundColor: "#f0b80033",
                  color: "white",
                }}
              >
                <ListItem>
                  <ListItemIcon style={{ color: "#f1b900" }}>
                    <InstallMobileTwoToneIcon />
                  </ListItemIcon>

                  <ListItemText primary="Mobile Apps Development" />
                </ListItem>
                <ListItem>
                  <ListItemIcon style={{ color: "#f1b900" }}>
                    <CodeRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Competitive Programming" />
                </ListItem>
                <ListItem>
                  <ListItemIcon style={{ color: "#f1b900" }}>
                    <LanguageTwoToneIcon />
                  </ListItemIcon>
                  <ListItemText primary="Full Stack Development" />
                </ListItem>
              </List>
            </div>
          </Grid>
          <a href="/team" className="about-btn scrollto">
            Meet our Team
          </a>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
