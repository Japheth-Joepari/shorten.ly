import React, { useState, createContext, ReactNode } from "react";
import axios from "axios";
import { toast } from "react-toastify";

interface ShortenContextType {
  setOriginalUrl: (url: any) => void;
  setCustomUrl: (url: any) => void;
  setShortenUrl: (url: any) => void;
  shorten: () => void;
  shortenUrl: string[];
  customUrl: string;
  originalUrl: string;
  loading: boolean;
  deleteUrl: (url: string) => void;
  copyToClipboard: (url: string) => void;
}

export const ShortenContext = createContext<ShortenContextType>({
  setOriginalUrl: () => {},
  setCustomUrl: () => {},
  setShortenUrl: () => {},
  shorten: () => {},
  shortenUrl: [],
  customUrl: "",
  originalUrl: "",
  loading: false,
  deleteUrl: () => {},
  copyToClipboard: () => {},
});

interface Props {
  children: ReactNode;
}

export const ShortenProvider = ({ children }: Props) => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortenUrl, setShortenUrl] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [customUrl, setCustomUrl] = useState("");

  // create Url
  const shorten = async () => {
    setLoading(true);
    if (!originalUrl) {
      return;
    }
    try {
      toast.loading("Generating Url, please wait...");
      const url = customUrl
        ? `https://is.gd/create.php?format=json&url=${encodeURIComponent(
            originalUrl
          )}&shorturl=${encodeURIComponent(customUrl)}`
        : `https://is.gd/create.php?format=json&url=${encodeURIComponent(
            originalUrl
          )}`;
      const response = await axios.get(url);
      const { shorturl } = response.data;
      setLoading(false);
      toast.dismiss();
      setOriginalUrl("");
      setCustomUrl("");
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
      setLoading(false);
      toast.dismiss();
      toast.error(error.message);
      setCustomUrl("");
      setOriginalUrl("");
    }
  };

  // deleteUrl
  const deleteUrl = (url: string) => {
    const updatedShortenUrl = shortenUrl.filter(
      (shortenedUrl) => shortenedUrl !== url
    );
    toast.success("🔗 Link deleted successfully ..");
    setShortenUrl(updatedShortenUrl);
  };

  // copyToClipboard function functionality
  const copyToClipboard = (url: string) => {
    try {
      const textarea = document.createElement("textarea");
      textarea.value = url;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      toast.success("Copied to clipboard");
    } catch (error) {
      toast.error("Failed to copy to clipboard");
    }
  };

  return (
    <ShortenContext.Provider
      value={{
        setCustomUrl,
        setOriginalUrl,
        setShortenUrl,
        shorten,
        shortenUrl,
        customUrl,
        loading,
        deleteUrl,
        originalUrl,
        copyToClipboard,
      }}
    >
      {children}
    </ShortenContext.Provider>
  );
};

export default ShortenProvider;
