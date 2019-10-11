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
import Fractal from './fractal'

import theme from './theme.js'
import styles from './styles.css'

class Cards extends React.Component {

  render () {
    return (
      <View as="div" background="primary-inverse" position="relative">
        <div className={styles.fractalLayout}>
          <Fractal />
        </div>
        <View as="div" maxWidth="58rem" margin="0 auto" padding="x-large 0" position="relative">
          <View
            as="div"
            background="primary"
            shadow="resting"
            margin="0 0 medium"
          >
            <View padding="medium" display="block">
              card
            </View>
            <View as="div" height="0.25rem" position="relative"><ColorStrip /></View>
          </View>
          <View
            as="div"
            background="primary"
            shadow="resting"
            margin="0 0 medium"
          >
            <View padding="medium" display="block">
              card
            </View>
            <View as="div" height="0.25rem" position="relative"><ColorStrip /></View>
          </View>
          <View
            as="div"
            background="primary"
            shadow="resting"
          >
            <View padding="medium" display="block">
              card
            </View>
            <View as="div" height="0.25rem" position="relative"><ColorStrip /></View>
          </View>
        </View>
      </View>
    )
  }
}

export default themeable(theme, styles)(Cards)
