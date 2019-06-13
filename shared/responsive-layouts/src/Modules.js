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
import { View, Flex } from '@instructure/ui-layout'
import { Text } from '@instructure/ui-elements'
import {
  IconDragHandleLine,
  IconAssignmentLine,
  IconCompleteSolid,
  IconDocumentLine,
  IconQuizLine,
  IconDiscussionLine,
  IconLinkLine,
  IconPdfLine,
  IconNoLine
} from '@instructure/ui-icons'
import SettingsMenu from './SettingsMenu'

export default function modules() {
  return (
    <div>
      <View as="div" borderWidth="0 0 small 0">
        <Flex padding="small" minHeight="4rem" wrapItems>
          <Flex.Item width="2rem" />
          <Flex.Item padding="0 small 0 0">
            <IconAssignmentLine />
          </Flex.Item>
          <Flex.Item padding="0 small 0 0" grow shrink>
            <Text as="div" size="small">
              Introduction to Music Theory
            </Text>
            <Text size="x-small">Available Jan 10, 2018</Text>
          </Flex.Item>
          <Flex.Item padding="0 medium 0 0" shrink />
          <Flex.Item padding="0 x-small 0 0" shrink>
            <IconCompleteSolid color="success" />
          </Flex.Item>
          <Flex.Item shrink>{SettingsMenu()}</Flex.Item>
        </Flex>
      </View>

      <View as="div" borderWidth="0 0 small 0">
        <Flex padding="small" minHeight="4rem" wrapItems>
          <Flex.Item width="2rem">
            <IconDragHandleLine />
          </Flex.Item>
          <Flex.Item padding="0 small 0 0">
            <IconDocumentLine />
          </Flex.Item>
          <Flex.Item padding="0 small 0 0" grow shrink>
            <Text as="div" size="small">
              Introduction to Music Theory
            </Text>
            <Text size="x-small">Available Jan 10, 2018</Text>
          </Flex.Item>
          <Flex.Item padding="0 medium 0 0" shrink>
            <Text size="small">10 Points</Text>
          </Flex.Item>
          <Flex.Item padding="0 small 0 0" shrink>
            <IconCompleteSolid color="success" />
          </Flex.Item>
          <Flex.Item shrink>{SettingsMenu()}</Flex.Item>
        </Flex>
      </View>

      <View as="div" borderWidth="0 0 small 0">
        <Flex padding="small" minHeight="4rem" wrapItems>
          <Flex.Item width="2rem" />
          <Flex.Item padding="0 small 0 0">
            <IconQuizLine />
          </Flex.Item>
          <Flex.Item padding="0 small 0 0" grow shrink>
            <Text as="div" size="small">
              Introduction to Music Theory
            </Text>
            <Text size="x-small">Available Jan 10, 2018</Text>
          </Flex.Item>
          <Flex.Item padding="0 medium 0 0" shrink>
            <Text size="small">10 Points</Text>
          </Flex.Item>
          <Flex.Item padding="0 small 0 0" shrink>
            <IconCompleteSolid color="success" />
          </Flex.Item>
          <Flex.Item shrink>{SettingsMenu()}</Flex.Item>
        </Flex>
      </View>

      <View as="div" borderWidth="0 0 small 0">
        <Flex padding="small" minHeight="4rem" wrapItems>
          <Flex.Item width="2rem" />
          <Flex.Item padding="0 small 0 0">
            <IconDiscussionLine />
          </Flex.Item>
          <Flex.Item padding="0 small 0 0" grow shrink>
            <Text as="div" size="small">
              Introduction to Music Theory
            </Text>
            <Text size="x-small">Available Jan 10, 2018</Text>
          </Flex.Item>
          <Flex.Item padding="0 medium 0 0" shrink>
            <Text size="small">10 Points</Text>
          </Flex.Item>
          <Flex.Item padding="0 small 0 0" shrink>
            <IconCompleteSolid color="success" />
          </Flex.Item>
          <Flex.Item shrink>{SettingsMenu()}</Flex.Item>
        </Flex>
      </View>

      <View as="div" borderWidth="0 0 small 0">
        <Flex padding="small" minHeight="4rem" wrapItems>
          <Flex.Item width="2rem" />
          <Flex.Item padding="0 small 0 0">
            <IconPdfLine />
          </Flex.Item>
          <Flex.Item padding="0 small 0 0" grow shrink>
            <Text as="div" size="small">
              Introduction to Music Theory
            </Text>
          </Flex.Item>
          <Flex.Item padding="0 medium 0 0" shrink />
          <Flex.Item padding="0 small 0 0" shrink>
            <IconNoLine />
          </Flex.Item>
          <Flex.Item shrink>{SettingsMenu()}</Flex.Item>
        </Flex>
      </View>

      <View as="div">
        <Flex padding="small" minHeight="4rem" wrapItems>
          <Flex.Item width="2rem" />
          <Flex.Item padding="0 small 0 0">
            <IconLinkLine />
          </Flex.Item>
          <Flex.Item padding="0 small 0 0" grow shrink>
            <Text as="div" size="small">
              Introduction to Music Theory
            </Text>
          </Flex.Item>
          <Flex.Item padding="0 medium 0 0" shrink />
          <Flex.Item padding="0 small 0 0" shrink>
            <IconCompleteSolid color="success" />
          </Flex.Item>
          <Flex.Item shrink>{SettingsMenu()}</Flex.Item>
        </Flex>
      </View>
    </div>
  )
}
