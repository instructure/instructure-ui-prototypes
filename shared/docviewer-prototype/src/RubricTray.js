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
import { TextArea } from '@instructure/ui-forms'
import { Button } from '@instructure/ui-buttons'
import { ToggleDetails } from '@instructure/ui-toggle-details'
import { ScreenReaderContent } from '@instructure/ui-a11y'
import { IconXLine, IconNoteLine } from '@instructure/ui-icons'

import RubricCriteria from './RubricCriteria'

export default class RubricTray extends React.Component {
  static propTypes = {
    onRequestHideRubric: PropTypes.func
  }
  state = {
    showNoteInput: false
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
  static defaultProps = {
    onRequestHideRubric: () => {}
  }

  handleRubricClose = () => {
    this.props.onRequestHideRubric()
  }

  render() {
    return (
      <View
        as="div"
        height="100%"
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
        <View as="div" borderWidth="0 0 small 0" margin="medium 0">
          <ToggleDetails
            fluidWidth
            summary={
              <Flex padding="small 0">
                <Flex.Item grow>
                  <Text weight="bold" size="large">Setting</Text>
                </Flex.Item>
                <Flex.Item>
                  <View
                    background="inverse"
                    borderWidth="small"
                    borderRadius="medium"
                    padding="x-small small"
                  >
                    3/4
                  </View>
                </Flex.Item>
              </Flex>
            }
          >
            <View as="div" padding="small 0">
              <Text>How well can the student describe the setting of their story. This relates to location, time period and moods and attitudes of the socal structure.</Text>
            </View>
            <View as="form" padding="small 0">
              <RubricCriteria
                id="exceptional"
                name="setting"
                value="4"
                label="Exceptional"
                summary="Many vivid, descriptive words are used to tell when and where the story took place."
              />
              <RubricCriteria
                id="good"
                name="setting"
                value="3"
                label="Good"
                summary="Some vivid, descriptive words are used to tell the audience when and where the story took place."
              />
              <RubricCriteria
                id="fair"
                name="setting"
                value="2"
                label="Fair"
                summary="The reader can figure out when and where the story took place, but the author didn't supply much detail."
              />
              <RubricCriteria
                id="poor"
                name="setting"
                value="1"
                label="Poor"
                summary="The reader has trouble figuring out when and where the story took place."
              />
            </View>
            { !this.state.showNoteInput ? (
              <View as="div" textAlign="end" padding="x-small 0">
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
              <div>
                <View as="div" padding="medium 0">
                  <TextArea
                    label="Rating Note"
                  />
                </View>
                <View as="div" padding="small 0" textAlign="end">
                  <Button margin="0 x-small 0 0">
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    onClick={this.handleHideNoteInput}
                  >
                    Save
                  </Button>
                </View>
              </div>
            ) : null }
          </ToggleDetails>
        </View>
        <View as="div" borderWidth="0 0 small 0" padding="small 0">
          <ToggleDetails fluidWidth
            summary={
              <Flex padding="small 0">
                <Flex.Item grow>
                  <Text weight="bold" size="large">Characters</Text>
                </Flex.Item>
                <Flex.Item>
                  <View
                    background="light"
                    borderWidth="small"
                    borderRadius="medium"
                    padding="x-small small"
                  >
                    -/4
                  </View>
                </Flex.Item>
              </Flex>
            }
          >
            <View as="div" padding="small 0">
              <Text>How well does the student flesh out their characters.</Text>
            </View>
            <View as="form" padding="small 0">
              <RubricCriteria
                id="exceptional"
                name="character"
                value="4"
                label="Exceptional"
                summary="The main characters are named and clearly described. Most readers could describe the characters accurately."
              />
              <RubricCriteria
                id="good"
                name="character"
                value="3"
                label="Good"
                summary="The main characters are named and described. Most readers would have some idea of what the characters looked like."
              />
              <RubricCriteria
                id="fair"
                name="character"
                value="2"
                label="Fair"
                summary="The main characters are named. The reader knows very little about the characters."
              />
              <RubricCriteria
                id="poor"
                name="character"
                value="1"
                label="Poor"
                summary="It is hard to tell who the main characters are."
              />
            </View>
            { !this.state.showNoteInput ? (
              <View as="div" textAlign="end" padding="x-small 0">
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
              <div>
                <View as="div" padding="medium 0">
                  <TextArea
                    label="Rating Note"
                  />
                </View>
                <View as="div" padding="small 0" textAlign="end">
                  <Button margin="0 x-small 0 0">
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    onClick={this.handleHideNoteInput}
                  >
                    Save
                  </Button>
                </View>
              </div>
            ) : null }
          </ToggleDetails>
        </View>
        <View as="div" borderWidth="0 0 small 0" padding="small 0">
          <ToggleDetails fluidWidth
            summary={
              <Flex padding="small 0">
                <Flex.Item grow>
                  <Text weight="bold" size="large">Dialogue</Text>
                </Flex.Item>
                <Flex.Item>
                  <View
                    background="light"
                    borderWidth="small"
                    borderRadius="medium"
                    padding="x-small small"
                  >
                    -/4
                  </View>
                </Flex.Item>
              </Flex>
            }
          >
            <View as="div" padding="small 0">
              <Text>How well can the student describe the setting of their story. This relates to location, time period and moods and attitudes of the socal structure.</Text>
            </View>
            <View as="form" padding="small 0">
              <RubricCriteria
                id="exceptional"
                name="dialogue"
                value="4"
                label="Exceptional"
                summary="Many vivid, descriptive words are used to tell when and where the story took place."
              />
              <RubricCriteria
                id="good"
                name="dialogue"
                value="3"
                label="Good"
                summary="Some vivid, descriptive words are used to tell the audience when and where the story took place."
              />
              <RubricCriteria
                id="fair"
                name="dialogue"
                value="2"
                label="Fair"
                summary="The reader can figure out when and where the story took place, but the author didn't supply much detail."
              />
              <RubricCriteria
                id="poor"
                name="dialogue"
                value="1"
                label="Poor"
                summary="The reader has trouble figuring out when and where the story took place."
              />
            </View>
            { !this.state.showNoteInput ? (
              <View as="div" textAlign="end" padding="x-small 0">
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
              <div>
                <View as="div" padding="medium 0">
                  <TextArea
                    label="Rating Note"
                  />
                </View>
                <View as="div" padding="small 0" textAlign="end">
                  <Button margin="0 x-small 0 0">
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    onClick={this.handleHideNoteInput}
                  >
                    Save
                  </Button>
                </View>
              </div>
            ) : null }
          </ToggleDetails>
        </View>
        <View as="div" padding="small 0">
        <ToggleDetails fluidWidth
          summary={
            <Flex padding="small 0">
              <Flex.Item grow>
                <Text weight="bold" size="large">Organization</Text>
              </Flex.Item>
              <Flex.Item>
                <View
                  background="light"
                  borderWidth="small"
                  borderRadius="medium"
                  padding="x-small small"
                >
                  -/4
                </View>
              </Flex.Item>
            </Flex>
          }
        >
            <View as="div" padding="small 0">
              <Text>How well does the student flesh out their characters.</Text>
            </View>
            <View as="form" padding="small 0">
              <RubricCriteria
                id="exceptional"
                name="org"
                value="4"
                label="Exceptional"
                summary="The main characters are named and clearly described. Most readers could describe the characters accurately."
              />
              <RubricCriteria
                id="good"
                name="org"
                value="3"
                label="Good"
                summary="The main characters are named and described. Most readers would have some idea of what the characters looked like."
              />
              <RubricCriteria
                id="fair"
                name="org"
                value="2"
                label="Fair"
                summary="The main characters are named. The reader knows very little about the characters."
              />
              <RubricCriteria
                id="poor"
                name="org"
                value="1"
                label="Poor"
                summary="It is hard to tell who the main characters are."
              />
            </View>
            { !this.state.showNoteInput ? (
              <View as="div" textAlign="end" padding="x-small 0">
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
              <div>
                <View as="div" padding="medium 0">
                  <TextArea
                    label="Rating Note"
                  />
                </View>
                <View as="div" padding="small 0" textAlign="end">
                  <Button margin="0 x-small 0 0">
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    onClick={this.handleHideNoteInput}
                  >
                    Save
                  </Button>
                </View>
              </div>
            ) : null }
        </ToggleDetails>
      </View>
    </View>
    )
  }
}
