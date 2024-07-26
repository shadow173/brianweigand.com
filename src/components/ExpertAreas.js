import { Fragment, useEffect, useState } from "react";
import { filter_hashtag } from "../utilits";





const experiences = [
  {
    company: "Triad Development",
    designation: "Co-Founder",
    time: "2024 - Present",
  },
  {
    company: "NYU Langone Hospitals",
    designation: "EMT",
    time: "2021 - Present ",
  },
  {
    company: "Alonesy Inc.",
    designation: "Frontend Developer",
    time: "2021 - 2022",
  },
  {
    company: "Bauen Software Inc.",
    designation: "Web Designer",
    time: "2016 - 2018",
  },
];

const educations = [
  {
    institution: "St John's University",
    certificate: "Computer Science B.A.",
    time: "2022 - Present",
  },
  {
    institution: "Archbishop Molloy HS",
    certificate: "High School",
    time: "2018 - 2022",
  },
  
];

const ExpertAreas = () => {
  const [activeTab, setActiveTab] = useState(2);
  const activeContentTab = (value) => (activeTab == value ? "current" : "");

  useEffect(() => {
    filter_hashtag();
  }, [activeTab]);

  return (
    <Fragment>
      <div className="orido_tm_section">
        <div className="orido_tm_informations">
          <div className="container">
            <div className="informations_inner">
              <div className="left">
                <div className="orido_tm_main_title">
                  <h3>
                    <span>
                      My expert
                      <br />
                      areas
                    </span>
                  </h3>
                </div>
                <div className="text">
                  <p>
                  With a proven track record in developing large-scale web applications, I have successfully delivered solutions for a diverse range of clients and partners, including a high-traffic website for a prominent YouTuber and a Discord server with over 500,000 members. My expertise extends to building and nurturing thriving online communities, both on Discord and other platforms. Additionally, I have founded and operated a successful server hosting company, developed numerous client-specific websites, and created practical applications like RapidPCRS, currently utilized by emergency responders everyday in NYC. 
                  </p>
                  <p>
                  My unique combination of technical skills, community-building expertise, and entrepreneurial spirit enables me to deliver exceptional value to any project.
                  </p>
                </div>
                <div className="orido_tm_boxed_button">
                  <a href="#">
                    My Resume{" "}
                    <img className="svg" src="img/svg/paper.svg" alt="" />
                  </a>
                </div>
              </div>
              <div className="right">
                <div className="filter">
                  <ul>
                    
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(2)}`}
                        onClick={() => setActiveTab(2)}
                        data-tab="tab_2"
                      >
                        <span>Experience</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(3)}`}
                        onClick={() => setActiveTab(3)}
                        data-tab="tab_3"
                      >
                        <span>Education</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                  <span className="ccc" />
                </div>
                <div className="content">
                  <div id="tab_1" className={`wrapper ${activeContentTab(1)}`}>
                    <div className="skillbox">
                      
                    </div>
                  </div>
                  <div id="tab_2" className={`wrapper ${activeContentTab(2)}`}>
                    <div className="timelinebox">
                      <ul>
                        {experiences.map((experience, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <div className="time">
                                <span className="year">{experience.time}</span>
                                <span className="company">
                                  {experience.company}
                                </span>
                              </div>
                              <div className="job">
                                <h3>
                                  <span>{experience.designation}</span>
                                </h3>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div id="tab_3" className={`wrapper ${activeContentTab(3)}`}>
                    <div className="timelinebox">
                      <ul>
                        {educations.map((education, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <div className="time">
                                <span className="year">{education.time}</span>
                                <span className="company">
                                  {education.institution}
                                </span>
                              </div>
                              <div className="job">
                                <h3>
                                  <span>{education.certificate}</span>
                                </h3>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /INFORMATIONS */}
      {/* COUNTER */}
      
    </Fragment>
  );
};
export default ExpertAreas;
