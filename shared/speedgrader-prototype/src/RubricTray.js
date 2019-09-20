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
import { Heading, Text } from '@instructure/ui-elements'
import { Button } from '@instructure/ui-buttons'
import { ScreenReaderContent } from '@instructure/ui-a11y'
import { IconXLine } from '@instructure/ui-icons'

import DetailedRubric from './DetailedRubric'
import ConciseRubric from './ConciseRubric'
import { Select } from './Select'

export default class RubricTray extends React.Component {
  static propTypes = {
    onRequestHideRubric: PropTypes.func
  }

  static defaultProps = {
    onRequestHideRubric: () => {}
  }

  state = {
    showNoteInput: false,
    isDetailed: true,
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

  handleRubricClose = () => {
    this.props.onRequestHideRubric()
  }

  handleViewChange = (event, option) => {
    this.setState((state) => ({
      isDetailed: !state.isDetailed
    }))
  }

  render() {
    return (
      <View
        as="div"
        height="100vh"
      >
        <Flex
          height="100%"
          direction="column"
          justifyItems="space-between"
          alignitems="stretch"
        >
          <Flex.Item>
            <View
              as="div"
              padding="medium"
              textAlign="start"
            >
              <Flex justifyItems="space-between" margin="0 0 small 0">
                <Flex.Item grow shrink>
                  <Heading level="h3" margin="0 0 small 0">Rubric</Heading>
                </Flex.Item>
                <Flex.Item>
                  <Button
                    variant="icon"
                    icon={IconXLine}
                    onClick={this.handleRubricClose}
                  >
                    <ScreenReaderContent>Close</ScreenReaderContent>
                  </Button>
                </Flex.Item>
              </Flex>
              <View as="div" textAlign="end">
                <Text size="large">Total Score -/16</Text>
              </View>
            </View>
            <View as="div" padding="medium">
              { this.state.isDetailed ? <DetailedRubric /> : <ConciseRubric /> }
            </View>
          </Flex.Item>
          <Flex.Item>
            <View
              padding="medium"
              as="div"
              background="light"
              width="100%"
            >
              <Flex justifyItems="space-between">
                <Flex.Item shrink>
                  <Select
                    name="rubric view"
                    renderLabel={<ScreenReaderContent>Rubric View</ScreenReaderContent>}
                    onChange={this.handleViewChange}
                    value={this.state.isDetailed ? "detailed" : "concise"}
                  >
                    <option value="detailed" label="Detailed View">Detailed View</option>
                    <option value="concise" label="Quick View"> Quick View</option>
                  </Select>

                </Flex.Item>
                <Flex.Item grow textAlign="end">
                  <Button variant="light" margin="0 x-small 0 0" onClick={this.handleRubricClose}>Cancel</Button>
                  <Button variant="primary">Save</Button>
                </Flex.Item>
              </Flex>
            </View>
          </Flex.Item>
        </Flex>
      </View>
    )
  }
}
