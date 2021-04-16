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
          title: "Exhibit 1",
          description: "This is an example description for an exhibit",
        },
        1: {
          key: 1,
          title: "Exhibit 2",
          description: "This is an example description for an exhibit",
        },
        2: {
          key: 2,
          title: "Exhibit 3",
          description: "This is an example description for an exhibit",
        },
        3: {
          key: 3,
          title: "Exhibit 4",
          description: "This is an example description for an exhibit",
        },
        4: {
          key: 4,
          title: "Exhibit 5",
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
