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

import { View } from '@instructure/ui-layout'
import { AppNav } from '@instructure/ui-navigation'

import SelectableText from '../SelectableText'
import Listing from '../Listing'

export default class Wrapper extends React.Component {
  static childContextTypes = {
    persistErrors: PropTypes.bool
  }

  getChildContext () {
    return {
      persistErrors: this.state.persistErrors
    }
  }

  state = {
    persistErrors: false
  }

  handleToggleClick = (e) => {
    this.setState(state => ({ persistErrors: !state.persistErrors}))
  }

  render () {
    return (
      <View
        as="div"
        margin="medium 0"
        padding="medium"
      >
        <button
          style={{position: 'absolute', right: 20}}
          onClick={this.handleToggleClick}>
          Toggle tooltip UI
        </button>
        <AppNav
            screenReaderLabel="App navigation"
        >
        <AppNav.Item
            isSelected
            renderLabel="Listings"
            onClick={() => console.log('listings')}
        />
        <AppNav.Item
            renderLabel="Catalogs"
            onClick={() => console.log('catalogs')}
        />
        <AppNav.Item
            renderLabel="Promotions"
            onClick={() => console.log('promotions')}
        />
        <AppNav.Item
            renderLabel="Reports"
            onClick={() => console.log('reports')}
        />
        <AppNav.Item
            renderLabel="Analytics"
            onClick={() => console.log('analytics')}
        />
        <AppNav.Item
            renderLabel="API"
            onClick={() => console.log('api')}
        />
        <AppNav.Item
            renderLabel="Subcatalog Admins"
            onClick={() => console.log('subcatalog admins')}
        />
        </AppNav>
        <View as="div" margin="xx-large small">
          <SelectableText />
        </View>
        <Listing />
      </View>
    )
  }
}
