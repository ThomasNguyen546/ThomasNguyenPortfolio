import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "HTML5_skill",
          content: "HTML5",
          // percentage: "87%",
          // value: "87"
        },
        {
          id: "CSS3_skill",
          content: "CSS3",
          // percentage: "83%",
          // value: "83"
        },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          // percentage: "81%",
          // value: "81"
        },
        {
          id: "Bootstrap_skill",
          content: "Bootstrap",
          // percentage: "91%",
          // value: "91"
        },
        {
          id: "React_skill",
          content: "React",
          // percentage: "85%",
          // value: "85"
        },
        {
          id: "Git_skill",
          content: "Git",
          // percentage: "87%",
          // value: "87"
        },
        {
          id: "Express_skill",
          content: "Express",
          // percentage: "80%",
          // value: "80"
        },
        {
          id: "CommandLine_skill",
          content: "Command Line",
          // percentage: "92%",
          // value: "92"
        },
        {
          id: "Heroku_skill",
          content: "Heroku",
          // percentage: "75%",
          // value: "75"
        },
        {
          id: "Handlebars_skill",
          content: "Handlebars",
          // percentage: "80%",
          // value: "80"
        },
        {
          id: "JQuery_skill",
          content: "JQuery",
          // percentage: "80%",
          // value: "80"
        },
        {
          id: "MongoDB_skill",
          content: "MongoDB",
          // percentage: "100",
          // value: "100"
        },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Welcome to my Portfolio Page! My name is Thomas Nguyen and I graduated with a Bachelor's of Science in Finance from the David Eccles Business School at the University of Utah. After graduating with my Finance degree, I decided to enroll into a coding bootcamp from the University of Utah. I hope that my finance background along with the knowledge I've gained through the coding bootcamp will make me a valuable asset."
        },
        {
          id: "second-p-about",
          content:
            "I’m a Full Stack Web Developer leveraging a background in Finance and customer service. Recognized for a keen eye for aesthetics, and ability to work in a team environment. I recently received a Certificate in Full Stack Web Development from the University of Utah. I have excellent interpersonal communication skills and team member who work well with others on team-based projects, as well as being known for being creative and applying skills effectively in any environment."
        },
        {
          id: "third-p-about",
          content:
            "I look forward to expanding my coding knowledge and experience as I continue to work on projects and collaborate with other developers to improve my skills. I've always had a thirst for knowledge and new experiences. I'm excited to see where the path of Full Stack Development will lead me into the future."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.percentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.percentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;