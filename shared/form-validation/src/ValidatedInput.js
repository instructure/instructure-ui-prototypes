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
import { ApplyTheme } from '@instructure/ui-themeable'
import { FormFieldGroup } from '@instructure/ui-form-field'
import { TextInput } from '@instructure/ui-text-input'
import { Button } from '@instructure/ui-buttons'
import { IconWarningLine } from '@instructure/ui-icons'
import { ScreenReaderContent } from '@instructure/ui-a11y'
import { Tooltip2 as Tooltip } from './Tooltip2'

export default class ValidatedInput extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    hint: PropTypes.string,
    error: PropTypes.string.isRequired,
    pattern: PropTypes.instanceOf(RegExp)
  }

  static defaultProps = {
    placeholder: null,
    hint: null,
    pattern: /.+/
  }

  static contextTypes = {
    persistErrors: PropTypes.bool
  }

  _inputContainer = null

  constructor (props) {
    super(props)

    this.state = {
      value: '',
      invalid: false,
      messages: [{ text: this.props.hint, type: 'hint' }]
    }
  }

  validate () {
    if (!this.state.value || this.props.pattern.test(this.state.value)) {
      this.setState({
        invalid: false,
        messages: [{ text: this.props.hint, type: 'hint' }]
      })
    } else {
      this.setState({
        invalid: true,
        messages: [
          { text: this.props.hint, type: 'hint' },
          { text: '', type: 'error'}
        ]
      })
    }
  }

  handleChange = (e, value) => {
    this.setState({ value })
  }

  handleBlur = (e) => {
    this.validate()
  }

  renderInput () {
    const invalidProps = this.state.invalid ? {
      theme: { borderWidth: '0.125rem' },
      renderAfterInput: <IconWarningLine inline={false} color="error"/>
    } : {}
    return (
      <TextInput
        value={this.state.value}
        placeholder={this.props.placeholder}
        renderLabel={this.props.label}
        messages={this.state.messages}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        inputContainerRef={(el) => this._inputContainer = el}
        {...invalidProps}
      />
    )
  }

  render () {
    if (this.state.invalid) {
      return (
        <Tooltip
          show={this.context.persistErrors ? true : undefined}
          tip={this.props.error}
          placement="top end"
          on={['hover','focus']}
          offsetX={4}
          positionTarget={() => this._inputContainer}
        >
          {this.renderInput()}
        </Tooltip>
      )
    } else {
      return this.renderInput()
    }
  }
}
