import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";

const About = () => {
  return (
    <Container fixed sx={{ py: "4rem" }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={7}
      >
        <Grid item xs={12} md={6}>
          <div className="section-header">
            <h2>Vision</h2>
          </div>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            To build a community that serves as a hub for young programmers to
            learn, develop and enrich their coding skills and also acts as a
            platform through which they can exhibit their skills to the
            technical world as talented programmers.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="section-header">
            <h2>Mission</h2>
          </div>
          <Typography variant="h6">
            <List sx={{ width: "100%" }} aria-label="contacts">
              <ListItem disablePadding>
                <ListItemIcon>
                  <CodeRoundedIcon sx={{ color: "#f1b900" }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="h6">
                      To elevate the programming skills of future engineers
                      which will help them learn new tactics to deal with
                      dynamic technologies.
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
                      To enrich the competitive programming skills of students
                      by participating in renowned competitions.
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
                      To enhance the coding skills of budding developers by
                      encouraging and guiding them to build applications.
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
