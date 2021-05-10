import React, { Component } from "react";
import Draggable from "react-draggable";
import PubSub from "pubsub-js";

import bottom from "../images/about/bottom_bar.png";
import topLeft from "../images/about/top_bar_with_About.png";
import topRight from "../images/about/close_button_with_x.png";

import tentacle from "../images/about/tentaclecrop.jpg";
import canadaCouncil from "../images/about/CCA_RGB_black_e.png";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.data,
      visible: false,
      width: this.props.width,
      zIndex: 2
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

  toggleAbout(msg, data) {
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

  render() {
    const randomX = Math.random() * (200 - 20) + 20;
    const randomY = Math.random() * (100 - 20) + 20;

    const defaultPosition =
      this.state.width > 768 ? { x: randomX, y: randomY } : { x: 10, y: 10 };

    const aboutEl = (
      <div
        className={this.state.visible ? "About" : "About About--hidden"}
        style={{
          zIndex: this.state.zIndex
        }}
      >
        <div className="About__Upper">
          <div className="ImageWrapper Handle Cursor--Move">
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
        <div className="About__ContentWrapper">
          <div className="About__Content">
            <h1>Welcome to the Puddle Popper Lounge! </h1>

            <p style={{ color: "#0000ff" }}>
              <strong>
                <a
                  target="_blank"
                  href="http://www.puddlepopper.com"
                  rel="noreferrer"
                >
                  PUDDLE POPPER
                </a>
              </strong>{" "}
              slips through realities towards our desires, passing between
              description, invention and idealisation to wiggle around truths.
              Puddle Popper merges forms to create a set-like world featuring
              invented beings, humanoids, tentacles and unreadable text.
              Appendages transform. Colour is revised. Portals open up, limbs
              are put part way through, and then all the way through, and new
              bodies are observed and created.
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

            <div style={{ marginBottom: "17px", width: "100%" }}>
              <img
                style={{ height: "auto", width: "100%" }}
                alt="Scarves hanging like tentacles"
                src={tentacle}
              ></img>
            </div>

            <p style={{ color: "#0000ff" }}>
              <strong>
                <a
                  target="_blank"
                  href="https://www.sarahdavidson.ca/"
                  rel="noreferrer"
                >
                  SARAH DAVIDSON
                </a>
              </strong>{" "}
              works primarily between drawing and painting to create
              compositions in which shadowy, biomorphic figures and delicate,
              foliated fragments mingle. While she often draws directly from
              ‘nature’, her drawings diffract distinctions between embodied self
              and other through a queer ecological lens: critters and space
              collapse in upon one another, suggesting a permeable web. Both the
              eye and the mind work towards the known--animals, plants, brush
              marks, lines--but are caught in a space of undoing. In swampy,
              saturated tones, her works wonder: who’s looking at who, and how?
            </p>

            <p style={{ color: "#007000" }}>
              <strong>
                <a
                  target="_blank"
                  href="http://julimajer.net/"
                  rel="noreferrer"
                >
                  JULI MAJER
                </a>
              </strong>{" "}
              is an artist whose work explores heightened emotional and
              psychological states, imagined worlds, and peculiar modes of
              existence. Investigating fictional microcosms through drawing,
              sculpture, and comics, Majer weaves together visceral
              abstractions, somatic sensations, and inarticulate textures which
              emerge from relationships between her characters, symbols,
              objects, and environments.
            </p>

            <p style={{ color: "#f0295e" }}>
              <strong>
                <a
                  target="_blank"
                  href="https://sonjaratkay.com/"
                  rel="noreferrer"
                >
                  SONJA RATKAY
                </a>
              </strong>{" "}
              navigates unconscious and conscious drives through which she aims
              to process thoughts alongside viewers. Ratkay’s bodily art exists
              on the threshold of interior and exterior realms, and evokes
              liminal states of being, populated by known and unknown symbols.
              Her work spans many mediums from ink drawings, to multi-sensory
              elements--such as smell--that are known to trigger memories, and
              most recently textile works. Through repetition of motifs
              including abstracted bodies and text-as-image, she creates
              choreographed movements between body and mind, a pathway for
              feelings and thoughts to travel.
            </p>

            <p style={{ color: "#0000ff" }}>
              Through tactile sculptures meant to be both observed and
              interacted with,{" "}
              <strong>
                <a
                  target="_blank"
                  href="https://melthibodeau.com"
                  rel="noreferrer"
                >
                  MEL THIBODEAU
                </a>
              </strong>
              ’s work squirms around the question ‘what is a body?’ Their
              vocabulary of soft forms is often bound by colourful ropes,
              grommets, and plush chains. Feelings of nostalgic comfort and the
              uncanny are fostered by a combination of toylike textures and
              half-recognizable body parts, eluding exact description and
              hovering somewhere between person and thing. These partial and
              abstracted forms unsettle gender, wink at desire, and ponder
              fleshy realities both familiar and alien.
            </p>

            <p style={{ color: "#007000" }}>
              We acknowledge the support of the Canada Council for the Arts.
            </p>
            <div
              style={{
                display: "flex",
                width: "100%"
              }}
            >
              <img
                alt="Canada Council Logo"
                src={canadaCouncil}
                style={{ height: "auto", width: "50%" }}
              ></img>
            </div>
          </div>
        </div>

        <div className="About__Lower Handle Cursor--Move">
          <img alt="" draggable="false" src={bottom}></img>
        </div>
      </div>
    );

    if (this.state.width > 768) {
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
          {aboutEl}
        </Draggable>
      );
    } else {
      return <div>{aboutEl}</div>;
    }
  }
}

export default About;
