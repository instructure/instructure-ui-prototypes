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

import { ExampleFrame, ExampleDescription } from '../ExampleHelpers'
import { GradebookExample } from './GradebookExample'
// import { MasteryExample } from './MasteryExample'

import { IconAssignmentLine } from '@instructure/ui-icons'

import { Button } from '../Button'

const CondensedButtonA = (props) => (
  <Button color="primary" withBackground={false} withBorder={false} isCondensed {...props} />
)

const CondensedButtonB = (props) => (
  <CondensedButtonA {...props} />
)

export const CondensedButtonExamples = () => (
  <>
    <ExampleDescription label="Condensed button in gradebook" />
    <ExampleFrame width="70rem">
      <GradebookExample condensedButton={CondensedButtonA} />
    </ExampleFrame>
    <ExampleDescription label="Condensed button with Icon in gradebook" />
    <ExampleFrame width="70rem">
      <GradebookExample condensedButton={CondensedButtonB} />
    </ExampleFrame>
    <ExampleDescription label="Condensed button with icons" />
    <ExampleFrame width="70rem">
      <View display="block" padding="large">
        <CondensedButtonA size="small" margin="small" renderIcon={IconAssignmentLine}>Hello world</CondensedButtonA>
        <CondensedButtonB size="small" margin="small">Hello world</CondensedButtonB>
        <br />
        <CondensedButtonA size="medium" margin="small" renderIcon={IconAssignmentLine}>Hello world</CondensedButtonA>
        <CondensedButtonB size="medium" margin="small">Hello world</CondensedButtonB>
        <br />
        <CondensedButtonA size="large" margin="small" renderIcon={IconAssignmentLine}>Hello world</CondensedButtonA>
        <CondensedButtonB size="large" margin="small">Hello world</CondensedButtonB>
      </View>
    </ExampleFrame>
    {/* <ExampleDescription label="Condensed button with icon set" />
    <ExampleFrame width="70rem">
      <View display="block" margin="large">
        <CondensedButton renderIcon={IconAssignmentLine} size="small">Hello world</CondensedButton>
        <CondensedButton size="small">Hello world</CondensedButton>
      </View>
    </ExampleFrame> */}
  </>
)
