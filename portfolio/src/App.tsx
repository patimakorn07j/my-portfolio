import { useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Activities from "./components/Activities";
import SectionDivider from "./components/SectionDivider";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}
      <div className="min-h-screen bg-bg font-body text-ink">
        <Navbar />
        <Hero />
        <Activities />
        <SectionDivider />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </>
  );
}