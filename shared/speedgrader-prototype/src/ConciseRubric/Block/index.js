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
import { Children as ChildrenPropTypes } from '@instructure/ui-prop-types'
import { View, Flex } from '@instructure/ui-layout'
import { Button } from '@instructure/ui-buttons'
import { TextArea } from '@instructure/ui-forms'
import { Tooltip } from '@instructure/ui-overlays'
import { Text } from '@instructure/ui-elements'
import { ScreenReaderContent } from '@instructure/ui-a11y'
import { IconNoteLine, IconInfoLine } from '@instructure/ui-icons'
import { Scale } from '../Scale'

export default class Block extends React.Component {
  static propTypes = {
    blockTitle: PropTypes.string.isRequired,
    blockDescription: PropTypes.string.isRequired,
    children: ChildrenPropTypes.oneOf([Scale])
  }

  static defaultProps = {
    blockTitle: undefined,
    blockDescription: undefined,
    children: null
  }
  state = {
    showNoteInput: false,
    showFullDescription: false
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
    return (
      <View as="div" borderWidth="small 0 0 0" padding="small 0">
        <Flex>
          <Flex.Item>
            <Text weight="bold" size="large">{this.lockTitle}</Text>
          </Flex.Item>
          <Flex.Item>
            <Tooltip
              tip={
                <View as="div" padding="small" maxWidth="15rem">
                  <Text>{this.blockDescription}</Text>
                </View>
              }
              variant="default"
              placement="end"
              on={['click', 'hover', 'focus']}
            >
              <Button variant="icon" icon={<IconInfoLine inline={false} />}>
                <ScreenReaderContent>Toggle Setting Description</ScreenReaderContent>
              </Button>
            </Tooltip>
          </Flex.Item>
        </Flex>
        <View as="form" padding="small 0">
          {this.props.children}
        </View>

        { !this.state.showFullDescription ? (
          <div>
            <Text weight="bold" size="large">{this.lockTitle}</Text>
            <View as="div" padding="small" maxWidth="15rem">
              <Text>{this.blockDescription}</Text>

            { !this.state.showNoteInput ? (
                <View as="div" padding="x-small 0">
                  <Button
                    variant="icon"
                    icon={<IconNoteLine inline={false} />}
                    onClick={this.handleShowNoteInput}
                  >
                    <ScreenReaderContent>Add a Note</ScreenReaderContent>
                  </Button>
                </View>
              ) : null }

              { this.state.showNoteInput ? (
                <View as="div" padding="medium 0">
                  <TextArea
                    label="Rating Note"
                    onClick={this.handleHideNoteInput}
                  />
                </View>
              ) : null }
            </View>
          </div>
        ) : null }
      </View>
    )
  }
}
