const Home = ({ dark }) => {
  return (
    <div className="orido_tm_hero orido_tm_section" id="home">
      <div className="container">
        <div className="content">
          <div className="details">
            <div className="short">
              <h3>
                Brian Weigand
              </h3>
              <span className="job">Full Stack Developer</span>
            </div>
            <div className="text">
              <p>
               I&apos;m a highly passionate and skilled full stack developer residing in New York.
              </p>
            </div>
            <div className="buttons">
              <div className="orido_tm_boxed_button">
                <a className="anchor" href="#contact">
                  Say Hello{" "}
                  <img className="svg" src="img/svg/send.svg" alt="" />
                </a>
              </div>
              <div className="orido_tm_simple_button">
                <a className="line_effect anchor" href="#portfolio">
                  My Works{" "}
                  <img className="svg" src="img/svg/top-arrow.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="orido_tm_follow">
          <span>Follow me:</span>
          <ul>
            <li>
              <a href="#test">
                <img className="svg" src="img/svg/social/linkedin.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img className="svg" src="img/svg/social/github.svg" alt="" />
              </a>
            </li>
          
          </ul>
        </div>
      </div>
      <div className="orido_tm_down">
        <a className="anchor" href="#about">
          <img
            className="svg"
            src={`img/svg/${dark ? "down_button_light" : "down_button"}.svg`}
            alt=""
          />
        </a>
      </div>
      <div className="avatar">
        <div className="img">
          <img src={`img/brian-grand-canyon.jpg`} alt="" />
          {/* <div className="video_button">
            <a
              className="popup-youtube"
              href="https://www.youtube.com/watch?v=7e90gBu4pas"
            >
              <img className="anim_circle" src="img/hero/welcome.png" alt="" />
              <img className="svg" src="img/svg/play.svg" alt="" />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Home;
