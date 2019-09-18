/*
 * The MIT License (MIT)
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
 *
 */

import React from 'react'

import { View } from '@instructure/ui-view'
import { TextInput } from '@instructure/ui-text-input'
import { ScreenReaderContent } from '@instructure/ui-a11y'
import { Text } from '@instructure/ui-elements'
import { Flex } from '@instructure/ui-layout'
import { ToggleDetails } from '@instructure/ui-toggle-details'

import {
  IconTrashLine
} from '@instructure/ui-icons'

import { IconButton } from '../../IconButton'

export const GaugeAssessmentExample = ({ addButton: AddButton }) => {
  return (
    <View display="block" background="secondary">
      <View
        display="block"
        shadow="above"
        background="primary"
        margin="none large"
        padding="medium"
      >
        <TextInput label={<ScreenReaderContent>Add question stem</ScreenReaderContent>} placeholder="Add question stem..." />
        <Flex margin="none none small none">
          <Flex.Item grow margin="none xx-small none none">
            <Category label="Category 1" addButton={AddButton} />
          </Flex.Item>
          <Flex.Item grow margin="none none none xx-small">
            <Category label="Category 2" addButton={AddButton} />
          </Flex.Item>
        </Flex>
        <AddButton>Category</AddButton>
        <View display="block" borderWidth="small none none none" margin="small none" padding="small none">
          Additional Distractors
          <br />
          <AddButton margin="small none">Distractor</AddButton>
          <TogglePlaceholder summary="Options" />
          <TogglePlaceholder summary="Align to Outcomes (0)" />
          <TogglePlaceholder summary="Item Banking" />
        </View>
      </View>
    </View>
  )
}

const Category = ({ label, addButton: AddButton }) => (
  <View display="block" margin="medium none none">
    <Flex justifyItems="space-between">
      <Flex.Item>
        <Text>{label}</Text>
      </Flex.Item>
      <Flex.Item>
        <IconButton label="Delete" renderIcon={IconTrashLine} />
      </Flex.Item>
    </Flex>
    <View display="block" margin="x-small none none">
      <View display="block" background="secondary" padding="small">
        <TextInput label={<ScreenReaderContent>Label</ScreenReaderContent>} placeholder="Type a category description" />
      </View>
      <View display="block" borderWidth="none small small small" padding="small" theme={{ borderColorPrimary: '#F5F5F5' }}>
        <Flex margin="none none small none">
          <Flex.Item grow margin="none x-small none none">
            <TextInput label={<ScreenReaderContent>Label</ScreenReaderContent>} placeholder="Type an answer" />
          </Flex.Item>
          <Flex.Item>
            <IconButton label="Delete" renderIcon={IconTrashLine} />
          </Flex.Item>
        </Flex>
        <AddButton>Answer</AddButton>
      </View>
    </View>
  </View>
)

const TogglePlaceholder = (props) => (
  <View display="block" margin="none none small none">
    <ToggleDetails
      variant="filled"
      {...props}
    >
      Placeholder
    </ToggleDetails>
  </View>
)