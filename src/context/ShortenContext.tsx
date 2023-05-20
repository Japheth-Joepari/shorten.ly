import { useState, createContext, ReactNode } from "react";
import axios from "axios";
import { toast } from "react-toastify";

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
  const [loading, setLoading] = useState(false);

  const shorten = async () => {
    if (!originalUrl) {
      return;
    }
    try {
      setLoading(true);
      toast.loading("Generating Url pls wait ...");
      const response = await axios.get(
        `https://is.gd/create.php?format=json&url=${encodeURIComponent(
          originalUrl
        )}`
      );
      const { shorturl } = response.data;

      setLoading(false);
      toast.dismiss();
      if (!response.data.errormessage) {
        if (shortenUrl.includes(shorturl)) {
          toast.error("Short URL already exists");
        } else {
          setShortenUrl([...shortenUrl, shorturl]);
          toast.success("Generated successfully");
        }
      } else {
        toast.warn(response.data.errormessage);
      }
    } catch (error) {
      toast.dismiss();
      toast.error(error.message);
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
