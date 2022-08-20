import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import program from "../assets/img/program.svg";
const Blogs = () => {
  return (
    <Container
      fixed
      sx={{ px: "2rem", mt: "3rem" }}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <section className="speakers">
        <div className="section-header">
          <h2>BLOGS</h2>
          <p>Technical blogs listed here</p>
        </div>
        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 1, sm: 1, md: 3 }}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item md={4}>
            <Card
              sx={{
                display: "flex",
                height: "25vh",
                bgcolor: "hsla(46, 100%, 47%, 0.199);",
                color: "white",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <h2>COMING SOON</h2>
                  <Typography
                    variant="subtitle1"
                    color="hsl(46, 100%, 47%);"
                    component="div"
                  >
                    Blogs will be here shortly :)
                  </Typography>
                </CardContent>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 160 }}
                image={program}
                alt="Live from space album cover"
              />
            </Card>
          </Grid>
        </Grid>
      </section>
    </Container>
  );
};

export default Blogs;
