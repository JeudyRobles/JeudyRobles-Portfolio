import "./Projects.css";
import ButtonSecondary from "../buttonSecondary/ButtonSecondary.jsx";
import Tippy from "@tippyjs/react";

const PortfolioItems = [
  {
    id: 5,
    image: "/assets/images/partnercr.webp",
    title: "PartnerCR - ",
    span: "High-Impact Interactive Website",
    alt: "PartnerCR website homepage - frontend project by Jeudy Robles",
    description:
      "Frontend development based on high-fidelity designs. Integrated Headless WordPress for efficient content management and used GSAP to create smooth animations that improve user retention.",
    demoLink: "https://www.partnercr.com/",
    githubLink: "",
  },
  {
    id: 4,
    image: "/assets/images/cortesarchitects.webp",
    title: "Cortes Architects - ",
    span: "Corporate Website",
    alt: "Cortes Architects website homepage - WordPress project by Jeudy Robles",
    description:
      "End-to-end development and customization in WordPress. Transformed a base template into a customized website, optimizing load times and structure to deliver a professional, self-manageable digital presence for the client.",
    demoLink: "https://cortesarchitects.com/",
    githubLink: "",
  },
  {
    id: 3,
    image: "/assets/images/ollerabogadosblog.webp",
    title: "Oller Abogados Blog - ",
    span: "Content Platform",
    alt: "Oller Abogados Blog homepage - frontend project by Jeudy Robles",
    description:
      "Frontend development focused on readability and performance. Implemented a clean HTML/CSS/JS structure integrated with WordPress, ensuring the blog is fast, secure, and fully responsive on any device.",
    demoLink: "https://ollerabogados.com/ollerblog/",
    githubLink: "",
  },
  {
    id: 2,
    image: "/assets/images/Petmap.webp",
    title: "Petmap - ",
    span: "User Interface & Frontend",
    alt: "Petmap app screenshot - React project by Jeudy Robles",
    description:
      "Responsible for the design and development of the frontend, implementing an intuitive interface with React. Worked closely with the backend team on data integration and real-time map visualization, ensuring a smooth user experience.",
    demoLink: "https://equipo-c23-84-t-webapp.onrender.com/",
    githubLink:
      "https://github.com/No-Country-simulation/equipo-c23-84-T-webapp/tree/main",
  },
  {
    id: 1,
    image: "/assets/images/Docafetarrazu.webp",
    title: "Docafetarrazu - ",
    span: "WordPress Web Development",
    alt: "Docafetarrazu website homepage - WordPress project by Jeudy Robles",
    description:
      "End-to-end website development in WordPress. Worked in a collaborative environment managing the site architecture and implementing key features according to the client's requirements.",
    demoLink: "https://Docafetarrazu.com/",
    githubLink: "",
  }
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
        {[...PortfolioItems].sort((a, b) => b.id - a.id).map((item) => (
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
              alt={item.alt}
              loading="lazy"
            />
            <section className="Projects__Block__Info">
              <h5 className="Projects__Block__Title">
                {item.title} <span>{item.span}</span>
              </h5>
              <p className="Projects__Block__Text">{item.description}</p>
            </section>
            <section className="Projects__Block__Buttons">
              {item.demoLink && (
                <ButtonSecondary text="View Website" href={item.demoLink} />
              )}
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
                      width="2.25rem"
                      height="2.25rem"
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
