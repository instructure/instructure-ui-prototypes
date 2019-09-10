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

import React, { Component } from 'react'
import { View } from '@instructure/ui-layout'
import { Button } from '@instructure/ui-buttons'
import { TextArea } from '@instructure/ui-forms'
import { IconNoteLine, IconCheckSolid } from '@instructure/ui-icons'
import { ScreenReaderContent } from '@instructure/ui-a11y'


import { themeable } from '@instructure/ui-themeable'
import styles from './styles.css'

class Scale extends Component {

  state = {
    showNoteInput: false
  }

  handleShowNoteInput = () => {
    this.setState({
      showNoteInput: true
    })
  }

  handleHideNoteInput = () => {
    this.setState({
      showNoteInput: false
    })
  }

  render () {
    return (
      <div>
        <View as="form" padding="small 0">
          <div className={styles.exceeded}>
            <label>
              <input type="radio" name="mastery" value="exceeded" />
              <span><IconCheckSolid inline={false} /></span>Mastery Exceeded
            </label>
          </div>
          <div className={styles.achieved}>
            <label>
              <input type="radio" name="mastery" value="achieved" />
              <span><IconCheckSolid inline={false} /></span>Mastery Achieved
            </label>
          </div>
          <div className={styles.nearing}>
            <label>
              <input type="radio" name="mastery" value="nearing" />
              <span><IconCheckSolid inline={false} /></span>Nearing Mastery
            </label>
          </div>
          <div className={styles.below}>
            <label>
              <input type="radio" name="mastery" value="below" />
              <span><IconCheckSolid inline={false} /></span>Well Below Mastery
            </label>
          </div>
            { !this.state.showNoteInput ? (
              <View as="div" padding="x-small 0" textAlign="end">
                <Button
                  variant="icon"
                  icon={IconNoteLine}
                  onClick={this.handleShowNoteInput}
                >
                  <ScreenReaderContent>Rating Note</ScreenReaderContent>
                </Button>
              </View>
            ) : null }
          </View>
          { this.state.showNoteInput ? (
            <div>
                <View as="div" padding="x-small 0">
                <TextArea
                    label="Rating Note"
                />
                </View>
            </div>
            ) : null }
        </div>
        )
      }
    }

    const ThemeableItem = themeable(null, styles)(Scale)
    export { ThemeableItem as Scale }