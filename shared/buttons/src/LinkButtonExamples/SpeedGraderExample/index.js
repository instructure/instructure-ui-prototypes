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

import { DrawerLayout, Flex } from '@instructure/ui-layout'
import { View } from '@instructure/ui-view'
import { Avatar, Text } from '@instructure/ui-elements'
import { TextInput } from '@instructure/ui-text-input'

import {
  IconArrowOpenStartLine,
  IconArrowOpenEndLine,
  IconXLine,
  IconSpeedGraderLine,
  IconEmailLine,
  IconDownloadLine
} from '@instructure/ui-icons'

import { IconButton } from '../../IconButton'
import { Link } from '../../Link'

export const SpeedGraderExample = ({ name = "Jemaine Clement" } = {}) => (
  <DrawerLayout minWidth="40rem">
    <DrawerLayout.Content label="empty content" />
    <DrawerLayout.Tray
      open
      label="courses"
      shouldContainFocus={false}
      defaultFocusElement={() => ({})}
      placement="end"
    >
      <View
        display="block"
        width="20rem"
      >
        <View position="absolute" insetInlineStart="0" insetBlockStart="0" margin="small">
          <IconButton label="close" renderIcon={IconXLine} />
        </View>
        <Flex justifyItems="center" margin="large none none none">
          <Flex.Item>
            <Avatar size="x-large" name={name} />
          </Flex.Item>
        </Flex>
        <Flex justifyItems="space-around" alignItems="center" margin="small none">
          <Flex.Item>
            <IconButton size="small" label="prev" renderIcon={IconArrowOpenStartLine}/>
          </Flex.Item>
          <Flex.Item>
            <Link href="#" isWithinText={false}><Text size="large">{name}</Text></Link>
          </Flex.Item>
          <Flex.Item>
            <IconButton size="small" label="next" renderIcon={IconArrowOpenEndLine} />
          </Flex.Item>
        </Flex>
        <View display="block" margin="none x-large">
          <View display="block" borderWidth="small none small none" padding="small" margin="none none medium none" textAlign="center">
            <Text weight="bold" lineHeight="double">Cool Assignment</Text>
            <br />
            <Text lineHeight="double">Score 700/1,000</Text>
            <br />
            <Link
              margin="small none none none"
              icon={IconSpeedGraderLine}
              isWithinText={false}
              href="#"
            >
              <Text transform="uppercase" lineHeight="double">Speedgrader</Text>
            </Link>
          </View>
          <Text weight="bold">Actions</Text>
          <Link
            display="block"
            margin="small none none none"
            icon={IconEmailLine}
            isWithinText={false}
            href="#"
          >
            Message Student
          </Link>
          <Link
            display="block"
            margin="small none large none"
            icon={IconDownloadLine}
            isWithinText={false}
            href="#"
          >
            Submit for Student
          </Link>
          <Text weight="bold">Extend Due Date</Text>
          <View display="block" margin="small none none">
            <TextInput label="Date" />
          </View>
          <View display="block" margin="small none none">
            <TextInput label="Time" />
          </View>
        </View>
      </View>
    </DrawerLayout.Tray>
  </DrawerLayout>
)
