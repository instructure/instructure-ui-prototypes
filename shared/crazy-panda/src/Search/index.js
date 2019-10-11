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

import { Alert } from '@instructure/ui-alerts'
import { Button } from '@instructure/ui-buttons'
import { ScreenReaderContent } from '@instructure/ui-a11y-content'
import { Heading } from '@instructure/ui-elements'
import { Flex } from '@instructure/ui-flex'
import { Select } from '@instructure/ui-select'
import { Text } from '@instructure/ui-text'
import { IconSearchSolid, IconHeartSolid, IconGithubSolid } from '@instructure/ui-icons'
import { View } from '@instructure/ui-view'
import { themeable } from '@instructure/ui-themeable'
import Panda from '../Panda'

import theme from './theme.js'
import styles from './styles.css'

class Search extends React.Component {
  state = {
    inputValue: '',
    isShowingOptions: false,
    highlightedOptionId: null,
    selectedOptionId: null,
    filteredOptions: this.props.options,
    announcement: null,
    panda: 'inactive'
  }

  componentWillUnmount() {
    if (this._timer) {
      clearTimeout(this._timer)
    }
  }

  getOptionById (queryId) {
    return this.props.options.find(({ id }) => id === queryId)
  }

  getOptionsChangedMessage (newOptions) {
    let message = newOptions.length !== this.state.filteredOptions.length
      ? `${newOptions.length} options available.` // options changed, announce new total
      : null // options haven't changed, don't announce
    if (message && newOptions.length > 0) {
      // options still available
      if (this.state.highlightedOptionId !== newOptions[0].id) {
        // highlighted option hasn't been announced
        const option = this.getOptionById(newOptions[0].id).label
        message = `${option}. ${message}`
      }
    }
    return message
  }

  filterOptions = (value) => {
    return this.props.options.filter(option => (
      option.label.toLowerCase().startsWith(value.toLowerCase())
    ))
  }

  matchValue () {
    const {
      filteredOptions,
      inputValue,
      highlightedOptionId,
      selectedOptionId
    } = this.state

    // an option matching user input exists
    if (filteredOptions.length === 1) {
      const onlyOption = filteredOptions[0]
      // automatically select the matching option
      if (onlyOption.label.toLowerCase() === inputValue.toLowerCase()) {
        return {
          inputValue: onlyOption.label,
          selectedOptionId: onlyOption.id,
          filteredOptions: this.filterOptions('')
        }
      }
    }
    // allow user to return to empty input and no selection
    if (inputValue.length === 0) {
      return { selectedOptionId: null }
    }
    // no match found, return selected option label to input
    if (selectedOptionId) {
      const selectedOption = this.getOptionById(selectedOptionId)
      return { inputValue: selectedOption.label }
    }
    // input value is from highlighted option, not user input
    // clear input, reset options
    if (highlightedOptionId) {
      if (inputValue === this.getOptionById(highlightedOptionId).label) {
        return {
          inputValue: '',
          filteredOptions: this.filterOptions('')
        }
      }
    }
  }

  handleShowOptions = (event) => {
    this.setState(({ filteredOptions }) => ({
      isShowingOptions: true,
      announcement: `List expanded. ${filteredOptions.length} options available.`
    }))
  }

  handleHideOptions = (event) => {
    this.setState({
      isShowingOptions: false,
      highlightedOptionId: null,
      announcement: 'List collapsed.',
      panda: 'inactive',
      ...this.matchValue()
    })
  }

  handleBlur = (event) => {
    this.setState({
      highlightedOptionId: null,
      panda: 'inactive'
    })
  }

  handleHighlightOption = (event, { id }) => {
    if (this._timer) {
      clearTimeout(this._timer)
    }
    event.persist()
    const option = this.getOptionById(id)
    if (!option) return // prevent highlighting of empty option
    this.setState((state) => ({
      highlightedOptionId: id,
      inputValue: event.type === 'keydown' ? option.label : state.inputValue,
      announcement: option.label,
      panda: 'info'
    }))
  }

  handleSelectOption = (event, { id }) => {
    const option = this.getOptionById(id)
    if (!option) return // prevent selecting of empty option
    this.setState({
      selectedOptionId: id,
      inputValue: option.label,
      isShowingOptions: false,
      filteredOptions: this.props.options,
      announcement: `${option.label} selected. List collapsed.`,
      panda: 'inactive'
    })
  }

  handlePanda (value, options) {
    this._timer = setTimeout(() => {
      if (value === '' || value === 'highlight') {
        this.setState({panda: 'inactive'})
      } else {
        if (options.length) {
          this.setState({panda: 'success'})
        } else {
          this.setState({panda: 'danger'})
        }
      }
    }, 500)
  }

  handleInputChange = (event) => {
    if (this._timer) {
      clearTimeout(this._timer)
    }
    const value = event.target.value
    const newOptions = this.filterOptions(value)
    this.setState((state) => ({
      inputValue: value,
      filteredOptions: newOptions,
      highlightedOptionId: newOptions.length > 0 ? newOptions[0].id : null,
      isShowingOptions: true,
      selectedOptionId: value === '' ? null : state.selectedOptionId,
      announcement: this.getOptionsChangedMessage(newOptions),
      panda: 'active'
    }))
    this.handlePanda(value, newOptions)
  }

  render () {
    const {
      inputValue,
      isShowingOptions,
      highlightedOptionId,
      selectedOptionId,
      filteredOptions,
      announcement
    } = this.state

    return (
      <View as="div" maxWidth="58rem" margin="0 auto">
        <Flex>
          <Flex.Item padding="0 large 0 0">
            <Panda
              status={this.state.panda}
              color="panda"
              size="16rem"
              shadow={false}
            />
          </Flex.Item>

          <Flex.Item shouldGrow shouldShrink>
            <Heading as="h1" level="h1" margin="0 0 x-small">Instructure UI</Heading>
            <View as="p" margin="0 0 medium">
              <Text>Accessible, bidirectional React components tested in all the major browsers
              as well as VoiceOver and NVDA screen readers.</Text>
            </View>
            <div className={styles.makeSelectGreatAgain}>
              <Select
                size="large"
                renderLabel={<ScreenReaderContent>Search Instructure UI</ScreenReaderContent>}
                assistiveText="Type or use arrow keys to navigate options."
                placeholder="Search Instructure UI"
                inputValue={inputValue}
                isShowingOptions={isShowingOptions}
                onBlur={this.handleBlur}
                onInputChange={this.handleInputChange}
                onRequestShowOptions={this.handleShowOptions}
                onRequestHideOptions={this.handleHideOptions}
                onRequestHighlightOption={this.handleHighlightOption}
                onRequestSelectOption={this.handleSelectOption}
                renderAfterInput={<IconSearchSolid inline={false} />}
              >
                {filteredOptions.length > 0 ? filteredOptions.map((option) => {
                  return (
                    <Select.Option
                      id={option.id}
                      key={option.id}
                      isHighlighted={option.id === highlightedOptionId}
                      isSelected={option.id === selectedOptionId}
                      isDisabled={option.disabled}
                    >
                      {!option.disabled
                        ? option.label
                        : `${option.label} (unavailable)`
                      }
                    </Select.Option>
                  )
                }) : (
                  <Select.Option
                    id="empty-option"
                    key="empty-option"
                  >
                    ---
                  </Select.Option>
                )}
              </Select>
              <Alert
                liveRegion={() => document.getElementById('flash-messages')}
                liveRegionPoliteness="assertive"
                screenReaderOnly
              >
                { announcement }
              </Alert>
            </div>
            <View as="div" margin="medium 0 0">
              <Button margin="0 x-small 0 0">Quick Start</Button>
              <Button icon={IconHeartSolid} margin="0 x-small 0 0">Our Values</Button>
              <Button icon={IconGithubSolid}>Github</Button>
            </View>
          </Flex.Item>
        </Flex>
      </View>
    )
  }
}

export default themeable(theme, styles)(Search)
