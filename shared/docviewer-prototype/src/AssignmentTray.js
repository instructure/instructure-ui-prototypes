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
import { Badge, Heading, List, Text } from '@instructure/ui-elements'
import { Button } from '@instructure/ui-buttons'
import { ScreenReaderContent } from '@instructure/ui-a11y'
import { IconXLine } from '@instructure/ui-icons'

import SingleSelect from './SingleSelect'

export default class AssignmentTray extends React.Component {
  static propTypes = {
    onRequestHideAssignments: PropTypes.func
  }

  static defaultProps = {
    onRequestHideAssignments: () => {}
  }

  handleAssignmentsClose = () => {
    this.props.onRequestHideAssignments()
  }

  render() {
    return (
      <View
        as="div"
        height="100%"
        padding="medium"
        textAlign="start"
      >
        <Flex justifyItems="space-between" margin="0 0 medium 0">
          <Flex.Item grow>
            <Heading level="h3" margin="0 0 small 0">Assignments</Heading>
          </Flex.Item>
          <Flex.Item>
            <Button
              variant="icon"
              icon={IconXLine}
              onClick={this.handleAssignmentsClose}
            >
              <ScreenReaderContent>Close</ScreenReaderContent>
            </Button>
          </Flex.Item>
        </Flex>
        <SingleSelect
          selectLabel="My Courses"
          selectedOptionId="1"
          options={[
            { id: '1', label: 'All Active Courses' },
            { id: '2', label: 'Creative Writing 102' },
            { id: '3', label: 'Creative Writing 103' },
            { id: '4', label: 'English 101' },
            { id: '5', label: 'English 102' }
          ]}
        />
        <List variant="unstyled" itemSpacing="x-small">
          <List.Item>
            <View as="div" borderWidth="0 0 small 0" padding="medium 0 small 0" margin="x-small 0">
              <Text weight="bold">Creative Writing 102</Text>
            </View>
            <List variant="unstyled" itemSpacing="small">
              <List.Item>
                <Flex>
                  <Flex.Item grow shrink margin="0 small 0 0">
                    <Text>Week 2: Write a short story with five characters</Text>
                  </Flex.Item>
                  <Flex.Item>
                    <Badge
                      standalone
                      count={25}
                      margin="0 small 0 0"
                    />
                  </Flex.Item>
                </Flex>
              </List.Item>
              <List.Item>
                <Flex>
                  <Flex.Item grow shrink margin="0 small 0 0">
                    <Text>Week 3: Creating a story outline</Text>
                  </Flex.Item>
                  <Flex.Item>
                    <Badge
                      standalone
                      count={38}
                      margin="0 small 0 0"
                    />
                  </Flex.Item>
                </Flex>
              </List.Item>
              <List.Item>
                <Flex>
                  <Flex.Item grow shrink margin="0 small 0 0">
                    <Text>Pre-Test</Text>
                  </Flex.Item>
                  <Flex.Item>
                    <Badge
                      standalone
                      count={2}
                      margin="0 small 0 0"
                    />
                  </Flex.Item>
                </Flex>
              </List.Item>
            </List>
          </List.Item>
          <List.Item>
            <View as="div" borderWidth="0 0 small 0" padding="medium 0 small 0" margin="x-small 0">
              <Text weight="bold">English 101</Text>
            </View>
            <List variant="unstyled" itemSpacing="small">
              <List.Item>
                <Flex>
                  <Flex.Item grow shrink margin="0 small 0 0">
                    <Text>Week 2: Grammar basics</Text>
                  </Flex.Item>
                  <Flex.Item>
                    <Badge
                      standalone
                      count={42}
                      margin="0 small 0 0"
                    />
                  </Flex.Item>
                </Flex>
              </List.Item>
              <List.Item>
                <Flex>
                  <Flex.Item grow shrink margin="0 small 0 0">
                    <Text>Group Discussion</Text>
                  </Flex.Item>
                  <Flex.Item>
                    <Badge
                      standalone
                      count={37}
                      margin="0 small 0 0"
                    />
                  </Flex.Item>
                </Flex>
              </List.Item>
            </List>
          </List.Item>
        </List>
      </View>
    )
  }
}
