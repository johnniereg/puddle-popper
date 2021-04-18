import React, { Component } from "react";

import Chat from "../components/chat";
import Frame from "../components/frame";

class Main extends Component {
  render() {
    const frames = Object.entries(this.props.data).map(([key, exhibit]) => {
      return <Frame data={exhibit} key={key} />;
    });

    return (
      <main className="Frame_Wrapper">
        {frames}
        <Chat />
      </main>
    );
  }
}

export default Main;
