import React, { Component } from "react";

import Frame from "../components/frame";
import About from "../components/about";
import Chat from "../components/chat";

class Main extends Component {
  render() {
    return (
      <main className="Frame_Wrapper">
        <Frame key={0} data={this.props.data[0]} width={this.props.width} />
        <Frame key={1} data={this.props.data[1]} width={this.props.width} />
        <Frame key={2} data={this.props.data[2]} width={this.props.width} />
        <Frame key={3} data={this.props.data[3]} width={this.props.width} />
        <Frame key={4} data={this.props.data[4]} width={this.props.width} />
        <Frame key={5} data={this.props.data[5]} width={this.props.width} />
        <Frame key={6} data={this.props.data[6]} width={this.props.width} />
        <Frame key={7} data={this.props.data[7]} width={this.props.width} />
        <Frame key={8} data={this.props.data[8]} width={this.props.width} />
        <Frame key={9} data={this.props.data[9]} width={this.props.width} />
        <Frame key={10} data={this.props.data[10]} width={this.props.width} />
        <Frame key={11} data={this.props.data[11]} width={this.props.width} />
        <Frame key={12} data={this.props.data[12]} width={this.props.width} />
        <About key={13} data={this.props.data[13]} width={this.props.width} />
        <Chat key={14} data={this.props.data[14]} width={this.props.width} />
      </main>
    );
  }
}

export default Main;
