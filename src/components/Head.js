import React from "react";
import home from "../assets/img/home.png";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GLightbox from "glightbox";

const myGallery = GLightbox({
  elements: [
 
    {
      href: "https://www.youtube.com/watch?v=5inCr7k7jCo",
      type: "video",
      source: "youtube",
      width: 900,
    },
  
  ],
  autoplayVideos: true,
  onOpen: function () {
    setInterval(() => {
      myGallery.nextSlide();
    }, 3000);
  },
});
const handleClick = () => {
  myGallery.open();
};

function Home() {
  return (
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      style={{ height: "85vh" }}
      sx={{ px: "2rem", mt: "4rem" }}
    >
      <Grid item xs={12}>
        <img src={home} alt="" width={230} height={230}></img>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h2" xs={{ mb: "1rem" }}>
          CODING CLUB OF GCT
        </Typography>
        <Typography variant="h6" xs={{ mb: "1rem" }}>
          Learn • Code • Develop • Share • Repeat
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          marginTop: "-3rem",
        }}
      >
        <a href="/#" className="play-btn mb-4 " onClick={handleClick}>
          {" "}
        </a>
      </Grid>
    </Grid>
  );
}

export default Home;
