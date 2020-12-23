import * as React from "react";
import "../styles/styles.scss";
import puddlePopper from "../images/puddlepopper.png";

import Draggable from "react-draggable";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Puddle Popper</title>
      <h1 style={headingStyles}>
        <span style={headingAccentStyles}>Welcome to the lounge</span>
      </h1>
      <img src={puddlePopper} alt="Circle with lines" />
      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[25, 25]}
        scale={1}
      >
        <div>
          <div className="handle">Drag from here</div>
          <div>This readme is really dragging on...</div>
        </div>
      </Draggable>
    </main>
  );
};

export default IndexPage;
