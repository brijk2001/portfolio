import { useEffect } from "react";
import "./About.css";

function About() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const particles = document.querySelectorAll(".particle");
      const aboutSection = document.querySelector(".about");

      const rect = aboutSection.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      particles.forEach((particle) => {
        const speed = particle.getAttribute("data-speed");
        const x = ((e.clientX - centerX) * speed) / 150;
        const y = ((e.clientY - centerY) * speed) / 150;

        particle.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section id="about" className="about">
      <div className="graphics-container">
        <div className="particle" data-speed="3"></div>
        <div className="particle" data-speed="-5"></div>
        <div className="particle" data-speed="8"></div>
        <div className="particle" data-speed="-7"></div>
        <div className="particle" data-speed="10"></div>
      </div>

      <h2>About Me</h2>
      <p>
        Always had a keen interest in technology and a love for problem-solving.
        I aspire to become a full-stack developer and eventually start a
        business of my own. In my free time, I enjoy playing the guitar, video
        games, and table tennis.
      </p>
    </section>
  );
}

export default About;
