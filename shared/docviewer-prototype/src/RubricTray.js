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
import { ToggleDetails } from '@instructure/ui-toggle-details'
import { ScreenReaderContent } from '@instructure/ui-a11y'
import { IconXLine, IconNoteLine } from '@instructure/ui-icons'

import RubricCriteria from './RubricCriteria'

export default class RubricTray extends React.Component {
  static propTypes = {
    onRequestHideRubric: PropTypes.func
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
            <RubricCriteria
              rubricValue={4}
              rubricDescription="Exceptional"
              rubricSummary="Many vivid, descriptive words are used to tell when and where the story took place."
            />
            <RubricCriteria
              rubricValue={3}
              rubricDescription="Good"
              rubricSummary="Some vivid, descriptive words are used to tell the audience when and where the story took place."
            />
            <RubricCriteria
              rubricValue={2}
              rubricDescription="Fair"
              rubricSummary="The reader can figure out when and where the story took place, but the author didn't supply much detail."
            />
            <RubricCriteria
              rubricValue={1}
              rubricDescription="Poor"
              rubricSummary="The reader has trouble figuring out when and where the story took place."
            />
            <View as="div" margin="small 0 medium 0" padding="0 0 0 small">
              <IconNoteLine />
            </View>
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
              <Text>How well can the student describe the setting of their story. This relates to location, time period and moods and attitudes of the socal structure.</Text>
            </View>
            <RubricCriteria
              rubricValue={4}
              rubricDescription="Exceptional"
              rubricSummary="Many vivid, descriptive words are used to tell when and where the story took place."
            />
            <RubricCriteria
              rubricValue={3}
              rubricDescription="Good"
              rubricSummary="Some vivid, descriptive words are used to tell the audience when and where the story took place."
            />
            <RubricCriteria
              rubricValue={2}
              rubricDescription="Fair"
              rubricSummary="The reader can figure out when and where the story took place, but the author didn't supply much detail."
            />
            <RubricCriteria
              rubricValue={1}
              rubricDescription="Poor"
              rubricSummary="The reader has trouble figuring out when and where the story took place."
            />
            <View as="div" margin="small 0 medium 0" padding="0 0 0 small">
              <IconNoteLine />
            </View>
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
            <RubricCriteria
              rubricValue={4}
              rubricDescription="Exceptional"
              rubricSummary="Many vivid, descriptive words are used to tell when and where the story took place."
            />
            <RubricCriteria
              rubricValue={3}
              rubricDescription="Good"
              rubricSummary="Some vivid, descriptive words are used to tell the audience when and where the story took place."
            />
            <RubricCriteria
              rubricValue={2}
              rubricDescription="Fair"
              rubricSummary="The reader can figure out when and where the story took place, but the author didn't supply much detail."
            />
            <RubricCriteria
              rubricValue={1}
              rubricDescription="Poor"
              rubricSummary="The reader has trouble figuring out when and where the story took place."
            />
            <View as="div" margin="small 0 medium 0" padding="0 0 0 small">
              <IconNoteLine />
            </View>
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
            <Text>How well can the student describe the setting of their story. This relates to location, time period and moods and attitudes of the socal structure.</Text>
          </View>
          <RubricCriteria
            rubricValue={4}
            rubricDescription="Exceptional"
            rubricSummary="Many vivid, descriptive words are used to tell when and where the story took place."
          />
          <RubricCriteria
            rubricValue={3}
            rubricDescription="Good"
            rubricSummary="Some vivid, descriptive words are used to tell the audience when and where the story took place."
          />
          <RubricCriteria
            rubricValue={2}
            rubricDescription="Fair"
            rubricSummary="The reader can figure out when and where the story took place, but the author didn't supply much detail."
          />
          <RubricCriteria
            rubricValue={1}
            rubricDescription="Poor"
            rubricSummary="The reader has trouble figuring out when and where the story took place."
          />
          <View as="div" margin="small 0 medium 0" padding="0 0 0 small">
            <IconNoteLine />
          </View>
        </ToggleDetails>
      </View>
    </View>
    )
  }
}
