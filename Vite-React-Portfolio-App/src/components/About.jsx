function About(props) {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p>
        Hello! I'm {props.name}, a passionate {props.profession} with experience
        in building web applications.
      </p>
    </section>
  );
}

export default About;
