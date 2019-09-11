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
import { View } from '@instructure/ui-view'
import { Button as InstuiButton } from '@instructure/ui-buttons'
import { Heading, Text, List, TruncateText } from '@instructure/ui-elements'
import { IconAddLine } from '@instructure/ui-icons'

import { Button } from '../Button'

export const FluidWidthExamples = () => (
  <View display="block" margin="large">
    <Heading as="h2" margin="none none x-large none">
      Question: when the button fills the width of the screen, should we allow developers to choose alignment for the content?
    </Heading>
    <View display="block" margin="none none medium none">
      <Text as="h3" weight="bold">What currently happens in InstUI?</Text>
      <Text as="p" fontStyle="italic">
        The following Button is from InstUI. When it is set to fill the width of the screen, the icon and text are aligned at the start.
      </Text>
    </View>
    <InstuiButton icon={IconAddLine} fluidWidth>A button with a whole lot of text</InstuiButton>
    <View display="block" margin="x-large none medium none">
      <Text as="h3" weight="bold">Should we allow for center alignment?</Text>
      <Text as="p" fontStyle="italic">
        {"We've had developers occassionally need to center align the button content. Here's our new Button component with center aligned content:"}
      </Text>
    </View>
    <Button renderIcon={IconAddLine} display="block">A button with a whole lot of text</Button>
    <View display="block" margin="x-large none medium none">
      <Text as="h3" weight="bold">When our new buttons fill the screen, which of the following should we allow?</Text>
      <List as="ol">
        <List.Item>Buttons that fill the screen should <Text fontStyle="italic">only</Text> have start aligned content</List.Item>
        <List.Item>Buttons that fill the screen should allow for the developer to choose start or center aligned content, but start should be the default</List.Item>
        <List.Item>Buttons that fill the screen should allow for the developer to choose start or center aligned content, but center should be the default</List.Item>
        <List.Item>Buttons that fill the screen should <Text fontStyle="italic">only</Text> have center aligned content</List.Item>
      </List>
    </View>
  </View>
)