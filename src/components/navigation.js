import React, { Component } from "react";
import PubSub from "pubsub-js";

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

  render() {
    const navItems = Object.entries(this.props.data).map(([key, exhibit]) => {
      return (
        <li
          className="Navigation__Item"
          key={key}
          data-key={key}
          onClick={this.handleButtonClick}
        >
          <button className="Navigation__Button">
            <span className="Navigation__Icon">{exhibit.title}</span>
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
