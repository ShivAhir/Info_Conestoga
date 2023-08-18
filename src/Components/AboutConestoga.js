function About() {
  const pStyle = {
    textAlign: "justify",
  };
  const containerStyle = {
    marginTop: "1em",
  };
  return (
    <div style={containerStyle}>
      <h4>About Conestoga College</h4>
      <div className="container" style={pStyle}>
        <p>
          Conestoga is a leader in polytechnic education and one of Ontario's
          fastest growing colleges, delivering a full range of career-focused
          education, training and applied research programs to prepare students
          for success in the new knowledge economy and promote economic
          prosperity throughout our region and across Ontario.{" "}
        </p>
        <p>
          Our comprehensive range of programming meets the needs of a variety of
          learners, providing multiple entry points and established pathways to
          ensure that individuals across our community can access the education
          they need for their chosen careers. Articulation agreements with
          colleges and universities around the world provide our students with
          ready access to additional post-secondary opportunities.{" "}
        </p>
        <p>
          Labs equipped with the latest technology, project-based courses, field
          and clinical experiences, international exchange, applied research and
          co-op opportunities engage our students as they learn to connect
          theory, research and practice. Our focus on technology-enhanced
          learning through online and mobile technologies ensures that students
          are prepared to excel in our increasingly digital world. Conestoga’s
          commitment to student success includes a full range of support and
          career advising services available to students throughout their
          learning journey.
        </p>
      </div>
    </div>
  );
}

export default About;
