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
import { Navigation } from '@instructure/ui-navigation'
import { Avatar, Badge } from '@instructure/ui-elements'
import { ScreenReaderContent } from '@instructure/ui-a11y'
import {
  IconInstructureLine,
  IconAdminLine,
  IconCalendarMonthLine,
  IconCoursesLine,
  IconDashboardLine,
  IconInboxLine,
  IconQuestionLine
} from '@instructure/ui-icons'

import { themeable } from '@instructure/ui-themeable'

import theme from './theme'
import styles from './styles.css'

class MainNav extends React.Component {
  state = {
    adminSelected: false,
    coursesSelected: true
  }

  static propTypes = {
    onRequestShowAdmin: PropTypes.func,
    isMinimized: PropTypes.bool,
    onMinimized: PropTypes.func,
  }

  static defaultProps = {
    onRequestShowAdmin: () => {},
    isMinimized: false,
    onMinimized: () => {}
  }

  handleAdminClick = () => {
    this.props.onRequestShowAdmin()
    this.setState({
      adminSelected: true,
      coursesSelected: false
    })
  }

  render() {
    return (
      <div className={styles.root} id="cake">
        <Navigation
          label="Main navigation"
          toggleLabel={{
            expandedLabel: "Minimize Navigation",
            minimizedLabel: "Expand Navigation"
          }}
          onMinimized={this.props.onMinimized}
        >
          <Navigation.Item
            icon={<IconInstructureLine size="small" />}
            label={<ScreenReaderContent>Home</ScreenReaderContent>}
          />
          <Navigation.Item
            icon={<Avatar name="Ziggy Marley" size="x-small" />}
            label="Account"
          />
          <Navigation.Item
            icon={<IconAdminLine />}
            label="Admin"
            onClick={this.handleAdminClick}
            selected={this.state.adminSelected}

          />
          <Navigation.Item
            icon={<IconDashboardLine />}
            label="Dashboard"
            href="#"
          />
          <Navigation.Item
            icon={<IconCoursesLine />}
            label="Courses"
            href="#"
            selected={this.state.coursesSelected}
          />
          <Navigation.Item
            icon={<IconCalendarMonthLine />}
            label="Calendar"
            href="#"
          />
          <Navigation.Item
            icon={
              <Badge count={99}>
                <IconInboxLine />
              </Badge>
            }
            label="Inbox"
            href="#"
          />
          <Navigation.Item
            icon={<IconQuestionLine />}
            label="Help"
            href="#"
          />
        </Navigation>
      </div>
    )
  }
}

export default themeable(theme, styles)(MainNav)
