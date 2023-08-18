import { Button } from "react-scroll";

function VisitUs({ imgURL }) {
  const visitUsContainer = {
    display: "flex",
  };
  const visitUs = {
    margin: "1em",
    marginLeft: "5em",
    width: "25%",
    height: "25%",
  };
  const visitUsTextContainer = {
    margin: "3em",
    textAlign: "left",
  };
  const linkText = {
    textDecoration: "none",
    color: "white",
  };
  const buttonStyles = {
    width: "100%",
  };
  return (
    <div className="container bg-light">
      <div style={visitUsContainer}>
        <img
          src={imgURL}
          alt="This is an alternative text for vist us conatiner"
          style={visitUs}
        />
        <div className="conatiner" style={visitUsTextContainer}>
          <h4>Visit Us!!</h4>
          <p>
            There are several ways to experience what campus life is like - join
            us for a campus tour, visit one of our open house events or check
            out our virtual tour.
          </p>
          <button class="btn btn-secondary" type="submit" style={buttonStyles}>
            <a href="https://www.conestogac.on.ca/visit-us" style={linkText}>
              Tour Conestoga
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default VisitUs;
