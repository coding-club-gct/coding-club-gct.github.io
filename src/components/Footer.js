import logo from "../assets/img/logo.png";
import Grid from "@mui/material/Grid";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <footer
      className="footer  scroll-header"
      id="contact"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="footer__container container grid">
        <div className="footer__content ">
          <a
            href="/#"
            className="footer__logo"
            style={{
              display: "grid",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={logo}
              alt=""
              className="nav__logo-img"
              style={{ width: "80px", height: "80px" }}
            ></img>
          </a>
          <h3 className="footer__title">CODING CLUB OF GCT</h3>
          <p className="footer__description">
            Learn • Code • Develop • Share • Repeat<br></br>
          </p>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Sections</h3>

          <ul className="footer__links">
            <li>
              <a href="/" className="footer__link">
                Home
              </a>
            </li>
            <li>
              <a href="/team" className="footer__link">
                Team
              </a>
            </li>
            <li>
              <a href="/activities" className="footer__link">
                Activities
              </a>
            </li>
            <li>
              <a href="/resources" className="footer__link">
                Resources
              </a>
            </li>
            <li>
              <a href="/blogs" className="footer__link">
                Blogs
              </a>
            </li>
            <li>
              <a href="/register" className="footer__link">
                Join Us
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Contact</h3>
          <div className="contact">
            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              justifyContent="center"
              alignItems="space-around"
            >
              <Grid item xs={12}>
                <div className="info-box">
                  <h3>Email Us</h3>
                  <p>codingclub.gct@gmail.com</p>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="info-box">
                  <h3>Call Us</h3>
                  <p>+91 9655775678</p>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="info-box">
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
      </div>

      <span className="footer__copy">
        &#169; Coding Club of GCT - All rigths reserved
      </span>
    </footer>
  );
}

export default Footer;
