/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 - present Instructure, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import React, { Component } from "react"

import Mover from "../Mover"

import { View } from "@instructure/ui-layout"
import { Select, RangeInput, Checkbox } from "@instructure/ui-forms"
import { TextInput } from "@instructure/ui-text-input"
import { FormFieldGroup } from "@instructure/ui-form-field"
import { Link, Heading, Text } from "@instructure/ui-elements"

import { themeable } from '@instructure/ui-themeable'

import styles from './styles.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      type: "all",
      width: 300,
      height: 200,
      fill: "lightgray",
      border: "gray",
      shadow: true,
      durShort: 150,
      durMed: 250,
      durLong: 500,
      easeLinear: "0,0,1,1",
      easeEnter: ".42,0,1,1",
      easeExit: "0,0,.58,1",
      easeFunEnter: ".17,.89,.32,1.28",
      easeFunExit: ".6,-.28,.74,.05",
      shiftSmall: 10,
      shiftMed: 20,
      shiftLarge: 50
    }
  }

  handleSelectChange = (e, o) => {
    this.setState({ type: o.value })
  }

  handleWidthChange = value => {
    this.setState({ width: value })
  };

  handleHeightChange = value => {
    this.setState({ height: value })
  };

  handleFillChange = (e, value) => {
    this.setState({ fill: value })
  };

  handleBorderChange = (e, value) => {
    this.setState({ border: value })
  };

  handleDurShortChange = value => {
    this.setState({ durShort: value })
  };

  handleDurMedChange = value => {
    this.setState({ durMed: value })
  };

  handleDurLongChange = value => {
    this.setState({ durLong: value })
  };

  handleEaseLinearChange = (e, value) => {
    this.setState({ easeLinear: value })
  };

  handleEaseEnterChange = (e, value) => {
    this.setState({ easeEnter: value })
  };

  handleEaseExitChange = (e, value) => {
    this.setState({ easeExit: value })
  };

  handleEaseFunEnterChange = (e, value) => {
    this.setState({ easeFunEnter: value })
  };

  handleEaseFunExitChange = (e, value) => {
    this.setState({ easeFunExit: value })
  };

  handleShiftSmallChange = value => {
    this.setState({ shiftSmall: value })
  };

  handleShiftMedChange = value => {
    this.setState({ shiftMed: value })
  };

  handleShiftLargeChange = value => {
    this.setState({ shiftLarge: value })
  };

  toggleShadow = e => this.setState({ shadow: !this.state.shadow });

  get info () {
    const type = this.state.type

    if (type === "slideIn" || type === "slideOut") {
      return "Tray, Alert, TreeBrowser/Tree"
    } else if (type === "slideInFun" || type === "slideOutFun") {
      return "Nothing right now Canvas-wise, but worth defining so inst-UI can accommodate other brands"
    } else if (type === "scaleIn" || type === "scaleOut") {
      return "the focus outline, Modal, Popover, Tooltip"
    } else if (type === "scaleInFun" || type === "scaleOutFun") {
      return "Rating star animation? Not much right now in Canvas."
    } else if (type === "fade") {
      return "Alert, anywhere you want to subtly add or remove an element"
    } else if (type === "alpha") {
      return "Disabled inputs, inactive Cards or other elements. Anywhere you want to dim and un-dim."
    } else if (type === "tintLighten" || type === "tintDarken") {
      return "Button hover or active state. Any subtle color shift."
    } else {
      return null
    }
  }

  render() {
    const types = [
      { value: "all", label: "Choose animation" },
      { value: "slideIn", label: "slideIn" },
      { value: "slideOut", label: "slideOut" },
      { value: "slideInFun", label: "slideInFun" },
      { value: "slideOutFun", label: "slideOutFun" },
      { value: "scaleIn", label: "scaleIn" },
      { value: "scaleOut", label: "scaleOut" },
      { value: "scaleInFun", label: "scaleInFun" },
      { value: "scaleOutFun", label: "scaleOutFun" },
      { value: "fade", label: "fade" },
      { value: "alpha", label: "alpha" },
      { value: "tintLighten", label: "tintLighten" },
      { value: "tintDarken", label: "tintDarken" }
    ]

    /* eslint-disable no-console */
    return (
      <div className={styles.root}>
        <View
          as="section"
          borderWidth="none small none none"
          overflowY="auto"
        >
          <View as="div" height="100%" padding="medium">
            <Heading margin="none none medium">Duration</Heading>
            <FormFieldGroup description="" colSpacing="medium" vAlign="top">
              {(this.state.type === "tintLighten" ||
                this.state.type === "tintDarken" ||
                this.state.type === "all" ||
                this.state.type === "alpha") && (
                <RangeInput
                  label="duration-short"
                  defaultValue={parseInt(this.state.durShort, 10)}
                  formatValue={value => {
                    return `${value}ms`
                  }}
                  onChange={this.handleDurShortChange}
                  max={199}
                  min={100}
                />
              )}
              {(this.state.type === "scaleIn" ||
                this.state.type === "scaleOut" ||
                this.state.type === "slideIn" ||
                this.state.type === "all" ||
                this.state.type === "fade" ||
                this.state.type === "slideOut") && (
                <RangeInput
                  label="duration-medium"
                  defaultValue={parseInt(this.state.durMed, 10)}
                  formatValue={value => {
                    return `${value}ms`
                  }}
                  onChange={this.handleDurMedChange}
                  max={499}
                  min={200}
                />
              )}
              {(this.state.type === "slideInFun" ||
                this.state.type === "slideOutFun" ||
                this.state.type === "all" ||
                this.state.type === "scaleInFun" ||
                this.state.type === "scaleOutFun") && (
                <RangeInput
                  label="duration-long"
                  defaultValue={parseInt(this.state.durLong, 10)}
                  formatValue={value => {
                    return `${value}ms`
                  }}
                  onChange={this.handleDurLongChange}
                  max={2000}
                  min={500}
                />
              )}
              <Heading margin="none none medium">Easing</Heading>
              {(this.state.type === "fade" ||
                this.state.type === "alpha" ||
                this.state.type === "all" ||
                this.state.type === "tintDarken" ||
                this.state.type === "tintLighten") && (
                <View display="block">
                  <TextInput
                    label="ease-linear"
                    value={this.state.easeLinear}
                    onChange={this.handleEaseLinearChange}
                  />
                  <View display="block" margin="xx-small 0 0">
                    <Link
                      href={`https://cubic-bezier.com/#${
                        this.state.easeLinear
                      }`}
                      target="_blank"
                    >
                      Edit on cubic-bezier.com
                    </Link>
                  </View>
                </View>
              )}
              {(this.state.type === "scaleIn" ||
                this.state.type === "all" ||
                this.state.type === "slideIn") && (
                <View display="block">
                  <TextInput
                    label="ease-enter"
                    value={this.state.easeEnter}
                    onChange={this.handleEaseEnterChange}
                  />
                  <View display="block" margin="xx-small 0 0">
                    <Link
                      href={`https://cubic-bezier.com/#${this.state.easeEnter}`}
                      target="_blank"
                    >
                      Edit on cubic-bezier.com
                    </Link>
                  </View>
                </View>
              )}
              {(this.state.type === "scaleOut" ||
                this.state.type === "all" ||
                this.state.type === "slideOut") && (
                <View display="block">
                  <TextInput
                    label="ease-exit"
                    value={this.state.easeExit}
                    onChange={this.handleEaseExitChange}
                  />
                  <View display="block" margin="xx-small 0 0">
                    <Link
                      href={`https://cubic-bezier.com/#${this.state.easeExit}`}
                      target="_blank"
                    >
                      Edit on cubic-bezier.com
                    </Link>
                  </View>
                </View>
              )}
              {(this.state.type === "slideInFun" ||
                this.state.type === "all" ||
                this.state.type === "scaleInFun") && (
                <View display="block">
                  <TextInput
                    label="ease-fun-enter"
                    value={this.state.easeFunEnter}
                    onChange={this.handleEaseFunEnterChange}
                  />
                  <View display="block" margin="xx-small 0 0">
                    <Link
                      href={`https://cubic-bezier.com/#${
                        this.state.easeFunEnter
                      }`}
                      target="_blank"
                    >
                      Edit on cubic-bezier.com
                    </Link>
                  </View>
                </View>
              )}
              {(this.state.type === "slideOutFun" ||
                this.state.type === "all" ||
                this.state.type === "scaleOutFun") && (
                <View display="block">
                  <TextInput
                    label="ease-fun-exit"
                    value={this.state.easeFunExit}
                    onChange={this.handleEaseFunExitChange}
                  />
                  <View display="block" margin="xx-small 0 0">
                    <Link
                      href={`https://cubic-bezier.com/#${
                        this.state.easeFunExit
                      }`}
                      target="_blank"
                    >
                      Edit on cubic-bezier.com
                    </Link>
                  </View>
                </View>
              )}
              <Heading margin="none none medium">Shift</Heading>
              {(this.state.type === "tintLighten" ||
                this.state.type === "all" ||
                this.state.type === "tintDarken" ||
                this.state.type === "scaleIn" ||
                this.state.type === "scaleOut") && (
                <RangeInput
                  label="shift-small"
                  defaultValue={parseInt(this.state.shiftSmall, 10)}
                  formatValue={value => {
                    return `${value}%`
                  }}
                  onChange={this.handleShiftSmallChange}
                  max={10}
                  min={1}
                />
              )}
              {this.state.type === "all" && (
                <RangeInput
                  label="shift-medium"
                  defaultValue={parseInt(this.state.shiftMed, 10)}
                  formatValue={value => {
                    return `${value}%`
                  }}
                  onChange={this.handleShiftMedChange}
                  max={30}
                  min={11}
                />
              )}
              {(this.state.type === "scaleInFun" ||
                this.state.type === "alpha" ||
                this.state.type === "all" ||
                this.state.type === "scaleOutFun") && (
                <RangeInput
                  label="shift-large"
                  defaultValue={parseInt(this.state.shiftLarge, 10)}
                  formatValue={value => {
                    return `${value}%`
                  }}
                  onChange={this.handleShiftLargeChange}
                  max={60}
                  min={31}
                />
              )}
              {(this.state.type === "slideIn" ||
                this.state.type === "slideOut" ||
                this.state.type === "fade" ||
                this.state.type === "slideInFun" ||
                this.state.type === "slideOutFun" ||
                this.state.type === "all") && (
                <RangeInput
                  disabled
                  label="shift-complete (always 100%)"
                  value={100}
                  formatValue={value => {
                    return `${value}%`
                  }}
                  onChange={() => console.log("Cannot change this value")}
                  min={0}
                  max={100}
                />
              )}
            </FormFieldGroup>
          </View>
        </View>
        <View
          as="section"
          borderWidth="none small none none"
          overflowY="auto"
        >
          <View as="div" height="100%">
            <View
              as="div"
              padding="medium"
              borderWidth="none none small"
              background="light"
            >
              <Select
                onChange={this.handleSelectChange}
                value={this.state.type}
                label="Animation type"
              >
                {types.map(s => (
                  <option value={s.value} key={s.value}>
                    {s.label}
                  </option>
                ))}
              </Select>
            </View>
            <View as="div" padding="medium">
              <FormFieldGroup description="" colSpacing="medium" vAlign="top">
                <TextInput
                  label="Fill (HEX)"
                  value={this.state.fill}
                  onChange={this.handleFillChange}
                />
                <TextInput
                  label="Border (HEX)"
                  value={this.state.border}
                  onChange={this.handleBorderChange}
                />
                <Checkbox
                  checked={this.state.shadow}
                  label="Shadow"
                  onChange={this.toggleShadow}
                />
                <RangeInput
                  label="Width"
                  defaultValue={parseInt(this.state.width, 10)}
                  onChange={this.handleWidthChange}
                  max={800}
                  min={10}
                />
                <RangeInput
                  label="Height"
                  defaultValue={parseInt(this.state.height, 10)}
                  onChange={this.handleHeightChange}
                  max={800}
                  min={10}
                />
              </FormFieldGroup>
            </View>
          </View>
        </View>
        <div className={styles.demo}>
          <div>
            <Mover
              width={parseInt(this.state.width, 10)}
              height={parseInt(this.state.height, 10)}
              fill={this.state.fill}
              border={this.state.border}
              shadow={this.state.shadow}
              type={this.state.type}
              atoms={{
                durShort: parseInt(this.state.durShort, 10),
                durMed: parseInt(this.state.durMed, 10),
                durLong: parseInt(this.state.durLong, 10),
                easeLinear: `cubic-bezier(${this.state.easeLinear})`,
                easeEnter: `cubic-bezier(${this.state.easeEnter})`,
                easeExit: `cubic-bezier(${this.state.easeExit})`,
                easeFunEnter: `cubic-bezier(${this.state.easeFunEnter})`,
                easeFunExit: `cubic-bezier(${this.state.easeFunExit})`,
                shiftSmall: this.state.shiftSmall / 100,
                shiftMed: this.state.shiftMed / 100,
                shiftLarge: this.state.shiftLarge / 100,
                shiftComplete: 1
              }}
            />
          </div>
          {this.state.type !== "all" && (
            <div>
              <View as="div" background="inverse" padding="medium">
                <Text weight="bold" size="large">
                  {this.state.type}
                </Text>
                <View display="block" margin="xx-small none none">
                  Possible uses: {this.info}
                </View>
              </View>
            </div>
          )}
        </div>
      </div>
    )
    /* eslint-enable no-console */
  }
}

export default themeable(null, styles)(App)
