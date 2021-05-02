import React, { Component } from "react";
import Draggable from "react-draggable";
import PubSub from "pubsub-js";

import topLeft from "../images/chat/top_bar_solid.png";
import topRight from "../images/chat/close_button_with_X.png";
import bottomLeft from "../images/chat/bottom_bar_solid.png";
import bottomRight from "../images/chat/send_button_with_text.png";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.botName = "Plintor Drax";

    this.state = {
      ...this.props.data,
      botReplying: false,
      chatLog: [{ user: this.botName, text: `Hello, I am ${this.botName}` }],
      replyOptions: [
        {
          quote:
            "I have four long arms to wrap around you, and a colourful, soft shell for protection and warmth."
        },
        {
          quote: "They open their eyes at night, underground."
        },
        {
          quote: `“because of the Moon; / because it’s in my nature; / because it’s against nature”`
        },
        {
          quote: "Go lay an egg!"
        },
        {
          quote:
            "Fuzzy, soft, pink, stinky, strong, squishy, warm, wet, covered in slime…"
        },
        {
          quote: "My Feelings for the sun are complex. Beyond me."
        },
        {
          quote: `I thought long and hard “how can I purify myself of the sun’s glow.” / Then I thought so simply … I will bury myself in the earth!`
        },
        {
          quote: `The future is already full; It is much older and larger than our present; and we are the aliens in it.`
        },
        {
          quote: `There is no end / To what a living world / Will demand of you.`
        },
        {
          quote: `We are Earthseed / The life that perceives itself / Changing.`
        },
        {
          quote:
            "The name is the guest of the substance, and the world is a verb."
        },
        {
          quote: "Germs, cells, blossoms, seeds."
        },
        {
          quote:
            "Relationship among all things appears to be complex and reciprocal."
        },
        {
          quote: "Tell me more."
        },
        {
          quote:
            "Family is a system of learned behaviours, not only blood, gut and genes."
        },
        {
          quote:
            "Soliloquy faucet posture lily vein milk pooling lightly under beams follow gestures barren field wind blowing dust gathering in crevices"
        },
        {
          quote:
            "Germinating relic lounging together in sliding spaces rounded out cave bulbous pebbles scattered under invisible water pulsating warmth and glowing carnelian"
        },
        {
          quote:
            "Tragic remnant sounding out the memories lightly remembered slightly open gateway saturated threads flowing through fluids drip pools of fibres"
        },
        {
          quote:
            "Overgrown vines tighten around the body of another slithering slowly around follicles hairs poking through pulsing pressure colour changing appendages"
        },
        {
          quote:
            "Mood launch circling backwards into puff cloud ice crystals dust skin fibres fall warm and melt to dewy water pebbles "
        }
      ],
      textToSubmit: "",
      userName: "Lounge Visitor",
      visible: false,
      width: this.props.width,
      zIndex: 0
    };

    this.handleChatClick = this.handleChatClick.bind(this);
    this.toggleChat = this.toggleChat.bind(this);
    this.hideChat = this.hideChat.bind(this);
    this.sendToBack = this.sendToBack.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
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
      text: this.state.textToSubmit
    };
    this.setState(prevState => ({
      chatLog: [...prevState.chatLog, logEntry],
      textToSubmit: ""
    }));
    if (this.state.botReplying === false) {
      this.botReply();
    }
  }

  handleChatClick() {
    // Bring clicked frame to front
    this.setState({
      zIndex: 10
    });
    // Send other frames to back
    PubSub.publish("sendToBack", this.state.key);
  }

  hideChat() {
    this.setState({
      visible: false,
      zIndex: 0
    });
  }

  sendToBack(msg, data) {
    if (data !== this.state.key) {
      this.setState({
        zIndex: 0
      });
    }
  }

  toggleChat(msg, data) {
    if (data === this.state.key) {
      this.setState(prevState => ({
        visible: !prevState.visible,
        zIndex: 10
      }));
    } else {
      this.setState({
        zIndex: 0
      });
    }
  }

  handleUsernameChange(e) {
    this.setState({ userName: e.target.value });
  }

  handleTextInputChange(e) {
    this.setState({ textToSubmit: e.target.value });
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.onSubmit(e);
    }
  }

  generateReply() {
    let quote = "...";
    const options = this.state.replyOptions;
    const numberOfOptions = options.length;
    const optionToUse = Math.floor(Math.random() * numberOfOptions);

    if (numberOfOptions) {
      quote = options[optionToUse].quote;
    }

    const logEntry = {
      user: this.botName,
      text: quote
    };

    options.splice(optionToUse, 1);

    this.setState({
      replyOptions: options
    });

    return logEntry;
  }

  botReply() {
    const logEntry = this.generateReply();
    const delayTime = Math.random() * (1250 - 750) + 750;

    this.setState({ botReplying: true });
    setTimeout(() => {
      this.setState(prevState => ({
        chatLog: [...prevState.chatLog, logEntry],
        botReplying: false
      }));
    }, delayTime);
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
        onMouseDown={this.handleChatClick}
        position={null}
        scale={1}
      >
        <form
          className={this.state.visible ? "Chat" : "Chat Chat--hidden"}
          onSubmit={this.onSubmit}
          style={{
            zIndex: this.state.zIndex
          }}
        >
          <div className="Chat__Upper">
            <div className="Chat__UserWrapper">
              <img
                alt=""
                className="Handle"
                draggable="false"
                src={topLeft}
              ></img>
              <input
                aria-label="Username"
                className="Chat__Input Chat__Input--User"
                name="Username"
                onChange={this.handleUsernameChange}
                placeholder="Username"
                type="text"
                value={this.state.userName}
              ></input>
            </div>
            <button
              aria-label="Close Chat"
              className="Chat__Close Cursor--Pointer"
              onClick={this.hideChat}
            >
              <img alt="Close Chat" draggable="false" src={topRight}></img>
            </button>
          </div>
          <div className="Chat__Content Cursor--Text">
            {this.state.chatLog.map((entry, index) => {
              return (
                <p
                  key={index}
                  className={
                    entry.user === this.botName
                      ? "Chat__Entry Chat__Entry--Bot"
                      : "Chat__Entry Chat__Entry--User"
                  }
                >
                  <span className="Entry__User">
                    {"<"}
                    {entry.user}
                    {">"}{" "}
                  </span>
                  <span className="Entry__Text">{entry.text}</span>
                </p>
              );
            })}
            <div ref={this.messagesEndRef}></div>
          </div>
          <div className="Chat__Lower">
            <div className="Chat__InputWrapper">
              <img
                alt=""
                className="Handle"
                draggable="false"
                src={bottomLeft}
              ></img>
              <input
                className="Chat__Input Chat__Input--Text"
                type="text"
                onChange={this.handleTextInputChange}
                onKeyPress={this.handleKeyPress}
                value={this.state.textToSubmit}
              ></input>
            </div>
            <button
              aria-label="Submit Chat Text"
              className="Chat__Submit Cursor--Pointer"
              type="submit"
            >
              <img
                alt="Submit Chat Text"
                draggable="false"
                src={bottomRight}
              ></img>
            </button>
          </div>
        </form>
      </Draggable>
    );
  }
}

export default Chat;
