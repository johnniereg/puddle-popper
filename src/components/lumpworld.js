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
        obj1,
        obj2,
        obj3,
        obj4,
        obj5,
        obj6,
        obj7,
        obj8,
        obj9,
        obj10,
        obj11,
        obj12,
        obj13,
        obj14,
        obj15,
        obj16,
        obj17,
        obj18,
        obj19,
        obj20,
        obj21,
        obj22,
        obj23,
        obj24,
        obj25,
        obj26,
        obj27,
        obj28,
        obj29,
        obj30,
        obj31,
        obj32
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

  render() {
    const randomX = Math.random() * (300 - 50) + 50;
    const randomY = Math.random() * (200 - 50) + 50;

    const defaultPosition =
      this.state.width > 768 ? { x: randomX, y: randomY } : {};

    return (
      <Draggable
        axis="both"
        bounds="parent"
        handle=".LumpWorld"
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
          <div className="LumpWorld__Upper">
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
            <div className="LumpWorld__Main--Left"></div>
            <div className="LumpWorld__Main--Right">
              <ul className="LumpWorld__Icons">
                {this.state.objects.map((obj, index) => {
                  return (
                    <li className="LumpWorld__Icon" key={index}>
                      <img src={obj}></img>
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
