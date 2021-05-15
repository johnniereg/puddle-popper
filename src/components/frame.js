import React, { Component } from "react";
import ReactHTMLParser from "react-html-parser";
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

import Frame01 from "../images/frame/Frame01_May15.png";
import Frame02 from "../images/frame/Frame02_May15.png";
import Frame03 from "../images/frame/Frame03_May15.png";
import Frame04 from "../images/frame/Frame04_May15.png";
import Frame05 from "../images/frame/Frame05_May15.png";
import Frame06 from "../images/frame/Frame06_May15.png";
import Frame07 from "../images/frame/Frame07_May15.png";
import Frame08 from "../images/frame/Frame08_May15.png";
import Frame09 from "../images/frame/Frame09_May15.png";
import Frame10 from "../images/frame/Frame10_May15.png";

const frameImages = {
  Frame01: Frame01,
  Frame02: Frame02,
  Frame03: Frame03,
  Frame04: Frame04,
  Frame05: Frame05,
  Frame06: Frame06,
  Frame07: Frame07,
  Frame08: Frame08,
  Frame09: Frame09,
  Frame10: Frame10,
};

class Frame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data,
      showDetails: false,
      visible: false,
      width: 0,
      zIndex: 2,
    };

    this.handleFrameClick = this.handleFrameClick.bind(this);
    this.hideFrame = this.hideFrame.bind(this);
    this.sendToBack = this.sendToBack.bind(this);
    this.toggleDetails = this.toggleDetails.bind(this);
    this.toggleFrame = this.toggleFrame.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    PubSub.subscribe("toggleFrame", this.toggleFrame);
    PubSub.subscribe("sendToBack", this.sendToBack);
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    PubSub.unsubscribeAll();
    window.removeEventListener("resize", this.updateWindowDimensions);
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
      zIndex: 2,
    });
  }

  sendToBack(msg, data) {
    if (data !== this.state.key) {
      this.setState({
        zIndex: 2,
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
        zIndex: 2,
      });
    }
  }

  toggleDetails() {
    this.setState((prevState) => ({
      showDetails: !prevState.showDetails,
    }));
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const arrowStyles = {
      zIndex: this.state.zIndex + 1,
    };

    const randomX = Math.random() * (150 - 20) + 10;
    const randomY = Math.random() * (20 - 5) + 5;

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
            ? `Frame ${this.state.frame} ${this.state.orientation} Handle Visible`
            : `Frame ${this.state.frame} ${this.state.orientation} Handle Hidden`
        }
        style={
          this.state.width > 768
            ? {
                backgroundImage: `url(${frameImages[this.state.frame]})`,
                backgroundSize: "100% 100%",
                zIndex: this.state.zIndex,
              }
            : {
                zIndex: this.state.zIndex,
              }
        }
      >
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
          className={`Carousel__Wrapper ${this.state.frame} Cursor--Default`}
          style={
            this.state.maxWidth && this.state.width > 768
              ? {
                  maxWidth: `${this.state.maxWidth}`,
                }
              : {}
          }
        >
          {this.state.description && (
            <div
              className={
                this.state.showDetails
                  ? "Details Visible"
                  : "Details Details Hidden"
              }
              style={{
                zIndex: this.state.zIndex + 2,
              }}
            >
              <div>
                <p>
                  {ReactHTMLParser(this.state.description.artist)}
                  <em>{ReactHTMLParser(this.state.description.title)}</em>
                  {ReactHTMLParser(this.state.description.materialsFormatYear)}
                </p>
                {this.state.description.photoCredit && (
                  <p>{ReactHTMLParser(this.state.description.photoCredit)}</p>
                )}
                <p>-----</p>
                <p>{ReactHTMLParser(this.state.description.text)}</p>
              </div>
            </div>
          )}
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
                if (image.node.base.includes("spider")) {
                  return (
                    <div style={{ backgroundColor: "#a59ce8" }}>
                      <video autoPlay muted loop playsInline key={index}>
                        <source src={spiderVideo} type="video/mp4"></source>
                      </video>
                    </div>
                  );
                }
                if (image.node.base.includes("mel_easteregg1")) {
                  return (
                    <div style={{}}>
                      <video autoPlay muted loop playsInline key={index}>
                        <source src={melVideo} type="video/mp4"></source>
                      </video>
                    </div>
                  );
                }
                return (
                  <GatsbyImage
                    alt={image.node.base.split(".")[0]} // only use section of the file extension with the filename
                    backgroundColor={"#e0c8e0"}
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
          cancel={".Carousel__Wrapper"}
          defaultPosition={defaultPosition}
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
