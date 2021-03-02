import React from "react";
import myImage from "../img/ProfilePicture.JPG";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [

        {
          id: "first-p-about",
          content:
            "Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis. Eiusmod nulla cupidatat labore sint sit aute dolore irure nostrud ut incididunt. Anim laborum reprehenderit labore magna ut dolore quis irure. Labore ea duis deserunt ullamco irure fugiat deserunt ut nisi ea minim proident. Nisi consectetur do non magna duis aliqua minim minim veniam. In occaecat minim qui consequat elit mollit consectetur non id tempor. Amet adipisicing occaecat tempor culpa quis est duis."
        }
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
                  <div className="col-md-12">
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
