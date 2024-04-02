import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import bannerImg from '../assets/images/url-shortener-banner-right.png'

export default function Banner() {
  const { loggedIn } = useContext(AuthContext);
  return (
    <section className="landing">
      <div className="landing-text">
        <h1> OpenSource 🚀 Url  Shortener </h1>
        <p>
          Discover the power of our open-source URL shortener
          shorten URLs with our open-source solution.
        </p>
        {!loggedIn ? (
          <div className="gp">
            <Link to="/auth" className="btn btn-lg">
              Get Started ⚡
            </Link>

            <Link to="/auth" className="btn btn-lg whit">
              code  <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="" />
            </Link>
          </div>
        ) : (
          <div className="gp">
            <Link to="/auth" className="btn btn-lg">
              shorten now ⚡
            </Link>

            <a href="https://github.com/Japheth-Joepari/shorten.ly" className="btn btn-lg whit">
              code  <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="" />
            </a>
          </div>
        )}
      </div>
      <div className="landing-image">
        <img
          src={bannerImg}
          alt="Working Illustration"
        />
      </div>
    </section>
  );
}
