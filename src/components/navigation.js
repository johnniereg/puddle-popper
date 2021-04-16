import React, { Component } from "react";
import PubSub from "pubsub-js";

import navBgLeft from "../images/navigation/Menu_End_Left.png";
import navBgRight from "../images/navigation/Menu_End_Right.png";
import navBgUp from "../images/navigation/Menu_Interior_Upper.png";
import navBgDown from "../images/navigation/Menu_Interior_Lower.png";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  handleButtonClick(event) {
    const key = parseInt(event.currentTarget.getAttribute("data-key"));
    PubSub.publish("toggleFrame", key);
  }

  determineBgImage(index, length) {
    let bgImg;

    if (index === 0) {
      bgImg = navBgLeft;
    } else if (index === length - 1) {
      bgImg = navBgRight;
    } else if (index % 2) {
      bgImg = navBgDown;
    } else {
      bgImg = navBgUp;
    }

    return bgImg;
  }

  determineBgClass(index, length) {
    let additionalClass;

    if (index === 0) {
      additionalClass = "Left";
    } else if (index === length - 1) {
      additionalClass = "Right";
    } else if (index % 2) {
      additionalClass = "Down";
    } else {
      additionalClass = "Up";
    }

    return additionalClass;
  }

  render() {
    const exhibits = Object.entries(this.props.data);
    const navItems = exhibits.map(([key, exhibit], index) => {
      const bgImage = this.determineBgImage(index, exhibits.length);
      const additionalClass = this.determineBgClass(index, exhibits.length);
      const classString = `Navigation__Item Navigation__Item--${additionalClass}`;

      return (
        <li
          className={classString}
          key={key}
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        >
          <button
            className="Navigation__Button"
            onClick={this.handleButtonClick}
            data-key={key}
          >
            <span>{key}</span>
          </button>
        </li>
      );
    });

    return (
      <nav className="Navigation">
        <ul className="Navigation__List">{navItems}</ul>
      </nav>
    );
  }
}

export default Navigation;
