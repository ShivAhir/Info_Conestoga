// this is a component to display a banner with image and a text on it
function Banner({ BannerImgUrl, style }) {
  const overlay = {
    position: "absolute",
    bottom: "70%",
    left: "0",
    width: "100%",
  };
  const divStyle = {
    backgroundImage: `url(${BannerImgUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "450px", // Set the desired height
  };
  return (
    <div className="image-banner" style={divStyle}>
      <div className="overlay pb-lg-5" style={overlay}>
        <div className="container">
          <div className="row mb-2">
            <div className="col-12">
              <h1>Conestoga College</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
