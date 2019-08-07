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

import React, { Component, Children } from 'react'
import PropTypes from 'prop-types'

import { Children as ChildrenPropTypes } from '@instructure/ui-prop-types'

import { addResizeListener, getBoundingClientRect } from '@instructure/ui-dom-utils'
import { callRenderProp } from '@instructure/ui-react-utils'
import { deepEqual } from '@instructure/ui-utils'
import { debounce } from '@instructure/debounce'

import { themeable } from '@instructure/ui-themeable'

import { Item } from './Item'
import styles from './styles.css'

class AppNav extends Component {
  static Item = Item

  static propTypes = {
    children: ChildrenPropTypes.oneOf([Item]),
    renderBeforeItems: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    renderAfterItems: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    visibleItemsCount: PropTypes.number,
    debounce: PropTypes.number,
    onUpdate: PropTypes.func
  }

  static defaultProps = {
    children: null,
    renderBeforeItems: null,
    renderAfterItems: null,
    visibleItemsCount: 0,
    // You can play with this number. I'm thinking we give them this perf or similar
    // out of the box. They can always crank it down to 0 if they want everything
    // snappy. If enough people request it we could change the default.
    debounce: 300,
    onUpdate: () => {}
  }

  state = {
    isMeasuring: false
  }

  _nav = null

  componentDidMount () {
    this._debounced = debounce(this.handleResize, this.props.debounce, { leading: true, trailing: true })
    this._resizeListener = addResizeListener(this._nav, this._debounced)

    this.handleResize()
  }

  componentDidUpdate (prevProps) {
    // If children change we need to measure again
    if (!deepEqual(prevProps.children, this.props.children)) {
      this.handleResize()
    }
  }

  componentWillUnmount () {
    if (this._resizeListener) {
      this._resizeListener.remove()
    }

    if (this._debounced) {
      this._debounced.cancel()
    }
  }

  measureItems = () => {
    let visibleItemsCount = 0

    if (this._nav) {
      let { width: navWidth } = getBoundingClientRect(this._nav)

      const itemWidths = Array.from(this._nav.getElementsByTagName('li')).map((item) => {
        const { width } = getBoundingClientRect(item)
        return width
      })

      const { renderBeforeItems, renderAfterItems } = this.props

      // remove the widths for renderBefore and renderAfter if they exist
      const beforeWidth = renderBeforeItems ? itemWidths.splice(0, 1) : 0
      const afterWidth = renderAfterItems ? itemWidths.splice(-1, 1) : 0

      // adjust the width of the nav container based on the before and after space
      navWidth = (navWidth - beforeWidth) - afterWidth

      let currentWidth = 0

      for (let i = 0; i < itemWidths.length; i++) {
        currentWidth = currentWidth + itemWidths[i]

        if (currentWidth <= navWidth) {
          visibleItemsCount++
        } else {
          break
        }
      }
    }

    return { visibleItemsCount }
  }

  handleResize = () => {
    this.setState({ isMeasuring: true }, () => {
      const { visibleItemsCount } = this.measureItems()

      this.props.onUpdate({ visibleItemsCount })
      this.setState({ isMeasuring: false })
    })
  }

  handleNavRef = (el) => {
    this._nav = el
  }

  renderItems = () => {
    const {
      children,
      renderBeforeItems,
      renderAfterItems,
      visibleItemsCount
    } = this.props

    const { isMeasuring } = this.state

    const childrenArray = Children.toArray(children)

    const visibleChildren = isMeasuring ? children : childrenArray.splice(0, visibleItemsCount)
    const hiddenChildren = isMeasuring ? [] : childrenArray

    return (
      <div>
        <ul className={styles.items}>
          { renderBeforeItems && <Item>{callRenderProp(renderBeforeItems)}</Item> }
          { visibleChildren }
          { renderAfterItems && <Item>{callRenderProp(renderAfterItems)}</Item>}
        </ul>
        <br />
        <p>These are the items that will get rendered in the menu</p>
        {hiddenChildren.map((child, i) => <em key={i}>{child}</em>)}
      </div>
    )
  }

  render () {
    return (
      <nav ref={this.handleNavRef}>
        {this.renderItems()}
      </nav>
    )
  }
}

const ThemeableAppNav = themeable(null, styles)(AppNav)

export { ThemeableAppNav as AppNav }
