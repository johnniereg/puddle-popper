import React, { Component } from "react";
import Draggable from "react-draggable";
import PubSub from "pubsub-js";

class LumpWorld extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.data,
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
            <div className="LumpWorld__Main--Right"></div>
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
