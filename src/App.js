import Scroll from "./components/Scroll";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Activities from "./pages/Activities";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Resources from "./pages/Resources";
import PageNotFound from "./pages/PageNotFound";
import JoinUs from "./pages/JoinUs";

const theme = createTheme({
  typography: {
    h2: {
      fontWeight: 1000,
      fontSize: "2.5rem",
      lineHeight: "109%",
      "@media (min-width:600px)": {
        fontSize: "3rem",
        fontWeight: 1000,
      },
    },
    h6: {
      "@media (max-width:600px)": {
        fontSize: "1rem",
      },
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/team" element={<Team />}></Route>
            <Route exact path="/activities" element={<Activities />}></Route>
            <Route exact path="/resources" element={<Resources />}></Route>
            <Route exact path="/blogs" element={<Blogs />}></Route>
            <Route exact path="/register" element={<JoinUs />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>

          <Scroll />
          <Footer />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
