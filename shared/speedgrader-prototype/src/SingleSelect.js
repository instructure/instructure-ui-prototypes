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
import { FormPropTypes } from '@instructure/ui-form-field'
import { Select } from '@instructure/ui-select'

export default class SingleSelect extends React.Component {
  static propTypes = {
    selectLabel: PropTypes.string.isRequired,
    selectPlaceholder: PropTypes.string,
    selectedOptionId: PropTypes.string.isRequired,
    selectMessage: PropTypes.arrayOf(FormPropTypes.message)
  }

  static defaultProps = {
    selectPlaceholder: undefined,
    selectMessage: undefined
  }
  constructor (props) {
    super(props)
    const defaultOption = this.getOptionById(this.props.selectedOptionId)

    this.state = {
      inputValue: defaultOption ? defaultOption.label : '',
      isShowingOptions: false,
      highlightedOptionId: null,
      announcement: null,
      selectedOptionId: this.props.selectedOptionId,
    }
  }

  getOptionById (queryId) {
    return this.props.options.find(({ id }) => id === queryId)
  }

  handleShowOptions = (event) => {
    this.setState({
      isShowingOptions: true
    })
  }

  handleHideOptions = (event) => {
    const { selectedOptionId } = this.state
    const option = this.getOptionById(selectedOptionId)
    this.setState({
      isShowingOptions: false,
      highlightedOptionId: null,
      inputValue: selectedOptionId ? option.label : ''
    })
  }

  handleBlur = (event) => {
    this.setState({
      highlightedOptionId: null
    })
  }

  handleHighlightOption = (event, { id }) => {
    event.persist()
    const optionsAvailable = `${this.props.options.length} options available.`
    const nowOpen = !this.state.isShowingOptions ? `List expanded. ${optionsAvailable}` : ''
    const option = this.getOptionById(id).label
    this.setState((state) => ({
      highlightedOptionId: id,
      inputValue: event.type === 'keydown' ? option.label : state.inputValue,
      announcement: `${option} ${nowOpen}`
    }))
  }

  handleSelectOption = (event, { id }) => {
    const option = this.getOptionById(id)
    this.setState({
      selectedOptionId: id,
      inputValue: option ? option.label : '',
      isShowingOptions: false,
      announcement: `"${option}" selected. List collapsed.`
    })
  }

  render () {
    const {
      inputValue,
      isShowingOptions,
      highlightedOptionId,
      selectedOptionId
    } = this.state

    const option = this.getOptionById(selectedOptionId)

    return (
      <div>
        <Select
          renderLabel={this.props.selectLabel}
          placeholder={this.props.selectPlaceholder}
          assistiveText="Use arrow keys to navigate options."
          inputValue={inputValue}
          isShowingOptions={isShowingOptions}
          inputRef={(el) => this.inputRef = el}
          onBlur={this.handleBlur}
          onRequestShowOptions={this.handleShowOptions}
          onRequestHideOptions={this.handleHideOptions}
          onRequestHighlightOption={this.handleHighlightOption}
          onRequestSelectOption={this.handleSelectOption}
          renderBeforeInput={option ? option.icon : null}
          messages={this.props.selectMessage}
        >
          {this.props.options.map((option) => {
            return (
              <Select.Option
                id={option.id}
                key={option.id}
                isHighlighted={option.id === highlightedOptionId}
                isSelected={option.id === selectedOptionId}
                renderBeforeLabel={option.icon}
              >
                { option.label }
              </Select.Option>
            )
          })}
        </Select>
      </div>
    )
  }
}
