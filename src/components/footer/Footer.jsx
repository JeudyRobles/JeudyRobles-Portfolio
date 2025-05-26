import"./Footer.css";import Heart from"../icons/Heart.jsx";
export default function Footer() {
  return (
    <footer data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" data-aos-offset="200" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom" className="Footer">
      <section className="Footer__Info">
        <h3 className="Footer__InfoText">JEUDY ROBLES</h3>
          <ul className="Footer__Links">
            <li>
              <a href="https://github.com/JeudyRobles" target='_blank' rel="noopener noreferrer" className="Footer__Link" aria-label="GitHub profile of Jeudy Robles">
              <img src="./assets/icons/github_dark.svg" alt="" width="24" height="24" loading="lazy"/>
              </a>
            </li>
            <li>
              <a href="http://www.linkedin.com/in/jeudyrobles" target='_blank' rel="noopener noreferrer" className="Footer__Link" aria-label="LinkedIn profile of Jeudy Robles">
              <img src="./assets/icons/linkedin_dark.svg" alt="" width="24" height="24" loading="lazy"/>
              </a>
            </li>
            <li>
              <a href="https://www.figma.com/@jeudyrobles1" target='_blank' rel="noopener noreferrer" className="Footer__Link" aria-label="Figma profile of Jeudy Robles">
              <img src="./assets/icons/figma_dark.svg" alt="" width="28" height="28" loading="lazy"/>
              </a>
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

