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
import { Heading, List } from '@instructure/ui-elements'
import { Button } from '@instructure/ui-buttons'
import { ScreenReaderContent } from '@instructure/ui-a11y'
import {
  IconMoveEndLine,
  IconCommonsLine,
  IconAnalyticsLine,
  IconAnnouncementLine,
  IconCalendarDayLine,
  IconLockLine,
  IconTrashLine
} from '@instructure/ui-icons'

export default class ActionTray extends React.Component {
  static propTypes = {
    onRequestHideActions: PropTypes.func
  }

  static defaultProps = {
    onRequestHideActions: () => {}
  }

  handleActionsClose = () => {
    this.props.onRequestHideActions()
  }

  render() {
    return (
      <View
        as="div"
        height="100%"
        width="16em"
        padding="small medium"
        textAlign="start"
      >
        <Flex justifyItems="space-between" margin="0 0 medium 0">
          <Flex.Item grow>
            <Heading level="h3" margin="0 0 0 small">Actions</Heading>
          </Flex.Item>
          <Flex.Item>
            <Button
              variant="icon"
              icon={IconMoveEndLine}
              onClick={this.handleActionsClose}
            >
              <ScreenReaderContent>Close</ScreenReaderContent>
            </Button>
          </Flex.Item>
        </Flex>
        <List variant="unstyled" itemSpacing="xx-small">
          <List.Item>
            <Button variant="link" icon={IconCommonsLine} href="#">
              Share to Commons
            </Button>
          </List.Item>
          <List.Item>
            <Button variant="link" icon={IconAnnouncementLine} href="#">
              Student View
            </Button>
          </List.Item>
          <List.Item>
            <Button variant="link" icon={IconAnalyticsLine} href="#">
              Course Statistics
            </Button>
          </List.Item>
          <List.Item>
            <Button variant="link" icon={IconCalendarDayLine} href="#">
              Course Calendar
            </Button>
          </List.Item>
          <List.Item>
            <Button variant="link" icon={IconLockLine} href="#">
              Conclude this Course
            </Button>
          </List.Item>
          <List.Item>
            <Button variant="link" icon={IconTrashLine} href="#">
              Delete this Course
            </Button>
          </List.Item>
        </List>
      </View>
    )
  }
}
