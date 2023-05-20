import "./assets/styles/App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Features from "./components/Features";
import { ShortenProvider } from "./context/ShortenContext";

function App() {
  return (
    <main className="main">
      <ShortenProvider>
        <Header />
        <Banner />
        <Features />
        <Footer />
      </ShortenProvider>
    </main>
  );
}

export default App;
