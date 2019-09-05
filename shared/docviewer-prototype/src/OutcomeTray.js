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

//  TODO: having the note icon as clickable within the toggle header feels odd as
//  it could be clicked without the toggle being expanded so it feels disconnected
//  from what actually happens when it's clicked

import React from 'react'
import PropTypes from 'prop-types'
import { View, Flex } from '@instructure/ui-layout'
import { Heading, Text } from '@instructure/ui-elements'
import { TextArea } from '@instructure/ui-forms'
import { Button } from '@instructure/ui-buttons'
import { ToggleDetails } from '@instructure/ui-toggle-details'
import { ScreenReaderContent } from '@instructure/ui-a11y'
import { IconXLine, IconNoteLine } from '@instructure/ui-icons'

import styles from './styles.css'

export default class OutcomeTray extends React.Component {
  static propTypes = {
    onRequestHideOutcome: PropTypes.func
  }

  static defaultProps = {
    onRequestHideOutcome: () => {}
  }

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

  handleOutcomeClose = () => {
    this.props.onRequestHideOutcome()
  }

  render() {
    return (
      <View
        as="div"
        height="100%"
        padding="medium"
        textAlign="start"
      >
        <Flex justifyItems="space-between" margin="0 0 small 0">
          <Flex.Item grow shrink>
            <Heading level="h3" margin="0 0 small 0">Outcomes</Heading>
          </Flex.Item>
          <Flex.Item>
            <Button
              variant="icon"
              icon={IconXLine}
              onClick={this.handleOutcomeClose}
            >
              <ScreenReaderContent>Close</ScreenReaderContent>
            </Button>
          </Flex.Item>
        </Flex>
        <View as="div" borderWidth="0 0 small 0" margin="small 0">
          <ToggleDetails
            fluidWidth
            summary={
              <Text weight="bold" size="large" transform="uppercase">ccss.ela-literacy.rl.5.1</Text>
            }
          >
            <View as="div" padding="small 0">
              <Text>Quote accurately from a text when explaining what the text says explicitly and when drawing inferences from the text.</Text>
            </View>
            <View as="form" padding="small 0" onSubmit={this.handleSubmit}>
              <div>
                <label className={styles.root}>
                  <input type="radio" name="mastery" value="exceeded" />
                  Mastery Exceeded
                </label>
              </div>
              <div>
                <label className={styles.root}>
                  <input type="radio" name="mastery" value="achieved" />
                  Mastery Achieved
                </label>
              </div>
              <div>
                <label className={styles.root}>
                  <input type="radio" name="mastery" value="nearing" />
                  Nearing Mastery
                </label>
              </div>
              <div>
                <label className={styles.root}>
                  <input type="radio" name="mastery" value="below" />
                  Well Below Mastery
                </label>
              </div>
              { !this.state.showNoteInput ? (
                    <View as="div" textAlign="center" padding="medium 0">
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
                <View as="div" padding="medium 0">
                  <TextArea
                    label="Rating Note"
                  />
                </View>
              </div>
            ) : null }
          </ToggleDetails>
        </View>
    </View>
    )
  }
}
