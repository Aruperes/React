import Header from "./components/Header";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <div className="body-wrap">
      <Header />
      <main className="site-content">
        <Hero />
        <Clients />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;
