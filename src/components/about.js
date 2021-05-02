import React, { Component } from "react";
import Draggable from "react-draggable";
import PubSub from "pubsub-js";

import bottom from "../images/about/bottom_bar.png";
import topLeft from "../images/about/top_bar_with_About.png";
import topRight from "../images/about/close_button_with_x.png";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.data,
      visible: false,
      width: this.props.width,
      zIndex: 0
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
      zIndex: 10
    });
    // Send other frames to back
    PubSub.publish("sendToBack", this.state.key);
  }

  hideAbout() {
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

  toggleAbout(msg, data) {
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
        onMouseDown={this.handleAboutClick}
        position={null}
        scale={1}
      >
        <div
          className={this.state.visible ? "About" : "About About--hidden"}
          style={{
            zIndex: this.state.zIndex
          }}
        >
          <div className="About__Upper">
            <div className="ImageWrapper Handle">
              <img alt="About" draggable="false" src={topLeft}></img>
            </div>
            <button
              aria-label="Close About"
              className="About__Close"
              onClick={this.hideAbout}
            >
              <img alt="Close" draggable="false" src={topRight}></img>
            </button>
          </div>
          <div className="About__Content">
            <h1>Welcome to the Puddle Popper Lounge! </h1>
            <p style={{ color: "#0000ff" }}>
              <strong>PUDDLE POPPER</strong> slips through realities towards our
              desires, passing between description, invention and idealisation
              to wiggle around truths. Puddle Popper merges forms to create a
              set-like world featuring invented beings, humanoids, tentacles and
              unreadable text. Appendages transform. Colour is revised. Portals
              open up, limbs are put part way through, and then all the way
              through, and new bodies are observed and created.
            </p>
            <p style={{ color: "#007000" }}>
              Consisting of soft sculptures, 3D animations, drawings, and other
              eggs, The Puddle Popper Lounge is meant to function both as an art
              work and as an interactive installation for the 2021 Vancouver
              Comic Arts Festival. Originally conceived as an in-person project
              in 2020, the Lounge transformed into an online space after that
              edition of VANCAF was cancelled.
            </p>
            <p style={{ color: "#f0295e" }}>
              Puddle Popper is an artist collective formed in 2015 in Vancouver
              by artists Sarah Davidson, Juli Majer, Sonja Ratkay and Mel
              Thibodeau. Through interactive sculpture installations, we propose
              alternate spaces in which bodies both human and non-human
              interact: themes of embodiment, comfort, queerness, and ecology
              are the basis for playful, collaborative world-building.
            </p>
            <p style={{ color: "#0000ff" }}>
              Puddle Popper enlisted the help of artist/designer Brennan Kelly,
              web developer Johnnie Regalado, and 3D artist Scott Lougheed to
              realize our ideas in the digital realm.
            </p>
            <p style={{ color: "#007000" }}>
              <a href="http://www.puddlepopper.com">puddlepopper.com</a>
            </p>
            <p style={{ color: "#f0295e" }}>
              <a href="https://www.instagram.com/puddlepopper/">
                @puddlepopper
              </a>
            </p>
            <p style={{ color: "#0000ff" }}>
              <strong>SARAH DAVIDSON</strong> works primarily between drawing
              and painting to create compositions in which shadowy, biomorphic
              figures and delicate, foliated fragments mingle. While she often
              draws directly from ‘nature’, her drawings diffract distinctions
              between embodied self and other through a queer ecological lens:
              critters and space collapse in upon one another, suggesting a
              permeable web. Both the eye and the mind work towards the
              known--animals, plants, brush marks, lines--but are caught in a
              space of undoing. In swampy, saturated tones, her works wonder:
              who’s looking at who, and how?
            </p>
            <p style={{ color: "#0000ff" }}>
              <a href="https://www.sarahdavidson.ca/">sarahdavidson.ca</a>
            </p>
            <p style={{ color: "#0000ff" }}>
              <a href="https://www.instagram.com/triceradee/">@triceradee</a>
            </p>
            <p style={{ color: "#007000" }}>
              <strong>JULI MAJER</strong> is an artist whose work explores
              heightened emotional and psychological states, imagined worlds,
              and peculiar modes of existence. Investigating fictional
              microcosms through drawing, sculpture, and comics, Majer weaves
              together visceral abstractions, somatic sensations, and
              inarticulate textures which emerge from relationships between her
              characters, symbols, objects, and environments.
            </p>
            <p style={{ color: "#007000" }}>
              <a href="http://julimajer.net/">julimajer.net</a>
            </p>
            <p style={{ color: "#007000" }}>
              <a href="https://www.instagram.com/julimajer">@julimajer</a>
            </p>
            <p style={{ color: "#f0295e" }}>
              <strong>SONJA RATKAY</strong> navigates unconscious and conscious
              drives through which she aims to process thoughts alongside
              viewers. Ratkay’s bodily art exists on the threshold of interior
              and exterior realms, and evokes liminal states of being, populated
              by known and unknown symbols. Her work spans many mediums from ink
              drawings, to multi-sensory elements--such as smell--that are known
              to trigger memories, and most recently textile works. Through
              repetition of motifs including abstracted bodies and
              text-as-image, she creates choreographed movements between body
              and mind, a pathway for feelings and thoughts to travel.
            </p>
            <p style={{ color: "#f0295e" }}>
              <a href="https://sonjaratkay.com/">sonjaratkay.com</a>
            </p>
            <p style={{ color: "#f0295e" }}>
              <a href="https://www.instagram.com/destructiveapple/">
                @destructiveapple
              </a>
            </p>
            <p style={{ color: "#0000ff" }}>
              Through tactile sculptures meant to be both observed and
              interacted with, <strong>MEL THIBODEAU</strong>’s work squirms
              around the question ‘what is a body?’ Their vocabulary of soft
              forms is often bound by colourful ropes, grommets, and plush
              chains. Feelings of nostalgic comfort and the uncanny are fostered
              by a combination of toylike textures and half-recognizable body
              parts, eluding exact description and hovering somewhere between
              person and thing. These partial and abstracted forms unsettle
              gender, wink at desire, and ponder fleshy realities both familiar
              and alien.
            </p>
            <p style={{ color: "#0000ff" }}>
              <a href="https://melthibodeau.com">melthibodeau.com</a>
            </p>
            <p style={{ color: "#0000ff" }}>
              <a href="https://www.instagram.com/armpitfreak">@armpitfreak</a>
            </p>
          </div>
          <div className="About__Lower Handle">
            <img alt="" draggable="false" src={bottom}></img>
          </div>
        </div>
      </Draggable>
    );
  }
}

export default About;
