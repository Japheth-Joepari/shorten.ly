import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Header() {
  const [toggled, setToggled] = useState(false);
  const { loggedIn, image, userSignOut } = useContext(AuthContext);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleImageClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleNav = () => {
    setToggled(!toggled);
    console.log(toggled);
  };

  const toggleStyle = toggled
    ? {
      height: "10rem",
    }
    : {};

  return (
    <header className="header">
      <div className="container flex-between">
        <div className="logo">
          <a href="#">
            <h2 className="logoHead">
              <b>Short.is.gd🔗</b>
            </h2>
          </a>
        </div>
        <nav
          className="main-navgation flex-between flex-ver-top"
          style={toggleStyle}
        >
          <div className="nav-links">
            {/* <a href="#resources">start</a> */}
            {/* <a href="#features">Features</a>
            <a href="#resources">Resources</a> */}
          </div>
          {!loggedIn ? (
            <div className="nav-buttons mtr">
              <Link to="/auth" className="log-in ">
                Login
              </Link>
              <Link to="/auth" className="sign-up btn btn-sm ">
                Sign Up
              </Link>
            </div>
          ) : (
            <div className="img-div">
              <img
                src={image && image}
                alt="Dropdown Image"
                onClick={handleImageClick}
                className={"imgStyle"}
              />

              {isDropdownOpen && (
                <div className="">
                  {/* Dropdown Content */}
                  <a href="#" onClick={userSignOut} className="logoutLink logout-l">
                    Logout
                  </a>
                </div>
              )}
            </div>
          )}
        </nav>
        {!loggedIn ? (
          <div className="burger-menu bars" onClick={toggleNav}>
            <i className="fa fa-bars icon" aria-hidden="true"></i>
          </div>
        ) : (
          <div className="img-div authDiv">
            <img
              src={image && image}
              alt="Dropdown Image"
              onClick={handleImageClick}
              className={"imgStyle"}
            />

            {isDropdownOpen && (
              <div>
                {/* Dropdown Content */}
                <a href="#" onClick={userSignOut} className="logoutLink logout-l2">
                  Logout
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
