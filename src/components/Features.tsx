import Shorten from "./Shorten";
import { ShortenContext } from "../context/ShortenContext";
import { useContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import QRCode from "qrcode.react";

export default function Features() {
  const { shortenUrl, deleteUrl, copyToClipboard } = useContext(ShortenContext);
  const [visibleQRCode, setVisibleQRCode] = useState([]);

  const toggleQRCodeVisibility = (url: any) => {
    if (visibleQRCode.includes(url)) {
      setVisibleQRCode((prev) => prev.filter((item) => item !== url));
    } else {
      setVisibleQRCode((prev) => [...prev, url]);
    }
  };

  return (
    <section className="features" id="features">
      <ToastContainer />
      <div className="container">
        {/* Short URL Feature */}
        <div className="url-shorten-feature">
          <Shorten />
          {shortenUrl.length > 0 ? (
            shortenUrl.map((url: string) => (
              <div className="rsults" key={url}>
                <div className="url-shorten-results">
                  <div>
                    {url}
                    <button onClick={() => toggleQRCodeVisibility(url)}>
                      {!visibleQRCode.includes(url)
                        ? "😳 View QR Code"
                        : "🫣 Hide Qr Code"}
                    </button>
                  </div>
                  <div className="actionbuttons">
                    <i
                      className="fa fa-trash"
                      onClick={() => deleteUrl(url)}
                    ></i>
                    <i
                      className="fa fa-copy"
                      onClick={() => copyToClipboard(url)}
                    ></i>
                  </div>
                </div>
                <div className="qrcode">
                  {visibleQRCode.includes(url) && <QRCode value={url} />}
                </div>
              </div>
            ))
          ) : (
            <div className="url-shorten-results">🔗 No shortened URLs...</div>
          )}
        </div>
      </div>
    </section>
  );
}
