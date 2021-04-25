import React, { Component } from "react";

import Header from "../components/header";
import Main from "../components/main";
import Navigation from "../components/navigation";

import background from "../images/background.jpg";

import eyeball from "../images/icons/eye.png";
import butterfly from "../images/icons/butterfly2x.png";
import burst from "../images/icons/burst2x.png";
import ribbon from "../images/icons/ribbon2x.png";
import egg from "../images/icons/egg.png";
import spider from "../images/icons/spider2x.png";
import spiral from "../images/icons/spiral2x.png";
import heartFlower from "../images/icons/heartflower2x.png";
import gourd from "../images/icons/gourd2x.png";
import shell from "../images/icons/shell2x.png";
import web from "../images/icons/web2x.png";
import face from "../images/icons/face2x.png";
import angelWing from "../images/icons/angelwing2x.png";
import about from "../images/icons/about2x.png";
import chat from "../images/icons/chatbot2x.png";

class App extends Component {
  constructor(props) {
    super(props);

    this.data = this.props.data;
    this.exhibitImages = this.props.exhibitImages;

    this.state = {
      navItems: {
        0: {
          key: 0,
          icon: eyeball,
          id: "eyeball",
          images: this.exhibitImages["eyeball"],
          title: "Eyeball",
        },
        1: {
          key: 1,
          icon: butterfly,
          id: "butterfly",
          images: this.exhibitImages["butterfly"],
          title: "Butterfly",
        },
        2: {
          key: 2,
          icon: burst,
          id: "burst",
          images: this.exhibitImages["burst"],
          title: "Burst",
        },
        3: {
          key: 3,
          icon: ribbon,
          id: "ribbon",
          images: this.exhibitImages["ribbon"],
          title: "Ribbon",
        },
        4: {
          key: 4,
          icon: egg,
          id: "egg",
          images: this.exhibitImages["egg"],
          title: "Egg",
        },
        5: {
          key: 5,
          icon: spider,
          id: "spider",
          images: this.exhibitImages["spider"],
          title: "Spider",
        },
        6: {
          key: 6,
          icon: spiral,
          id: "spiral",
          images: this.exhibitImages["spiral"],
          title: "Spiral",
        },
        7: {
          key: 7,
          icon: heartFlower,
          id: "heartFlower",
          images: this.exhibitImages["heartFlower"],
          title: "Heart Flower",
        },
        8: {
          key: 8,
          icon: gourd,
          id: "gourd",
          images: this.exhibitImages["gourd"],
          title: "Gourd",
        },
        9: {
          key: 9,
          icon: shell,
          id: "shell",
          images: this.exhibitImages["shell"],
          title: "Shell",
        },
        10: {
          key: 10,
          icon: web,
          id: "web",
          images: this.exhibitImages["web"],
          title: "Web",
        },
        11: {
          key: 11,
          icon: face,
          id: "face",
          images: this.exhibitImages["face"],
          title: "Face",
        },
        12: {
          key: 12,
          icon: angelWing,
          id: "angelWing",
          images: this.exhibitImages["angelWing"],
          title: "Angel Wing",
        },
        13: {
          key: 13,
          icon: about,
          id: "about",
          images: this.exhibitImages["about"],
          title: "About",
        },
        14: {
          key: 14,
          icon: chat,
          id: "chat",
          images: this.exhibitImages["chat"],
          title: "Chat Bot",
        },
      },
    };
  }

  render() {
    return (
      <div
        className="Page"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <Header />
        <Main data={this.state.navItems} exhibits={this.props.exhibitImages} />
        <Navigation data={this.state.navItems} />
      </div>
    );
  }
}

export default App;
