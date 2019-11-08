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

//  NOTE: with current NumberInput the input width can NOT be narrower than the label
//  this could be an issue when i18n comes into play and there is a 3-digit width
//  input but the label after translation goes extremely wide


import React, { Component } from 'react'
import { Avatar, Text } from '@instructure/ui-elements'
import { View, Flex } from '@instructure/ui-layout'
import { Button } from '@instructure/ui-buttons'
import { NumberInput } from '@instructure/ui-number-input'
import { Menu } from '@instructure/ui-menu'
import { TextArea } from '@instructure/ui-forms'
import { Tray } from '@instructure/ui-overlays'
import { Tooltip } from '@instructure/ui-tooltip'
import { ScreenReaderContent } from '@instructure/ui-a11y'
import {
  IconGradebookLine,
  IconQuizStatsTimeLine,
  IconCommentLine,
  IconQuestionLine,
  IconDownloadLine,
  IconRubricLine,
  IconOutcomesLine,
  IconArrowOpenStartLine,
  IconArrowOpenEndLine,
  IconMoreLine,
  IconPaperclipLine,
  IconVideoLine,
  IconAudioLine } from '@instructure/ui-icons'

import SingleSelect from '../SingleSelect'
import HelpTray from '../HelpTray'
import CommentLibrary from '../CommentLibrary'
import AssignmentTray from '../AssignmentTray'
import StudentTray from '../StudentTray'
import RubricTray from '../RubricTray'
import OutcomeTray from '../OutcomeTray'

class RightSide extends Component {
  constructor() {
    super()
    this.state = {
      showHelp: false,
      showLibrary: false,
      showStudents: false,
      showAssignments: false,
      showRubric: false,
      showOutcome: false
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

  handleShowOutcome = () => {
    this.setState({
      showOutcome: true
    })
  }

  handleHideOutcome = () => {
    this.setState({
      showOutcome: false
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
          <Tooltip
            renderTip="Gradebook"
            placement="bottom"
            on={['hover', 'focus']}
          >
            <Button
              variant="icon"
              icon={IconGradebookLine}
              margin="x-small"
            >
              <ScreenReaderContent>Gradebook</ScreenReaderContent>
            </Button>
          </Tooltip>
          <Tooltip
            renderTip="Assessment Audit"
            placement="bottom"
            on={['hover', 'focus']}
          >
            <Button
              variant="icon"
              icon={IconQuizStatsTimeLine}
              margin="x-small"
            >
                <ScreenReaderContent>Assessment Audit</ScreenReaderContent>
            </Button>
          </Tooltip>
          <Tooltip
            renderTip="Help"
            placement="bottom"
            on={['hover', 'focus']}
          >
            <Button
              variant="icon"
              icon={IconQuestionLine}
              margin="x-small"
              onClick={this.handleShowHelp}
              >
              <ScreenReaderContent>Help</ScreenReaderContent>
            </Button>
          </Tooltip>
          <Tray
            label="Canvas Help"
            open={this.state.showHelp}
            placement="end"
            size="small"
            onDismiss={this.handleHideHelp}
          >
            <HelpTray onRequestHideHelp={this.handleHideHelp} />
          </Tray>
          <Tooltip
            renderTip="Comment Library"
            placement="bottom"
            on={['hover', 'focus']}
          >
            <Button
              variant="icon"
              icon={IconCommentLine}
              margin="x-small"
              onClick={this.handleShowLibrary}
            >
              <ScreenReaderContent>Comment Library</ScreenReaderContent>
            </Button>
          </Tooltip>
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
          <Flex justifyItems="space-between" padding="x-small 0 medium 0">
            <Flex.Item margin="0 xx-small 0 0">
              <Text>4/31 Graded</Text>
            </Flex.Item>
            <Flex.Item>
              <Text>Avg Grade 14</Text>
            </Flex.Item>
          </Flex>
          <Flex justifyItems="space-between" textAlign="center" margin="small 0 medium 0">
            <Flex.Item>
              <Button variant="icon" size="small" icon={<IconArrowOpenStartLine color="brand" />}>
                <ScreenReaderContent>Previous Assignment</ScreenReaderContent>
              </Button>
            </Flex.Item>
            <Flex.Item grow shrink>
              <Button fluidWidth variant="link" onClick={this.handleShowAssignments}>
                <View as="div" textAlign="center">Week 2: Write a short story with five characters</View>
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
            </Flex.Item>
            <Flex.Item>
              <Button variant="icon" size="small" icon={<IconArrowOpenEndLine color="brand" />}>
                <ScreenReaderContent>Next Assignment</ScreenReaderContent>
              </Button>
            </Flex.Item>
          </Flex>
          <Flex justifyItems="space-between" textAlign="center" margin="medium 0">
            <Flex.Item>
              <Button variant="icon" size="small" icon={<IconArrowOpenStartLine color="brand" />}>
                <ScreenReaderContent>Previous Student</ScreenReaderContent>
              </Button>
            </Flex.Item>
            <Flex.Item grow shrink>
              <Button variant="link" onClick={this.handleShowStudents}>
                <Avatar name="Mabelle Thompson" size="x-large" src="https://source.unsplash.com/random" />
                <Text as="div">Mabelle Thompson</Text>
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
            </Flex.Item>
            <Flex.Item>
              <Button variant="icon" size="small" icon={<IconArrowOpenEndLine color="brand" />}>
                <ScreenReaderContent>Next Student</ScreenReaderContent>
              </Button>
            </Flex.Item>
          </Flex>
          <View as="div" borderWidth="small 0 0 0" padding="small 0" margin="small 0">
            <Flex justifyItems="space-between">
              <Flex.Item padding="small x-small small 0" grow shrink>
                <SingleSelect
                  selectLabel="Submissions"
                  selectedOptionId="1"
                  options={[
                    { id: '1', label: 'FileX.PDF' },
                    { id: '2', label: 'FileY.PDF' },
                    { id: '3', label: 'FileZ.PDF' }
                  ]}
                  selectMessage={[
                    { text: 'Submitted Sep 12 at 9:08 am', type: 'hint' }
                  ]}
                />
              </Flex.Item>
              <Flex.Item >
                <Tooltip
                  renderTip="Download Submission"
                  placement="bottom"
                  on={['hover', 'focus']}
                >
                  <Button icon={IconDownloadLine}>
                    <ScreenReaderContent>Download Submission</ScreenReaderContent>
                  </Button>
                </Tooltip>
              </Flex.Item>
            </Flex>
            <Flex padding="small 0">
              <Flex.Item margin="0 x-small 0 0">
                <NumberInput
                  width="8rem"
                  renderLabel="Grade Out of 16"
                />
              </Flex.Item>
              <Flex.Item margin="0 x-small 0 0" align="end">
                <Tooltip
                    renderTip="View Rubric"
                    placement="bottom"
                    on={['hover', 'focus']}
                  >
                  <Button
                    icon={IconRubricLine}
                    onClick={this.handleShowRubric}
                  >
                    <ScreenReaderContent>View Rubric</ScreenReaderContent>
                  </Button>
                </Tooltip>
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
              <Flex.Item align="end">
                <Tooltip
                    renderTip="View Outcome"
                    placement="bottom"
                    on={['hover', 'focus']}
                  >
                  <Button
                    icon={IconOutcomesLine}
                    onClick={this.handleShowOutcome}
                  >
                    <ScreenReaderContent>View Outcome</ScreenReaderContent>
                  </Button>
                </Tooltip>
                <Tray
                  label="Outcome"
                  open={this.state.showOutcome}
                  placement="end"
                  size="regular"
                  onDismiss={this.handleHideOutcome}
                >
                  <OutcomeTray onRequestHideOutcome={this.handleHideOutcome} />
                </Tray>
              </Flex.Item>
            </Flex>
            <View as="div" padding="small 0">
              <SingleSelect
                    selectLabel="Set Status"
                    selectedOptionId="1"
                    options={[
                      { id: '1', label: 'None' },
                      { id: '2', label: 'Closed' },
                      { id: '3', label: 'Open' }
                    ]}
                  />
            </View>
            <View as="div" padding="small 0">
              <TextArea
                label="Comments"
              />
            </View>
            <View as="div" padding="small 0" textAlign="end">
              <Menu
                placement="bottom"
                trigger={
                  <Button margin="0 x-small 0 0" icon={IconMoreLine}>
                    <ScreenReaderContent>Show Options</ScreenReaderContent>
                  </Button>
                }
              >
                <Menu.Item>
                  <Flex>
                    <Flex.Item padding="0 x-small 0 0"><IconPaperclipLine /></Flex.Item>
                    <Flex.Item>Attachment</Flex.Item>
                  </Flex>
                </Menu.Item>
                <Menu.Item>
                  <Flex>
                    <Flex.Item padding="0 x-small 0 0"><IconVideoLine /></Flex.Item>
                    <Flex.Item>Video</Flex.Item>
                  </Flex>
                </Menu.Item>
                <Menu.Item>
                  <Flex>
                    <Flex.Item padding="0 x-small 0 0"><IconAudioLine /></Flex.Item>
                    <Flex.Item>Audio</Flex.Item>
                  </Flex>
                </Menu.Item>
                <Menu.Item>
                  <Flex>
                    <Flex.Item padding="0 x-small 0 0"><IconDownloadLine /></Flex.Item>
                    <Flex.Item>Download Comments</Flex.Item>
                  </Flex>
                </Menu.Item>
              </Menu>
              <Button margin="0 0 0 0">
                Add Comment
              </Button>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default RightSide
