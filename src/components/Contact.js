import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import MailTwoToneIcon from "@mui/icons-material/MailTwoTone";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const Contact = () => {
  return (
    <Container
      fixed
      sx={{ px: "2rem", mt: "3rem" }}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <section className="speakers">
        <div className="section-header">
          <h2>CONTACT</h2>
          <p>Feel free to contact us</p>
        </div>
        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 1, sm: 1, md: 3 }}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item md={6}>
            <div className="footer__content">
              <div className="contact">
                <Grid
                  container
                  rowSpacing={3}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  justifyContent="center"
                  alignItems="space-around"
                >
                  <Grid item xs={12}>
                    <div className="info-box1">
                      <p>
                        <HomeTwoToneIcon fontSize="large" />
                      </p>
                      <h3>Address</h3>
                      <p>
                        Government College of Technology, Thadagam Road,
                        Coimbatore - 641013
                      </p>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div className="info-box1">
                      <p>
                        <MailTwoToneIcon fontSize="large" />
                      </p>
                      <h3>Email Us</h3>

                      <a href="mailto:codingclub.gct@gmail.com">
                        codingclub.gct@gmail.com
                      </a>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div className="info-box1">
                      <h3>Call Us</h3>
                      <p>+91 9655775678</p>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div className="info-box1">
                      <div className="footer__social">
                        <a
                          href="https://www.linkedin.com/company/coding-club-gct"
                          target="_blank"
                          rel="noreferrer"
                          className="footer__social-link"
                        >
                          <LinkedInIcon fontSize="small" />
                        </a>
                        <a
                          href="https://instagram.com/codingclub.gct?utm_medium=copy_link"
                          target="_blank"
                          rel="noreferrer"
                          className="footer__social-link"
                        >
                          <InstagramIcon fontSize="small" />
                        </a>
                        <a
                          href="https://www.youtube.com/channel/UCeq-w-ypo1_hoyT9OuIjB6g/"
                          target="_blank"
                          rel="noreferrer"
                          className="footer__social-link"
                        >
                          <YouTubeIcon fontSize="small" />
                        </a>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>

          <Grid item md={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2710479817256!2d76.9338199143825!3d11.018278892157703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858dc68b80bbf%3A0x24bab8d60d2bc693!2sGovernment%20College%20of%20Technology%2C%20Coimbatore!5e0!3m2!1sen!2sin!4v1642244942957!5m2!1sen!2sin"
              height="420"
              title="Map"
              width="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </Grid>
        </Grid>
      </section>
    </Container>
  );
};

export default Contact;
