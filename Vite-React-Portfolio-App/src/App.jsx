import "./App.css";
import Header from "./components/Header";

function App() {
  const name = "Tanka Nath Sharma";
  const profession = "Full Stack Developer";
  const projects = [
    {
      title: "Project 1",
      description: "Ecommerece Platform built using Spring Boot and React",
      link: "#",
    },
    {
      title: "Project 2",
      description: "Saloon appointment booking app built using MERN stack",
      link: "#",
    },
  ];

  return (
    <div>
      {/* Header section here */}
      <Header />
      {/* About section */}
      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>
          Hello! I'm {name}, a passionate {profession} with experience in
          building web applications.
        </p>
      </section>

      {/* Project section */}
      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out via email at{" "}
          <a href="mailto:sharma.tankanath@gmail.com">
            sharma.tankanath@gmail.com
          </a>
        </p>
      </section>

      {/* Footer section */}
      <footer className="footer">
        <p> All Rights Reserved @2025</p>
      </footer>
    </div>
  );
}

export default App;
