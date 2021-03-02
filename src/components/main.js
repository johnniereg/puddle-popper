import React, { Component } from "react";

import Chat from "../components/chat";
import Frame from "../components/frame";

class Main extends Component {
  render() {
    const frames = Object.entries(this.props.data).map(([key, exhibit]) => {
      return <Frame data={exhibit} key={key} />;
    });

    return (
      <main>
        <div className="Title__Wrapper">
          <h1 className="Title">Puddle Popper Lounge</h1>
        </div>
        <div className="Frames__Wrapper" style={{ position: "relative" }}>
          {frames}
        </div>
        <Chat />
      </main>
    );
  }
}

export default Main;
