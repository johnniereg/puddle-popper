import * as React from "react";
import "../styles/styles.scss";

import Frame from "../components/frame";
import Navigation from "../components/navigation";

// data
const data = {
  0: "A",
  1: "B",
  2: "C",
  3: "D",
  4: "E",
  5: "F",
  6: "G",
  7: "H",
  8: "I",
  9: "J",
  10: "K",
  11: "L",
  12: "M",
  13: "N",
  14: "O",
  15: "P",
  16: "Q",
};

const IndexPage = () => {
  return (
    <div class="Page">
      <nav></nav>
      <main>
        <div className="Title__Wrapper">
          <h1 className="Title">Puddle Popper Lounge</h1>
        </div>
        <Frame content="Test A" />
        <Frame content="Test B" />
        <Frame content="Test C" />
        <Frame content="Test D" />
      </main>
      <Navigation items={data} />
    </div>
  );
};

export default IndexPage;
