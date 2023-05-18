import { useState } from "react";

export default function Header() {
  const [toggled, setToggled] = useState(false);
  const toggleNav = () => {
    setToggled(!toggled);
    console.log(toggled);
  };

  const toggleStyle = toggled
    ? {
        height: "363px",
      }
    : {};

  return (
    <header className="header">
      <div className="container flex-between">
        <div className="logo">
          <a href="#">
            <h2 className="logoHead">
              <b>Shorten.ly🚀</b>
            </h2>
          </a>
        </div>
        <nav
          className="main-navgation flex-between flex-ver-top"
          style={toggleStyle}
        >
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#resources">Shorten</a>
            <a href="#resources">Resources</a>
          </div>
          <div className="nav-buttons">
            <a href="#" className="log-in">
              Login
            </a>
            <a href="#" className="sign-up btn btn-sm">
              Sign Up
            </a>
          </div>
        </nav>
        <div className="burger-menu" onClick={toggleNav}>
          <i className="fa fa-bars icon" aria-hidden="true"></i>
        </div>
      </div>
    </header>
  );
}
