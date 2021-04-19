import React, { Component } from "react";
import Draggable from "react-draggable";
import PubSub from "pubsub-js";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.data,
      visible: false,
      zIndex: 0,
    };

    this.hideAbout = this.hideAbout.bind(this);
    this.handleAboutClick = this.handleAboutClick.bind(this);
    this.toggleAbout = this.toggleAbout.bind(this);
    this.sendToBack = this.sendToBack.bind(this);
  }

  componentDidMount() {
    PubSub.subscribe("toggleFrame", this.toggleAbout);
    PubSub.subscribe("sendToBack", this.sendToBack);
  }

  componentWillUnmount() {
    PubSub.unsubscribeAll();
  }

  handleAboutClick() {
    // Bring clicked frame to front
    this.setState({
      zIndex: 10,
    });
    // Send other frames to back
    PubSub.publish("sendToBack", this.state.key);
  }

  hideAbout() {
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

  toggleAbout(msg, data) {
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

  render() {
    const randomX = Math.random() * (500 - 50) + 50;
    const randomY = Math.random() * (500 - 50) + 50;

    return (
      <Draggable
        axis="both"
        handle=".About"
        defaultPosition={{ x: randomX, y: randomY }}
        onMouseDown={this.handleAboutClick}
        position={null}
        scale={1}
      >
        <div
          className={this.state.visible ? "About" : "About About--hidden"}
          style={{
            zIndex: this.state.zIndex,
          }}
        >
          <h1>About Puddle Popper</h1>
          <button onClick={this.hideAbout}>Close</button>
        </div>
      </Draggable>
    );
  }
}

export default About;
