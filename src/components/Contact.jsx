import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>
        I&apos;d love to connect with you! Feel free to reach out via email or
        find me on LinkedIn.
      </p>
      <div className="contact-links">
        <a href="mailto:brijeshkandolkar01@gmail.com" className="contact-btn">
          📧 Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/brijesh-kandolkar-00b67499/"
          className="contact-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          🌐 LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;
