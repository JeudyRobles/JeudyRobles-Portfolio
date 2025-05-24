import"./Footer.css";import Heart from"../icons/Heart.jsx";import GitHubIcon from"../icons/Github.jsx";import LinkedInIcon from"../icons/LinkedIn.jsx";import FigmaIcon from"../icons/Figma.jsx";

export default function Footer() {
  return (
    <footer className="Footer">
      <section className="Footer__Info">
        <h3 className="Footer__InfoText">JEUDY ROBLES</h3>
          <ul className="Footer__Links">
            <li>
              <a href="https://github.com/JeudyRobles" target='_blank' rel="noopener noreferrer" className="Footer__Link" aria-label="GitHub profile of Jeudy Robles"><GitHubIcon/></a>
            </li>
            <li>
              <a href="http://www.linkedin.com/in/jeudyrobles" target='_blank' rel="noopener noreferrer" className="Footer__Link" aria-label="LinkedIn profile of Jeudy Robles"><LinkedInIcon/></a>
            </li>
            <li>
              <a href="https://www.figma.com/@jeudyrobles1" target='_blank' rel="noopener noreferrer" className="Footer__Link" aria-label="Figma profile of Jeudy Robles"><FigmaIcon/></a>
            </li>
          </ul>
      </section>

      <section className="Footer__Copy">
        <Heart/>
        <h6 className="Footer__CopyText">This website was planned, designed and created by me 🗿 </h6>
      </section>
    </footer>
  )
}

