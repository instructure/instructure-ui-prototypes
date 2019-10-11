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
import { themeable } from '@instructure/ui-themeable'

import ColorStrip from '../ColorStrip'
import Search from '../Search'

import theme from './theme.js'
import styles from './styles.css'

class Header extends React.Component {

  render () {
    return (
      <View as="header" position="relative" background="primary">
        <View as="div" height="0.5rem" position="relative"><ColorStrip /></View>
        <div className={styles.searchLayout}>
          <Search
            options={[
              { id: '0', label: 'Text' },
              { id: '1', label: 'Tray' },
              { id: '2', label: 'Modal' },
              { id: '3', label: 'Select' },
              { id: '4', label: 'Heading' },
              { id: '5', label: 'Flex' },
              { id: '6', label: 'TextInput' },
              { id: '7', label: 'Grid' },
              { id: '8', label: 'NumberInput' },
              { id: '9', label: 'Focusable' },
              { id: '10', label: 'Spinner' },
              { id: '11', label: 'Progress' },
              { id: '12', label: 'Pill' },
              { id: '13', label: 'TextArea' },
              { id: '14', label: 'Alert' },
              { id: '15', label: 'AppNav' },
              { id: '16', label: 'Avatar' },
              { id: '17', label: 'Badge' },
              { id: '18', label: 'Billboard' },
              { id: '19', label: 'Breadcrumb' },
              { id: '20', label: 'Button' },
            ]}
          />
        </div>
      </View>
    )
  }
}

export default themeable(theme, styles)(Header)
