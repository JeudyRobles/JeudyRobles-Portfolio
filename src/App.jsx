import { useEffect, useState } from "react";
import Nav from "./components/nav/Nav.jsx";
import Hero from "./components/hero/Hero.jsx";
import Projects from "./components/projects/Projects.jsx";
import Footer from "./components/footer/Footer.jsx";

import { ReactLenis, useLenis } from "lenis/react";

import AOS from "aos";
import "aos/dist/aos.css";

import { LanguageProvider, useLanguage } from "./context/LanguageContext.jsx";

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

function isPrerender() {
  return (
    typeof window !== "undefined" &&
    /HeadlessChrome|prerender/i.test(navigator.userAgent)
  );
}

function LenisAosBridge() {
  useLenis(() => {
    AOS.refresh();
  });

  return null;
}

const SEO = {
  en: {
    title: "Jeudy Robles | Frontend Web Developer & Designer - San Jose, Costa Rica",
    description:
      "Portfolio of Jeudy Robles, Frontend Web Developer & Designer based in San Jose, Costa Rica. I build high-performance websites with React, GSAP and Headless WordPress that convert visitors into customers. View my projects.",
    ogTitle: "Jeudy Robles | Frontend Web Developer & Designer",
    ogDescription:
      "High-performance websites built with React, GSAP and Headless WordPress. Based in San Jose, Costa Rica. Check out my projects.",
    twitterTitle: "Jeudy Robles | Frontend Web Developer & Designer",
    twitterDescription:
      "High-performance websites built with React, GSAP and Headless WordPress. Based in San Jose, Costa Rica.",
    jsonLdInLanguage: "en",
    jsonLdJobTitle: "Frontend Web Developer & Designer",
    jsonLdDescription:
      "Frontend web developer and designer based in San Jose, Costa Rica, specializing in React, GSAP and Headless WordPress.",
    ogLocale: "en_US",
  },
  es: {
    title: "Jeudy Robles | Desarrollador Frontend y Dise\u00F1ador Web - San Jos\u00E9, Costa Rica",
    description:
      "Portafolio de Jeudy Robles, Desarrollador Frontend y Dise\u00F1ador Web en San Jos\u00E9, Costa Rica. Construyo sitios web de alto rendimiento con React, GSAP y Headless WordPress que convierten visitantes en clientes.",
    ogTitle: "Jeudy Robles | Desarrollador Frontend y Dise\u00F1ador Web",
    ogDescription:
      "Sitios web de alto rendimiento construidos con React, GSAP y Headless WordPress. Ubicado en San Jos\u00E9, Costa Rica. Conoce mis proyectos.",
    twitterTitle: "Jeudy Robles | Desarrollador Frontend y Dise\u00F1ador Web",
    twitterDescription:
      "Sitios web de alto rendimiento construidos con React, GSAP y Headless WordPress. Ubicado en San Jos\u00E9, Costa Rica.",
    jsonLdInLanguage: "es",
    jsonLdJobTitle: "Desarrollador Frontend y Dise\u00F1ador Web",
    jsonLdDescription:
      "Desarrollador frontend y dise\u00F1ador web en San Jos\u00E9, Costa Rica, especializado en React, GSAP y Headless WordPress.",
    ogLocale: "es_CR",
  },
};

function useHead(lang) {
  useEffect(() => {
    const seo = SEO[lang];

    document.documentElement.lang = lang;
    document.title = seo.title;

    const setMeta = (selector, content) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute("content", content);
    };

    setMeta('meta[name="description"]', seo.description);
    setMeta('meta[property="og:title"]', seo.ogTitle);
    setMeta('meta[property="og:description"]', seo.ogDescription);
    setMeta('meta[property="og:locale"]', seo.ogLocale);
    setMeta('meta[name="twitter:title"]', seo.twitterTitle);
    setMeta('meta[name="twitter:description"]', seo.twitterDescription);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.href =
        lang === "es"
          ? "https://jeudyrobles.vercel.app/es"
          : "https://jeudyrobles.vercel.app/";
    }

    const setOrCreateHeadTag = (tag, attrs) => {
      let el = document.querySelector(tag);
      if (!el) {
        el = document.createElement(tag);
        document.head.appendChild(el);
      }
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    };

    setOrCreateHeadTag("link", {
      rel: "alternate",
      hreflang: "en",
      href: "https://jeudyrobles.vercel.app/",
    });
    setOrCreateHeadTag("link", {
      rel: "alternate",
      hreflang: "es",
      href: "https://jeudyrobles.vercel.app/es",
    });
    setOrCreateHeadTag("link", {
      rel: "alternate",
      hreflang: "x-default",
      href: "https://jeudyrobles.vercel.app/",
    });

    const ldScript = document.querySelector(
      'script[type="application/ld+json"]',
    );
    if (ldScript) {
      const ld = JSON.parse(ldScript.textContent);
      ld.inLanguage = seo.jsonLdInLanguage;
      ld.mainEntity.jobTitle = seo.jsonLdJobTitle;
      ld.mainEntity.description = seo.jsonLdDescription;
      ldScript.textContent = JSON.stringify(ld, null, 2);
    }
  }, [lang]);
}

function AppInner() {
  const prefersReducedMotion = usePrefersReducedMotion() || isPrerender();
  const { lang } = useLanguage();

  useHead(lang);

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

function App() {
  return (
    <LanguageProvider>
      <AppInner />
    </LanguageProvider>
  );
}

export default App;
