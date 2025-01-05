import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-card">
        <h3>Todo List App</h3>
        <img
          src="/screenshot.png"
          alt="Screenshot of TodoApp"
          className="project-image"
        />
        <p>
          A simple and functional to-do application that allows users to create,
          update, and manage their tasks efficiently. Built with React and
          deployed on Vercel.
        </p>
        <a
          href="https://to-do-app-tau-lilac.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          View Live Project
        </a>
      </div>
    </section>
  );
}

export default Projects;
