import React, { Component } from "react";
import "./assets/styles/main.sass";
import Epitaph from "epitaphjs";
import { TimelineLite, Power4 } from "gsap";

class App extends Component {
  timeline = new TimelineLite({ paused: true });
  componentDidMount() {
    const heading = new Epitaph(this.heading, { className: "letter" });
    const subheading = new Epitaph(this.subheading, { className: "letter" });
    this.timeline.staggerFrom(
      this.heading.childNodes,
      3,
      {
        opacity: 0,
        y: 200,
        ease: Power4.easeOut
      },
      0.2
    );
    this.timeline.staggerFrom(
      this.subheading.childNodes,
      4,
      {
        opacity: 0,
        y: 100,
        rotationZ: "60deg",
        ease: Power4.easeOut
      },
      0.05,
      "-=3"
    );
    setTimeout(() => {
      this.timeline.play();
    }, 500);
  }
  render() {
    return (
      <>
        <div className="wrapper">
          <h1
            ref={ref => {
              this.heading = ref;
            }}
          >
            Epitaph
          </h1>
          <h4
            ref={ref => {
              this.subheading = ref;
            }}
          >
            A text splitter plugin that does more
          </h4>
        </div>
        <div className="footer">
          <ul className="footer-menu">
            <li>
              <a href="https://github.com/alekangelov/epitaphjs#readme">
                Github
              </a>
            </li>
            <li>
              <a href="https://www.npmjs.com/package/epitaphjs">NPM</a>
            </li>
            <li>
              <a>
                <a href="#">Documentation (soon)</a>
              </a>
            </li>
          </ul>
          <div className="footer-by">
            <p>
              Made by <a href="http://alekangelov.com">Alek Angelov</a>
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default App;
