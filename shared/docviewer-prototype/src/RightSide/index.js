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
import CommentLibrary from '../CommentLibrary'
import AssignmentTray from '../AssignmentTray'
import StudentTray from '../StudentTray'
import RubricTray from '../RubricTray'

class RightSide extends Component {
  constructor() {
    super()
    this.state = {
      showHelp: false,
      showLibrary: false,
      showStudents: false,
      showAssignments: false,
      showRubric: false
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

  handleShowLibrary = () => {
    this.setState({
      showLibrary: true
    })
  }

  handleHideLibrary = () => {
    this.setState({
      showLibrary: false
    })
  }

  handleShowAssignments = () => {
    this.setState({
      showAssignments: true
    })
  }

  handleHideAssignments = () => {
    this.setState({
      showAssignments: false
    })
  }

  handleShowStudents = () => {
    this.setState({
      showStudents: true
    })
  }

  handleHideStudents = () => {
    this.setState({
      showStudents: false
    })
  }

  handleShowRubric = () => {
    this.setState({
      showRubric: true
    })
  }

  handleHideRubric = () => {
    this.setState({
      showRubric: false
    })
  }

  render () {
    return (
      <View
        as="aside"
        minHeight="100vh"
        width="20rem"
        padding="small medium"
        borderWidth="0 0 0 small"
      >
        <View as="div" textAlign="center" margin="auto" padding="small 0">
          <Button
            variant="icon"
            icon={IconGradebookLine}
            margin="x-small"
            onClick={this.handleShowAssignments}
          >
              <ScreenReaderContent>Gradebook</ScreenReaderContent>
          </Button>
          <Tray
            label="Assignments"
            open={this.state.showAssignments}
            placement="end"
            size="small"
            onDismiss={this.handleHideAssignments}
          >
            <AssignmentTray onRequestHideAssignments={this.handleHideAssignments} />
          </Tray>
          <Button
            variant="icon"
            icon={IconQuizStatsTimeLine}
            margin="x-small"
            onClick={this.handleShowStudents}
          >
              <ScreenReaderContent>Submissions</ScreenReaderContent>
          </Button>
          <Tray
            label="Students"
            open={this.state.showStudents}
            placement="end"
            size="small"
            onDismiss={this.handleHideStudents}
          >
            <StudentTray onRequestHideStudents={this.handleHideStudents} />
          </Tray>
          <Button
            variant="icon"
            icon={IconQuestionLine} 
            margin="x-small"
            onClick={this.handleShowHelp}
            >
            <ScreenReaderContent>Help</ScreenReaderContent>
          </Button>
          <Tray
            label="Canvas Help"
            open={this.state.showHelp}
            placement="end"
            size="small"
            onDismiss={this.handleHideHelp}
          >
            <HelpTray onRequestHideHelp={this.handleHideHelp} />
          </Tray>
          <Button
            variant="icon"
            icon={IconCommentLine}
            margin="x-small"
            onClick={this.handleShowLibrary}
          >
            <ScreenReaderContent>Comment Library</ScreenReaderContent>
          </Button>
          <Tray
            label="Canvas Help"
            open={this.state.showLibrary}
            placement="end"
            size="regular"
            onDismiss={this.handleHideLibrary}
          >
            <CommentLibrary onRequestHideLibrary={this.handleHideLibrary} />
          </Tray>
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
          <Flex justifyItems="space-between">
            <Flex.Item margin="0 x-small 0 0" grow shrink>
              <SingleSelect
                selectLabel="Submissions"
                selectedOptionId="1"
                options={[
                  { id: '1', label: 'FileX.PDF' },
                  { id: '2', label: 'FileY.PDF' },
                  { id: '3', label: 'FileZ.PDF' }
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
            <Flex.Item margin="0 xx-small 0 0">
              <Text>Items Graded</Text>
            </Flex.Item>
            <Flex.Item>
              <Text weight="bold">4 of 31</Text>
            </Flex.Item>
          </Flex>
          <Flex justifyItems="space-between" padding="x-small 0 small 0">
            <Flex.Item margin="0 xx-small 0 0">
              <Text>Average Grade</Text>
            </Flex.Item>
            <Flex.Item>
              <Text weight="bold">72</Text>
            </Flex.Item>
          </Flex>
          <View as="div" borderWidth="small 0 0 0" padding="small 0" margin="small 0">
            <Flex justifyItems="space-between" padding="small 0 medium 0">
              <Flex.Item margin="0 x-small 0 0" grow shrink>
                <NumberInput
                  renderLabel="Grade Out of 100"
                />
              </Flex.Item>
              <Flex.Item align="end">
                <Button
                  icon={IconRubricLine}
                  onClick={this.handleShowRubric}
                >
                  <ScreenReaderContent>Download Submission</ScreenReaderContent>
                </Button>
                <Tray
                  label="Rubric"
                  open={this.state.showRubric}
                  placement="end"
                  size="regular"
                  onDismiss={this.handleHideRubric}
                >
                  <RubricTray onRequestHideRubric={this.handleHideRubric} />
                </Tray>
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
