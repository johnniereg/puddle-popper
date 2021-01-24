import React, { Component } from "react";
import Draggable from "react-draggable";

class Frame extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        scale={1}
      >
        <div className="frame">
          <div className="handle">{this.props.content}</div>
        </div>
      </Draggable>
    );
  }
}

export default Frame;
