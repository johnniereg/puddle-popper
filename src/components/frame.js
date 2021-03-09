import React, { Component } from "react";
import Draggable from "react-draggable";

import PubSub from "pubsub-js";

class Frame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data,
      visible: false,
      zIndex: 0,
    };

    this.toggleFrame = this.toggleFrame.bind(this);
  }

  componentDidMount() {
    console.log(this.state);
    PubSub.subscribe("toggleFrame", this.toggleFrame);
  }

  componentWillUnmount() {
    PubSub.unsubscribeAll();
  }

  toggleFrame(msg, data) {
    if (data === this.state.key) {
      this.setState((prevState) => ({
        visible: !prevState.visible,
        zIndex: 10,
      }));
    } else {
      this.setState({
        zIndex: 0,
      });
    }
  }

  render() {
    return (
      <Draggable
        axis="both"
        handle=".Frame"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        scale={1}
      >
        <div
          className={this.state.visible ? "Frame" : "Frame Frame--hidden"}
          style={{ zIndex: this.state.zIndex, backgroundColor: "#fff" }}
        >
          <div className="Frame__Title">{this.state.title}</div>
          <p className="Frame__Description">{this.state.description}</p>
        </div>
      </Draggable>
    );
  }
}

export default Frame;
