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


// 1 do something when user clicks away (console.log) [onBlur give an event]
// 2 figure out if the user has entered anything in the input and what that value is [event.target.value]
// 3 based on input value - is there an error [regular expression determine capital, etc...]
// 4 set state based on error
// 5 add error state to the tooltip (message) + style overrides
// 6 do something when the user enters new data in the input [onChange]
// 7 clear the error message / state when user enters new data


import React from 'react'
import PropTypes from 'prop-types'
import { TextInput } from '@instructure/ui-text-input'
import { Button } from '@instructure/ui-buttons'
import { IconWarningLine } from '@instructure/ui-icons'
import { ScreenReaderContent } from '@instructure/ui-a11y'
import { Tooltip } from '@instructure/ui-overlays'

export default class UrlInput extends React.Component {
    constructor (props) {
      super(props)
  
      this.state = {
        value: '',
        inline: false,
        error: null,
        messages: [{ text: 'Lower-case letter, numbers and dashes', type: 'hint' }],
        renderAfterInput: null
      }
    }
  
    handleChange = (e, value) => this.setState({
      value,
      renderAfterInput: null,
      messages: [{ text: 'Lower-case letter, numbers and dashes', type: 'hint' }]
    })
  
    handleBlur = (e) => {
      this.setState({
        value: null,
        messages: [{ text: 'Lower-case letter, numbers and dashes', type: 'error'}],
        renderAfterInput:
          <Tooltip
            constrain="parent"
            tip="Create a unique URL Listing Path"
            placement="end"
            on={['click', 'hover', 'focus']}
          >
            <Button variant="icon" size="small" icon={<IconWarningLine color="error"/>}>
              <ScreenReaderContent>toggle tooltip</ScreenReaderContent>
            </Button>
          </Tooltip>
      })
    }
  
    render () {
      return (
        <div>
          <TextInput
            value={this.state.value}
            renderLabel="URL Listing Path" 
            placeholder="/course-title" 
            messages={this.state.messages}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            renderAfterInput={this.state.renderAfterInput}
          />
        </div>
      )
    }
  }
  