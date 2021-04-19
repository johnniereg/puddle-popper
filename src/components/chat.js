import React, { Component } from "react";
import Draggable from "react-draggable";
import PubSub from "pubsub-js";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.botName = "Plintor Drax";

    this.state = {
      ...this.props.data,
      botReplying: false,
      userName: "Lounge Visitor",
      textToSubmit: "",
      chatLog: [{ user: this.botName, text: `Hello, I am ${this.botName}` }],
      visible: false,
      zIndex: 0,
    };

    this.handleChatClick = this.handleChatClick.bind(this);
    this.toggleChat = this.toggleChat.bind(this);
    this.hideChat = this.hideChat.bind(this);
    this.sendToBack = this.sendToBack.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleTextInputChange = this.handleTextInputChange.bind(this);
    this.messagesEndRef = React.createRef();
  }

  componentDidMount() {
    this.scrollToBottom();
    PubSub.subscribe("toggleFrame", this.toggleChat);
    PubSub.subscribe("sendToBack", this.sendToBack);
  }

  componentWillUnmount() {
    PubSub.unsubscribeAll();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  onSubmit(e) {
    e.preventDefault();
    if (this.state.textToSubmit === "") {
      return;
    }
    const logEntry = {
      user: this.state.userName,
      text: this.state.textToSubmit,
    };
    this.setState((prevState) => ({
      chatLog: [...prevState.chatLog, logEntry],
      textToSubmit: "",
    }));
    if (this.state.botReplying === false) {
      this.botReply();
    }
  }

  handleChatClick() {
    // Bring clicked frame to front
    this.setState({
      zIndex: 10,
    });
    // Send other frames to back
    PubSub.publish("sendToBack", this.state.key);
  }

  hideChat() {
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

  toggleChat(msg, data) {
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

  handleUsernameChange(e) {
    this.setState({ userName: e.target.value });
  }

  handleTextInputChange(e) {
    this.setState({ textToSubmit: e.target.value });
  }

  botReply() {
    const delayTime = Math.random() * (2000 - 750) + 750;
    const logEntry = {
      user: this.botName,
      text: `${delayTime}: This is the next text for PD`,
    };
    this.setState({ botReplying: true });
    setTimeout(() => {
      this.setState((prevState) => ({
        chatLog: [...prevState.chatLog, logEntry],
        botReplying: false,
      }));
    }, delayTime);
  }

  render() {
    const randomX = Math.random() * (500 - 50) + 50;
    const randomY = Math.random() * (500 - 50) + 50;

    return (
      <Draggable
        axis="both"
        handle=".Chat"
        defaultPosition={{ x: randomX, y: randomY }}
        onMouseDown={this.handleChatClick}
        position={null}
        scale={1}
      >
        <form
          className={this.state.visible ? "Chat" : "Chat Chat--hidden"}
          onSubmit={this.onSubmit}
          style={{
            zIndex: this.state.zIndex,
          }}
        >
          <h1 className="Chat__Heading">Chat with the Bot</h1>
          <button onClick={this.hideChat}>Close</button>
          <div className="Chat__UserName">
            <input
              name="Username"
              type="text"
              onChange={this.handleUsernameChange}
              value={this.state.userName}
            ></input>
            <label htmlFor="Username">Name</label>
          </div>
          <div className="Chat__Content">
            {this.state.chatLog.map((entry, index) => {
              return (
                <p key={index}>
                  {entry.user}: {entry.text}
                </p>
              );
            })}
            <div ref={this.messagesEndRef}></div>
          </div>
          <div className="Chat__Input">
            <input
              type="text"
              onChange={this.handleTextInputChange}
              value={this.state.textToSubmit}
            ></input>
            <button type="submit">Send</button>
          </div>
        </form>
      </Draggable>
    );
  }
}

export default Chat;
