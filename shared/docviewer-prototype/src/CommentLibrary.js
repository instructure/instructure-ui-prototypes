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

// TODO: if the comments already have an edit button next to the delete do the
// titles themselves need to be clickable? if not they would be text color vs
// the link blue.

import React from 'react'
import PropTypes from 'prop-types'
import { View, Flex } from '@instructure/ui-layout'
import { Heading, List, Text } from '@instructure/ui-elements'
import { TextArea } from '@instructure/ui-forms'
import { Button } from '@instructure/ui-buttons'
import { TextInput } from '@instructure/ui-text-input'
import { ScreenReaderContent } from '@instructure/ui-a11y'
import {
  IconXLine,
  IconSearchLine,
  IconEditLine,
  IconTrashLine,
  IconAddLine } from '@instructure/ui-icons'

export default class CommentLibrary extends React.Component {
  static propTypes = {
    onRequestHideLibrary: PropTypes.func
  }

  static defaultProps = {
    onRequestHideLibrary: () => {}
  }

state = {
      showCommentInput: false
    }

  handleShowCommentInput = () => {
    this.setState({
      showCommentInput: true
    })
  }

  handleHideCommentInput = () => {
    this.setState({
      showCommentInput: false
    })
  }

  handleLibraryClose = () => {
    this.props.onRequestHideLibrary()
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
          <Flex.Item grow shrink>
            <Heading level="h3" margin="0 0 small 0">Comment Library</Heading>
          </Flex.Item>
          <Flex.Item>
            <Button
              variant="icon"
              icon={IconXLine}
              onClick={this.handleLibraryClose}
            >
              <ScreenReaderContent>Close</ScreenReaderContent>
            </Button>
          </Flex.Item>
        </Flex>
        <View as="div" borderWidth="0 0 small 0" padding="small 0 medium 0">
          <TextInput
            renderLabel={<ScreenReaderContent>Search All Comments</ScreenReaderContent>}
            type="search"
            placeholder="Search"
            renderAfterInput={<IconSearchLine inline={false} />}
          />
        </View>
        <List variant="unstyled" itemSpacing="x-small">
          <List.Item>
            <View as="div" padding="x-small 0" borderWidth="0 0 small 0">
              <Flex>
                <Flex.Item grow shrink margin="0 small 0 0">
                  <Button variant="link" fluidWidth>
                    Great job on character development
                  </Button>
                </Flex.Item>
                <Flex.Item>
                  <Button icon={IconEditLine} size="small">
                    <ScreenReaderContent>Edit Comment</ScreenReaderContent>
                  </Button>
                  <Button icon={IconTrashLine} size="small" margin="0 0 0 x-small">
                    <ScreenReaderContent>Delete Comment</ScreenReaderContent>
                  </Button>
                </Flex.Item>
              </Flex>
            </View>
          </List.Item>
          <List.Item>
            <View as="div" padding="xx-small 0 x-small 0" borderWidth="0 0 small 0">
              <Flex>
                <Flex.Item grow shrink margin="0 small 0 0">
                  <Button variant="link" fluidWidth>
                    Great time to go back and do more research
                  </Button>
                </Flex.Item>
                <Flex.Item>
                  <Button icon={IconEditLine} size="small">
                    <ScreenReaderContent>Edit Comment</ScreenReaderContent>
                  </Button>
                  <Button icon={IconTrashLine} size="small" margin="0 0 0 x-small">
                    <ScreenReaderContent>Delete Comment</ScreenReaderContent>
                  </Button>
                </Flex.Item>
              </Flex>
            </View>
          </List.Item>
          <List.Item>
            <View as="div" padding="xx-small 0 x-small 0" borderWidth="0 0 small 0">
              <Flex>
                <Flex.Item grow shrink margin="0 small 0 0">
                  <Button variant="link" fluidWidth>
                    Thousands Now Have Adware Removal Who Never Thought They Could
                  </Button>
                </Flex.Item>
                <Flex.Item>
                  <Button icon={IconEditLine} size="small">
                    <ScreenReaderContent>Edit Comment</ScreenReaderContent>
                  </Button>
                  <Button icon={IconTrashLine} size="small" margin="0 0 0 x-small">
                    <ScreenReaderContent>Delete Comment</ScreenReaderContent>
                  </Button>
                </Flex.Item>
              </Flex>
            </View>
          </List.Item>
          <List.Item>
            <View as="div" padding="xx-small 0 x-small 0" borderWidth="0 0 small 0">
              <Flex>
                <Flex.Item grow shrink margin="0 small 0 0">
                  <Button variant="link" fluidWidth>
                    The Flash Tutorial should help
                  </Button>
                </Flex.Item>
                <Flex.Item>
                  <Button icon={IconEditLine} size="small">
                    <ScreenReaderContent>Edit Comment</ScreenReaderContent>
                  </Button>
                  <Button icon={IconTrashLine} size="small" margin="0 0 0 x-small">
                    <ScreenReaderContent>Delete Comment</ScreenReaderContent>
                  </Button>
                </Flex.Item>
              </Flex>
            </View>
          </List.Item>
          <List.Item>
            <View as="div" padding="xx-small 0 x-small 0" borderWidth="0 0 small 0">
              <Flex>
                <Flex.Item grow shrink margin="0 small 0 0">
                  <Button variant="link" fluidWidth>
                    A guide to MRI scans
                  </Button>
                </Flex.Item>
                <Flex.Item>
                  <Button icon={IconEditLine} size="small">
                    <ScreenReaderContent>Edit Comment</ScreenReaderContent>
                  </Button>
                  <Button icon={IconTrashLine} size="small" margin="0 0 0 x-small">
                    <ScreenReaderContent>Delete Comment</ScreenReaderContent>
                  </Button>
                </Flex.Item>
              </Flex>
            </View>
          </List.Item>
        </List>
        { !this.state.showCommentInput ? (
          <View as="div" textAlign="center" padding="medium 0">
            <Button
              variant="link"
              icon={<IconAddLine inline={false} />}
              onClick={this.handleShowCommentInput}
            >
              New Comment
            </Button>
          </View>
        ) : null }

        { this.state.showCommentInput ? (
          <div>
            <View as="div" padding="medium 0">
              <TextArea
                label="Comment"
              />
            </View>
            <View as="div" padding="small 0" textAlign="end">
              <Button margin="0 x-small 0 0">
                Cancel
              </Button>
              <Button
                variant="primary"
                onClick={this.handleHideCommentInput}
              >
                Submit
              </Button>
            </View>
          </div>
        ) : null }
      </View>
    )
  }
}
