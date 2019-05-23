import React, { Component } from "react";
// import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import color from "tinycolor2";
import "@instructure/canvas-theme";
import "./styles.css";

import { View } from "@instructure/ui-layout";
// import { ScreenReaderContent } from "@instructure/ui-a11y";
import { Button } from "@instructure/ui-buttons";
import { IconPlayLine } from "@instructure/ui-icons";
import { IconResetLine } from "@instructure/ui-icons";

class Mover extends Component {
  static propTypes = {
    shadow: PropTypes.bool,
    fill: PropTypes.string,
    border: PropTypes.string,
    textColor: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    type: PropTypes.oneOf([
      "all",
      "slideIn",
      "slideOut",
      "scaleIn",
      "scaleOut",
      "slideInFun",
      "slideOutFun",
      "scaleInFun",
      "scaleOutFun",
      "fade",
      "alpha",
      "tintLighten",
      "tintDarken"
    ]),
    atoms: PropTypes.shape({
      durShort: PropTypes.number,
      durMed: PropTypes.number,
      durLong: PropTypes.number,
      easeLinear: PropTypes.string,
      easeEnter: PropTypes.string,
      easeExit: PropTypes.string,
      easeFunEnter: PropTypes.string,
      easeFunExit: PropTypes.string,
      shiftSmall: PropTypes.number,
      shiftMed: PropTypes.number,
      shiftLarge: PropTypes.number,
      shiftComplete: PropTypes.number
    })
  };

  constructor(props) {
    super(props);

    this.state = {
      moved: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.type !== this.props.type) {
      this.setState({ moved: false });
    }
  }

  get fill() {
    const { type, atoms, fill } = this.props;

    if (type === "tintLighten") {
      if (this.state.moved) {
        return color(fill)
          .lighten(atoms.shiftSmall * 100)
          .toString();
      } else {
        return fill;
      }
    } else if (type === "tintDarken") {
      if (this.state.moved) {
        return color(fill)
          .darken(atoms.shiftSmall * 100)
          .toString();
      } else {
        return fill;
      }
    } else {
      return fill;
    }
  }

  get opacity() {
    const { type, atoms } = this.props;

    if (
      type === "slideIn" ||
      type === "scaleIn" ||
      type === "slideInFun" ||
      type === "scaleInFun"
    ) {
      if (this.state.moved) {
        return "1";
      } else {
        return "0";
      }
    } else if (
      type === "slideOut" ||
      type === "scaleOut" ||
      type === "slideOutFun" ||
      type === "scaleOutFun"
    ) {
      if (this.state.moved) {
        return "0";
      } else {
        return "1";
      }
    } else if (type === "fade") {
      if (this.state.moved) {
        return "0";
      } else {
        return "1";
      }
    } else if (type === "alpha") {
      if (this.state.moved) {
        return "1";
      } else {
        return `${1 - atoms.shiftLarge}`;
      }
    }
  }

  get transform() {
    const { type, atoms } = this.props;

    if (type === "slideIn" || type === "slideInFun") {
      if (this.state.moved) {
        return "translate3d(0, 0, 0)";
      } else {
        return `translate3d(-${atoms.shiftComplete * 100}%, 0, 0)`;
      }
    } else if (type === "slideOut" || type === "slideOutFun") {
      if (this.state.moved) {
        return `translate3d(-${atoms.shiftComplete * 100}%, 0, 0)`;
      } else {
        return "translate3d(0, 0, 0)";
      }
    } else if (type === "scaleIn") {
      if (this.state.moved) {
        return "scale(1)";
      } else {
        return `scale(${1 - atoms.shiftSmall})`;
      }
    } else if (type === "scaleInFun") {
      if (this.state.moved) {
        return "scale(1)";
      } else {
        return `scale(${1 - atoms.shiftLarge})`;
      }
    } else if (type === "scaleOut") {
      if (this.state.moved) {
        return `scale(${1 - atoms.shiftSmall})`;
      } else {
        return "scale(1)";
      }
    } else if (type === "scaleOutFun") {
      if (this.state.moved) {
        return `scale(${1 - atoms.shiftLarge})`;
      } else {
        return "scale(1)";
      }
    }
  }

  get duration() {
    const { type, atoms } = this.props;

    if (
      type === "slideIn" ||
      type === "slideOut" ||
      type === "scaleOut" ||
      type === "scaleIn" ||
      type === "fade"
    ) {
      return atoms.durMed;
    } else if (
      type === "scaleInFun" ||
      type === "scaleOutFun" ||
      type === "slideOutFun" ||
      type === "slideInFun"
    ) {
      return atoms.durLong;
    } else {
      return atoms.durShort;
    }
  }

  get ease() {
    const { type, atoms } = this.props;

    if (type === "slideIn" || type === "scaleIn") {
      return atoms.easeEnter;
    } else if (type === "slideOut" || type === "scaleOut") {
      return atoms.easeExit;
    } else if (type === "slideInFun" || type === "scaleInFun") {
      return atoms.easeFunEnter;
    } else if (type === "slideOutFun" || type === "scaleOutFun") {
      return atoms.easeFunExit;
    } else {
      return atoms.easeLinear;
    }
  }

  get transition() {
    const transition = `all ${this.duration}ms ${this.ease}`;
    if (
      this.props.type === "fade" ||
      this.props.type === "alpha" ||
      this.props.type === "tintLighten" ||
      this.props.type === "tintDarken"
    ) {
      return transition;
    } else {
      if (this.state.moved) {
        return transition;
      } else {
        return null;
      }
    }
  }

  get positioning() {
    const { type } = this.props;
    if (
      type === "slideIn" ||
      type === "slideInFun" ||
      type === "slideOut" ||
      type === "slideOutFun"
    ) {
      return {
        top: "0",
        left: "0"
      };
    } else {
      return {
        top: "50%",
        left: "50%",
        transform: "translate3d(-50%, -50%, 0)"
      };
    }
  }

  handleClick = () => {
    this.setState({
      moved: !this.state.moved
    });
  };

  render() {
    const { type } = this.props;

    const styles = {
      height: `${this.props.height}px`,
      width: `${this.props.width}px`,
      transform: this.transform,
      background: this.props.fill ? this.fill : null,
      border: this.props.border ? `0.0625rem solid ${this.props.border}` : null,
      opacity: this.opacity,
      transition: this.transition,
      color: this.props.textColor,
      boxShadow: this.props.shadow ? "0 0 1rem rgba(0, 0, 0, 0.2)" : null
    };

    const positioningStyles = { ...this.positioning };

    const buttonWords =
      type === "fade" ||
      type === "alpha" ||
      type === "tintLighten" ||
      type === "tintDarken"
        ? "Reverse"
        : "Reset";

    return (
      <div className="Mover">
        <div className="Mover__Positioning" style={positioningStyles}>
          {this.props.type !== "all" ? (
            <div className="Mover__MovingThing" style={styles} />
          ) : (
            <View>Choose an animation</View>
          )}
        </div>
        {this.props.type !== "all" && (
          <div className="Mover__Button">
            <Button
              icon={this.state.moved ? IconResetLine : IconPlayLine}
              onClick={this.handleClick}
            >
              {this.state.moved ? buttonWords : "Play"}
            </Button>
          </div>
        )}
      </div>
    );
  }
}

export default Mover;
