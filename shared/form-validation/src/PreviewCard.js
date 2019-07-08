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
import { Heading, Text } from '@instructure/ui-elements'
import { Button } from '@instructure/ui-buttons'
import { View, Flex } from '@instructure/ui-layout'
import { IconArrowOpenEndLine, IconCollectionSolid } from '@instructure/ui-icons'
import { ScreenReaderContent } from '@instructure/ui-a11y'

class PreviewCard extends React.Component {

  render () {
    return (
      <View as="div" borderWidth="small" margin="medium 0 0">
        <View as="div" position="relative" width="18.75rem" height="14.0625rem" background="light">
          <View
            position="absolute"
            insetInlineStart="12px"
            insetBlockEnd="-16px"
            textAlign="center" 
            background="alert" 
            borderRadius="circle"
            width="2.5rem"
            height="2.5rem" 
            padding="small">
            <IconCollectionSolid size="x-small" inline={false} />
            <ScreenReaderContent>Accessible button label</ScreenReaderContent>
          </View>
        </View>
        <View as="div" padding="large small x-large" borderWidth="small 0 0 0">
          <Heading as="h4" level="h3">A New Hope</Heading>
        </View>
        <View as="div" borderWidth="small 0 0 0" padding="medium small" height="9.375rem">
          <Text>Experience the film that started it all!</Text>
        </View>
        <View as="div" borderWidth="small 0 0 0" padding="small">
          <Flex justifyItems="space-between">
            <Flex.Item >
              <Text as="div" lineHeight="double">Time Limit: 30 days</Text>
              <Text as="div" lineHeight="double">FREE | 1 credit</Text>
            </Flex.Item>
            <Flex.Item>
              <Button icon={IconArrowOpenEndLine}>
                <ScreenReaderContent>Accessible Text</ScreenReaderContent>
              </Button>
            </Flex.Item>
          </Flex>
        </View>
      </View>
    )
  }
}

export default PreviewCard
