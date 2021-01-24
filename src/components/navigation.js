import React, { Component } from "react";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const navItems = Object.entries(this.props.items).map(([key, value]) => {
      return (
        <li className="Navigation__Item">
          <span className="Navigation__Icon">{value}</span>
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
