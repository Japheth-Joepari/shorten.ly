import "./assets/styles/App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Features from "./components/Features";
import { ShortenProvider } from "./context/ShortenContext";
import { AuthProvider } from "./context/AuthContext";
import Auth from "./Pages/Auth/Auth";
import Pages from "./Pages/Pages";

function App() {
  return (
    <main className="main">
      <ShortenProvider>
        <AuthProvider>
          <Pages />
        </AuthProvider>
      </ShortenProvider>
    </main>
  );
}

export default App;
