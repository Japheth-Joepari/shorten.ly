import { useState, createContext, ReactNode } from "react";
import axios from "axios";

interface ShortenContextType {
  setOriginalUrl: (url: string) => void;
  setShortenUrl: (url: string) => void;
  shorten: () => void;
}

export const ShortenContext = createContext<ShortenContextType>({
  setOriginalUrl: () => {},
  setShortenUrl: () => {},
  shorten: () => {},
});

interface Props {
  children: ReactNode;
}

export const ShortenProvider = ({ children }: Props) => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortenUrl, setShortenUrl] = useState([]);

  const shorten = async () => {
    if (!originalUrl) {
      return;
    }
    try {
      const response = await axios.get(
        `https://is.gd/create.php?format=json&url=${encodeURIComponent(
          originalUrl
        )}`
      );
      const { shorturl } = response.data;
      shortenUrl.push(shorturl);
      console.log(shortenUrl);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ShortenContext.Provider
      value={{ setOriginalUrl, setShortenUrl, shorten, shortenUrl }}
    >
      {children}
    </ShortenContext.Provider>
  );
};

export default ShortenProvider;
