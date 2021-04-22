import React, { Component } from "react";

import Frame from "../components/frame";
import About from "../components/about";
import Chat from "../components/chat";

class Main extends Component {
  constructor(props) {
    super(props);

    console.log(this.props, "props");
  }

  render() {
    return (
      <main className="Frame_Wrapper">
        <Frame key={0} data={this.props.data[0]} images={this.props.images} />
        <Frame key={1} data={this.props.data[1]} />
        <Frame key={2} data={this.props.data[2]} />
        <Frame key={3} data={this.props.data[3]} />
        <Frame key={4} data={this.props.data[4]} />
        <Frame key={5} data={this.props.data[5]} />
        <Frame key={6} data={this.props.data[6]} />
        <Frame key={7} data={this.props.data[7]} />
        <Frame key={8} data={this.props.data[8]} />
        <Frame key={9} data={this.props.data[9]} />
        <Frame key={10} data={this.props.data[10]} />
        <Frame key={11} data={this.props.data[11]} />
        <Frame key={12} data={this.props.data[12]} />
        <About key={13} data={this.props.data[13]} />
        <Chat key={14} data={this.props.data[14]} />
      </main>
    );
  }
}

export default Main;
