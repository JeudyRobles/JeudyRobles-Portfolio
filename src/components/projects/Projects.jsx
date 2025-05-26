import "./Projects.css";
import ButtonSecondary from "../buttonSecondary/ButtonSecondary.jsx";

const PortfolioItems = [
  {
    id: 1,
    image: "/assets/images/Petmap.webp",
    title: "Petmap - ",
    span: "Frontend",
    description: "Developed with React, Java, Spring Boot, PostgreSQL, and Render.",
    demoLink: "https://equipo-c23-84-t-webapp.onrender.com/",
    githubLink: "https://github.com/No-Country-simulation/equipo-c23-84-T-webapp/tree/main"
  },
  {
    id: 2,
    image: "/assets/images/Ticolibri.webp",
    title: "Ticolibri - ",
    span: "WordPress dev",
    description: "Developed with Wordpress, Designed and developed by me.",
    demoLink: "https://ticolibri.com/",
    githubLink: ""
  },
  {
    id: 3,
    image: "/assets/images/GambaStore.webp",
    title: "Gamba Store - ",
    span: "WordPress dev",
    description: "Developed with Wordpress, Designed and developed by me.",
    demoLink: "https://gambastore.ticolibri.com/",
    githubLink: ""
  },
  {
    id: 4,
    image: "/assets/images/Docafetarrazu.webp",
    title: "Docafetarrazu - ",
    span: "WordPress dev",
    description: "Developed using Wordpress, with my project team at INA (2023).",
    demoLink: "https://Docafetarraz.com/",
    githubLink: ""
  }
];

export default function Projects() {
  return (
    <section className="Projects">
      <h2 data-aos="fade-right" data-aos-delay="900" className="Projects__Title">
        Projects in which I have <span className="Projects__Title--primary">worked</span> / <span className="Projects__Title--secondary">participated</span>
      </h2>

      <section className="Projects__List">
        {PortfolioItems.map((item) => (
          <article data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="900" className="Projects__Block" key={item.id}>
            <img className="Projects__Block__Image" src={item.image} alt={item.title} loading="lazy" />
            <section className="Projects__Block__Info">
              <h5 className="Projects__Block__Title">
                {item.title} <span>{item.span}</span>
              </h5>
              <p className="Projects__Block__Text">{item.description}</p>
            </section>
            <section className="Projects__Block__Buttons">
              <a href={item.demoLink} target="_blank" rel="noopener noreferrer">
                <ButtonSecondary text="Preview" />
              </a>
              {item.githubLink && (
                <a href={item.githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub of the project">
                  <img src="./assets/icons/github_dark.svg" alt="" width="24" height="24"/>
                </a>
              )}
            </section>
          </article>
        ))}
      </section>
    </section>
  );
}