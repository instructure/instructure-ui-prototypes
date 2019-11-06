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

import React, { useState, useCallback } from 'react'

import {
  IconBookmarkLine,
  IconBookmarkSolid,
  IconRemoveBookmarkLine,
  IconCalendarAddLine,
  IconCalendarReservedSolid,
  IconLockLine,
  IconUnlockLine,
  IconLockSolid,
  IconUnpublishedLine,
  IconPublishSolid

} from '@instructure/ui-icons'

import { View } from '@instructure/ui-view'
import { ScreenReaderContent } from '@instructure/ui-a11y'
import { callRenderProp } from '@instructure/ui-react-utils'

import { ToggleButton } from '../ToggleButton'

import { Button } from '../Button'

const ToggleButtonWrapper_A = ({
  renderUnpressedIcon,
  renderPressedIcon,
  renderUnpressedLabel,
  renderPressedLabel,
  mountNode,
  pressedColor = 'success',
  unpressedColor = 'secondary'
} = {}) => {
  const [ isPressed, setPressed ] = useState(false)

  const handleTogglePressed = (event) => setPressed(isPressed => !isPressed)

  const label = callRenderProp(isPressed ? renderPressedLabel : renderUnpressedLabel)

  const buttonProps = {
    withBorder: false,
    withBackground: false,
    margin: 'large',
    onClick: handleTogglePressed,
    color: isPressed ? pressedColor : unpressedColor,
    renderIcon: callRenderProp(isPressed ? renderPressedIcon : renderUnpressedIcon),
    children: <ScreenReaderContent>{label}</ScreenReaderContent>
  }

  const render = ({ getPressedProps, getUnpressedProps }) => {
    const toggleProps = isPressed ? getPressedProps() : getUnpressedProps()

    const props = {
      ...buttonProps,
      ...toggleProps
    }

    return <Button {...props} />
  }

  return <ToggleButton render={render} renderTip={label} mountNode={mountNode} />
}

const ToggleButtonWrapper_B = ({
  renderPreviewUnpressedIcon,
  renderUnpressedIcon,
  renderPressedIcon,
  renderPreviewPressedIcon,
  renderUnpressedLabel,
  renderPressedLabel,
  mountNode,
  pressedColor = 'success',
  unpressedColor = 'secondary'
} = {}) => {
  const [isPressed, setPressed] = useState(false)
  const [isPreviewing, setIsPreviewing] = useState(false)

  const handleTogglePressed = (event) => {
    setPressed(isPressed => !isPressed)
    setIsPreviewing(false)
  }

  const handleStartPreviewing = (event) => setIsPreviewing(true)
  const handleStopPreviewing = (event) => setIsPreviewing(false)

  const label = callRenderProp(isPressed ? renderPressedLabel : renderUnpressedLabel)

  const shouldShowPressedState = () => isPreviewing ? !isPressed : isPressed

  const renderIcon = () => {
    if (!isPressed && !isPreviewing) return renderUnpressedIcon
    if (!isPressed && isPreviewing) return renderPreviewPressedIcon
    if (isPressed && !isPreviewing) return renderPressedIcon
    if (isPressed && isPreviewing) return renderPreviewUnpressedIcon

    return renderUnpressedIcon
  }

  const buttonProps = {
    withBorder: false,
    withBackground: false,
    margin: 'large',
    onClick: handleTogglePressed,
    // Note: For keyboard a11y, we'd want to do these on focus/blur, but only when the user
    // is in keyboard input mode. Otherwise the previewing state will persist for mouse users
    // until the element is no longer focused
    onMouseEnter: handleStartPreviewing,
    onMouseLeave: handleStopPreviewing,
    onFocus: handleStartPreviewing,
    onBlur: handleStopPreviewing,
    color: shouldShowPressedState() ? pressedColor : unpressedColor,
    renderIcon: callRenderProp(renderIcon()),
    children: <ScreenReaderContent>{label}</ScreenReaderContent>
  }

  const render = ({ getPressedProps, getUnpressedProps }) => {
    const toggleProps = isPressed ? getPressedProps() : getUnpressedProps()

    const props = {
      ...buttonProps,
      ...toggleProps
    }

    return <Button {...props} />
  }

  return <ToggleButton render={render} renderTip={label} mountNode={mountNode} />
}

const ToggleButtonWrapperCollection = ({ wrapper, pressedColor = 'success', unpressedColor = 'secondary' } = {}) => {
  const [containerRef, setContainerRef] = useState(null)

  const handleContainerRef = useCallback((el) => {
    setContainerRef(el)
  }, [containerRef])

  const wrapperProps = {
    mountNode: () => containerRef
  }

  const ToggleButtonWrapper = wrapper

  return (
    <View elementRef={handleContainerRef} display="block" margin="none none xx-large none" padding="large">
      <ToggleButtonWrapper
        renderPreviewUnpressedIcon={IconRemoveBookmarkLine}
        renderUnpressedIcon={IconBookmarkLine}
        renderPreviewPressedIcon={IconBookmarkSolid}
        renderPressedIcon={IconBookmarkSolid}
        renderUnpressedLabel="Subscribe"
        renderPressedLabel="Unsubscribe"
        pressedColor={pressedColor}
        unpressedColor={unpressedColor}
        {...wrapperProps}
      />
      <ToggleButtonWrapper
        renderPreviewUnpressedIcon={IconUnlockLine}
        renderUnpressedIcon={IconUnlockLine}
        renderPreviewPressedIcon={IconLockSolid}
        renderPressedIcon={IconLockSolid}
        renderUnpressedLabel="Lock"
        renderPressedLabel="Unlock"
        pressedColor={pressedColor}
        unpressedColor={unpressedColor}
        {...wrapperProps}
      />
      <ToggleButtonWrapper
        renderPreviewUnpressedIcon={IconUnpublishedLine}
        renderUnpressedIcon={IconUnpublishedLine}
        renderPreviewPressedIcon={IconPublishSolid}
        renderPressedIcon={IconPublishSolid}
        renderUnpressedLabel="Publish"
        renderPressedLabel="Unpublish"
        pressedColor={pressedColor}
        unpressedColor={unpressedColor}
        {...wrapperProps}
      />
    </View>
  )
}

export const ToggleButtonExamples = () => (
  <View display="block">
    Toggle Button Prototype A
    <ToggleButtonWrapperCollection wrapper={ToggleButtonWrapper_A} />
    Toggle Button Prototype B
    <ToggleButtonWrapperCollection wrapper={ToggleButtonWrapper_B} />
  </View>
)