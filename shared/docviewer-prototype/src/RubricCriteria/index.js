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


//  TODO: if certain button is selected it needs to switch from 'circle-default' to
//  circle-primary (this does not match the mock-up but the closest thing we currently
//  have in instui). Based on which button is selected the rubric Description and
//  rubricSummary need to switch out ... this functionality is really a radio button
//  How to make it look right but be the correct pieces under the hood?

import React from 'react'
import PropTypes from 'prop-types'

import { themeable } from '@instructure/ui-themeable'
import styles from './styles.css'

class RubricCriteria extends React.Component {
  static propTypes = {
    label: PropTypes.node.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    id: PropTypes.string,
    name: PropTypes.string,
    summary: PropTypes.string
  }

  static defaultProps = {
    label: undefined,
    id: undefined,
    name: undefined,
    summary: undefined,
    value: undefined
  }

  state = {
    showNoteInput: false
  }

  handleShowNoteInput = () => {
    this.setState({
      showNoteInput: true
    })
  }

  handleHideNoteInput = () => {
    this.setState({
      showNoteInput: false
    })
  }

  render() {
    const {
      label,
      value,
      name,
      summary,
    } = this.props

    return (
      <div className={styles.rating}>
        <label htmlFor={this.id}>
          <input
            className={styles.input}
            id={this.id}
            value={value}
            name={name}
            type="radio"
          />
          <span className={styles.facade}>
            <span className={styles.value}>{value}</span>
          </span>
          <span className={styles.description}>{label}</span>
          <div className={styles.summary}>{summary}</div>
        </label>
      </div>
    )
  }
}

export default themeable(null, styles)(RubricCriteria)