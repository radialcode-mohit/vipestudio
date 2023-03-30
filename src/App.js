import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Feature from "./components/Feature";
import Integer from "./components/Integer";
import Studio from "./components/Studio";

import Hero from "./components/Hero";
import LongTerm from "./components/LongTerm";
import WordPress from "./components/WordPress";
import TeamSection from "./components/TeamSection";
import SuccessGuide from "./components/SuccessGuide";
import HaveYou from "./components/HaveYou";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Hero />
      <Feature />
      <Integer />
      <Studio />

      <LongTerm />
      <WordPress />
      <TeamSection />
      <SuccessGuide />
      <HaveYou />
      <Footer />
    </>
  );
}

export default App;
