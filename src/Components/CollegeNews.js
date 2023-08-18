function CollegeNews() {
  const headingStyle = {
    marginBottom: "1em",
  };
  const newsTextContainer = {
    textAlign: "left",
  };

  return (
    <div className="container">
      <div>
        <h4 style={headingStyle}>College News!</h4>
      </div>
      <div style={newsTextContainer}>
        <h6>August 17,2023</h6>
        <p>
          <a href="http://blogs1.conestogac.on.ca/news/2023/08/robotics_and_automation_projec.php?_gl=1*a5013g*_gcl_au*NzYzMDYwMjU1LjE2OTEyNTIxNjU.">
            Robotics and automation project receives top honour at Tech Showcase
          </a>
        </p>
        <h6>August 16,2023</h6>
        <p>
          <a href="http://blogs1.conestogac.on.ca/news/2023/08/school_of_health_life_sciences_1.php?_gl=1*yut0w*_gcl_au*NzYzMDYwMjU1LjE2OTEyNTIxNjU.">
            School of Health & Life Sciences to expand healthcare programming
            into Milton
          </a>
        </p>
        <h6>August 14,2023</h6>
        <p>
          <a href="http://blogs1.conestogac.on.ca/news/2023/08/ciswp_leads_workforce_training.php?_gl=1*13nzfrm*_gcl_au*NzYzMDYwMjU1LjE2OTEyNTIxNjU.">
            CISWP leads workforce training and skills project for Waterloo
            Region
          </a>
        </p>
        <h6>August 14,2023</h6>
        <p>
          <a href="http://blogs1.conestogac.on.ca/news/2023/08/ciswp_leads_workforce_training.php?_gl=1*13nzfrm*_gcl_au*NzYzMDYwMjU1LjE2OTEyNTIxNjU.">
            Partnership with Mawashi will address safety and productivity in
            skilled trades
          </a>
        </p>
      </div>
    </div>
  );
}

export default CollegeNews;
