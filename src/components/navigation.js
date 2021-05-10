import React, { Component } from "react";
import PubSub from "pubsub-js";

// import navBgImg from "../images/navigation/Menu_bar.png";
import navBgLeft from "../images/navigation/Menu_End_Left_revised_noshadow.png";
import navBgRight from "../images/navigation/Menu_End_Right_revised_noshadow.png";
import navBgUp from "../images/navigation/Menu_Interior_Upper_revised_noshadow.png";
import navBgDown from "../images/navigation/Menu_Interior_Lower_revised_noshadow.png";

import leftArrow from "../images/navigation/Left_Facing_Arrow.png";
import rightArrow from "../images/navigation/Right_Facing_Arrow.png";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileMenuVisible: false
    };

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.hideMobileMenu = this.hideMobileMenu.bind(this);
  }

  handleButtonClick(event) {
    event.preventDefault();
    const key = parseInt(event.currentTarget.getAttribute("data-key"));
    PubSub.publish("toggleFrame", key);
  }

  determineBgImage(index, length) {
    let bgImg;

    if (index === 0) {
      bgImg = navBgLeft;
    } else if (index === length - 1) {
      bgImg = navBgRight;
    } else if (index % 2) {
      bgImg = navBgDown;
    } else {
      bgImg = navBgUp;
    }

    return bgImg;
  }

  determineBgClass(index, length) {
    let additionalClass;

    if (index === 0) {
      additionalClass = "Left";
    } else if (index === length - 1) {
      additionalClass = "Right";
    } else if (index % 2) {
      additionalClass = "Down";
    } else {
      additionalClass = "Up";
    }

    return additionalClass;
  }

  toggleMobileMenu() {
    this.setState(prevState => ({
      mobileMenuVisible: !prevState.mobileMenuVisible
    }));
  }

  hideMobileMenu() {
    this.setState({
      mobileMenuVisible: false
    });
  }

  render() {
    const exhibits = Object.entries(this.props.data);

    const navItemsDesktop = exhibits.map(([key, exhibit], index) => {
      const bgImage = this.determineBgImage(index, exhibits.length);
      const additionalClass = this.determineBgClass(index, exhibits.length);
      const classString = `Navigation__Item Navigation__Item--${additionalClass}`;

      return (
        <li className={classString} key={key}>
          <img
            alt=""
            className="Navigation__Background"
            src={bgImage}
            style={{ width: "100%", height: "auto" }}
          ></img>
          <button
            className="Navigation__Button"
            onClick={this.handleButtonClick}
            data-key={key}
          >
            {exhibit.icon ? (
              <img
                alt={exhibit.iconTitle}
                className={`Navigation__Icon Navigation__Icon--${exhibit.id}`}
                src={exhibit.icon}
                style={{ width: "100%", height: "auto" }}
              ></img>
            ) : (
              <span>{exhibit.title}</span>
            )}
          </button>
        </li>
      );
    });

    const navItemsMobile = exhibits.map(([key, exhibit], index) => {
      return (
        <li className="Navigation__Item" key={key}>
          <button
            className="Navigation__Button"
            onClick={this.handleButtonClick}
            onTouchStart={this.handleButtonClick}
            data-key={key}
          >
            {exhibit.icon ? (
              <img
                alt={exhibit.iconTitle}
                className={`Navigation__Icon Navigation__Icon--${exhibit.id}`}
                src={exhibit.icon}
                style={{ width: "100%", height: "auto" }}
              ></img>
            ) : (
              <span>{exhibit.title}</span>
            )}
          </button>
        </li>
      );
    });

    if (this.props.width <= 768) {
      return (
        <nav className="Navigation Navigation--Mobile">
          <ul
            className={
              this.state.mobileMenuVisible
                ? "Navigation__List Navigation__List--Mobile"
                : "Navigation__List Navigation__List--Mobile Hidden"
            }
          >
            {navItemsMobile[0]}
            {navItemsMobile[1]}
            {navItemsMobile[2]}
            {navItemsMobile[3]}
          </ul>
          <ul
            className={
              this.state.mobileMenuVisible
                ? "Navigation__List Navigation__List--Mobile"
                : "Navigation__List Navigation__List--Mobile Hidden"
            }
          >
            {navItemsMobile[4]}
            {navItemsMobile[5]}
            {navItemsMobile[6]}
            {navItemsMobile[7]}
          </ul>
          <ul
            className={
              this.state.mobileMenuVisible
                ? "Navigation__List Navigation__List--Mobile"
                : "Navigation__List Navigation__List--Mobile Hidden"
            }
          >
            {navItemsMobile[8]}
            {navItemsMobile[9]}
            {navItemsMobile[10]}
            {navItemsMobile[11]}
          </ul>
          <ul
            className={
              this.state.mobileMenuVisible
                ? "Navigation__List Navigation__List--Mobile"
                : "Navigation__List Navigation__List--Mobile Hidden"
            }
          >
            {navItemsMobile[12]}
            {navItemsMobile[13]}
            {navItemsMobile[14]}
            <li className="Navigation__Item" key={15}>
              <button
                aria-label="Hide Menu"
                className="Navigation__Button"
                onClick={this.toggleMobileMenu}
              >
                <img
                  alt="Close Mobile Menu"
                  className={`Navigation__Icon Navigation__Icon--mobileMenu`}
                  src={leftArrow}
                  style={{ width: "100%", height: "auto" }}
                ></img>
              </button>
            </li>
          </ul>
          <div
            className={
              this.state.mobileMenuVisible
                ? "Navigation__OpenMenu Hidden"
                : "Navigation__OpenMenu"
            }
          >
            <div className="Navigation__ToggleWrapper">
              <button
                aria-label="Show Menu"
                className="Navigation__Button Navigation__Toggle"
                onClick={this.toggleMobileMenu}
              >
                <img
                  alt="Toggle Menu"
                  className="Navigation__Icon Navigation__Icon--showMenu"
                  src={rightArrow}
                  style={{ width: "100%", height: "auto" }}
                ></img>
              </button>
            </div>
          </div>
        </nav>
      );
    } else {
      return (
        <nav className="Navigation Navigation--Desktop">
          <ul className="Navigation__List Navigation__List--Desktop">
            {navItemsDesktop}
          </ul>
        </nav>
      );
    }
  }
}

export default Navigation;
