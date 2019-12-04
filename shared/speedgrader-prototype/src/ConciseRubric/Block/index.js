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
import { View, Flex } from '@instructure/ui-layout'
import { Button } from '@instructure/ui-buttons'
import { TextArea } from '@instructure/ui-forms'
import { Tooltip } from '@instructure/ui-overlays'
import { Text } from '@instructure/ui-elements'
import { ScreenReaderContent } from '@instructure/ui-a11y'
import { IconNoteLine, IconInfoLine } from '@instructure/ui-icons'
import Scale from '../Scale'

import styles from './styles.css'

export default class Block extends React.Component {
  static propTypes = {
    blockTitle: PropTypes.string.isRequired,
    blockDescription: PropTypes.string.isRequired,
    scale: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.number,
      label: PropTypes.string,
      description: PropTypes.string,
      id: PropTypes.string,
      name: PropTypes.string
    })).isRequired
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
            <Text weight="bold" size="large">{this.props.blockTitle}</Text>
          </Flex.Item>
          <Flex.Item>
            <Tooltip
              tip={
                <View as="div" padding="small" maxWidth="15rem">
                  <Text>{this.props.blockDescription}</Text>
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
        <View as="form" padding="small 0" display="inline">
          {this.props.scale.map((scaleButton) => {
            return (
              <Scale
                id={scaleButton.id}
                name={scaleButton.name}
                value={scaleButton.value}
                label={scaleButton.label}
                summary={scaleButton.summary}
                key={scaleButton.value}
              />
            )
          })}
        </View>
      </View>
    )
  }
}
