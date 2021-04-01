import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "HTML5_skill",
          content: "HTML5",
          percentage: "87%",
          value: "87"
        },
        {
          id: "CSS3_skill",
          content: "CSS3",
          percentage: "83%",
          value: "83"
        },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          percentage: "81%",
          value: "81"
        },
        {
          id: "Bootstrap_skill",
          content: "Bootstrap",
          percentage: "91%",
          value: "91"
        },
        {
          id: "React_skill",
          content: "React",
          percentage: "85%",
          value: "85"
        },
        {
          id: "Git_skill",
          content: "Git",
          percentage: "87%",
          value: "87"
        },
        {
          id: "Express_skill",
          content: "Express",
          percentage: "80%",
          value: "80"
        },
        {
          id: "CommandLine_skill",
          content: "Command Line",
          percentage: "92%",
          value: "92"
        },
        {
          id: "Heroku_skill",
          content: "Heroku",
          percentage: "75%",
          value: "75"
        },
        {
          id: "Handlebars_skill",
          content: "Handlebars",
          percentage: "80%",
          value: "80"
        },
        {
          id: "JQuery_skill",
          content: "JQuery",
          percentage: "80%",
          value: "80"
        },
        {
          id: "MongoDB_skill",
          content: "MongoDB",
          percentage: "83%",
          value: "83"
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
            "Outside of coding and education, I consider myself a social person. I love to play video games specifically and compete. One of the opportunities that I got to experiencewas being a part of the University of Utah's very first e-sports team. I was a League of Legends player on scholarhip at the University of Utah since the inception of their e-sportsprogram, and continued to be on the team till I graduated. Being on the team has taught me many valuable experiences such as working in a team environment to achieve a common goal, interacting in a team environment, as well as lead the team when we competed against colleges across the nation."
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