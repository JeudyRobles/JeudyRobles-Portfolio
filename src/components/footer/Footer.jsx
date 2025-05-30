import "./Footer.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
export default function Footer() {
  return (
    <footer
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="300"
      data-aos-offset="200"
      data-aos-easing="ease-in-out"
      data-aos-anchor-placement="top-bottom"
      className="Footer"
    >
      <section className="Footer__Info">
        <h3 className="Footer__InfoText">JEUDY ROBLES</h3>
        <ul className="Footer__Links">
          <Tippy content="My Github!" animation="fade" >
            <li>
              <a
                className="Footer__Link Icon Icon-Github"
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
            </li>
          </Tippy>
          <Tippy content="My Instagram!" animation="fade">
            <li>
              <a
                className="Footer__Link Icon Icon-Instagram"
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
            </li>
          </Tippy>
          <Tippy content="My LinkedIn!" animation="fade">
            <li>
              <a
                className="Footer__Link Icon Icon-Linkedin"
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
            </li>
          </Tippy>
        </ul>
      </section>

      <section className="Footer__Copy">
        <Tippy content="Do you like my website?" animation="fade">
          <a
            className="Icon Icon-Heart"
            onClick={() => {
              /* alert('You clicked me!'); */
              const svgElement = document.querySelector("#Icon-Heart path");
              svgElement.setAttribute("stroke", "red");
              svgElement.setAttribute("fill", "red");
            }}
          >
            <svg
              id="Icon-Heart"
              xmlns="http://www.w3.org/2000/svg"
              width="32px"
              height="32px"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4.24 12.25a4.2 4.2 0 0 1-1.24-3A4.25 4.25 0 0 1 7.25 5c1.58 0 2.96.86 3.69 2.14h1.12A4.24 4.24 0 0 1 15.75 5A4.25 4.25 0 0 1 20 9.25c0 1.17-.5 2.25-1.24 3L11.5 19.5zm15.22.71C20.41 12 21 10.7 21 9.25A5.25 5.25 0 0 0 15.75 4c-1.75 0-3.3.85-4.25 2.17A5.22 5.22 0 0 0 7.25 4A5.25 5.25 0 0 0 2 9.25c0 1.45.59 2.75 1.54 3.71l7.96 7.96z"
              />
            </svg>
          </a>
        </Tippy>
        <h6 className="Footer__CopyText">
          This website was planned, designed and created by me 🗿{" "}
        </h6>
      </section>
    </footer>
  );
}
