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

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { uid } from '@instructure/uid'
import { getBoundingClientRect } from '@instructure/ui-dom-utils'
import { themeable } from '@instructure/ui-themeable'

import styles from './styles.css'

class Item extends Component {
  static propTypes = {
    children: PropTypes.node,
    elementRef: PropTypes.func,
    onUpdateWidth: PropTypes.func,
    onUnmount: PropTypes.func,
    id: PropTypes.oneOf([PropTypes.string, PropTypes.number])
  }

  static defaultProps = {
    children: null,
    elementRef: (el) => {},
    onUpdateWidth: () => {},
    onUnmount: () => {},
    id: null
  }

  constructor (props) {
    super(props)

    this._width = 0
    this._id = props.id || uid('Item')
    this._item = null
  }

  componentDidMount () {
    this.measure()
  }

  componentDidUpdate () {
    this.measure()
  }

  componentWillUnmount () {
    this.props.onUnmount({ id: this._id })
  }

  get id () {
    return this._id
  }

  get width () {
    return this._width
  }

  measure = () => {
    const { width } = getBoundingClientRect(this._item)

    if (width !== this._width) {
      this._width = width
      this.props.onUpdateWidth({ id: this._id, width })
    }
  }

  handleElementRef = (el) => {
    this._item = el
    this.props.elementRef(el)
  }

  render () {
    const { children } = this.props

    return (
      <li
        ref={this.handleElementRef}
        className={styles.root}
      >
        {children}
      </li>
    )
  }
}

const ThemeableItem = themeable(null, styles)(Item)
export { ThemeableItem as Item }
