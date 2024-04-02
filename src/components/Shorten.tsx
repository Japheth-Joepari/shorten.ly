import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import { ShortenContext } from "../context/ShortenContext";

export default function Shorten() {
  const {
    setOriginalUrl,
    shorten,
    customUrl,
    loading,
    setCustomUrl,
    originalUrl,
  } = useContext(ShortenContext);

  const { loggedIn } = useContext(AuthContext);
  const [custom, setCustom] = useState(false);
  const navigate = useNavigate();

  const customInput = () => {
    setCustom(!custom);
  };
  const handleShorten = (e: any) => {
    e.preventDefault();
    if (loggedIn) {
      shorten();
    } else {
      toast.warning("Pls login First ...");
      setTimeout(() => {
        navigate("/auth");
      }, 2000);
    }
  };
  return (
    <>
      <ToastContainer />
      <form
        className="url-shorten-form"
        id="url-shorten-form"
        onSubmit={(e) => handleShorten(e)}
      >
        <div>
          <div className="inputs">
            <input
              type="text"
              className="url-input"
              value={originalUrl}
              placeholder="Enter a link ..."
              onChange={(e) => setOriginalUrl(e.target.value)}
              autoComplete="off"
            />
          </div>

          <span className="alert" />
        </div>
        {custom && (
          <input
            type="text"
            className="url-input"
            placeholder="+ custom link here .."
            value={customUrl}
            onChange={(e) => setCustomUrl(e.target.value)}
            autoComplete="off"
          />
        )}
        <button
          type="submit"
          className="btn btn-lg btn-plus-icon"
          disabled={loading}
        >
          🔗 Shorten It!
        </button>
        <button
          type="button"
          className=" btn-custom "
          disabled={loading}
          onClick={() => customInput()}
        >
          {!custom ? "+ Customize✨ link!" : " - Hide Customize✨ link"}
        </button>
      </form>
    </>
  );
}
