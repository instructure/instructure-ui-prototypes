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

import { IconAddLine, IconTrashLine } from '@instructure/ui-icons'
import { Button as InstuiButton } from '@instructure/ui-buttons'

import { ExampleContainer, ExampleFrame, ExampleDescription } from '../ExampleHelpers'
import { Button } from '../Button'
import { Link } from '../Link'

import { CourseNavExample } from './CourseNavExample'
import { GaugeAssessmentExample } from './GaugeAssessmentExample'

export const LinkButtonExamples = () => (
  <View display="block">
    <ExampleContainer count={1} description="The link is contained within body text">
      <ExampleDescription>
        {[
          'A simple Link component is used',
          'The link is permanently underlined so it is distinguishable from surrounding text'
        ]}
      </ExampleDescription>
      <ExampleFrame>
        <View display="block" margin="large">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <Link href="#">incididunt ut labore</Link> et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud <Link href="#">exercitation ullamco</Link> laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute <Link href="#">irure dolor in</Link> reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </View>
      </ExampleFrame>
    </ExampleContainer>
    <ExampleContainer count={2} description="The link is outside body text">
      <ExampleDescription label="Course Navigation">
        {[
          'A simple Link component is used',
          'Link is configured to only show the underline on hover'
        ]}
      </ExampleDescription>
      <ExampleFrame height="40rem">
        <CourseNavExample/>
      </ExampleFrame>
      {/* <ExampleFrame height="40rem" description="Gradebook">
        <SpeedGraderExample />
      </ExampleFrame> */}
    </ExampleContainer>
    <ExampleContainer count={3} description="Button without border and background that is used with other buttons or inputs">
      <ExampleDescription label="Currently InstUI has a text-only button, it's the `link` variant">
        {[
          'It has padding consistent with other buttons so that it can be aligned with form elements (inputs, etc)',
          'It has no background or border so it resembles a link at first glance',
          'It has a completely different hover and focus state from other buttons currently, it underlines'
        ]}
      </ExampleDescription>
      <ExampleFrame withBorder={false}>
        <InstuiButton margin="large" variant="link">Hello world</InstuiButton>
        <InstuiButton margin="large" variant="link" icon={IconTrashLine}>Hello world</InstuiButton>
      </ExampleFrame>
      <ExampleDescription label="With our button refactor, we should consider clearing some confusion by removing the association between this type of button and link (if we decide to even continue using it)">
        {[
          'The user doesn\'t use the word `link` to specify this type of button, they just turn off the background and border',
          'We replace the underline focus/hover states (since those are visual cues for link) with focus/hover states that are consistent with ghost button and other icon buttons'
        ]}
      </ExampleDescription>
      <ExampleFrame withBorder={false}>
        <Button margin="large" withBackground={false} withBorder={false} color="primary">Hello world</Button>
        <Button margin="large" withBackground={false} withBorder={false} color="primary" renderIcon={IconTrashLine}>Hello world</Button>
      </ExampleFrame>
      <ExampleDescription label="Gauge assessment with existing InstUI button (link variant)" />
      <ExampleFrame>
        <GaugeAssessmentExample addButton={InstuiAddButton} />
      </ExampleFrame>
      <ExampleDescription label="Gauge assessment with possible updated button" />
      <ExampleFrame>
        <GaugeAssessmentExample addButton={AddButton} />
      </ExampleFrame>
    </ExampleContainer>
    <ExampleContainer count={4} description="Button that looks identical to link in every way but is being used as a button">
      <ExampleFrame height="600px">
        <iframe title="link as button example 1" src="https://share.getcloudapp.com/BluplBB0?branding=true&amp;embed=true&amp;title=true" width="100%" height="100%" style={{ border: 'none', }} frameBorder="0" allowTransparency="true" allowFullscreen="true"></iframe>
      </ExampleFrame>
      <ExampleFrame height="600px">
        <iframe title="link as button example 2" src="https://share.getcloudapp.com/qGugeoor?branding=true&amp;embed=true&amp;title=true" width="100%" height="100%" style={{ border: 'none', }} frameBorder="0" allowTransparency="true" allowFullscreen="true"></iframe>
      </ExampleFrame>
      <ExampleFrame height="600px">
        <iframe title="link as button example 2" src="https://share.getcloudapp.com/GGuLGNNG?branding=true&amp;embed=true&amp;title=true" width="100%" height="100%" style={{ border: 'none', }} frameBorder="0" allowTransparency="true" allowFullscreen="true"></iframe>
      </ExampleFrame>
      <ExampleFrame height="600px">
        <iframe title="link as button example 2" src="https://share.getcloudapp.com/ApuNprj6?branding=true&amp;embed=true&amp;title=true" width="100%" height="100%" style={{ border: 'none', }} frameBorder="0" allowTransparency="true" allowFullscreen="true"></iframe>
      </ExampleFrame>
      <ExampleFrame height="600px">
        <iframe title="link as button example 2" src="https://share.getcloudapp.com/7Ku2KR08?branding=true&amp;embed=true&amp;title=true" width="100%" height="100%" style={{ border: 'none', }} frameBorder="0" allowTransparency="true" allowFullscreen="true"></iframe>
      </ExampleFrame>
    </ExampleContainer>
  </View>
)

const AddButton = (props) => (
  <Button color="primary" withBorder={false} withBackground={false} renderIcon={IconAddLine} {...props} />
)

const InstuiAddButton = (props) => (
  <InstuiButton icon={IconAddLine} variant="link" {...props} />
)
