import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import error from "../assets/img/404.svg";

const PageNotFound = () => {
  return (
    <Container
      fixed
      sx={{ px: "2rem", mt: "3rem" }}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <section className="speakers">
        <div className="section-header">
          <h2>Page Not Found</h2>
          <p>Awww... It's just a 404 Error!</p>
        </div>
        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 1, sm: 1, md: 3 }}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item md={4}>
            <img src={error} alt="Page Not Found"></img>
          </Grid>
        </Grid>
      </section>
    </Container>
  );
};

export default PageNotFound;
