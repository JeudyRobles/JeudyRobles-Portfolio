import"./Hero.css";
import ButtonPrimary from"../buttonPrimary/ButtonPrimary.jsx";
import ButtonSecondary from"../buttonSecondary/ButtonSecondary.jsx";
import WorldIcon from"../icons/World.jsx";


export default function Hero() {
  return (
    <>
      <section className="Section Hero" id="Hero">

          <article className="Hero__Item Hero__Item--1">
            <ButtonPrimary text="Open to work"/>
            <h1 data-aos="zoom-in">Jeudy Robles</h1> 
            <h2 data-aos="zoom-in">Web Developer</h2>
            <p data-aos="zoom-in" className="Hero__item--1---text">I have experience in creating customized websites, managing social media, and cybersecurity. I am currently seeking opportunities to contribute my skills to a dynamic and growing team.</p>
            <div className="Hero__Item--1__Buttons">
            <a href="/JeudyRoblesCv.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download Resume PDF" role="button">
              <ButtonSecondary className="Hero__Item--1__Button" text="View Resume" />
            </a> 
            <a href="http://www.linkedin.com/in/jeudyrobles" target="_blank" rel="noopener noreferrer" aria-label="Visit my LinkedIn profile" role="button">
              <ButtonSecondary className="Hero__Item--1__Button" text="LinkedIn" />
            </a>
            </div>
          </article>
          
          <article data-aos="fade-down" className="Hero__Item Hero__Item--2">
            <h3><span>Another </span>Platforms</h3>
            <div className="Hero__Item--2__Icons">
              <a href="https://github.com/JeudyRobles" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile of Jeudy Robles" role="link">
                <img src="./assets/icons/github_dark.svg" alt="" width="24" height="24"/>
              </a>
              <a href="https://www.instagram.com/jeudyrp/?next=%2F" target="_blank" rel="noopener noreferrer" aria-label="Instagram profile of Jeudy Robles" role="link">
                <img src="./assets/icons/instagram_dark.svg" alt="" width="24" height="24"/>
              </a>
              <a href="https://www.figma.com/@jeudyrobles1" target="_blank" rel="noopener noreferrer" aria-label="Figma profile of Jeudy Robles" role="link">
                <img src="./assets/icons/figma_dark.svg" alt="" width="28" height="28"/>
              </a>
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
              <h6 className="Hero__Item--4__BlockTitle">Web Development & Freelance</h6>
              <p className="Hero__Item--4__BlockText">
                -Creation of customized websites with attractive design and focus on user experience.
              </p>
            </div>
            <br />
            <div className="Hero__Item--4__Block">
              <h6 className="Hero__Item--4__BlockTitle">Social Media Management</h6>
              <p className="Hero__Item--4__BlockText">
                -I managed the social networks of L'Patate and SICSA, creating content and strategies to increase interaction with the public.
              </p>
            </div>
            <br />
            <div className="Hero__Item--4__Block">
              <h6 className="Hero__Item--4__BlockTitle">Customer Service & Communication</h6>
              <p className="Hero__Item--4__BlockText">
                -Experience in face-to-face and digital customer service, ensuring a positive experience for users.
              </p>
            </div>
        </article>
    
          <article data-aos="zoom-in" className="Hero__Item Hero__Item--5">
            <img src="/assets/images/Tenor-unscreen.gif" alt="Jumping Cat"></img>
          </article>

          <article data-aos="fade-right" className="Hero__Item Hero__Item--6">
            <WorldIcon/>
            <p>Based in San Jose,</p>
            <span>Costa Rica</span>
          </article>

          <article data-aos="fade-up" className="Hero__Item Hero__Item--7">
            <a href="mailto:jeudyjr@outlook.com" rel="noopener noreferrer" role="link" aria-label="Send an email to Jeudy Robles">@</a>
          </article>
      </section>
    </>
  );
}
