import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Banner() {
  const { loggedIn } = useContext(AuthContext);
  return (
    <section className="landing">
      <div className="landing-text">
        <h1> Open source Url Shortener </h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        {!loggedIn ? (
          <Link to="/auth" className="btn btn-lg">
            Get Started ⚡
          </Link>
        ) : (
          <a href="#url-shorten-form" className="btn btn-lg">
            start 🔗 Shortening ⚡
          </a>
        )}
      </div>
      <div className="landing-image">
        <img
          src="https://elements-cover-images-0.imgix.net/6e855666-1764-4019-be9e-998505bd3fdf?auto=compress%2Cformat&fit=max&w=900&s=4f4ecf1eb453e7d6cafb101dc8965218"
          alt="Working Illustration"
        />
      </div>
    </section>
  );
}
