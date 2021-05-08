import React, { Component } from "react";
import Draggable from "react-draggable";
import PubSub from "pubsub-js";

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

class LumpWorld extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.data,
      objects: [
        { id: 0, inPlay: false, img: obj1 },
        { id: 1, inPlay: false, img: obj2 },
        { id: 2, inPlay: false, img: obj3 },
        { id: 3, inPlay: false, img: obj4 },
        { id: 4, inPlay: false, img: obj5 },
        { id: 5, inPlay: false, img: obj6 },
        { id: 6, inPlay: false, img: obj7 },
        { id: 7, inPlay: false, img: obj8 },
        { id: 8, inPlay: false, img: obj9 },
        { id: 9, inPlay: false, img: obj10 },
        { id: 10, inPlay: false, img: obj11 },
        { id: 11, inPlay: false, img: obj12 },
        { id: 12, inPlay: false, img: obj13 },
        { id: 13, inPlay: false, img: obj14 },
        { id: 14, inPlay: false, img: obj15 },
        { id: 15, inPlay: false, img: obj16 },
        { id: 16, inPlay: false, img: obj17 },
        { id: 17, inPlay: false, img: obj18 },
        { id: 18, inPlay: false, img: obj19 },
        { id: 19, inPlay: false, img: obj20 },
        { id: 20, inPlay: false, img: obj21 },
        { id: 21, inPlay: false, img: obj22 },
        { id: 22, inPlay: false, img: obj23 },
        { id: 23, inPlay: false, img: obj24 },
        { id: 24, inPlay: false, img: obj25 },
        { id: 25, inPlay: false, img: obj26 },
        { id: 26, inPlay: false, img: obj27 },
        { id: 27, inPlay: false, img: obj28 },
        { id: 28, inPlay: false, img: obj29 },
        { id: 29, inPlay: false, img: obj30 },
        { id: 30, inPlay: false, img: obj31 },
        { id: 31, inPlay: false, img: obj32 }
      ],
      visible: false,
      width: this.props.width,
      zIndex: 2
    };

    this.hideLumpWorld = this.hideLumpWorld.bind(this);
    this.handleLumpWorldClick = this.handleLumpWorldClick.bind(this);
    this.toggleLumpWorld = this.toggleLumpWorld.bind(this);
    this.toggleDetails = this.toggleDetails.bind(this);
    this.sendToBack = this.sendToBack.bind(this);
  }

  componentDidMount() {
    PubSub.subscribe("toggleFrame", this.toggleLumpWorld);
    PubSub.subscribe("sendToBack", this.sendToBack);
  }

  componentWillUnmount() {
    PubSub.unsubscribeAll();
  }

  handleLumpWorldClick() {
    // Bring clicked frame to front
    this.setState({
      zIndex: 10
    });
    // Send other frames to back
    PubSub.publish("sendToBack", this.state.key);
  }

  hideLumpWorld() {
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

  toggleLumpWorld(msg, data) {
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

  handleButtonClick(e) {
    e.preventDefault();
    const key = e.currentTarget.getAttribute("data-button-id");
  }

  render() {
    const randomX = Math.random() * (300 - 50) + 50;
    const randomY = Math.random() * (200 - 50) + 50;

    const defaultPosition =
      this.state.width > 768 ? { x: randomX, y: randomY } : {};

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
        <div
          className={
            this.state.visible ? "LumpWorld" : "LumpWorld LumpWorld--hidden"
          }
          style={{
            zIndex: this.state.zIndex
          }}
        >
          <div className="LumpWorld__Upper Handle">
            <div className="LumpWorld__Upper--Left">
              <button
                aria-label="Show background 1"
                className="LumpWorld__BackgroundToggle Cursor--Pointer"
              >
                1
              </button>
              <button
                aria-label="Show background 2"
                className="LumpWorld__BackgroundToggle Cursor--Pointer"
              >
                2
              </button>
            </div>
            <div className="LumpWorld__Upper--Left">
              <button
                aria-label="Close Exhibit"
                className="LumpWorld__Close Cursor--Pointer"
                onClick={this.hideLumpWorld}
              >
                Close Lump World
              </button>
            </div>
          </div>

          <div className="LumpWorld__Main">
            <div className="LumpWorld__Main--Left">
              {this.state.objects.map((obj, index) => {
                return (
                  <Draggable
                    axis="both"
                    bounds="parent"
                    handle=".LumpWorld__Object"
                    position={null}
                    scale={1}
                  >
                    <div
                      className={
                        obj.inPlay
                          ? `LumpWorld__Object`
                          : `LumpWorld__Object Hidden`
                      }
                      key={index}
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
            </div>

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
                          src={obj.img}
                        ></img>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="LumpWorld__Lower Cursor--Pointer">
            <button
              aria-label="Show Details"
              className="LumpWorld__Details"
              onClick={this.toggleDetails}
            >
              ?
            </button>
          </div>
        </div>
      </Draggable>
    );
  }
}

export default LumpWorld;
