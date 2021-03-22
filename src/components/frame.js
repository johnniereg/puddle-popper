import React, { Component } from "react";
import Draggable from "react-draggable";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import PubSub from "pubsub-js";

import gif1 from "../images/sarah/unnamed.gif";
import gif2 from "../images/sarah/unnamed02.gif";

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

  handleFrameClick(e) {
    console.log(e.target);
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
        onClick={this.handleFrameClick}
      >
        <div
          className={this.state.visible ? "Frame" : "Frame Frame--hidden"}
          style={{ zIndex: this.state.zIndex, backgroundColor: "transparent" }}
        >
          <div style={{ width: "750px" }}>
            <Carousel plugins={["arrows"]} draggable={false}>
              <img src={gif1} draggable="false" />
              <img src={gif2} draggable="false" />
            </Carousel>
          </div>
        </div>
      </Draggable>
    );
  }
}

export default Frame;
