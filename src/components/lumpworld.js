import React, { Component } from "react";
import Draggable from "react-draggable";
import PubSub from "pubsub-js";

import btnDay from "../images/lumpworld/LW_button_day.png";
import btnNight from "../images/lumpworld/LW_button_night.png";
import btnAbout from "../images/lumpworld/LW_button_about.png";

import obj1 from "../images/lumpworld/objects/LWObj01.png";
import obj2 from "../images/lumpworld/objects/LWObj02.png";
import obj3 from "../images/lumpworld/objects/LWObj03.png";
import obj4 from "../images/lumpworld/objects/LWObj04.png";
import obj5 from "../images/lumpworld/objects/LWObj05.png";
import obj6 from "../images/lumpworld/objects/LWObj06.png";
import obj7 from "../images/lumpworld/objects/LWObj07.png";
import obj8 from "../images/lumpworld/objects/LWObj08.png";
import obj9 from "../images/lumpworld/objects/LWObj09.png";
import obj10 from "../images/lumpworld/objects/LWObj10.png";
import obj11 from "../images/lumpworld/objects/LWObj11.png";
import obj12 from "../images/lumpworld/objects/LWObj12.png";
import obj13 from "../images/lumpworld/objects/LWObj13.png";
import obj14 from "../images/lumpworld/objects/LWObj14.png";
import obj15 from "../images/lumpworld/objects/LWObj15.png";
import obj16 from "../images/lumpworld/objects/LWObj16.png";
import obj17 from "../images/lumpworld/objects/LWObj17.png";
import obj18 from "../images/lumpworld/objects/LWObj18.png";
import obj19 from "../images/lumpworld/objects/LWObj19.png";
import obj20 from "../images/lumpworld/objects/LWObj20.png";
import obj21 from "../images/lumpworld/objects/LWObj21.png";
import obj22 from "../images/lumpworld/objects/LWObj22.png";
import obj23 from "../images/lumpworld/objects/LWObj23.png";
import obj24 from "../images/lumpworld/objects/LWObj24.png";
import obj25 from "../images/lumpworld/objects/LWObj25.png";
import obj26 from "../images/lumpworld/objects/LWObj26.png";
import obj27 from "../images/lumpworld/objects/LWObj27.png";
import obj28 from "../images/lumpworld/objects/LWObj28.png";
import obj29 from "../images/lumpworld/objects/LWObj29.png";
import obj30 from "../images/lumpworld/objects/LWObj30.png";
import obj31 from "../images/lumpworld/objects/LWObj31.png";
import obj32 from "../images/lumpworld/objects/LWObj32.png";
import obj33 from "../images/lumpworld/objects/LWObj33.png";

import icon1 from "../images/lumpworld/icons/LWIcon01.png";
import icon2 from "../images/lumpworld/icons/LWIcon02.png";
import icon3 from "../images/lumpworld/icons/LWIcon03.png";
import icon4 from "../images/lumpworld/icons/LWIcon04.png";
import icon5 from "../images/lumpworld/icons/LWIcon05.png";
import icon6 from "../images/lumpworld/icons/LWIcon06.png";
import icon7 from "../images/lumpworld/icons/LWIcon07.png";
import icon8 from "../images/lumpworld/icons/LWIcon08.png";
import icon9 from "../images/lumpworld/icons/LWIcon09.png";
import icon10 from "../images/lumpworld/icons/LWIcon10.png";
import icon11 from "../images/lumpworld/icons/LWIcon11.png";
import icon12 from "../images/lumpworld/icons/LWIcon12.png";
import icon13 from "../images/lumpworld/icons/LWIcon13.png";
import icon14 from "../images/lumpworld/icons/LWIcon14.png";
import icon15 from "../images/lumpworld/icons/LWIcon15.png";
import icon16 from "../images/lumpworld/icons/LWIcon16.png";
import icon17 from "../images/lumpworld/icons/LWIcon17.png";
import icon18 from "../images/lumpworld/icons/LWIcon18.png";
import icon19 from "../images/lumpworld/icons/LWIcon19.png";
import icon20 from "../images/lumpworld/icons/LWIcon20.png";
import icon21 from "../images/lumpworld/icons/LWIcon21.png";
import icon22 from "../images/lumpworld/icons/LWIcon22.png";
import icon23 from "../images/lumpworld/icons/LWIcon23.png";
import icon24 from "../images/lumpworld/icons/LWIcon24.png";
import icon25 from "../images/lumpworld/icons/LWIcon25.png";
import icon26 from "../images/lumpworld/icons/LWIcon26.png";
import icon27 from "../images/lumpworld/icons/LWIcon27.png";
import icon28 from "../images/lumpworld/icons/LWIcon28.png";
import icon29 from "../images/lumpworld/icons/LWIcon29.png";
import icon30 from "../images/lumpworld/icons/LWIcon30.png";
import icon31 from "../images/lumpworld/icons/LWIcon31.png";
import icon32 from "../images/lumpworld/icons/LWIcon32.png";
import icon33 from "../images/lumpworld/icons/LWIcon33.png";

class LumpWorld extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.data,
      bg: "day",
      description: {
        artist: "Juli Majer collaboration with Scott Lougheed",
        materialsFormatYear: "digital interactive game, 2021",
        text: "Digital drag and drop game featuring 3D-rendered creatures, plants, fruit, objects and furniture in a lounge-like digital space.",
        title: "LumpWorld",
      },
      objects: [
        { id: 0, inPlay: false, icon: icon1, img: obj1, zIndex: 0 },
        { id: 1, inPlay: false, icon: icon2, img: obj2, zIndex: 0 },
        { id: 2, inPlay: false, icon: icon3, img: obj3, zIndex: 0 },
        { id: 3, inPlay: false, icon: icon4, img: obj4, zIndex: 0 },
        { id: 4, inPlay: false, icon: icon5, img: obj5, zIndex: 0 },
        { id: 5, inPlay: false, icon: icon6, img: obj6, zIndex: 0 },
        { id: 6, inPlay: false, icon: icon7, img: obj7, zIndex: 0 },
        { id: 7, inPlay: false, icon: icon8, img: obj8, zIndex: 0 },
        { id: 8, inPlay: false, icon: icon9, img: obj9, zIndex: 0 },
        { id: 9, inPlay: false, icon: icon10, img: obj10, zIndex: 0 },
        { id: 10, inPlay: false, icon: icon11, img: obj11, zIndex: 0 },
        { id: 11, inPlay: false, icon: icon12, img: obj12, zIndex: 0 },
        { id: 12, inPlay: false, icon: icon13, img: obj13, zIndex: 0 },
        { id: 13, inPlay: false, icon: icon14, img: obj14, zIndex: 0 },
        { id: 14, inPlay: false, icon: icon15, img: obj15, zIndex: 0 },
        { id: 15, inPlay: false, icon: icon16, img: obj16, zIndex: 0 },
        { id: 16, inPlay: false, icon: icon17, img: obj17, zIndex: 0 },
        { id: 17, inPlay: false, icon: icon18, img: obj18, zIndex: 0 },
        { id: 18, inPlay: false, icon: icon19, img: obj19, zIndex: 0 },
        { id: 19, inPlay: false, icon: icon20, img: obj20, zIndex: 0 },
        { id: 20, inPlay: false, icon: icon21, img: obj21, zIndex: 0 },
        { id: 21, inPlay: false, icon: icon22, img: obj22, zIndex: 0 },
        { id: 22, inPlay: false, icon: icon23, img: obj23, zIndex: 0 },
        { id: 23, inPlay: false, icon: icon24, img: obj24, zIndex: 0 },
        { id: 24, inPlay: false, icon: icon25, img: obj25, zIndex: 0 },
        { id: 25, inPlay: false, icon: icon26, img: obj26, zIndex: 0 },
        { id: 26, inPlay: false, icon: icon27, img: obj27, zIndex: 0 },
        { id: 27, inPlay: false, icon: icon28, img: obj28, zIndex: 0 },
        { id: 28, inPlay: false, icon: icon29, img: obj29, zIndex: 0 },
        { id: 29, inPlay: false, icon: icon30, img: obj30, zIndex: 0 },
        { id: 30, inPlay: false, icon: icon31, img: obj31, zIndex: 0 },
        { id: 31, inPlay: false, icon: icon32, img: obj32, zIndex: 0 },
        { id: 32, inPlay: false, icon: icon33, img: obj33, zIndex: 0 },
      ],
      objectsInPlay: 0,
      showDetails: false,
      visible: false,
      width: 0,
      zIndex: 2,
    };

    this.hideLumpWorld = this.hideLumpWorld.bind(this);
    this.handleLumpWorldClick = this.handleLumpWorldClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.toggleLumpWorld = this.toggleLumpWorld.bind(this);
    this.toggleDetails = this.toggleDetails.bind(this);
    this.updateBg = this.updateBg.bind(this);
    this.sendToBack = this.sendToBack.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    PubSub.subscribe("toggleFrame", this.toggleLumpWorld);
    PubSub.subscribe("sendToBack", this.sendToBack);
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    PubSub.unsubscribeAll();
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  handleLumpWorldClick() {
    // Bring clicked frame to front
    this.setState({
      zIndex: 10,
    });
    // Send other frames to back
    PubSub.publish("sendToBack", this.state.key);
  }

  hideLumpWorld() {
    const objects = this.state.objects;
    objects.forEach((obj) => {
      obj.inPlay = false;
      obj.zIndex = 0;
    });

    this.setState({
      objects: objects,
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

  toggleLumpWorld(msg, data) {
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

  handleButtonClick(e) {
    const key = e.currentTarget.getAttribute("data-button-id");
    const objects = this.state.objects;
    const isInPlay = objects[key].inPlay;
    objects[key].inPlay = !isInPlay;
    objects[key]["zIndex"] = this.state.objectsInPlay + this.state.zIndex;

    this.setState((prevState) => ({
      objects: objects,
      objectsInPlay: prevState.objectsInPlay + 1,
    }));
  }

  updateBg(e) {
    const bgType = e.currentTarget.getAttribute("data-bg-type");

    this.setState({
      bg: bgType,
    });
  }

  render() {
    const randomX = Math.random() * (200 - 20) + 20;
    const randomY = Math.random() * (100 - 20) + 20;

    const defaultPosition =
      this.state.width > 768 ? { x: randomX, y: randomY } : { x: 10, y: 10 };

    const lumpWorldEl = (
      <div
        className={
          this.state.visible ? "LumpWorld" : "LumpWorld LumpWorld--hidden"
        }
        style={{
          zIndex: this.state.zIndex,
        }}
      >
        <div className="LumpWorld__Upper Handle">
          <div className="LumpWorld__Upper--Left Handle">
            <div className="LumpWorld__ButtonWrapper">
              <button
                alt="Toggle background to day"
                aria-label="Show background 1"
                className="LumpWorld__BackgroundToggle LumpWorld__Button Cursor--Pointer"
                data-bg-type="day"
                onClick={this.updateBg}
              >
                <img alt="" src={btnDay}></img>
              </button>
              <button
                alt="Toggle background to night"
                aria-label="Show background 2"
                className="LumpWorld__BackgroundToggle LumpWorld__Button Cursor--Pointer"
                data-bg-type="night"
                onClick={this.updateBg}
              >
                <img alt="" draggable={false} src={btnNight}></img>
              </button>
            </div>
          </div>
          <div className="LumpWorld__Upper--Right Handle">
            <button
              aria-label="Close Exhibit"
              className="LumpWorld__Close Cursor--Pointer"
              onClick={this.hideLumpWorld}
            >
              <span>X</span>
            </button>
          </div>
        </div>

        <div className="LumpWorld__Main">
          <div
            className={
              this.state.bg === "day"
                ? `LumpWorld__Main--Left BackgroundDay`
                : `LumpWorld__Main--Left BackgroundNight`
            }
          >
            {this.state.objects.map((obj, index) => {
              const objRandomX = Math.random() * (50 - 5) + 5;
              const objRandomY = Math.random() * (50 - 5) + 5;
              const startPosition = { x: objRandomX, y: objRandomY };

              return (
                <Draggable
                  axis="both"
                  bounds="parent"
                  defaultPosition={startPosition}
                  handle=".LumpWorld__Object"
                  key={index}
                  position={null}
                  scale={1}
                >
                  <div
                    className={
                      obj.inPlay
                        ? `LumpWorld__Object Cursor--Move`
                        : `LumpWorld__Object Cursor--Move Hidden`
                    }
                    style={{
                      zIndex: obj.zIndex,
                    }}
                  >
                    <img
                      alt={`Lump World object number ${index}`}
                      draggable={false}
                      src={obj.img}
                    ></img>
                  </div>
                </Draggable>
              );
            })}

            {this.state.description && (
              <div
                className={
                  this.state.showDetails ? "Details" : "Details Details--hidden"
                }
                style={{
                  zIndex: "100",
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
          </div>
          <div className="LumpWorld__Main--Divider"></div>
          <div className="LumpWorld__Main--Right">
            <ul className="LumpWorld__Icons">
              {this.state.objects.map((obj, index) => {
                return (
                  <li className="LumpWorld__Icon" key={index}>
                    <button
                      className="Cursor--Pointer"
                      data-button-id={index}
                      onClick={this.handleButtonClick}
                    >
                      <img
                        alt={`Lump World object number ${index}`}
                        src={obj.icon}
                      ></img>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="LumpWorld__Lower Handle">
          <div className="LumpWorld__ButtonWrapper">
            <button
              aria-label="Show Details"
              className="LumpWorld__Details LumpWorld__Button Cursor--Pointer"
              onClick={this.toggleDetails}
            >
              <img alt="About" src={btnAbout}></img>
            </button>
          </div>
        </div>
      </div>
    );

    if (this.state.width > 768) {
      return (
        <Draggable
          axis="both"
          bounds="parent"
          handle=".Handle"
          defaultPosition={defaultPosition}
          disabled={this.state.width <= 768 ? true : false}
          onMouseDown={this.handleLumpWorldClick}
          position={null}
          scale={1}
        >
          {lumpWorldEl}
        </Draggable>
      );
    } else {
      return <div>{lumpWorldEl}</div>;
    }
  }
}

export default LumpWorld;
