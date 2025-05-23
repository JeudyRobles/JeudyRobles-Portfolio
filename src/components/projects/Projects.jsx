import './Projects.css'
import Petmap from "../../assets/images/ImageProject(Petmap).png"
import Ticolibri from "../../assets/images/ImageProject(Ticolibri).png"
import Gambastore from "../../assets/images/ImageProject(Gambastore).png"
import Docafetarrazu from "../../assets/images/ImageProject(Docafetarrazu).png"

import ButtonSecondary from '../buttonSecondary/ButtonSecondary.jsx';
import GitHubIcon from '../icons/Github.jsx';

const PortfolioItems = [
  {
    id: 1,
    image: Petmap,
    title: "Petmap - ",
    span: "Frontend",
    description: "Developed with React, Java, Spring Boot, PostgreSQL, and Render.",
    demoLink: "https://equipo-c23-84-t-webapp.onrender.com/",
    githubLink: "https://github.com/No-Country-simulation/equipo-c23-84-T-webapp/tree/main"
  },
  {
    id: 2,
    image: Ticolibri,
    title: "Ticolibri - ",
    span: "WordPress dev",
    description: "Developed with Wordpress, Designed and developed by me.",
    demoLink: "https://ticolibri.com/",
    githubLink: ""
  },
  {
    id: 3,
    image: Gambastore,
    title: "Gamba Store - ",
    span: "WordPress dev",
    description: "Developed with Wordpress, Designed and developed by me.",
    demoLink: "https://gambastore.ticolibri.com/",
    githubLink: ""
  },
  {
    id: 4,
    image: Docafetarrazu,
    title: "Docafetarrazu - ",
    span: "WordPress dev",
    description: "Developed using Wordpress, with my project team at INA (2023).",
    demoLink: "https://Docafetarraz.com/",
    githubLink: ""
  },
]


export default function Projects() {
  return (
    <>
      <section className="Projects">
        <h2 className="Projects__Title">
          Projects in which I have <span className="Projects__Title--primary">worked</span> / <span className="Projects__Title--secondary">participated</span>
        </h2>
        
        <section className="Projects__List">
          {PortfolioItems.map((item) => (
            <article className="Projects__Block" key={item.id}>
              <img className="Projects__Block__Image" src={item.image} alt={item.title} />
              <section className="Projects__Block__Info">
                <h5 className="Projects__Block__Title">
                  {item.title} <span>{item.span}</span>
                </h5>
                <p className="Projects__Block__Text">{item.description}</p>
              </section>
              <section className="Projects__Block__Buttons">
                <a href={item.demoLink} target='_blank'>
                  <ButtonSecondary text="Preview"/>
                </a>
                {item.githubLink !== "" && item.githubLink !== null && (
                  <a href={item.githubLink} target="_blank">
                    <GitHubIcon />
                  </a>
                )}
              </section>
            </article>
          ))}
        </section>
      </section>
    </>
  );
}