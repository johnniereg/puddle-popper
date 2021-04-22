import React, { Component } from "react";
import Draggable from "react-draggable";
import Img from "gatsby-image";
import { Carousel } from "react-responsive-carousel";
import PubSub from "pubsub-js";

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

    this.images = this.props.images || null;

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
      zIndex: this.state.zIndex + 1,
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
            maxWidth: "90%",
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
          <div className="Carousel__Wrapper">
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
              {this.images &&
                this.images[this.state.id].edges.map((image, index) => (
                  <Img
                    key={index}
                    fluid={image.node.childImageSharp.fluid}
                    alt={image.node.base.split(".")[0]} // only use section of the file extension with the filename
                  />
                ))}
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
