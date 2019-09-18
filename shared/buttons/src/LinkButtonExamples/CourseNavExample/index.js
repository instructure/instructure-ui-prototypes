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

import React, { useState } from 'react'

import { DrawerLayout, Flex } from '@instructure/ui-layout'
import { Navigation } from '@instructure/ui-navigation'
import { Avatar, Badge, Heading, Text } from '@instructure/ui-elements'
import { ScreenReaderContent } from '@instructure/ui-a11y'
import { View } from '@instructure/ui-view'

import {
  IconInstructureLine,
  IconAdminLine,
  IconDashboardLine,
  IconCoursesLine,
  IconInboxLine,
  IconXLine
} from '@instructure/ui-icons'

import { IconButton } from '../../IconButton'
import { Link } from '../../Link'

export const CourseNavExample = () => (
  <Flex alignItems="stretch" height="100%">
    <Flex.Item>
      <DemoNavigation />
    </Flex.Item>
    <Flex.Item grow>
      <View display="block" height="100%" overflowX="hidden">
        <DrawerLayout minWidth="40rem">
          <DrawerLayout.Tray
            open
            label="courses"
            shouldContainFocus={false}
            defaultFocusElement={() => ({})}
          >
            <View
              display="block"
              width="24rem"
              padding="large"
            >
              <View position="absolute" insetInlineEnd="0" insetBlockStart="0" margin="small">
                <IconButton
                  renderIcon={IconXLine}
                  label="Close"
                />
              </View>
              <Heading as="h2">Courses</Heading>
              <View
                display="block"
                margin="medium none"
                padding="medium none"
                borderWidth="small none"
              >
                <CourseLink name={`History of B&M`} />
                <CourseLink name={`RMC Replacement Process`} />
                <CourseLink name={`Action Park and the Art of Disaster`} />
                <CourseLink name={`Intro to Model Roller Coasters`} />
              </View>
              <Link href="#" isWithinText={false}>All Courses</Link>
              <View display="block" margin="medium none">
                <Text>
                  {`Welcome to your courses! To customize the list of courses, click on the "All Courses" link and star the courses to display.`}
                </Text>
              </View>
            </View>
          </DrawerLayout.Tray>
          <DrawerLayout.Content label="empty content" />
        </DrawerLayout>
      </View>
    </Flex.Item>
  </Flex>
)

const CourseLink = ({ name, term = 'Default Term' } = {}) => (
  <View display="block" margin="none none medium none">
    <View display="block">
      <Link href="#" isWithinText={false}>{name}</Link>
    </View>
    <Text size="small" color="secondary">{term}</Text>
  </View>
)

const DemoNavigation = () => {
  const [isMinimized, setMinimized] = useState(false)

  const handleMinimized = (event, isMinimized) => setMinimized(isMinimized)

  const logoContainerProps = isMinimized ? {
    height: '2.5rem',
    padding: 'none xx-small x-small xx-small'
  } : {
      height: '2.85rem',
      margin: 'x-small none xx-small none',
      padding: 'none small xx-small small',
      display: 'block'
    }

  return (
    <Navigation
      onMinimized={handleMinimized}
      label="Main navigation"
      toggleLabel={{
        expandedLabel: 'Minimize Navigation',
        minimizedLabel: 'Expand Navigation'
      }}
    >
      <Navigation.Item
        icon={
          <View
            display="block"
            {...logoContainerProps}
          >
            <IconInstructureLine width="100%" height="100%" />
          </View>
        }
        label={<ScreenReaderContent>Home</ScreenReaderContent>}
        href="#"
      />
      <Navigation.Item
        icon={<Avatar name="Ziggy Marley" size="x-small" />}
        label="Account"
        href="#"
      />
      <Navigation.Item
        icon={<IconAdminLine />}
        label="Admin"
        href="#"
      />
      <Navigation.Item
        icon={<IconDashboardLine />}
        label="Dashboard"
        href="#"
      />
      <Navigation.Item
        selected
        icon={<IconCoursesLine />}
        label="Courses"
        href="#"
      />
      <Navigation.Item
        icon={<Badge count={99}><IconInboxLine /></Badge>}
        label="Inbox"
        href="#"
      />
    </Navigation>
  )
}