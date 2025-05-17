import './Hero.css'
import Button from '../button/Button.jsx';

export default function Hero() {
  return (
    <>
      {/* Hello world */}
      <section class="Section Hero">

          <article class="Hero__Item Hero__Item--1">
            <Button text="Open to work" variant="primary"/>
            <h2>Web Developer</h2>
            <p class="Hero__item--1---text">I have experience in creating customized websites, managing social media, and cybersecurity. I am currently seeking opportunities to contribute my skills to a dynamic and growing team.</p>
            <Button text="Download CV" variant="secondary"/>
            <Button text="LinkedIn" variant="outline"/>
          </article>
          
          <article class="Hero__Item Hero__Item--2">2</article>
          <article class="Hero__Item Hero__Item--3">3</article>
          <article class="Hero__Item Hero__Item--4">4</article>
          <article class="Hero__Item Hero__Item--5">5</article>
          <article class="Hero__Item Hero__Item--6">6</article>
          <article class="Hero__Item Hero__Item--7">7</article>
      </section>
    </>
  );
}
