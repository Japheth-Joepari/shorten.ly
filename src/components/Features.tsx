import Shorten from "./Shorten";
import { ShortenContext } from "../context/ShortenContext";
import { useContext } from "react";

export default function Features() {
  const { shortenUrl } = useContext(ShortenContext);
  return (
    <section className="features" id="features">
      <div className="container">
        {/* Short URL Feature */}
        <div className="url-shorten-feature">
          <Shorten />
          {shortenUrl ? shortenUrl.map((url: string) => (
            <div className="url-shorten-results" key={url}>
              {url}
            </div>
          )): ( <div className="url-shorten-results" key={url}>)}
        </div>
      </div>
    </section>
  );
}
