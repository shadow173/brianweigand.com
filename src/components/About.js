const About = () => {
  return (
    <div className="orido_tm_section" id="about">
      <div className="orido_tm_about">
        <div className="about_in">
          <div className="left">
            {/* <div className="box">
              <h3 className="year">10</h3>
              <span className="experience">Years of Experience</span>
              <h3 className="name">Brian Weigand</h3>
            </div> */}
          </div>
          <div className="right">
            <span className="element">
              <img className="svg" src="img/svg/element.svg" alt="" />
            </span>
            <div className="orido_tm_main_title">
              <h3>
                <span>About Me</span>
              </h3>
            </div>
            <div className="text">
              <p>
              My passion for web development, server hosting, and community engagement has fueled a diverse skill set applicable to a wide range of projects. I thrive on new challenges, pushing my creative and technical boundaries at every stage of the design process.</p>
            </div>
            <div className="short">
              <div className="orido_tm_boxed_button">
                <a href="img/cv/1.jpg" download>
                  Download Resume{" "}
                  <img className="svg" src="img/svg/paper.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
