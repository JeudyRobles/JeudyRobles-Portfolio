import"./styles/index.css";import Hero from"./components/hero/Hero.jsx";import Projects from"./components/projects/Projects.jsx";import Footer from"./components/footer/Footer.jsx";

function App() {
  return (
    <>
    <h1>Jeudy <span>Robles</span></h1>
    <div className="container">
      <Hero/>
      <Projects/>
      <Footer/>
    </div>
    </>
  )
}

export default App