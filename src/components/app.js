import React, { Component } from "react";
import { Helmet } from "react-helmet";

import Main from "../components/main";
import Navigation from "../components/navigation";

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
      width: this.props.width,
      navItems: {
        0: {
          key: 0,
          icon: eyeball,
          id: "eyeball",
          images: this.exhibitImages["eyeball"],
          iconTitle: "Eyeball",
          description: {
            artist: "Sarah Davidson",
            materialsFormatYear:
              "watercolour, ink and pencil crayon on paper, 31 x 48.5 in, 2021",
            text:
              "A drawing made up of dense, cross hatched line work depicts lily pads, butterflies and eyeballs woven together to create a dense field of intersecting elements. The muted colour palette of red, blue, black and yellow creates a murky swamp of elements. Elements intersect to create movement and the appearance of floating.",
            title: "Camouflage as Organic Defence"
          },
          orientation: "landscape"
        },
        1: {
          key: 1,
          icon: butterfly,
          id: "butterfly",
          images: this.exhibitImages["butterfly"],
          iconTitle: "Butterfly",
          description: {
            artist: "Sonja Ratkay",
            materialsFormatYear:
              "Organza, wool roving, thread and metal dowels, 55 x 100 in, 2021",
            photoCredit: "Photography by Edwin Isford",
            text:
              "A large pink, sheer, layered, and shimmery tapestry is shown installed hanging from the ceiling in a room. The tapestry depicts an abstracted body silhouette, and a vein-like shape inside of this form is stuffed with wool roving elements, which make it puffy. The tapestry, which is taller than a person, is meant to function as a room divider or space definer for the lounge.",
            title: "Salad in the Bloodstream"
          },
          orientation: "portrait"
        },
        2: {
          key: 2,
          icon: burst,
          id: "burst",
          images: this.exhibitImages["burst"],
          iconTitle: "Burst",
          description: {
            artist: "Mel Thibodeau",
            materialsFormatYear: "mixed fabrics and foam, 36”x36”x6”, 2021",
            text:
              "Photos of a large circular pillow sculpture that functions as a seat. The seat is constructed from foam and upholstered with multi-textured and variously-coloured fake furs, as well as a holographic fabric. The image created by the fabrics resembles a large yellow egg in a colourful nest. It is stuffed so that the elements are raised and puffy.",
            title: "Nest"
          },
          orientation: "landscape"
        },
        3: {
          key: 3,
          icon: ribbon,
          id: "ribbon",
          images: this.exhibitImages["ribbon"],
          iconTitle: "Ribbon",
          description: {
            artist: "Juli Majer",
            materialsFormatYear:
              "mixed fabrics and polyester stuffing, 2’x2’x4”, 2021",
            text:
              "Photos of a multi-textured, oversized seat cushion made of soft fleece and fake fur. The cushion is quilted in a way which resembles the texture of a brain.",
            title: "Untitled"
          },
          orientation: "landscape"
        },
        4: {
          key: 4,
          icon: egg,
          id: "egg",
          images: this.exhibitImages["egg"],
          iconTitle: "Egg",
          description: {
            artist: "Sonja Ratkay",
            materialsFormatYear:
              "Ink drawing on paper, 9 x 12 in, 2021 and Soft Shell, Ink drawing on paper, in, 2021",
            photoCredit: "Photography by Edwin Isford",
            text:
              "Set of two black ink drawings on white paper, of identical dimensions. The first drawing depicts an abstracted squatting figure. Hand drawn text wraps through the figure’s legs and reads: “MOON LIT PLEATS PETAL DENTED SLEET”. The second drawing depicts an abstracted creature. Amoeba-like organs show through the creature’s body.",
            title: "Squatting Intuitive"
          },
          orientation: "portrait"
        },
        5: {
          key: 5,
          icon: spider,
          id: "spider",
          images: this.exhibitImages["spider"],
          iconTitle: "Spider",
          description: {
            artist: "Sarah Davidson",
            materialsFormatYear: "animated gif, 2021",
            text:
              "Digital file of tangled bead maze toy, as often found in the kids section of waiting rooms. Instead of beads, human and frog eyeball elements move along wires. Base is woodgrain and wires are red, green, blue and yellow and extend from the base like spider legs",
            title: "Illusionism"
          },
          orientation: "landscape"
        },
        6: {
          key: 6,
          icon: spiral,
          id: "spiral",
          images: this.exhibitImages["spiral"],
          iconTitle: "Spiral",
          description: {
            artist: "Mel Thibodeau",
            materialsFormatYear:
              "mixed fabrics and polyester stuffing, 94” x 48”  (with arms extended), 2021",
            text:
              "Photos of the artist, Mel Thibodeau, demonstrating their wearable sculpture made of multi textured, and variously coloured fake furs. While worn standing up, the sculpture extends from their head to their knees. The work is shown functioning as a seat and a wrapped pillow: Mel is pictured wearing the sculpture as a seat, while arms wrap and tie around their torso.",
            title: "Friend"
          },
          orientation: "landscape"
        },
        7: {
          key: 7,
          icon: heartFlower,
          id: "heartFlower",
          images: this.exhibitImages["heartFlower"],
          iconTitle: "Heart Flower",
          description: {
            artist: "Sonja Ratkay",
            materialsFormatYear:
              "pencil crayon drawing on paper, 9 x 12 in, 2021",
            photoCredit: "Photography by Edwin Isford",
            text:
              "Pencil crayon drawing on white paper depicting an abstracted silhouette of a figure that appears to be part plant and part animal. The figure is coloured with a rainbow of colours blending together. Hand-drawn, stream-of-consciousness text wraps through their body and reads: “MERCURY DILUTED DEW DROP SLOW ORGANZA BURNT SIDEWALK LOZENGE LAVENDER IN BETWEEN CLUMP OF PETALS PAIN SUCCUMB”.",
            title: "BIRDSTONETREE"
          },
          orientation: "portrait"
        },
        8: {
          key: 8,
          icon: gourd,
          id: "gourd",
          images: this.exhibitImages["gourd"],
          iconTitle: "Gourd",
          description: {
            artist: "Juli Majer",
            materialsFormatYear:
              "coloured pencil on vellum, 6.5” x 9.25”, 2021",
            text:
              "Set of two coloured pencil drawings displaying different worlds, creatures and objects. These elements are contained within squiggly frames which join them together like a non-linear comic.",
            title: "Worm Brain Drawings"
          },
          orientation: "portrait"
        },
        9: {
          key: 9,
          icon: shell,
          id: "shell",
          images: this.exhibitImages["shell"],
          iconTitle: "Shell",
          description: {
            artist: "Sonja Ratkay",
            materialsFormatYear:
              "Organza, wool roving, thread and metal dowels, 55 x 100 in, 2021",
            photoCredit: "Photography by Edwin Isford",
            text:
              "A large purple, sheer, layered, and shimmery tapestry is shown installed hanging from the ceiling in a room. The tapestry depicts an abstracted body silhouette, and a vein-like shape inside of this form is stuffed with wool roving elements, which make it puffy. The tapestry, which is taller than a person, is meant to function as a room divider or space definer for the lounge.",
            title: "Seaweed Angelus"
          },
          orientation: "portrait"
        },
        10: {
          key: 10,
          icon: web,
          id: "web",
          images: this.exhibitImages["web"],
          iconTitle: "Web",
          description: {
            artist: "Sarah Davidson",
            materialsFormatYear:
              "acrylic paint and fabric dye on canvas, 8 inflatable fitness balls, nylon cord, dimensions variable (approximately 48 x 48 x 100 inches), 2021",
            text:
              "Eight fabric covered balls in varying sizes, painted and dyed to look like eyeballs from various creatures, held together by a large blue widely tied net. The sculpture is meant to be interacted with as seating and eyeballs are loosely contained so as to be reconfigured. Artist Sarah Davidson is shown sitting on sculpture like a lounge chair. Each of the six largest eyeballs are the size of an exercise ball and the two smaller ones are the size of a soccer ball.",
            title: "Web Lounge"
          },
          orientation: "landscape"
        },
        11: {
          key: 11,
          icon: face,
          id: "face",
          images: this.exhibitImages["face"],
          iconTitle: "Face",
          description: {
            artist: "Mel Thibodeau & Juli Majer",
            materialsFormatYear:
              "mixed fabrics and polyester stuffing, 48” x 72”, 2021",
            text:
              "Photo series of a large, multi-textured quilt which is made of variously coloured fake furs and printed fabrics. The quilt features motifs of flowers, stars, worms and squiggly shapes.",
            title: "Untitled"
          },
          orientation: "portrait"
        },
        12: {
          key: 12,
          icon: angelWing,
          id: "angelWing",
          images: this.exhibitImages["angelWing"],
          iconTitle: "Angel Wing",
          description: {
            artist: "Juli Majer collaboration with Scott Lougheed",
            materialsFormatYear: "digital interactive game, 2021",
            text:
              "Digital drag and drop game featuring 3D-rendered creatures, plants, fruit, objects and furniture in a lounge-like digital space.",
            title: "LumpWorld"
          },
          orientation: "landscape"
        },
        13: {
          key: 13,
          icon: about,
          id: "about",
          images: this.exhibitImages["about"],
          iconTitle: "About"
        },
        14: {
          key: 14,
          icon: chat,
          id: "chat",
          images: this.exhibitImages["chat"],
          iconTitle: "Chat Bot"
        }
      }
    };
  }

  render() {
    return (
      <div className="Page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Puddle Popper Lounge</title>
          <link rel="canonical" href="https://lounge.puddlepopper.com" />
        </Helmet>
        <Main
          data={this.state.navItems}
          exhibits={this.props.exhibitImages}
          width={this.props.width}
        />
        <Navigation data={this.state.navItems} width={this.props.width} />
      </div>
    );
  }
}

export default App;
