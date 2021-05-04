import React, { Component } from "react";
import PubSub from "pubsub-js";

import drop1 from "../images/icons/dewdrops/drop1.png";
import drop2 from "../images/icons/dewdrops/drop2.png";
import drop3 from "../images/icons/dewdrops/drop3.png";
import drop4 from "../images/icons/dewdrops/drop4.png";
import drop5 from "../images/icons/dewdrops/drop5.png";
import drop6 from "../images/icons/dewdrops/drop6.png";
import drop7 from "../images/icons/dewdrops/drop7.png";
import drop8 from "../images/icons/dewdrops/drop8.png";

class Dewdrops extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.props.items,
      width: this.props.width,
      icons: [drop1, drop2, drop3, drop4, drop5, drop6, drop7, drop8]
    };
  }

  handleButtonClick(event) {
    const key = parseInt(event.currentTarget.getAttribute("data-key"));
    PubSub.publish("toggleFrame", key);
  }

  render() {
    const dewDrops = this.state.items.map((item, index) => {
      const key = 15 + index;
      return (
        <li key={index} className={`Dewdrop__Item Dewdrop__Item--${index + 1}`}>
          <button
            data-key={key}
            className="Dewdrop__Button Cursor--EasterEgg"
            onClick={this.handleButtonClick}
          >
            <img
              alt="Hidden easter egg link"
              className="animate-flicker"
              src={this.state.icons[index]}
            ></img>
          </button>
        </li>
      );
    });
    return <ul className="Dewdrops Cursor--Default">{dewDrops}</ul>;
  }
}

export default Dewdrops;
