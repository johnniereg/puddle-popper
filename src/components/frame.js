import React, { Component } from "react";
import Draggable from "react-draggable";

import { Carousel } from "react-responsive-carousel";

import PubSub from "pubsub-js";

import gif1 from "../images/sarah/unnamed.gif";

class Frame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data,
      showDetails: false,
      visible: false,
      zIndex: 0,
    };

    this.handleFrameClick = this.handleFrameClick.bind(this);
    this.hideFrame = this.hideFrame.bind(this);
    this.sendToBack = this.sendToBack.bind(this);
    this.toggleDetails = this.toggleDetails.bind(this);
    this.toggleFrame = this.toggleFrame.bind(this);
  }

  componentDidMount() {
    PubSub.subscribe("toggleFrame", this.toggleFrame);
    PubSub.subscribe("sendToBack", this.sendToBack);
  }

  componentWillUnmount() {
    PubSub.unsubscribeAll();
  }

  handleFrameClick() {
    // Bring clicked frame to front
    this.setState({
      zIndex: 10,
    });
    // Send other frames to back
    PubSub.publish("sendToBack", this.state.key);
  }

  hideFrame() {
    this.setState({
      visible: false,
      zIndex: 0,
    });
  }

  sendToBack(msg, data) {
    if (data !== this.state.key) {
      this.setState({
        zIndex: 0,
      });
    }
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

  toggleDetails() {
    this.setState((prevState) => ({
      showDetails: !prevState.showDetails,
    }));
  }

  render() {
    const arrowStyles = {
      position: "absolute",
      zIndex: this.state.zIndex + 1,
      bottom: "10px",
      width: 30,
      height: 30,
      cursor: "pointer",
    };

    return (
      <Draggable
        axis="both"
        defaultPosition={{ x: 10, y: 10 }}
        handle=".Frame"
        onMouseDown={this.handleFrameClick}
        position={null}
        scale={1}
      >
        <div
          className={this.state.visible ? "Frame" : "Frame Frame--hidden"}
          style={{
            zIndex: this.state.zIndex,
            backgroundColor: "transparent",
            maxHeight: "33%",
            maxWidth: "33%",
          }}
        >
          <div
            className={
              this.state.showDetails ? "Details" : "Details Details--hidden"
            }
            style={{
              zIndex: this.state.zIndex + 2,
            }}
          >
            <div>Title</div>
            <div>Description</div>
          </div>
          <div className="Controls" style={{ zIndex: this.state.zIndex + 3 }}>
            <button onClick={this.hideFrame}>Close</button>
            <button onClick={this.toggleDetails}>Details</button>
          </div>
          <div style={{ width: "300px" }}>
            <Carousel
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    style={{ ...arrowStyles, left: 15 }}
                  >
                    -
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    style={{ ...arrowStyles, right: 15 }}
                  >
                    +
                  </button>
                )
              }
              showIndicators={false}
              showStatus={false}
              showThumbs={false}
              swipeable={false}
            >
              <img alt="imageplaceholder" src={gif1} draggable="false" />
              <img
                alt="imageplaceholder"
                src="https://via.placeholder.com/300/0000FF/808080?Text=Slide-1"
                draggable="false"
              />
              <img
                alt="imageplaceholder"
                src="https://via.placeholder.com/300/FF0000/FFFFFF?Text=Slide-2"
                draggable="false"
              />
              <img
                alt="imageplaceholder"
                src="https://via.placeholder.com/300/FFFF00/000000?Text=Slide-3"
                draggable="false"
              />
              <img
                alt="imageplaceholder"
                src="https://via.placeholder.com/300/000000/FFFFFF/?text=Slide-4"
                draggable="false"
              />
            </Carousel>
          </div>
        </div>
      </Draggable>
    );
  }
}

export default Frame;
