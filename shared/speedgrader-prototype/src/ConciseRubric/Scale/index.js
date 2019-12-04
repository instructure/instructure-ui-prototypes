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

import React from 'react'
import PropTypes from 'prop-types'

import { View } from '@instructure/ui-layout'
import { Text } from '@instructure/ui-elements'
import { Tooltip } from '@instructure/ui-overlays'

import styles from './styles.css'

export default class Scale extends React.Component {
  static propTypes = {
    label: PropTypes.node.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    id: PropTypes.string,
    name: PropTypes.string,
    summary: PropTypes.string,
    isChecked: PropTypes.bool,
    onClick: PropTypes.func,
    onChange: PropTypes.func
  }

  static defaultProps = {
    label: undefined,
    id: undefined,
    name: undefined,
    summary: undefined,
    value: undefined,
    isChecked: false,
    onClick: function (event) {},
    onChange: function (event) {}
  }

  state = {
    showNoteInput: false
  }

  handleShowNoteInput = () => {
    this.setState({
      showNoteInput: true,
      checked: false
    })
  }

  handleHideNoteInput = () => {
    this.setState({
      showNoteInput: false
    })
  }

  renderViews = () => {
    const {
      label,
      value,
      name,
      summary,
    } = this.props

    if (value !== this.isChecked) {
      return (
        <span>
          <Tooltip
            variant="default"
            constrain="scroll-parent"
            tip={
              <View as="div" padding="x-small small" maxWidth="17em">
                <Text as="div" weight="bold" lineHeight="double">{label}</Text>
                <Text>{summary}</Text>
              </View>
            }
            placement="bottom"
            mountNode={() => document.getElementById('main')}
          >
            <label htmlFor={this.id}>
              <input
                className={styles.input}
                id={this.id}
                value={value}
                name={name}
                type="radio"
                checked={this.isChecked}
              />
              <span className={styles.facade}>
                <span className={styles.value}>
                  {value}
                </span>
              </span>
            </label>
          </Tooltip>
        </span>
      )
    } else {
      return (
        <span>
          <label htmlFor={this.id}>
            <input
              className={styles.input}
              id={this.id}
              value={value}
              name={name}
              type="radio"
              checked={this.isChecked}
            />
            <span className={styles.facade}>
              <span className={styles.value}>{value}</span>
            </span>
          </label>
        </span>
      )
    }
  }

  render() {
    return (
      <span>
        {this.renderViews()}
      </span>
    )
  }
}
