import React, { Component } from "react";
import Img from "gatsby-image";

class Images extends Component {
  constructor(props) {
    super(props);
    this.images = this.props.images;
    console.log(this.images);
  }

  render() {
    return (
      <div>
        {this.images.allFile.edges.map((image, index) => (
          <Img
            key={index}
            fluid={image.node.childImageSharp.fluid}
            alt={image.node.base.split(".")[0]} // only use section of the file extension with the filename
          />
        ))}
      </div>
    );
  }
}

export default Images;
