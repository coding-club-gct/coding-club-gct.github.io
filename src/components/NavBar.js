import React from "react";
import logo from "../assets/img/logo.png";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import Container from "@mui/material/Container";

function show() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.add("show-menu");
}

function close() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

function NavBar({ id }) {
  window.onload = function () {
    if (id) document.getElementById(id).classList.add("active-link");
  };
  return (
    <header className="header" id="header">
      <Container fixed>
        <nav className="nav">
          <a href="/#" className="nav__logo">
            <img
              src={logo}
              alt=""
              className="nav__logo-img"
              style={{ width: "80px", height: "80px" }}
            ></img>
          </a>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a
                  href="/"
                  className="nav__link"
                  id="home"
                  onClick={linkAction}
                >
                  Home
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="/team"
                  className="nav__link"
                  id="team"
                  onClick={linkAction}
                >
                  Team
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="/activities"
                  className="nav__link"
                  id="activities"
                  onClick={linkAction}
                >
                  Activities
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="/resources"
                  className="nav__link"
                  id="resources"
                  onClick={linkAction}
                >
                  Resources
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="/blogs"
                  className="nav__link"
                  id="blogs"
                  onClick={linkAction}
                >
                  Blogs
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="/contact"
                  className="nav__link"
                  id="contact"
                  onClick={linkAction}
                >
                  Contact
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="/register"
                  className="nav__link"
                  id="register"
                  onClick={linkAction}
                >
                  Join Us
                </a>
              </li>
            </ul>

            <div className="nav__close" id="nav-close" onClick={close}>
              <CloseSharpIcon />
            </div>
          </div>

          <div className="nav__toggle" id="nav-toggle" onClick={show}>
            <MenuRoundedIcon fontSize="large" />
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default NavBar;
