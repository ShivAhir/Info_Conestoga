function Banner({ BannerImgUrl, style }) {
  const divStyle = {
    backgroundImage: `url(${BannerImgUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "450px", // Set the desired height
  };
  return <div className="image-banner" style={divStyle}>
    
  </div>;
}

export default Banner;
