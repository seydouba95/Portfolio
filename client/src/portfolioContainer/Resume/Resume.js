import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },

    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "Java", ratingPercentage: 85 },
    { skill: "JavaScript", ratingPercentage: 80 },
    { skill: "Python", ratingPercentage: 76 },
    { skill: "C/C++", ratingPercentage: 60 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "PHP", ratingPercentage: 65 },
    { skill: "Laravel", ratingPercentage: 72 },
    { skill: "SpringBoot", ratingPercentage: 85 },
    { skill: "Angular", ratingPercentage: 80 },
    { skill: "Node JS", ratingPercentage: 68 },
    { skill: "Express JS", ratingPercentage: 60 },
    { skill: "Mongo Db", ratingPercentage: 62 },
    { skill: "React JS", ratingPercentage: 50 },
    { skill: "Android", ratingPercentage: 70 },
    { skill: "Flutter", ratingPercentage: 60 },

  ];


  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University of Quebec At Trois-Riviéres"}
        subHeading={"MASTER of Computer Science"}
        fromDate={"2021"}
        toDate={"present"}
      />

      <ResumeHeading
        heading={"University of Thies"}
        subHeading={"BACHELOR of Computer Science"}
        fromDate={"2016"}
        toDate={"2019"}
      />
    </div>,

    /* WORK EXPERIENCE */
    
    <div className="resume-screen-container" key="work-experience">
    
      <ResumeHeading
        heading={"Modelsis, Dakar, SN"}
        subHeading={"Web developer"}
        fromDate={"Sept. 2020"}
        toDate={"Dec. 2020"}
      />
      <div className="experience-description">

        <span className="resume-description-text">
          Contribute to Itoc Shipping development using Jhipster and Angular technology
        </span>

      </div>


      <ResumeHeading
        heading={"Blackstar-Technologies, Dakar, SN"}
        subHeading={"Web developer"}
        fromDate={"Dec. 2019"}
        toDate={"Mar. 2020"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          - Contribute to Finao application development using SpringBoot and Angular technology
        </span>
        <br />
        <span className="resume-description-text">
          - Develop the call management functionality of the Finao application using Asterisk technology
        </span>
        <br />
      </div>



      <ResumeHeading
        heading={"Sn Software, Dakar, SN"}
        subHeading={"Web developer"}
        fromDate={"Sept. 2019"}
        toDate={"Oct. 2019"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          - Contribute to the development of C'perf Platform using Thymeleaf Template Engine and SpringBoot
        </span>

        <br />
        <span className="resume-description-text">
          - Contribute to the development of the SQM Platform user interface using JavaScript, html
          and CSS
        </span>
         
      </div>

    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,



    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Audiomack's senegalese songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Sports"
        description="Like to cycling, basketball and football."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;