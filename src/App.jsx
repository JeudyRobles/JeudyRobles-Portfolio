import"./styles/index.css";
import Nav from "./components/nav/Nav.jsx";
import Hero from "./components/hero/Hero.jsx";
import Projects from "./components/projects/Projects.jsx";
import Footer from"./components/footer/Footer.jsx";

import { ReactLenis, useLenis } from 'lenis/react'

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 600, // Duración de la animación en milisegundos
  easing: 'ease-in-out', // Tipo de animación
  once: true, // La animación solo ocurre una vez
});

function App() {
/*   const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
  }) */
  return (
    <>
    <ReactLenis root />
    <div className="container">
      <Nav/>
      <Hero/>
      <Projects/>
      <Footer/>
    </div>
    </>
  )
}

export default App