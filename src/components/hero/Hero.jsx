import './Hero.css'
import ButtonPrimary from '../buttonPrimary/ButtonPrimary.jsx';
import ButtonSecondary from '../buttonSecondary/ButtonSecondary.jsx';
import GitHubIcon from '../icons/Github.jsx';
import FigmaIcon from '../icons/Figma.jsx';
import LinkedInIcon from '../icons/LinkedIn.jsx';
import WorldIcon from '../icons/World.jsx';


export default function Hero() {
  return (
    <>
      {/* Hello world */}
      <section className="Section Hero">

          <article className="Hero__Item Hero__Item--1">
            <ButtonPrimary text="Open to work"/>
            <h2>Web Developer</h2>
            <p className="Hero__item--1---text">I have experience in creating customized websites, managing social media, and cybersecurity. I am currently seeking opportunities to contribute my skills to a dynamic and growing team.</p>
            <div className="Hero__Item--1__Buttons">
              <ButtonSecondary className="Hero__Item--1__Button" text="Download CV"/>
              <ButtonSecondary className="Hero__Item--1__Button" text="LinkedIn"/>
            </div>
          </article>
          
          <article className="Hero__Item Hero__Item--2">
            <h3><span>Another </span>Platforms</h3>
            <div className="Hero__Item--2__Icons">
              <a href=""><GitHubIcon/></a>
              <a href=""><FigmaIcon/></a>
              <a href=""><LinkedInIcon/></a> 
            </div>
          </article>

          <article className="Hero__Item Hero__Item--3">
            <div className="Hero__Item--3__Div">
              <h6>I am perpetually looking to evolve.</h6>
              <h3>My Tech Stack</h3>
            </div>
            <div className="Hero__Item--3__Div Hero__Item--3__Div--TechStack">
              <p>Javascript</p>
              <p>React</p>
              <p>Bootstrap</p>
              <p>Tailwind</p>
              <p>Wordpress</p>
              <p>Python</p>
            </div>
          </article>

          <article className="Hero__Item Hero__Item--4">
            <h5>Professional Experience</h5>
            <div className="">
              <h6>Social Media Management</h6>
              <p> -I managed the social networks of L'Patate and SICSA, creating content and strategies to increase interaction with the public.</p>
            </div>
            <div className="">
              <h6>Social Media Management</h6>
              <p> -I managed the social networks of L'Patate and SICSA, creating content and strategies to increase interaction with the public.</p>
            </div>
            <div className="">
              <h6>Web Development & Freelance</h6>
              <p> -Creation of customized websites with attractive design and focus on user experience.</p>
            </div>
            <div className="">
              <h6>Customer Service & Communication</h6>
              <p>   -Experience in face-to-face and digital customer service, ensuring a positive experience for users.</p>
            </div>
          </article>

          <article className="Hero__Item Hero__Item--5"></article>

          <article className="Hero__Item Hero__Item--6">
            <WorldIcon/>
            <p>Based in San Jose,</p>
            <span>Costa Rica</span>
          </article>

          <article className="Hero__Item Hero__Item--7">
            <a href="">@</a>
          </article>
      </section>
    </>
  );
}
