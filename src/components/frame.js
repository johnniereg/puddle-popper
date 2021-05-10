import React, { Component } from "react";
import Draggable from "react-draggable";
import { GatsbyImage } from "gatsby-plugin-image";
import { Carousel } from "react-responsive-carousel";
import PubSub from "pubsub-js";

import leftIcon from "../images/frame/left.png";
import rightIcon from "../images/frame/right.png";
import closeIcon from "../images/frame/close.png";
import infoIcon from "../images/frame/info.png";

import spiderVideo from "../images/exhibits/spider/spiderConvert.mp4";
import melVideo from "../images/exhibits/easterEggs/mel_easteregg1.mp4";

class Frame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data,
      showDetails: false,
      visible: false,
      width: this.props.width,
      zIndex: 2
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
      zIndex: 2
    });
  }

  sendToBack(msg, data) {
    if (data !== this.state.key) {
      this.setState({
        zIndex: 2
      });
    }
  }

  toggleFrame(msg, data) {
    if (data === this.state.key) {
      this.setState(prevState => ({
        visible: !prevState.visible,
        zIndex: 10
      }));
    } else {
      this.setState({
        zIndex: 2
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

    const randomX = Math.random() * (200 - 20) + 20;
    const randomY = Math.random() * (100 - 20) + 20;

    const defaultPosition =
      this.state.width > 768 ? { x: randomX, y: randomY } : { x: 10, y: 10 };

    const sortedImages = this.state.images.edges.sort((a, b) => {
      if (a.node.base < b.node.base) {
        return -1;
      }
      if (a.node.base > b.node.base) {
        return 1;
      }
      return 0;
    });

    const frameEl = (
      <div
        className={
          this.state.visible
            ? `Frame Frame--${this.state.orientation} Handle`
            : `Frame Frame--${this.state.orientation} Frame--hidden  Handle`
        }
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
              {this.state.description.photoCredit && (
                <p>{this.state.description.photoCredit}</p>
              )}
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
              ? "Carousel__Wrapper Carousel__Wrapper--Landscape Cursor--Default"
              : "Carousel__Wrapper Carousel__Wrapper--Portrait Cursor--Default"
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
                if (image.node.base.includes("spider")) {
                  console.log("includes spider");
                  return (
                    <video autoPlay muted loop key={index}>
                      <source src={spiderVideo} type="video/mp4"></source>
                    </video>
                  );
                }
                if (image.node.base.includes("mel_easteregg1")) {
                  return (
                    <video autoPlay muted loop key={index}>
                      <source src={melVideo} type="video/mp4"></source>
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
    );

    if (this.state.width > 768) {
      return (
        <Draggable
          axis="both"
          bounds="parent"
          defaultPosition={defaultPosition}
          disabled={this.state.width <= 768 ? true : false}
          handle=".Handle"
          onMouseDown={this.handleFrameClick}
          position={null}
          scale={1}
        >
          {frameEl}
        </Draggable>
      );
    } else {
      return <div>{frameEl}</div>;
    }
  }
}

export default Frame;
