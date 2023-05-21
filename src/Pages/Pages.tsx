import HomePage from "./HomePage/HomePage";
import Auth from "./Auth/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}
