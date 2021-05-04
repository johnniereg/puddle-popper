import React, { Component } from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";
import { GatsbyImage } from "gatsby-plugin-image";
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
      width: this.props.width,
      zIndex: 0
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
      zIndex: 10
    });
    // Send other frames to back
    PubSub.publish("sendToBack", this.state.key);
  }

  hideFrame() {
    this.setState({
      visible: false,
      zIndex: 0
    });
  }

  sendToBack(msg, data) {
    if (data !== this.state.key) {
      this.setState({
        zIndex: 0
      });
    }
  }

  toggleFrame(msg, data) {
    if (data === this.state.key) {
      this.setState(
        prevState => (
          {
            visible: !prevState.visible,
            zIndex: 10
          },
          () => {
            const frameEl = ReactDOM.findDOMNode(this);
            frameEl.querySelector("carousel").focus();
          }
        )
      );
    } else {
      this.setState({
        zIndex: 0
      });
    }
  }

  toggleDetails() {
    this.setState(prevState => ({
      showDetails: !prevState.showDetails
    }));
  }

  render() {
    const arrowStyles = {
      zIndex: this.state.zIndex + 1
    };

    const randomX = Math.random() * (300 - 50) + 50;
    const randomY = Math.random() * (200 - 50) + 50;

    const defaultPosition =
      this.state.width > 768 ? { x: randomX, y: randomY } : {};

    const sortedImages = this.state.images.edges.sort((a, b) => {
      if (a.node.base < b.node.base) {
        return -1;
      }
      if (a.node.base > b.node.base) {
        return 1;
      }
      return 0;
    });

    return (
      <Draggable
        axis="both"
        bounds="parent"
        defaultPosition={defaultPosition}
        disabled={this.state.width <= 768 ? true : false}
        handle=".Frame"
        onMouseDown={this.handleFrameClick}
        position={null}
        scale={1}
      >
        <div
          className={this.state.visible ? "Frame" : "Frame Frame--hidden"}
          style={{
            zIndex: this.state.zIndex
          }}
        >
          {this.state.description && (
            <div
              className={
                this.state.showDetails ? "Details" : "Details Details--hidden"
              }
              style={{
                zIndex: this.state.zIndex + 2
              }}
            >
              <div>
                <p>
                  {this.state.description.artist},{" "}
                  <em>{this.state.description.title}</em>,{" "}
                  {this.state.description.materialsFormatYear}
                </p>
                <p>-----</p>
                <p>{this.state.description.text}</p>
              </div>
            </div>
          )}
          <div
            className="Controls Controls--Top"
            style={{ zIndex: this.state.zIndex + 3 }}
          >
            <button
              aria-label="Close"
              className="Frame__Control Frame__Control--Close Cursor--Pointer"
              onClick={this.hideFrame}
              style={{ backgroundImage: `url(${closeIcon})` }}
            ></button>
          </div>
          <div
            className={
              this.state.orientation === "landscape"
                ? "Carousel__Wrapper Carousel__Wrapper--Landscape"
                : "Carousel__Wrapper Carousel__Wrapper--Portrait"
            }
          >
            <Carousel
              dynamicHeight={true}
              infiniteLoop={true}
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    aria-label="Carousel left"
                    type="button"
                    className="Frame__Control Frame__Control--Arrow Frame__Control--ArrowLeft Cursor--Pointer"
                    onClick={onClickHandler}
                    title={label}
                    style={{ ...arrowStyles }}
                  >
                    <img alt="" src={leftIcon}></img>
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    type="button"
                    className="Frame__Control  Frame__Control--Arrow Frame__Control--ArrowRight Cursor--Pointer"
                    onClick={onClickHandler}
                    title={label}
                    style={{ ...arrowStyles }}
                  >
                    <img alt="" src={rightIcon}></img>
                  </button>
                )
              }
              showIndicators={false}
              showStatus={false}
              showThumbs={false}
              swipeable={false}
              useKeyboardArrows={true}
            >
              {this.state.images &&
                sortedImages.map((image, index) => {
                  if (image.node.base.includes("gif")) {
                    return (
                      <img
                        alt="Spider"
                        className="Frame__Image"
                        src={image.node.publicURL}
                        draggable={false}
                        key={index}
                      ></img>
                    );
                  }
                  if (image.node.base.includes("mp4")) {
                    return (
                      <video
                        autoPlay
                        muted
                        loop
                        src={image.node.publicURL}
                        key={index}
                      >
                        <source
                          src={image.node.publicURL}
                          type="video/mp4"
                        ></source>
                      </video>
                    );
                  }
                  return (
                    <GatsbyImage
                      alt={image.node.base.split(".")[0]} // only use section of the file extension with the filename
                      className="Frame__Image"
                      image={image.node.childImageSharp.gatsbyImageData}
                      key={index}
                      draggable={false}
                    />
                  );
                })}
            </Carousel>
          </div>
          {this.state.description && (
            <div
              className="Controls Controls--Bottom"
              style={{ zIndex: this.state.zIndex + 3 }}
            >
              <button
                aria-label="Toggle exhibit description"
                className="Frame__Control Frame__Control--Info Cursor--Pointer"
                onClick={this.toggleDetails}
                style={{ backgroundImage: `url(${infoIcon})` }}
              ></button>
            </div>
          )}
        </div>
      </Draggable>
    );
  }
}

export default Frame;
