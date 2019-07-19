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
import { Text } from '@instructure/ui-elements'
import { View, Flex } from '@instructure/ui-layout'
import { Button } from '@instructure/ui-buttons'
import { NumberInput } from '@instructure/ui-number-input'
import { TextArea } from '@instructure/ui-forms'
import { Tray } from '@instructure/ui-overlays'
import { ScreenReaderContent } from '@instructure/ui-a11y'
import {
  IconGradebookLine,
  IconQuizStatsTimeLine,
  IconCommentLine,
  IconQuestionLine,
  IconDownloadLine,
  IconRubricLine,
  IconMoreLine } from '@instructure/ui-icons'

import SingleSelect from '../SingleSelect'
import HelpTray from '../HelpTray'

class RightSide extends Component {

  constructor (props) {
    super(props)
    this.state = {
      showHelp: false
    }
  }

  handleShowHelp = () => {
    this.setState({
      showHelp: true
    })
  }

  handleHideHelp = () => {
    this.setState({
      showHelp: false
    })
  }

  render () {
    return (
      <View
        as="aside"
        minHeight="100vh"
        padding="small medium"
        borderWidth="0 0 0 small"
      >
        <View as="div" textAlign="center" margin="auto" padding="small 0">
          <Button variant="icon" icon={IconGradebookLine} margin="x-small">
              <ScreenReaderContent>Gradebook</ScreenReaderContent>
          </Button>
          <Button variant="icon" icon={IconQuizStatsTimeLine} margin="x-small">
              <ScreenReaderContent>Submissions</ScreenReaderContent>
          </Button>
          <Button
            variant="icon"
            icon={IconQuestionLine} 
            margin="x-small"
            onClick={() => { this.setState({ showHelp: true }) }}
            >
            <ScreenReaderContent>Help</ScreenReaderContent>
          </Button>
          <Tray
            label="Help"
            size="small"
            placement="end"
            open={this.handleShowHelp}
            shouldCloseOnDocumentClick
          >
            <HelpTray onRequestHideHelp={this.handleHideHelp} />
          </Tray>

          <Button variant="icon" icon={IconCommentLine} margin="x-small">
              <ScreenReaderContent>Comments</ScreenReaderContent>
          </Button>
        </View>
        <View
          as="div"
          padding="small 0"
          borderWidth="small 0 0 0"
        >
          <View as="div" height="5rem" textAlign="center">
            Assignment Carousel
          </View>
          <View as="div" height="10rem" textAlign="center">
            Avatar Plus Name Carousel
          </View>
          <Flex justifyItems="space-between" wrapItems>
            <Flex.Item padding="0 x-small 0 0" grow>
              <SingleSelect
                selectLabel="Submissions"
                selectedOptionId="1"
                options={[
                  { id: '1', label: 'FileX.PDF' },
                  { id: '2', label: 'FileY.PDF' },
                  { id: '3', label: 'FileZ.PDF Link' }
                ]}
                message={[
                  { text: 'Submitted Sep 12 at 9:08 am', type: 'hint' }
                ]}
              />
            </Flex.Item>
            <Flex.Item align="end">
              <Button icon={IconDownloadLine}>
                <ScreenReaderContent>Download Submission</ScreenReaderContent>
              </Button>
            </Flex.Item>
          </Flex>
          <Flex justifyItems="space-between" padding="medium 0 x-small 0">
            <Flex.Item padding="0 xx-small 0 0">
              <Text>Items Graded</Text>
            </Flex.Item>
            <Flex.Item align="end">
              <Text weight="bold">4 of 31</Text>
            </Flex.Item>
          </Flex>
          <Flex justifyItems="space-between" padding="x-small 0 small 0">
            <Flex.Item padding="0 xx-small 0 0">
              <Text>Average Grade</Text>
            </Flex.Item>
            <Flex.Item align="end">
              <Text weight="bold">72</Text>
            </Flex.Item>
          </Flex>
          <View as="div" borderWidth="small 0 0 0" padding="small 0" margin="small 0">
            <Flex justifyItems="space-between" padding="small 0 medium 0" wrapItems>
              <Flex.Item padding="0 x-small 0 0" grow>
                <NumberInput
                  renderLabel="Grade Out of 100"
                />
              </Flex.Item>
              <Flex.Item align="end">
                <Button icon={IconRubricLine}>
                  <ScreenReaderContent>Download Submission</ScreenReaderContent>
                </Button>
              </Flex.Item>
            </Flex>
            <TextArea
              label="Comments"
            />
            <View as="div" padding="small 0" textAlign="end">
              <Button margin="0 x-small 0 0">Submit</Button>
              <Button margin="0 0 0 0" icon={IconMoreLine}>
                <ScreenReaderContent>More Options</ScreenReaderContent>
              </Button>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default RightSide
