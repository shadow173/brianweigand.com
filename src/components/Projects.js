import { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { projectSliderProps } from "../sliderProps";
import { dataImage } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";
const Projects = () => {
  useEffect(() => {
    dataImage();
  }, []);
  const [detailsPopup, setDetailsPopup] = useState(false);

  return (
    <Fragment>
      <DetailsPopup close={() => setDetailsPopup(false)} open={detailsPopup} />
      <div className="orido_tm_section" id="portfolio">
        <div className="orido_tm_portfolio">
          <div className="container">
            <div className="orido_tm_main_title">
              <h3>
                <span>
                  Look at my
                  <br />
                  recent projects
                </span>
              </h3>
            </div>
            <div className="portfolio_list">
              <Swiper
                {...projectSliderProps}
                className="owl-carousel gallery_zoom"
              >
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="https://miro.medium.com/v2/resize:fit:1400/1*u4EBes6Muu2fy7iM8igMug.jpeg" alt="" />
                      <div
                        className="main"
                        data-img-url="https://miro.medium.com/v2/resize:fit:1400/1*u4EBes6Muu2fy7iM8igMug.jpeg"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Used by NYC EMS</span>
                      <h3 className="title">
                        <span>RapidPCRs</span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link popup-youtube"
                      href="https://rapidpcrs.com"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="https://miro.medium.com/v2/resize:fit:1400/1*u4EBes6Muu2fy7iM8igMug.jpeg" alt="" />
                      <div
                        className="main"
                        data-img-url="https://miro.medium.com/v2/resize:fit:1400/1*u4EBes6Muu2fy7iM8igMug.jpeg"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Discord Community Website</span>
                      <h3 className="title">
                        <span>SoundDrout.com</span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link popup-vimeo"
                      href="https://sounddrout.com"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="https://miro.medium.com/v2/resize:fit:1400/1*u4EBes6Muu2fy7iM8igMug.jpeg" alt="" />
                      <div
                        className="main"
                        data-img-url="https://miro.medium.com/v2/resize:fit:1400/1*u4EBes6Muu2fy7iM8igMug.jpeg"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Clothing Swap Website</span>
                      <h3 className="title">
                        <span>Swappable</span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link soundcloude_link mfp-iframe audio"
                      href="https://www.swappable.net/"
                    />
                  </div>
                </SwiperSlide>
                
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="https://miro.medium.com/v2/resize:fit:1400/1*u4EBes6Muu2fy7iM8igMug.jpeg" alt="" />
                      <div
                        className="main"
                        data-img-url="https://miro.medium.com/v2/resize:fit:1400/1*u4EBes6Muu2fy7iM8igMug.jpeg"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Simple Project</span>
                      <h3 className="title">
                        <span>Simple Web Scraper</span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link zoom"
                      href="https://miro.medium.com/v2/resize:fit:1400/1*u4EBes6Muu2fy7iM8igMug.jpeg"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
              <a className="prev_button" href="#">
                <img className="svg" src="img/svg/prev.svg" alt="" />
              </a>
              <a className="next_button" href="#">
                <img className="svg" src="img/svg/next.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Projects;
