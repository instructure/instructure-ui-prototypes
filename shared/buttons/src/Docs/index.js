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
import { Flex } from '@instructure/ui-flex'

import { IconAddLine } from '@instructure/ui-icons'
import { Heading } from '@instructure/ui-elements'
import { ScreenReaderContent } from '@instructure/ui-a11y'

import { Button } from '../Button'

import { ExampleDescription, ExampleFrame } from '../ExampleHelpers'

const ButtonPreview = ({ color = 'primary', background = 'primary', ...props} = {}) => (
  <>
    <View display="block" padding="large" background={background}>
      <Button color={color} {...props} />
    </View>
    <View display="block" textAlign="center">{color}</View>
  </>
)

const ButtonCollection = (props) => (
  <Flex margin="large">
    <Flex.Item>
      <ButtonPreview color="primary" {...props} />
    </Flex.Item>
    <Flex.Item>
      <ButtonPreview color="secondary" {...props} />
    </Flex.Item>
    <Flex.Item>
      <ButtonPreview color="success" {...props} />
    </Flex.Item>
    <Flex.Item>
      <ButtonPreview color="danger" {...props} />
    </Flex.Item>
    <Flex.Item>
      <ButtonPreview color="primary-inverse" background="primary-inverse" {...props} />
    </Flex.Item>
  </Flex>
)

export const Docs = () => (
  <>
    <Heading as="h2" level="h2">Button</Heading>
    <ExampleDescription label="Button" />
    <ExampleFrame width="70rem">
      <ButtonCollection>Hello world</ButtonCollection>
    </ExampleFrame>
    <ExampleDescription label="Button with icon" />
    <ExampleFrame width="70rem">
      <ButtonCollection renderIcon={IconAddLine}>Hello world</ButtonCollection>
    </ExampleFrame>
    <ExampleDescription label="Button without background" />
    <ExampleFrame width="70rem">
      <ButtonCollection withBackground={false}>Hello world</ButtonCollection>
    </ExampleFrame>
    <ExampleDescription label="Button with icon without background" />
    <ExampleFrame width="70rem">
      <ButtonCollection renderIcon={IconAddLine} withBackground={false}>Hello world</ButtonCollection>
    </ExampleFrame>
    <ExampleDescription label="Button without border/background" />
    <ExampleFrame width="70rem">
      <ButtonCollection withBackground={false} withBorder={false}>Hello world</ButtonCollection>
    </ExampleFrame>
    <ExampleDescription label="Button with icon without border/background" />
    <ExampleFrame width="70rem">
      <ButtonCollection withBackground={false} withBorder={false} renderIcon={IconAddLine}>Hello world</ButtonCollection>
    </ExampleFrame>
    <Heading as="h2" level="h2">IconButton</Heading>
    <ExampleDescription label="IconButton square" />
    <ExampleFrame width="70rem">
      <ButtonCollection renderIcon={IconAddLine}><ScreenReaderContent>Hello world</ScreenReaderContent></ButtonCollection>
    </ExampleFrame>
    <ExampleDescription label="IconButton circle" />
    <ExampleFrame width="70rem">
      <ButtonCollection shape="circle" renderIcon={IconAddLine}><ScreenReaderContent>Hello world</ScreenReaderContent></ButtonCollection>
    </ExampleFrame>
    <ExampleDescription label="IconButton square without background" />
    <ExampleFrame width="70rem">
      <ButtonCollection withBackground={false} renderIcon={IconAddLine}><ScreenReaderContent>Hello world</ScreenReaderContent></ButtonCollection>
    </ExampleFrame>
    <ExampleDescription label="IconButton circle without background" />
    <ExampleFrame width="70rem">
      <ButtonCollection withBackground={false} shape="circle" renderIcon={IconAddLine}><ScreenReaderContent>Hello world</ScreenReaderContent></ButtonCollection>
    </ExampleFrame>
    <ExampleDescription label="IconButton square without background/border" />
    <ExampleFrame width="70rem">
      <ButtonCollection withBackground={false} withBorder={false} renderIcon={IconAddLine}><ScreenReaderContent>Hello world</ScreenReaderContent></ButtonCollection>
    </ExampleFrame>
    <ExampleDescription label="IconButton circle without background/border" />
    <ExampleFrame width="70rem">
      <ButtonCollection withBackground={false} withBorder={false} shape="circle" renderIcon={IconAddLine}><ScreenReaderContent>Hello world</ScreenReaderContent></ButtonCollection>
    </ExampleFrame>
    <Heading as="h2" level="h2">Condensed Button/MinimalButton</Heading>
    <ExampleDescription label="Condensed button" />
    <ExampleFrame width="70rem">
      <ButtonCollection withBackground={false} withBorder={false} isCondensed>Hello world</ButtonCollection>
    </ExampleFrame>
    <ExampleDescription label="Condensed button with icon" />
    <ExampleFrame width="70rem">
      <ButtonCollection withBackground={false} withBorder={false} isCondensed renderIcon={IconAddLine}>Hello world</ButtonCollection>
    </ExampleFrame>
  </>
)
