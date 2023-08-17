import "./App.css";
import Banner from "./Components/Banner";
import bannerImage from "./Components/Banner.jpg";

function App() {
  return (
    <div className="App">
      <Banner BannerImgUrl={bannerImage} />
    </div>
  );
}

export default App;
