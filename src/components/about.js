import React, { Component } from "react";
import Draggable from "react-draggable";

class About extends Component {
  render() {
    return (
      <Draggable
        axis="both"
        handle=".About"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        scale={1}
      >
        <div className="About">
          <h1>About Puddle Popper</h1>
        </div>
      </Draggable>
    );
  }
}

export default About;
