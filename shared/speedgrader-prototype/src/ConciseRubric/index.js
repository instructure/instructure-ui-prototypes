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
import { Button } from '@instructure/ui-buttons'
import { TextArea } from '@instructure/ui-forms'
import { Tooltip } from '@instructure/ui-overlays'
import { Text } from '@instructure/ui-elements'
import { ScreenReaderContent } from '@instructure/ui-a11y'
import { IconNoteLine, IconInfoLine } from '@instructure/ui-icons'
import { Scale } from './Scale'

export default class ConciseRubric extends React.Component {

  state = {
    showNoteInput: false,
    isChecked: false
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

  render() {

    return (
      <div>
        <View as="div" borderWidth="small 0 0 0" padding="small 0">
          <Flex>
            <Flex.Item>
              <Text weight="bold" size="large">Setting</Text>
            </Flex.Item>
            <Flex.Item>
              <Tooltip
                tip={
                  <View as="div" padding="small" maxWidth="15rem">
                    <Text>How well can the student describe the setting of their story. This relates to location, time period and moods and attitudes of the socal structure.</Text>
                  </View>
                }
                variant="default"
                placement="end"
                on={['click', 'hover', 'focus']}
              >
                <Button variant="icon" icon={<IconInfoLine inline={false} />}>
                  <ScreenReaderContent>Toggle Setting Description</ScreenReaderContent>
                </Button>
              </Tooltip>
            </Flex.Item>
          </Flex>
          <View as="form" padding="small 0">
            <Scale
              id="exceptional"
              name="setting"
              value="4"
              label="Exceptional"
              summary="Many vivid, descriptive words are used to tell when and where the story took place."
            />
            <Scale
              id="good"
              name="setting"
              value="3"
              label="Good"
              summary="Some vivid, descriptive words are used to tell the audience when and where the story took place."
            />
            <Scale
              id="fair"
              name="setting"
              value="2"
              label="Fair"
              summary="The reader can figure out when and where the story took place, but the author didn't supply much detail."
            />
            <Scale
              id="poor"
              name="setting"
              value="1"
              label="Poor"
              summary="The reader has trouble figuring out when and where the story took place."
            />
          </View>
        </View>
        <View as="div" borderWidth="small 0 0 0" padding="small 0">
          <Flex>
            <Flex.Item>
              <Text weight="bold" size="large">Characters</Text>
            </Flex.Item>
            <Flex.Item>
              <Tooltip
                tip={
                  <View as="div" padding="small" maxWidth="15rem">
                    <Text>How well does the student flesh out their characters.</Text>
                  </View>
                }
                variant="default"
                placement="end"
                on={['click', 'hover', 'focus']}
              >
                <Button variant="icon" icon={<IconInfoLine inline={false} />}>
                  <ScreenReaderContent>Toggle Character Description</ScreenReaderContent>
                </Button>
              </Tooltip>
            </Flex.Item>
          </Flex>
          <View as="form" padding="small 0">
            <Scale
              id="exceptional"
              name="character"
              value="4"
              label="Exceptional"
              summary="The main characters are named and clearly described. Most readers could describe the characters accurately."
            />
            <Scale
              id="good"
              name="character"
              value="3"
              label="Good"
              summary="The main characters are named and described. Most readers would have some idea of what the characters looked like."
            />
            <Scale
              id="fair"
              name="character"
              value="2"
              label="Fair"
              summary="The main characters are named. The reader knows very little about the characters."
            />
            <Scale
              id="poor"
              name="character"
              value="1"
              label="Poor"
              summary="It is hard to tell who the main characters are."
            />
          </View>
        </View>
        <View as="div" borderWidth="small 0 0 0" padding="small 0">
          <Flex>
            <Flex.Item>
              <Text weight="bold" size="large">Dialogue</Text>
            </Flex.Item>
            <Flex.Item>
              <Tooltip
                tip={
                  <View as="div" padding="small" maxWidth="15rem">
                    <Text>How well can the student describe the setting of their story. This relates to location, time period and moods and attitudes of the socal structure.</Text>
                  </View>
                }
                variant="default"
                placement="end"
                on={['click', 'hover', 'focus']}
              >
                <Button variant="icon" icon={<IconInfoLine inline={false} />}>
                  <ScreenReaderContent>Toggle Dialoge Description</ScreenReaderContent>
                </Button>
              </Tooltip>
            </Flex.Item>
          </Flex>
          <View as="form" padding="small 0">
            <Scale
              id="exceptional"
              name="dialogue"
              value="4"
              label="Exceptional"
              summary="Many vivid, descriptive words are used to tell when and where the story took place."
            />
            <Scale
              id="good"
              name="dialogue"
              value="3"
              label="Good"
              summary="Some vivid, descriptive words are used to tell the audience when and where the story took place."
            />
            <Scale
              id="fair"
              name="dialogue"
              value="2"
              label="Fair"
              summary="The reader can figure out when and where the story took place, but the author didn't supply much detail."
            />
            <Scale
              id="poor"
              name="dialogue"
              value="1"
              label="Poor"
              summary="The reader has trouble figuring out when and where the story took place."
            />
          </View>
        </View>  
        <View as="div" borderWidth="small 0 0 0" padding="small 0">
        <Flex>
          <Flex.Item>
            <Text weight="bold" size="large">Organization</Text>
          </Flex.Item>
          <Flex.Item>
            <Tooltip
              tip={
                <View as="div" padding="small" maxWidth="15rem">
                  <Text>How well can the student describe the setting of their story. This relates to location, time period and moods and attitudes of the socal structure.</Text>
                </View>
              }
              variant="default"
              placement="end"
              on={['click', 'hover', 'focus']}
            >
              <Button variant="icon" icon={<IconInfoLine inline={false} />}>
                <ScreenReaderContent>toggle tooltip</ScreenReaderContent>
              </Button>
            </Tooltip>
          </Flex.Item>
        </Flex>
        <View as="form" padding="small 0">
          <Scale
            id="exceptional"
            name="org"
            value="4"
            label="Exceptional"
            summary="The main characters are named and clearly described. Most readers could describe the characters accurately."
          />
          <Scale
            id="good"
            name="org"
            value="3"
            label="Good"
            summary="The main characters are named and described. Most readers would have some idea of what the characters looked like."
          />
          <Scale
            id="fair"
            name="org"
            value="2"
            label="Fair"
            summary="The main characters are named. The reader knows very little about the characters."
          />
          <Scale
            id="poor"
            name="org"
            value="1"
            label="Poor"
            summary="It is hard to tell who the main characters are."
          />
        </View>
      </View>
    </div>
    )
  }
}
