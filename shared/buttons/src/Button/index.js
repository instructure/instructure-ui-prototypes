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
import keycode from 'keycode'

import { themeable, ThemeablePropTypes } from '@instructure/ui-themeable'
import { getElementType, passthroughProps, callRenderProp } from '@instructure/ui-react-utils'

import { hasVisibleChildren } from '@instructure/ui-a11y'
import { View } from '@instructure/ui-view'
import { Flex } from '@instructure/ui-layout'

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
    * Specifies the color scheme for the `Button`.
    */
    color: PropTypes.oneOf([
      'primary',
      'primary-inverse',
      'secondary',
      'success',
      'danger'
    ]),
    display: PropTypes.oneOf(['inline-block', 'block']),
    textAlign: PropTypes.oneOf(['start', 'center']),
    shape: PropTypes.oneOf([
      'rectangle',
      'circle'
    ]),
    withBackground: PropTypes.bool,
    withBorder: PropTypes.bool,
    isCondensed: PropTypes.bool,
    focusPosition: PropTypes.oneOf(['offset', 'inset']),
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
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    renderIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
  }

  static defaultProps = {
    children: null,
    type: 'button',
    size: 'medium',
    elementRef: (el) => { },
    as: 'button',
    interaction: 'enabled',
    color: 'secondary',
    shape: 'rectangle',
    display: 'inline-block',
    textAlign: 'start',
    withBackground: true,
    withBorder: true,
    isCondensed: false,
    focusPosition: 'offset',
    margin: '0',
    cursor: 'pointer',
    href: undefined,
    onClick: undefined,
    onKeyDown: (event) => {},
    onFocus: (event) => {},
    onBlur: (event) => {},
    renderIcon: undefined
  }

  state = {
    isFocused: false
  }

  _rootElement = null

  get hasOnlyIconVisible () {
    const { children, renderIcon } = this.props
    return renderIcon && !hasVisibleChildren(children)
  }

  get elementType () {
    return getElementType(Button, this.props)
  }

  handleElementRef = (el) => {
    this._rootElement = el
    this.props.elementRef(el)
  }

  handleFocus = (event) => {
    this.setState({ isFocused: true })
    this.props.onFocus(event)
  }

  handleBlur = (event) => {
    this.setState({ isFocused: false })
    this.props.onBlur(event)
  }

  handleClick = (event) => {
    const { interaction, onClick } = this.props

    if (interaction !== 'enabled') {
        event.preventDefault()
        event.stopPropagation()
        return
    }

    if (typeof onClick === 'function') {
        onClick(event)
    }
  }

  handleKeyDown = event => {
    const { interaction, onClick, onKeyDown, href } = this.props

    onKeyDown(event)

    // behave like a button when space key is pressed
    const { space, enter } = keycode.codes

    if (this.elementType !== 'button' && [space, enter].includes(event.keyCode)) {
      event.preventDefault()
      event.stopPropagation()

      if (typeof onClick === 'function' && interaction === 'enabled') {
        onClick(event)
      }

      if (href) {
        this._rootElement && this._rootElement.click()
      }
    }
  }

  renderChildren () {
    const { renderIcon, children, textAlign } = this.props

    if (!renderIcon) {
      return children
    }

    const { hasOnlyIconVisible } = this
    const icon = <span className={styles.iconSVG}>{callRenderProp(renderIcon)}</span>

    const flexChildren = hasOnlyIconVisible ? <Flex.Item>{icon}{children}</Flex.Item> : [
      <Flex.Item key="icon" padding="0 x-small 0 0">{icon}</Flex.Item>,
      <Flex.Item key="children" shrink>{children}</Flex.Item>
    ]

    const flexProps = {
      height: '100%',
      width: '100%',
      justifyItems: (hasOnlyIconVisible || textAlign === 'center') ? 'center' : 'start'
    }

    return <Flex {...flexProps}>{flexChildren}</Flex>
  }

  render() {
    const {
      type,
      size,
      elementRef,
      as,
      href,
      color,
      textAlign,
      shape,
      display,
      withBackground,
      withBorder,
      isCondensed,
      focusPosition,
      margin,
      cursor,
      ...props
    } = this.props

    const { isFocused } = this.state

    const classes = classnames({
      [styles.content]: true,
      [styles[`size--${size}`]]: true,
      [styles[`color--${color}`]]: true,
      [styles[`textAlign--${textAlign}`]]: true,
      [styles[`shape--${shape}`]]: true,
      [styles[`display--${display}`]]: true,
      [styles.withBackground]: withBackground,
      [styles.withoutBackground]: !withBackground,
      [styles.isCondensed]: isCondensed,
      [styles.withBorder]: withBorder,
      [styles.withoutBorder]: !withBorder,
      [styles.hasOnlyIconVisible]: this.hasOnlyIconVisible
    })

    return (
      <View
        {...passthroughProps(props)}
        as={this.elementType}
        isFocused={isFocused}
        focusColor="inverse"
        focusPosition={focusPosition}
        position="relative"
        display={display}
        width={display === 'block' ? '100%' : 'auto'}
        borderRadius={shape === 'circle' ? 'circle' : 'medium'}
        background="transparent"
        padding="none"
        borderWidth="none"
        margin={margin}
        cursor={cursor}
        href={href}
        type={href ? null : type}
        elementRef={this.handleElementRef}
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        // TODO: See note below on className delima
        className={styles.root}
      >
        <span className={classes}>
          {this.renderChildren()}
        </span>
      </View>
    )
  }
}

export { Button }
export default Button

// We need to get the active states for the interior component specific wrapper.
// That is happening on the root View element. Examining options on how we can
// do this:
//
// Options
// Pass className to View that has no rules, but can be used as a selector
// * pros: Still avoids collisions
// * cons: We have to support className on View
//
// Use View as a wrapper, but move the button element inside of it
// * pros: we can get the styling we want without having to keep className on View
// * cons: not having button as the root element is unexpected for consumers
// * for example, where do we pass the root props? it would break from current lib conditions
