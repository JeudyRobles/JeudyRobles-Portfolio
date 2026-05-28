import { useEffect, useState } from "react";
import Nav from "./components/nav/Nav.jsx";
import Hero from "./components/hero/Hero.jsx";
import Projects from "./components/projects/Projects.jsx";
import Footer from "./components/footer/Footer.jsx";

import { ReactLenis, useLenis } from "lenis/react";

import AOS from "aos";
import "aos/dist/aos.css";

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
      document.documentElement.classList.toggle(
        "reduce-motion",
        mediaQuery.matches,
      );
    };

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return prefersReducedMotion;
}

function LenisAosBridge() {
  useLenis(() => {
    AOS.refresh();
  });

  return null;
}

function App() {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    AOS.init({
      duration: prefersReducedMotion ? 0 : 600,
      easing: "ease-in-out",
      once: true,
      disable: prefersReducedMotion,
    });
    AOS.refresh();
  }, [prefersReducedMotion]);

  const content = (
    <>
      {!prefersReducedMotion && <LenisAosBridge />}
      <div className="container">
        <Nav />
        <Hero />
        <Projects />
        <Footer />
      </div>
    </>
  );

  if (prefersReducedMotion) {
    return content;
  }

  return <ReactLenis root>{content}</ReactLenis>;
}

export default App;
