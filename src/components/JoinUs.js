import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const JoinUs = () => {
  return (
    <Container
      fixed
      sx={{ px: "2rem", mt: "3rem" }}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <section className="speakers">
        <div className="section-header">
          <h2>JOIN US</h2>
          <p>
            Registrations are open!!!&nbsp;Let we build together a technical
            atmosphere
          </p>
        </div>
        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 1, sm: 1, md: 3 }}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfMud_O5SWAJiAEc9ADi3_FHeTGGkWVbql_LgvM8Y8VDkpwDg/viewform?embedded=true"
              width="100%"
              title="Register"
              height="1700"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>
          </Grid>
        </Grid>
      </section>
    </Container>
  );
};

export default JoinUs;
