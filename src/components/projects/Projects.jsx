import "./Projects.css";
import ButtonSecondary from "../buttonSecondary/ButtonSecondary.jsx";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const PortfolioItems = [
  {
    id: 1,
    image: "/assets/images/Petmap.webp",
    title: "Petmap - ",
    span: "Frontend",
    description:
      "Developed with React, Java, Spring Boot, PostgreSQL, and Render.",
    demoLink: "https://equipo-c23-84-t-webapp.onrender.com/",
    githubLink:
      "https://github.com/No-Country-simulation/equipo-c23-84-T-webapp/tree/main",
  },
  {
    id: 2,
    image: "/assets/images/Ticolibri.webp",
    title: "Ticolibri - ",
    span: "WordPress dev",
    description: "Developed with Wordpress, Designed and developed by me.",
    demoLink: "https://ticolibri.com/",
    githubLink: "",
  },
  {
    id: 3,
    image: "/assets/images/GambaStore.webp",
    title: "Gamba Store - ",
    span: "WordPress dev",
    description: "Developed with Wordpress, Designed and developed by me.",
    demoLink: "https://gambastore.ticolibri.com/",
    githubLink: "",
  },
  {
    id: 4,
    image: "/assets/images/Docafetarrazu.webp",
    title: "Docafetarrazu - ",
    span: "WordPress dev",
    description:
      "Developed using Wordpress, with my project team at INA (2023).",
    demoLink: "https://Docafetarrazu.com/",
    githubLink: "",
  },
];

export default function Projects() {
  return (
    <section className="Projects">
      <h2
        data-aos="fade-right"
        data-aos-anchor-placement="top-bottom"
        data-aos-delay="700"
        className="Projects__Title"
      >
        Projects in which I have{" "}
        <span className="Projects__Title--primary">worked</span> /{" "}
        <span className="Projects__Title--secondary">participated</span>
      </h2>

      <section className="Projects__List">
        {PortfolioItems.map((item) => (
          <article
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="900"
            className="Projects__Block"
            key={item.id}
          >
            <img
              className="Projects__Block__Image"
              src={item.image}
              alt={item.title}
              loading="lazy"
            />
            <section className="Projects__Block__Info">
              <h5 className="Projects__Block__Title">
                {item.title} <span>{item.span}</span>
              </h5>
              <p className="Projects__Block__Text">{item.description}</p>
            </section>
            <section className="Projects__Block__Buttons">
              <a href={item.demoLink} target="_blank" rel="noopener noreferrer">
                <ButtonSecondary text="View Website" />
              </a>
              {item.githubLink && (
                <Tippy content="Github Repository!" animation="fade">
                  <a
                    className="Icon Icon-Github"
                    href={item.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub of the project"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36px"
                      height="36px"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                      />
                    </svg>
                  </a>
                </Tippy>
              )}
            </section>
          </article>
        ))}
      </section>
    </section>
  );
}
