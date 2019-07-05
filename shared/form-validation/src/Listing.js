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
import { Tabs } from '@instructure/ui-tabs'

import DetailsTab from './Details'

class Listing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: 0
    }
  }

  handleTabChange = (event, { index }) => {
    this.setState({
      selectedIndex: index
    })
  }

  render () {
    const { selectedIndex } = this.state
    return (
      <Tabs
        variant="secondary"
        onRequestTabChange={this.handleTabChange}
        minHeight="10rem"
        maxHeight="100%"
      >
        <Tabs.Panel renderTitle="Details" isSelected={selectedIndex === 0}>
          <DetailsTab/>
        </Tabs.Panel>
        <Tabs.Panel renderTitle="Certificate" isSelected={selectedIndex === 1}>
          goes
        </Tabs.Panel>
        <Tabs.Panel renderTitle="Requirements" isSelected={selectedIndex === 2}>
          here
        </Tabs.Panel>
      </Tabs>
    )
  }
}

export default Listing
