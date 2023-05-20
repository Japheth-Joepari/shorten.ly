import Shorten from "./Shorten";
import { ShortenContext } from "../context/ShortenContext";
import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Features() {
  const { shortenUrl } = useContext(ShortenContext);
  return (
    <section className="features" id="features">
      <ToastContainer />
      <div className="container">
        {/* Short URL Feature */}
        <div className="url-shorten-feature">
          <Shorten />
          {shortenUrl != "" ? (
            shortenUrl.map((url: string) => (
              <div className="rsults">
                <div className="url-shorten-results" key={url}>
                  <div>{url}</div>
                  <div className="actionbuttons">
                    <i className="fa fa-trash"></i>
                    <i className="fa fa-copy"></i>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="url-shorten-results">🔗 No shortened Url ...</div>
          )}
        </div>
      </div>
    </section>
  );
}
