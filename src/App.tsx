import "./assets/styles/App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Features from "./components/Features";

function App() {
  return (
    <main className="main">
      <Header />
      <Banner />
      <Features />
      <Footer />
    </main>
  );
}

export default App;
