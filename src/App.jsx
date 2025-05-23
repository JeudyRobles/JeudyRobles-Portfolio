import './styles/App.css'
import './styles/index.css'

import Hero from './components/hero/Hero.jsx';
import Projects from './components/projects/Projects.jsx';

function App() {

  return (
    <>
    <h1>Jeudy <span>Robles</span></h1>
    <div className="container">
      <Hero/>
      <Projects/>
    </div>
    </>
  )
}

export default App