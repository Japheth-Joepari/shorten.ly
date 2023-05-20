import { useState, useContext } from "react";
import { ShortenContext } from "../context/ShortenContext";

export default function Shorten() {
  const { setOriginalUrl, setShortenUrl, shorten } = useContext(ShortenContext);
  const handleShorten = (e: any) => {
    e.preventDefault();
    shorten();
  };
  return (
    <form
      className="url-shorten-form"
      id="url-shorten-form"
      onSubmit={(e) => handleShorten(e)}
    >
      <div>
        <input
          type="text"
          className="url-input"
          placeholder="Shorten a link here..."
          onChange={(e) => setOriginalUrl(e.target.value)}
          autoComplete="off"
        />
        <span className="alert" />
      </div>
      <button type="submit" className="btn btn-lg btn-plus-icon">
        🔗 Shorten It!
      </button>
    </form>
  );
}
