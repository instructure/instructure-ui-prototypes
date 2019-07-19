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
import { Heading, List, Text } from '@instructure/ui-elements'
import { Button } from '@instructure/ui-buttons'
import { ScreenReaderContent } from '@instructure/ui-a11y'
import { IconXLine } from '@instructure/ui-icons'

export default class HelpTray extends React.Component {
  static propTypes = {
    onRequestHideHelp: PropTypes.func
  }

  static defaultProps = {
    onRequestHideHelp: () => {}
  }

  handleHelpClose = () => {
    this.props.onRequestHideHelp()
  }

  render() {
    return (
      <View
        as="div"
        height="100%"
        width="16em"
        padding="medium"
        textAlign="start"
      >
        <Flex justifyItems="space-between" margin="0 0 medium 0">
          <Flex.Item grow>
            <Heading level="h3" margin="0 0 small 0">Help</Heading>
          </Flex.Item>
          <Flex.Item>
            <Button
              variant="icon"
              icon={IconXLine}
              onClick={this.handleHelpClose}
            >
              <ScreenReaderContent>Close</ScreenReaderContent>
            </Button>
          </Flex.Item>
        </Flex>
        <List variant="unstyled" itemSpacing="x-small">
          <List.Item>
            <Heading level="h3" margin="0 0 small 0">Keyboard Shortcuts</Heading>
            <List variant="unstyled" itemSpacing="x-small">
                <List.Item>
                  <Text weight="bold">j:</Text><Text> Next Student</Text>
                </List.Item>
                <List.Item>
                  <Text weight="bold">k:</Text><Text> Previous Student</Text>
                </List.Item>
                <List.Item>
                  <Text weight="bold">l:</Text><Text> Leave Comment</Text>
                </List.Item>
                <List.Item>
                  <Text weight="bold">m:</Text><Text> Change Grade</Text>
                </List.Item>
                <List.Item>
                  <Text weight="bold">n:</Text><Text> Use Rubric</Text>
                </List.Item>
            </List>
          </List.Item>
          <List.Item>
            <Heading level="h3" margin="medium 0 small 0">Canvas Help</Heading>
            <List variant="unstyled" itemSpacing="x-small">
                <List.Item>
                  <Button
                    variant="link"
                  >
                    Search the Canvas Guides
                  </Button>
                  <Text as="div" size="small">Find answers to common questions</Text>
                </List.Item>
                <List.Item>
                  <Button
                    variant="link"
                  >
                    Canvas 101 in 10 minutes
                  </Button>
                  <Text as="div" size="small">Join this Course</Text>
                </List.Item>
                <List.Item>
                  <Button
                    variant="link"
                  >
                    Submit a Feature Idea
                  </Button>
                  <Text as="div" size="small">Have an idea to improve Canvas?</Text>
                </List.Item>
                <List.Item>
                  <Button
                    variant="link"
                  >
                    Report a Problem
                  </Button>
                  <Text as="div" size="small">If Canvas misbehaves, tell us about it</Text>
                </List.Item>
            </List>
          </List.Item>
        </List>
      </View>
    )
  }
}
