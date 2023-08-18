import "./App.css";
import { Element } from "react-scroll";
import About from "./Components/AboutConestoga";
import Banner from "./Components/Banner";
import bannerImage from "./Components/Banner.jpg";
import visitUsImg from "./Components/split-visit-us.jpg";
import Navbar from "./Components/Navbar";
import CollegeNews from "./Components/CollegeNews";
import Contact from "./Components/Contact";
import VisitUs from "./Components/VisitUs";

function App() {
  return (
    <div className="App">
      <Banner BannerImgUrl={bannerImage} />
      <Navbar />
      <Element name="about">
        <About />
      </Element>
      <Element name="news">
        <CollegeNews />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Element name="VisitUs">
        <VisitUs imgURL={visitUsImg} />
      </Element>
    </div>
  );
}

export default App;
