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
import { DrawerLayout, View } from '@instructure/ui-layout'
import { themeable } from '@instructure/ui-themeable'

import CourseNav from '../CourseNav'
import ActionTray from '../ActionTray'
import AdminTray from '../AdminTray'
import AdminSettingContent from '../AdminSettingContent'
import MainNav from '../MainNav'

import theme from './theme'
import styles from './styles.css'

class DrawerContainer extends React.Component {
  state = {
    showCourseNav: false,
    showActions: false,
    showBurgerBtn: true,
    showActionsBtn: true,
    showAdmin: false,
    isMinimized: false
  }

  handleShowAdmin = () => {
    this.setState({
      showAdmin: true
    })
  }

  handleHideAdmin = () => {
    this.setState({
      showAdmin: false
    })
  }

  handleShowCourseNav = () => {
    this.setState({
      showCourseNav: true,
      showBurgerBtn: false
    })
  }

  handleHideCourseNav = () => {
    this.setState({
      showCourseNav: false,
      showBurgerBtn: true
    })
  }

  handleShowActions = () => {
    this.setState({
      showActions: true,
      showActionsBtn: false
    })
  }

  handleHideActions = () => {
    this.setState({
      showActions: false,
      showActionsBtn: true
    })
  }

  handleNavToggle = (e, isMinimized) => {
    this.setState({
      isMinimized
    })
  }

  render() {
    return (
      <View as="div" height="100vh" width="100%" margin="0 auto">
        <MainNav
          onRequestShowAdmin={this.handleShowAdmin}
          isMinimized={this.state.isMinimized}
          onMinimized={this.handleNavToggle}
        />
        <div className={this.state.isMinimized ? styles.minimized : styles.expanded}>
          <DrawerLayout>
            <DrawerLayout.Tray
              label="Admin"
              open={this.state.showAdmin}
              placement="start"
              onDismiss={this.handleHideAdmin}
            >
              <AdminTray onRequestHideAdmin={this.handleHideAdmin} />
            </DrawerLayout.Tray>
            <DrawerLayout.Content label="Main Nav">
                <DrawerLayout>
                  <DrawerLayout.Tray
                    label="Course Actions"
                    open={this.state.showActions}
                    placement="end"
                    onDismiss={this.handleHideActions}
                  >
                    <ActionTray onRequestHideActions={this.handleHideActions} />
                  </DrawerLayout.Tray>
                  <DrawerLayout.Content label="Course Modules">
                    <DrawerLayout>
                      <DrawerLayout.Tray
                        label="Course Navigation"
                        open={this.state.showCourseNav}
                        placement="start"
                        onDismiss={this.handleHideCourseNav}
                      >
                        <CourseNav onRequestHideCourseNav={this.handleHideCourseNav} />
                      </DrawerLayout.Tray>
                      <DrawerLayout.Content label="Drawer content example containing a responsive ">
                        <AdminSettingContent
                          onRequestShowCourseNav={this.handleShowCourseNav}
                          onRequestShowActions={this.handleShowActions}
                          onRequestShowBurgerBtn={this.state.showBurgerBtn}
                          onRequestShowActionsBtn={this.state.showActionsBtn}
                        />
                      </DrawerLayout.Content>
                    </DrawerLayout>
                  </DrawerLayout.Content>
                </DrawerLayout>
            </DrawerLayout.Content>
          </DrawerLayout>
        </div>
      </View>
    )
  }
}

export default themeable(theme, styles)(DrawerContainer)
