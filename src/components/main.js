import React, { Component } from "react";

import Frame from "../components/frame";
import LumpWorld from "../components/lumpworld";
import About from "../components/about";
import Chat from "../components/chat";
import Dewdrops from "../components/dewdrops";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      easterEggs: this.props.exhibits.easterEggs.edges || [],
    };
  }

  generateEasterEggFrameData(easterEgg, index) {
    let fileName = easterEgg.node.base;
    fileName = fileName.replace(".jpg", "").replace(".mp4", "");

    const easterEggData = {
      juli_eastereggy: {
        description: {
          artist: "Juli Majer",
          materialsFormatYear: "coloured pencil on vellum, 6.5” x 9.25”, 2021",
          text: "A coloured pencil drawing displaying alien mechanisms, bubbling forms and flower-like creatures emerging from a lotus root.",
          title: "Untitled",
        },
        orientation: "portrait",
      },
      mel_easteregg1: {
        description: {
          artist: "Mel Thibodeau",
          materialsFormatYear:
            "mixed fabrics and polyester stuffing, 94” x 48” (with arms extended), 2021",
          text: "Video of the artist, Mel Thibodeau, dancing while wearing their sculpture made of multi textured, and variously coloured fake furs. While worn standing up, the sculpture extends from their head to their knees.",
          title: "Friend",
        },
        orientation: "portrait",
      },
      mel_juli_easteregg1: {
        description: {
          artist: "Mel Thibodeau & Juli Majer",
          materialsFormatYear: "behind the scenes photograph, 2021",
          text: "Image of a pink and olive coloured plush creature in bondage, held in front of a multi-textured, oversized seat cushion made of soft fleece and fake fur.",
          title: "",
        },
        orientation: "portrait",
      },
      PP_EasterEgg_Quote: {
        orientation: "portrait",
      },
      sarah_easteregg1: {
        description: {
          artist: "Sarah Davidson",
          materialsFormatYear:
            "watercolour, ink and pencil crayon on paper, 15.75 x 12 in, 2021",
          text: "A drawing made up of dense, cross hatched line work depicts lily pads and eyeballs woven together to create a dense field of intersecting elements. Two frog eyes appear to regard the viewer. The muted colour palette of green, brown and blue creates a murky swamp of elements. Elements intersect to create movement and the appearance of floating.",
          title: "Thaw",
        },
        orientation: "landscape",
      },
      sarah_easteregg2: {
        description: {
          artist: "Sarah Davidson",
          materialsFormatYear:
            "watercolour, ink, and pencil crayon on paper, 7.5 x 11.5 in, 2021",
          text: "A drawing made up of dense, cross hatched line work depicts oak leaves, grasses and eyeballs woven together to create a dense field of intersecting elements. Two mismatched eyeballs are centered, one frog eye and one abstracted human eye, appear to regard the viewer. The muted colour palette of red, blue, black and yellow creates a murky swamp of elements. Elements intersect to create movement and the appearance of floating.",
          title: "Leaf Tender",
        },
        orientation: "portrait",
      },
      sonja_easteregg1: {
        description: {
          artist: "Sonja Ratkay",
          materialsFormatYear: "Detail of the making of tapestry",
          text: "A closeup of layered organza fabric in a moiré pattern with flower-headed pins tacked to fabric  in a scattered arrangement.",
          title: "",
        },
        orientation: "portrait",
      },
      sonja_easteregg2: {
        description: {
          artist: "Sonja Ratkay",
          materialsFormatYear: "Detail of the making of tapestry",
          text: "A closeup of layered organza fabric in a moiré pattern with flower-headed pins tacked to fabric  in a scattered arrangement.",
          title: "",
        },
        orientation: "portrait",
      },
    };

    const key = 15 + index;

    let data = {
      key: key,
      id: `easterEgg${index + 1}`,
      images: {
        edges: [easterEgg],
      },
      description: easterEggData[fileName].description,
      orientation: easterEggData[fileName].orientation,
    };

    return data;
  }

  render() {
    const easterEggFrames = this.state.easterEggs.map((easterEgg, index) => {
      const frameData = this.generateEasterEggFrameData(easterEgg, index);
      return (
        <Frame
          key={frameData.key}
          data={frameData}
          toggleFrame={this.props.toggleFrame}
          width={this.props.width}
        />
      );
    });

    return (
      <main className="Frame_Wrapper">
        <Dewdrops
          items={this.state.easterEggs}
          toggleFrame={this.props.toggleFrame}
          width={this.props.width}
        />
        <Frame
          key={0}
          data={this.props.data[0]}
          toggleFrame={this.props.toggleFrame}
          width={this.props.width}
        />
        <Frame
          key={1}
          data={this.props.data[1]}
          toggleFrame={this.props.toggleFrame}
          width={this.props.width}
        />
        <Frame
          key={2}
          data={this.props.data[2]}
          toggleFrame={this.props.toggleFrame}
          width={this.props.width}
        />
        <Frame
          key={3}
          data={this.props.data[3]}
          toggleFrame={this.props.toggleFrame}
          width={this.props.width}
        />
        <Frame
          key={4}
          data={this.props.data[4]}
          toggleFrame={this.props.toggleFrame}
          width={this.props.width}
        />
        <Frame
          key={5}
          data={this.props.data[5]}
          toggleFrame={this.props.toggleFrame}
          width={this.props.width}
        />
        <Frame
          key={6}
          data={this.props.data[6]}
          toggleFrame={this.props.toggleFrame}
          width={this.props.width}
        />
        <Frame
          key={7}
          data={this.props.data[7]}
          toggleFrame={this.props.toggleFrame}
          width={this.props.width}
        />
        <Frame
          key={8}
          data={this.props.data[8]}
          toggleFrame={this.props.toggleFrame}
          width={this.props.width}
        />
        <Frame
          key={9}
          data={this.props.data[9]}
          toggleFrame={this.props.toggleFrame}
          width={this.props.width}
        />
        <Frame
          key={10}
          data={this.props.data[10]}
          toggleFrame={this.props.toggleFrame}
          width={this.props.width}
        />
        <Frame
          key={11}
          data={this.props.data[11]}
          toggleFrame={this.props.toggleFrame}
          width={this.props.width}
        />
        <LumpWorld
          key={12}
          data={this.props.data[12]}
          toggleFrame={this.props.toggleFrame}
          width={this.props.width}
        />
        <About
          key={13}
          data={this.props.data[13]}
          toggleFrame={this.props.toggleFrame}
          width={this.props.width}
        />
        <Chat
          key={14}
          data={this.props.data[14]}
          toggleFrame={this.props.toggleFrame}
          width={this.props.width}
        />
        {easterEggFrames}
      </main>
    );
  }
}

export default Main;
