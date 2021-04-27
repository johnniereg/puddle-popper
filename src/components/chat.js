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
      chatLog: [{ user: this.botName, text: `Hello, I am ${this.botName}` }],
      replyOptions: [
        {
          quote:
            "I have four long arms to wrap around you, and a colourful, soft shell for protection and warmth.",
        },
        {
          quote: "They open their eyes at night, underground.",
        },
        {
          quote: `“because of the Moon;<br>because it’s in my nature;<br>because it’s against nature”`,
        },
        {
          quote: "Go lay an egg!",
        },
        {
          quote:
            "Fuzzy, soft, pink, stinky, strong, squishy, warm, wet, covered in slime…",
        },
        {
          quote: "My Feelings for the sun are complex. Beyond me.",
        },
        {
          quote: `I thought long and hard “how can I purify myself of the sun’s glow.”<br>Then I thought so simply … I will bury myself in the earth!`,
        },
        {
          quote: `The future is already full; It is much older and larger than our present; and we are the aliens in it.`,
        },
        {
          quote: `There is no end<br>To what a living world<br>Will demand of you.`,
        },
        {
          quote: `We are Earthseed<br>The life that perceives itself<br>Changing.`,
        },
        {
          quote:
            "The name is the guest of the substance, and the world is a verb.",
        },
        {
          quote: "Germs, cells, blossoms, seeds.",
        },
        {
          quote:
            "Relationship among all things appears to be complex and reciprocal.",
        },
        {
          quote: "Tell me more.",
        },
        {
          quote:
            "Family is a system of learned behaviours, not only blood, gut and genes.",
        },
        {
          quote:
            "Soliloquy faucet posture lily vein milk pooling lightly under beams follow gestures barren field wind blowing dust gathering in crevices",
        },
        {
          quote:
            "Germinating relic lounging together in sliding spaces rounded out cave bulbous pebbles scattered under invisible water pulsating warmth and glowing carnelian",
        },
        {
          quote:
            "Tragic remnant sounding out the memories lightly remembered slightly open gateway saturated threads flowing through fluids drip pools of fibres",
        },
        {
          quote:
            "Overgrown vines tighten around the body of another slithering slowly around follicles hairs poking through pulsing pressure colour changing appendages",
        },
        {
          quote:
            "Mood launch circling backwards into puff cloud ice crystals dust skin fibres fall warm and melt to dewy water pebbles ",
        },
      ],
      textToSubmit: "",
      userName: "Lounge Visitor",
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
      text: quote,
    };

    options.splice(optionToUse, 1);

    this.setState({
      replyOptions: options,
    });

    return logEntry;
  }

  botReply() {
    const logEntry = this.generateReply();
    const delayTime = Math.random() * (1250 - 750) + 750;

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
                  <span>{entry.user}: </span>
                  <span>{entry.text}</span>
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
            <button onClick={this.hideChat}>Close</button>
          </div>
        </form>
      </Draggable>
    );
  }
}

export default Chat;
