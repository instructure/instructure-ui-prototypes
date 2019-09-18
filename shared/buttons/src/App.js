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

import React, { useState } from 'react'

import '@instructure/canvas-theme'
import { Tabs } from '@instructure/ui-tabs'

import { AllExamples } from './AllExamples'
import { ToggleButtonExamples } from './ToggleButtonExamples'
import { LinkButtonExamples } from './LinkButtonExamples'
import { CondensedButtonExamples } from './CondensedButtonExamples'

const App = () => {
  const [ selectedIndex, setSelectedIndex ] = useState(3)

  const handleTabChange = (event, { index }) => {
    setSelectedIndex(index)
  }

  return (
    <Tabs
      margin="large"
      padding="medium"
      onRequestTabChange={handleTabChange}
    >
      <Tabs.Panel
        renderTitle="All Buttons"
        selected={selectedIndex === 0}
      >
        <AllExamples />
      </Tabs.Panel>
      <Tabs.Panel
        renderTitle="Toggle Buttons"
        padding="xx-large"
        isSelected={selectedIndex === 1}
      >
        <ToggleButtonExamples />
      </Tabs.Panel>
      <Tabs.Panel
        renderTitle="Link Buttons"
        padding="xx-large"
        selected={selectedIndex === 2}
      >
        <LinkButtonExamples />
      </Tabs.Panel>
      <Tabs.Panel
        renderTitle="Condensed Buttons"
        padding="xx-large"
        selected={selectedIndex === 3}
      >
        <CondensedButtonExamples />
      </Tabs.Panel>
    </Tabs>
  )
}

export default App
