import "./Hero.css";
import ButtonPrimary from "../buttonPrimary/ButtonPrimary.jsx";
import WorldIcon from "../icons/World.jsx";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export default function Hero() {
  return (
    <>
      <section className="Section Hero" id="Hero">
        <article className="Hero__Item Hero__Item--1">
          <ButtonPrimary text="Open to work" />
          <h1 data-aos="zoom-in">Jeudy Robles</h1>
          <h2 data-aos="zoom-in">Web Developer</h2>
          <p data-aos="zoom-in" className="Hero__item--1---text">
            I have experience in creating customized websites, managing social
            media, and cybersecurity. I am currently seeking opportunities to
            contribute my skills to a dynamic and growing team.
          </p>
          <div className="Hero__Item--1__Resume">
            <a
              data-aos="zoom-in"
              className="Hero__Item--1__Resume__Link"
              href="/JeudyRoblesCv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Resume PDF"
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42px"
                height="42px"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                >
                  <path
                    strokeDasharray="64"
                    strokeDashoffset="64"
                    d="M13 3l6 6v12h-14v-18h8"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="1.6s"
                      values="64;0"
                    />
                  </path>
                  <path
                    strokeDasharray="14"
                    strokeDashoffset="14"
                    strokeWidth="1"
                    d="M12.5 3v5.5h6.5"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.7s"
                      dur="0.2s"
                      values="14;0"
                    />
                  </path>
                  <path strokeDasharray="6" strokeDashoffset="6" d="M9 13h4">
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.9s"
                      dur="0.2s"
                      values="6;0"
                    />
                  </path>
                  <path strokeDasharray="8" strokeDashoffset="8" d="M9 16h6">
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="1.1s"
                      dur="0.2s"
                      values="8;0"
                    />
                  </path>
                </g>
              </svg>
              View Resume
            </a>
          </div>
        </article>

        <article data-aos="fade-down" className="Hero__Item Hero__Item--2">
          <h3>
            <span>Another </span>Platforms
          </h3>
          <div className="Hero__Item--2__Icons">
            <Tippy content="My Github!" animation="fade">
              <a
                id="Github"
                className="Icon Icon-Github"
                href="https://github.com/JeudyRobles"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile of Jeudy Robles"
                role="link"
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
            <Tippy content="My Instagram!" animation="fade">
              <a
                className="Icon Icon-Instagram"
                href="https://www.instagram.com/jeudyrp/?next=%2F"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile of Jeudy Robles"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36px"
                  height="36px"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="17"
                    cy="7"
                    r="1.5"
                    fill="currentColor"
                    fillOpacity="0"
                  >
                    <animate
                      fill="freeze"
                      attributeName="fill-opacity"
                      begin="1.3s"
                      dur="0.15s"
                      values="0;1"
                    />
                  </circle>
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path
                      strokeDasharray="72"
                      strokeDashoffset="72"
                      d="M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="1s"
                        values="72;0"
                      />
                    </path>
                    <path
                      strokeDasharray="28"
                      strokeDashoffset="28"
                      d="M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.7s"
                        dur="1.6s"
                        values="28;0"
                      />
                    </path>
                  </g>
                </svg>
              </a>
            </Tippy>
            <Tippy content="My LinkedIn!" animation="fade">
              <a
                className="Icon Icon-Linkedin"
                href="http://www.linkedin.com/in/jeudyrobles"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36px"
                  height="36px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                  />
                </svg>
              </a>
            </Tippy>
          </div>
        </article>

        <article data-aos="zoom-in-left" className="Hero__Item Hero__Item--3">
          <div className="Hero__Item--3__Div">
            <span>I am perpetually looking to evolve.</span>
            <h3>My Tech Stack</h3>
          </div>
          <div className="Hero__Item--3__Div Hero__Item--3__Div--TechStack">
            <p>Javascript</p>
            <p>React/Vue</p>
            <p>Bootstrap</p>
            <p>NodeJS</p>
            <p>Wordpress</p>
            <p>MySQL</p>
          </div>
        </article>

        <article data-aos="flip-up" className="Hero__Item Hero__Item--4">
          <h5 className="Hero__Item--4__Title">Professional Experience</h5>

          <div className="Hero__Item--4__Block">
            <h6 className="Hero__Item--4__BlockTitle">
              Web Development & Freelance
            </h6>
            <p className="Hero__Item--4__BlockText">
              -Creation of customized websites with attractive design and focus
              on user experience.
            </p>
          </div>
          <br />
          <div className="Hero__Item--4__Block">
            <h6 className="Hero__Item--4__BlockTitle">
              Social Media Management
            </h6>
            <p className="Hero__Item--4__BlockText">
              -I managed the social networks of L'Patate and SICSA, creating
              content and strategies to increase interaction with the public.
            </p>
          </div>
          <br />
          <div className="Hero__Item--4__Block">
            <h6 className="Hero__Item--4__BlockTitle">
              Customer Service & Communication
            </h6>
            <p className="Hero__Item--4__BlockText">
              -Experience in face-to-face and digital customer service, ensuring
              a positive experience for users.
            </p>
          </div>
        </article>

        <article data-aos="zoom-in" className="Hero__Item Hero__Item--5">
          <img src="/assets/images/Tenor-unscreen.gif" alt="Jumping Cat"></img>
        </article>

        <article data-aos="fade-right" className="Hero__Item Hero__Item--6">
          <WorldIcon />
          <p>Based in San Jose,</p>
          <span>Costa Rica</span>
        </article>
        <Tippy content="Contact Me!">
          <article data-aos="fade-up" className="Hero__Item Hero__Item--7">
            <a
              className="Icon Icon-Email"
              href="mailto:jeudyjr@outlook.com"
              rel="noopener noreferrer"
              role="link"
              aria-label="Send an email to Jeudy Robles"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64px"
                height="64px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeDasharray="88"
                  strokeDashoffset="88"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4c2.21 0 4 1.79 4 4v1.5c0 1.38 1.12 2.5 2.5 2.5c1.38 0 2.5 -1.12 2.5 -2.5v-1.5c0 -4.97 -4.03 -9 -9 -9c-4.97 0 -9 4.03 -9 9c0 4.97 4.03 9 9 9h4"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="2s"
                    values="88;0"
                  />
                </path>
              </svg>
            </a>
          </article>
        </Tippy>
      </section>
    </>
  );
}
