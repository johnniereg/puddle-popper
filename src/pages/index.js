import * as React from "react";

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
    </main>
  );
};

export default IndexPage;
