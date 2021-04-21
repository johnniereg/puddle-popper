import React, { Component } from "react";
import Draggable from "react-draggable";

import { Carousel } from "react-responsive-carousel";

import PubSub from "pubsub-js";

import gif1 from "../images/sarah/unnamed.gif";

import leftIcon from "../images/frame/left.png";
import rightIcon from "../images/frame/right.png";
import closeIcon from "../images/frame/close.png";
import infoIcon from "../images/frame/info.png";

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
      cursor: "pointer",
    };

    const randomX = Math.random() * (500 - 50) + 50;
    const randomY = Math.random() * (500 - 50) + 50;

    return (
      <Draggable
        axis="both"
        defaultPosition={{ x: randomX, y: randomY }}
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
            <button
              className="Frame__Control Frame__Control--Close"
              onClick={this.hideFrame}
              style={{ backgroundImage: `url(${closeIcon})` }}
            ></button>
          </div>
          <div style={{ width: "300px" }}>
            <Carousel
              infiniteLoop={true}
              renderArrowPrev={(onClickHandler, hasPrev, label) => (
                <button
                  type="button"
                  className="Frame__Control Frame__Control--Arrow Frame__Control--ArrowLeft"
                  onClick={onClickHandler}
                  title={label}
                  style={{ ...arrowStyles }}
                >
                  <img src={leftIcon}></img>
                </button>
              )}
              renderArrowNext={(onClickHandler, hasNext, label) => (
                <button
                  type="button"
                  className="Frame__Control  Frame__Control--Arrow Frame__Control--ArrowRight"
                  onClick={onClickHandler}
                  title={label}
                  style={{ ...arrowStyles }}
                >
                  <img src={rightIcon}></img>
                </button>
              )}
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
          <div className="Controls" style={{ zIndex: this.state.zIndex + 3 }}>
            <button
              className="Frame__Control Frame__Control--Info"
              onClick={this.toggleDetails}
              style={{ backgroundImage: `url(${infoIcon})` }}
            ></button>
          </div>
        </div>
      </Draggable>
    );
  }
}

export default Frame;
