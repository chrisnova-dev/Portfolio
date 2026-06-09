import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import About from "./components/About";
import Testimonials from "./components/Testimonial";
import Pricing from "./components/Pricing";
import CryptoBackground from "./components/CryptoBackground";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div style={{ fontFamily: "'Syne', sans-serif", background: "#000", minHeight: "100vh", color: "#fff" }}>

      {/* Interactive crypto canvas — fixed behind everything */}
      <CryptoBackground />

      {/* Gold scroll progress bar */}
      <ScrollProgress />

      {/* All content sits above the canvas */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Pricing />
        <Testimonials />
        <Contact />

        <footer style={{
          padding: "40px 0",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}>
          <p style={{ color: "#555", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "6px" }}>
            Built with React + Tailwind CSS
          </p>
          <p style={{ color: "#444", fontSize: "11px" }}>
            © {new Date().getFullYear()}{" "}
            <span style={{ color: "rgba(250,204,21,0.5)" }}>Chris Nova</span>. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

function ScrollProgress() {
  const [pct, setPct] = React.useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const total = el.scrollHeight - el.clientHeight;
      if (total > 0) setPct((el.scrollTop / total) * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "2px", zIndex: 999, background: "rgba(250,204,21,0.1)" }}>
      <div style={{
        height: "100%",
        width: `${pct}%`,
        background: "linear-gradient(90deg, #FACC15, #FDE68A)",
        boxShadow: "0 0 10px rgba(250,204,21,0.9)",
        transition: "width 0.1s linear",
      }} />
    </div>
  );
}

export default App;