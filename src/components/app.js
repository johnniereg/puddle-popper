import React, { Component } from "react";

import Header from "../components/header";
import Main from "../components/main";
import Navigation from "../components/navigation";

import background from "../images/background.png";

import icon1 from "../images/icons/icon1-ds.png";

class App extends Component {
  constructor(props) {
    super(props);

    this.data = this.props.data;

    this.state = {
      navItems: {
        0: {
          key: 0,
          id: "melSpiral",
          title: "Mel Spiral",
          icon: icon1,
        },
        1: {
          key: 1,
          title: "Exhibit 1",
        },
        2: {
          key: 2,
          title: "Exhibit 2",
        },
        3: {
          key: 3,
          title: "Exhibit 3",
        },
        4: {
          key: 4,
          title: "Exhibit 4",
        },
        5: {
          key: 5,
          title: "Exhibit 5",
        },
        6: {
          key: 6,
          title: "Exhibit 6",
        },
        7: {
          key: 7,
          title: "Exhibit 7",
        },
        8: {
          key: 8,
          title: "Exhibit 8",
        },
        9: {
          key: 9,
          title: "Exhibit 9",
        },
        10: {
          key: 10,
          title: "Exhibit 10",
        },
        11: {
          key: 11,
          title: "Exhibit 11",
        },
        12: {
          key: 12,
          title: "Exhibit 12",
        },
        13: {
          key: 13,
          title: "About",
        },
        14: {
          key: 14,
          title: "Chat",
        },
      },
    };
  }

  render() {
    return (
      <div
        className="Page"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <Header />
        <Main data={this.state.navItems} images={this.props.melSpiralImages} />
        <Navigation data={this.state.navItems} />
      </div>
    );
  }
}

export default App;
