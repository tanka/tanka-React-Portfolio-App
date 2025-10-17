import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";

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
      <Header name={name} profession={profession} />
      {/* About section */}
      <About name={name} profession={profession} />
      {/* Project section */}
      <ProjectList project_list={projects} />
      {/* Contact section */}
      <Contact />
      {/* Footer section */}
      <Footer />
    </div>
  );
}

export default App;
