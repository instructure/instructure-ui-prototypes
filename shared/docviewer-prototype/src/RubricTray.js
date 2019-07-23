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
import PropTypes from 'prop-types'
import { View, Flex } from '@instructure/ui-layout'
import { Heading, Text } from '@instructure/ui-elements'
import { Button } from '@instructure/ui-buttons'
import { ScreenReaderContent } from '@instructure/ui-a11y'
import { IconXLine } from '@instructure/ui-icons'

import RubricCriteria from './RubricCriteria'

export default class RubricTray extends React.Component {
  static propTypes = {
    onRequestHideRubric: PropTypes.func
  }

  static defaultProps = {
    onRequestHideRubric: () => {}
  }

  handleRubricClose = () => {
    this.props.onRequestHideRubric()
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
            <Heading level="h3" margin="0 0 small 0">Rubric</Heading>
          </Flex.Item>
          <Flex.Item>
            <Button
              variant="icon"
              icon={IconXLine}
              onClick={this.handleRubricClose}
            >
              <ScreenReaderContent>Close</ScreenReaderContent>
            </Button>
          </Flex.Item>
        </Flex>
        <View as="div" borderWidth="0 0 small 0" padding="small 0" margin="x-small 0">
          <RubricCriteria
            rubricLabel="Setting"
            rubricDescription="Exceptional"
            rubricSummary="Many vivid, descriptive words are used to tell when and where the story took place."
          />
        </View>
        <View as="div" borderWidth="0 0 small 0" padding="small 0" margin="x-small 0">
          <RubricCriteria
            rubricLabel="Characters"
            rubricDescription="Exceptional"
            rubricSummary="The main characters are named and clearly described. Most readers could describe the characters accurately."
          />
        </View>
        <View as="div" borderWidth="0 0 small 0" padding="small 0" margin="x-small 0">
          <RubricCriteria
            rubricLabel="Dialogue"
            rubricDescription="Exceptional"
            rubricSummary="There is an appropriate amount of dialogue to bring the characters to life and it isn't always clear which character is speaking."
          />
        </View>
        <View as="div" padding="small 0" margin="x-small 0">
          <RubricCriteria
            rubricLabel="Organization"
            rubricDescription="Exceptional"
            rubricSummary="The story is very well orgained. One idea or scene follows another in a logical sequence with clear transitions."
          />
        </View>
      </View>
    )
  }
}
