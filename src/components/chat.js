import React, { Component } from "react";
import Draggable from "react-draggable";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Lounge Visitor",
      textToSubmit: "",
      chatLog: [{ user: "Plintor Drax", text: "Hello" }],
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleTextInputChange = this.handleTextInputChange.bind(this);
    this.messagesEndRef = React.createRef();
  }

  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  onSubmit(e) {
    e.preventDefault();
    const logEntry = {
      user: this.state.userName,
      text: this.state.textToSubmit,
    };
    this.setState((prevState) => ({
      chatLog: [...prevState.chatLog, logEntry],
      textToSubmit: "",
    }));
    this.botReply();
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
      user: "Plintor Drax",
      text: `${delayTime}: This is the next text for PD`,
    };
    setTimeout(() => {
      this.setState((prevState) => ({
        chatLog: [...prevState.chatLog, logEntry],
      }));
    }, delayTime);
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
        <form className="Chat" onSubmit={this.onSubmit}>
          <h1 className="Chat__Heading">Chat with the Bot</h1>
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
              console.log(entry);
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
