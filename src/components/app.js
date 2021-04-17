import React, { Component } from "react";

import Header from "../components/header";
import Main from "../components/main";
import Navigation from "../components/navigation";

import background from "../images/background.png";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exhibits: {
        0: {
          key: 0,
          title: "Exhibit 0",
          description: "This is an example description for an exhibit",
        },
        1: {
          key: 1,
          title: "Exhibit 1",
          description: "This is an example description for an exhibit",
        },
        2: {
          key: 2,
          title: "Exhibit 2",
          description: "This is an example description for an exhibit",
        },
        3: {
          key: 3,
          title: "Exhibit 3",
          description: "This is an example description for an exhibit",
        },
        4: {
          key: 4,
          title: "Exhibit 4",
          description: "This is an example description for an exhibit",
        },
        5: {
          key: 5,
          title: "Exhibit 5",
          description: "This is an example description for an exhibit",
        },
        6: {
          key: 6,
          title: "Exhibit 6",
          description: "This is an example description for an exhibit",
        },
        7: {
          key: 7,
          title: "Exhibit 7",
          description: "This is an example description for an exhibit",
        },
        8: {
          key: 8,
          title: "Exhibit 8",
          description: "This is an example description for an exhibit",
        },
        9: {
          key: 9,
          title: "Exhibit 9",
          description: "This is an example description for an exhibit",
        },
        10: {
          key: 10,
          title: "Exhibit 10",
          description: "This is an example description for an exhibit",
        },
        11: {
          key: 11,
          title: "Exhibit 11",
          description: "This is an example description for an exhibit",
        },
        12: {
          key: 12,
          title: "Exhibit 12",
          description: "This is an example description for an exhibit",
        },
        13: {
          key: 13,
          title: "Exhibit 13",
          description: "This is an example description for an exhibit",
        },
        14: {
          key: 14,
          title: "Exhibit 14",
          description: "This is an example description for an exhibit",
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
        <Main data={this.state.exhibits} />
        <Navigation data={this.state.exhibits} />
      </div>
    );
  }
}

export default App;
