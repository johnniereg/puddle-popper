import React, { Component } from "react";
import Draggable from "react-draggable";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Draggable
        axis="both"
        handle=".Chat"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        scale={1}
      >
        <div className="Chat">
          <h1 className="Chat__Heading">Chat with the Bot</h1>
          <div className="Chat__Content"></div>
          <div className="Chat__Input">
            <input type="text"></input>
            <button>Send</button>
          </div>
        </div>
      </Draggable>
    );
  }
}

export default Chat;
