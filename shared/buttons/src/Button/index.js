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
import classnames from 'classnames'

import { themeable, ThemeablePropTypes } from '@instructure/ui-themeable'
import { getElementType, passthroughProps } from '@instructure/ui-react-utils'

import { Focusable } from '@instructure/ui-focusable'
import { View } from '@instructure/ui-view'

import styles from './styles.css'
import theme from './theme'

/**
---
category: components
---
**/
@themeable(theme, styles)
class Button extends Component {
  static propTypes = {
    /**
    * Specifies the `Button` children.
    */
    children: PropTypes.node,
    /**
    * Specifies the type of the `Button`'s underlying html element.
    */
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    /**
    * The size of the `Button`
    */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
    * Provides a reference to the `Button`'s underlying html element.
    */
    elementRef: PropTypes.func,
    /**
    * The element to render as the component root, `button` by default.
    */
    as: PropTypes.elementType,
    /**
    * Specifies if interaction with the `Button` is enabled, disabled, or readonly.
    */
    interaction: PropTypes.oneOf(['enabled', 'disabled', 'readOnly']),
    /**
    * Specifies the background color of the `Button`.
    */
    background: PropTypes.oneOf([
      'transparent',
      'primary',
      'brand',
      'success',
      'danger',
      'warning',
      'light'
    ]),
    /**
    * Specifies the border color of the `Button`.
    */
    borderColor: PropTypes.oneOf([
      'transparent',
      'primary',
      'brand',
      'success',
      'danger',
      'warning',
      'light'
    ]),
    /**
    * Valid values are `0`, `none`, `auto`, `xxx-small`, `xx-small`, `x-small`,
    * `small`, `medium`, `large`, `x-large`, `xx-large`. Apply these values via
    * familiar CSS-like shorthand. For example: `margin="small auto large"`.
    */
    margin: ThemeablePropTypes.spacing,
    /**
     * Specify a mouse cursor to use when hovering over the button.
     * The `pointer` cursor is used by default.
     */
    cursor: PropTypes.string,
    /**
    * Specifies an href attribute for the `Button`'s underlying html element.
    */
    href: PropTypes.string,
    /**
    * Callback fired when the `Button` is clicked.
    */
    onClick: PropTypes.func
  }

  static defaultProps = {
    children: null,
    type: 'button',
    size: 'medium',
    elementRef: (el) => { },
    as: 'button',
    interaction: 'enabled',
    background: 'primary',
    borderColor: 'primary',
    margin: '0',
    cursor: 'pointer',
    href: undefined,
    onClick: undefined
  }

  handleClick = (event) => {
    const { interaction, onClick } = this.props

    if (interaction !== 'enabled') {
        event.preventDefault()
        event.stopPropagation()
        return
    }

    if (typeof onClick === 'function') {
        onClick()
    }
  }

  render() {
    const {
      children,
      type,
      size,
      elementRef,
      as,
      href,
      background,
      borderColor,
      margin,
      cursor,
      ...props
    } = this.props

    const elementType = getElementType(Button, as)

    const classes = classnames({
      [styles.root]: true,
      [styles[`size--${size}`]]: true,
      [styles[`background--${background}`]]: true,
      [styles[`border--${borderColor}`]]: true
    })

    const render = ({ focused }) => (
      <View
        {...passthroughProps(props)}
        ref={elementRef}
        as={elementType}
        isFocused={focused}
        focusColor="info"
        position="relative"
        borderRadius="medium"
        background="transparent"
        margin={margin}
        cursor={cursor}
        href={href}
        type={href ? null : type}
        onClick={this.handleClick}
        className={classes}
      >
          {children}
      </View>
    )

    return <Focusable render={render} />
  }
}

export { Button }
export default Button
