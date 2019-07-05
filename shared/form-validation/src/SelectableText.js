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

import React from "react";

import { InPlaceEdit } from "@instructure/ui-editable"
import { View } from "@instructure/ui-layout"
import { Text } from "@instructure/ui-elements"

export default class SelectableText extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: props.mode || "view",
      value: "Type a Listing Title",
      inline: true
    }
  }

  handleChangeMode = mode => {
    this.setState({ mode })
  }

  // You attach an event handler to your edit component
  // to be notified of value changes from user interactions
  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  // Renders the view component
  // Be sure to give it the current value
  renderView = () => (
    <Text
      color={this.state.value ? "primary" : "secondary"}
      weight="light"
      size="x-large"
    >
      {this.state.value || "Enter some text"}
    </Text>
  )

  // Renders the edit component.
  // You have to forward the props on, which
  // includes an onBlur property to help manage
  // the mode changes.
  // Be sure to give it the current value
  renderEdit = ({ onBlur, editorRef }) => (
    <Text
      color="primary"
      size="x-large"
      as="input"
      type="text"
      value={this.state.value}
      onChange={this.handleChange}
      aria-label="The title"
      onBlur={onBlur}
      elementRef={editorRef}
    />
  )

  // Renders the edit button.
  // Leverage the default implementation provided by InPlaceEdit
  renderEditButton = props => {
    const label = `Edit title "${this.state.value}"`
    return InPlaceEdit.renderDefaultEditButton({ ...props, label })
  }

  onChangeLayout = event => {
    this.setState({ inline: event.target.checked })
  }

  render() {
    return (
      <View as="div">
        <InPlaceEdit
          renderViewer={this.renderView}
          renderEditor={this.renderEdit}
          renderEditButton={this.renderEditButton}
          onChangeMode={this.handleChangeMode}
          mode={this.state.mode}
          value={this.state.value}
          inline={this.state.inline}
        />
      </View>
    )
  }
}
