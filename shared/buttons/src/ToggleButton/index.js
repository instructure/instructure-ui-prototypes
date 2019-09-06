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

import { Tooltip } from '@instructure/ui-overlays'
import { callRenderProp } from '@instructure/ui-react-utils'

class ToggleButton extends Component {
  static propTypes = {
    render: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    renderTip: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    mountNode: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
  }

  static defaultProps = {
    render: null,
    children: null,
    renderTip: null,
    mountNode: null
  }

  render () {
    const {
      renderTip,
      mountNode,
      children,
      render = children,
    } = this.props

    const getPressedProps = () => ({
      ['aria-pressed']: 'true'
    })

    const getUnpressedProps = () => ({
      ['aria-pressed']: 'false'
    })

    const button = render({ getPressedProps, getUnpressedProps })

    return renderTip ? (
      <Tooltip
        mountNode={mountNode}
        tip={callRenderProp(renderTip)}
        on={['hover', 'focus']}
      >
        {button}
      </Tooltip>
    ) : button
  }
}

export { ToggleButton }