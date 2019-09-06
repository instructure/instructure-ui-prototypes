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

import React, { useState, useCallback, useRef } from 'react'

import {
  IconBookmarkLine,
  IconBookmarkSolid,
  IconCalendarAddLine,
  IconCalendarReservedSolid,
  IconLockLine,
  IconLockSolid,
  IconUnpublishedLine,
  IconPublishSolid

} from '@instructure/ui-icons'

import { View } from '@instructure/ui-view'
import { ScreenReaderContent } from '@instructure/ui-a11y'
import { callRenderProp } from '@instructure/ui-react-utils'

import { ToggleButton } from '../ToggleButton'

import { Button } from '../Button'

const ToggleButtonWrapper = ({
  renderUnpressedIcon,
  renderPressedIcon,
  renderUnpressedLabel,
  renderPressedLabel,
  mountNode
}) => {
  const [ isPressed, setPressed ] = useState(false)

  const handleTogglePressed = (event) => setPressed(isPressed => !isPressed)

  const label = callRenderProp(isPressed ? renderPressedLabel : renderUnpressedLabel)

  const buttonProps = {
    withBorder: false,
    withBackground: false,
    margin: 'large',
    onClick: handleTogglePressed,
    color: isPressed ? 'primary' : 'secondary',
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

export const ToggleButtonExamples = () => {
  const [containerRef, setContainerRef] = useState(null)

  const handleContainerRef = useCallback((el) => {
    if (!containerRef || containerRef !== el) {
      setContainerRef(el)
    }
  }, [])

  const wrapperProps = {
    mountNode: () => containerRef
  }

  return (
    <View elementRef={handleContainerRef}>
      <ToggleButtonWrapper
        renderUnpressedIcon={IconBookmarkLine}
        renderPressedIcon={IconBookmarkSolid}
        renderUnpressedLabel="Subscribe"
        renderPressedLabel="Unsubscribe"
        {...wrapperProps}
      />
      <ToggleButtonWrapper
        renderUnpressedIcon={IconCalendarAddLine}
        renderPressedIcon={IconCalendarReservedSolid}
        renderUnpressedLabel="Add to calendar"
        renderPressedLabel="Remove from calendar"
        {...wrapperProps}
      />
      <ToggleButtonWrapper
        renderUnpressedIcon={IconLockLine}
        renderPressedIcon={IconLockSolid}
        renderUnpressedLabel="Lock"
        renderPressedLabel="Unlock"
        {...wrapperProps}
      />
      <ToggleButtonWrapper
        renderUnpressedIcon={IconUnpublishedLine}
        renderPressedIcon={IconPublishSolid}
        renderUnpressedLabel="Publish"
        renderPressedLabel="Unpublish"
        {...wrapperProps}
      />
    </View>
  )
}