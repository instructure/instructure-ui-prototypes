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
import { View, Flex, Responsive } from '@instructure/ui-layout'
import { Breadcrumb } from '@instructure/ui-breadcrumb'
import { Tabs } from '@instructure/ui-tabs'
import { Button } from '@instructure/ui-buttons'
import { ScreenReaderContent } from '@instructure/ui-a11y'
import {
  IconHamburgerLine,
  IconMoveStartLine
} from '@instructure/ui-icons'

import SingleSelect from './SingleSelect'


// note: the magic number 948 is the max width the content itself should ever grow to
export default class MainContent extends React.Component {
  static propTypes = {
    onRequestShowCourseNav: PropTypes.func,
    onRequestShowActions: PropTypes.func,
    onRequestShowBurgerBtn: PropTypes.bool,
    onRequestShowActionsBtn: PropTypes.bool
  }

  static defaultProps = {
    onRequestShowCourseNav: () => {},
    onRequestShowActions: () => {},
    onRequestShowBurgerBtn: true,
    onRequestShowActionsBtn: true
  }

  state = {
    selectedIndex: 0
  }

  handleBurgerClick = () => {
    this.props.onRequestShowCourseNav()
  }

  handleActionClick = () => {
    this.props.onRequestShowActions()
  }

  handleTabChange = (event, { index, id }) => {
    this.setState({
      selectedIndex: index
    })
  }

  componentDidMount (prevProps, prevState) {
    this._input.focus()
  }

  render() {
    const { selectedIndex } = this.state

    return (
      <View as="div">
        <View
          as="div"
          margin="0 medium"
          padding="small 0"
          borderWidth="0 0 small 0"
          minHeight="4rem"
        >
          <Flex>
            {this.props.onRequestShowBurgerBtn ? (
              <Flex.Item padding="0 medium 0 0">
                <Button
                  variant="icon"
                  icon={IconHamburgerLine}
                  onClick={this.handleBurgerClick}
                  ref={c => (this._input = c)}
                >
                  <ScreenReaderContent>Open Course Nav</ScreenReaderContent>
                </Button>
              </Flex.Item>
            ) : null}
            <Flex.Item grow shrink padding="0">
              <Breadcrumb label="You are here:">
                <Breadcrumb.Link href="https://instructure.github.io/instructure-ui/">
                  Employee Sandbox
                </Breadcrumb.Link>
                <Breadcrumb.Link>Settings</Breadcrumb.Link>
              </Breadcrumb>
            </Flex.Item>
            {this.props.onRequestShowActionsBtn ? (
              <Flex.Item>
                <Button
                  variant="icon"
                  icon={IconMoveStartLine}
                  onClick={this.handleActionClick}
                  ref={c => (this._input = c)}
                >
                  <ScreenReaderContent>Open Action Tray</ScreenReaderContent>
                </Button>
              </Flex.Item>
            ) : null}
          </Flex>
        </View>
        <View as="div" margin="small auto" padding="0 medium" maxWidth="948px">
          <Responsive
            match="media"
            query={{
              small: { maxWidth: 1023 },
              large: { minWidth: 1024 }
            }}
          >
            {(props, matches) => {
              if (matches.includes('large')) {
                return (
                  <div>
                    <Tabs
                      margin="large auto"
                      padding="medium"
                      onRequestTabChange={this.handleTabChange}
                    >
                      <Tabs.Panel
                        id="tabA"
                        renderTitle="Settings"
                        padding="large"
                        selected={selectedIndex === 0}
                      >
                        setting content area
                      </Tabs.Panel>
                      <Tabs.Panel
                        id="tabB"
                        renderTitle="Quotas"
                        selected={selectedIndex === 1}
                      >
                        quota content area
                      </Tabs.Panel>
                      <Tabs.Panel
                        id="tabC"
                        renderTitle="Notifications"
                        selected={selectedIndex === 2}
                      >
                        notification content area
                      </Tabs.Panel>
                      <Tabs.Panel
                        id="tabD"
                        renderTitle="Admins"
                        selected={selectedIndex === 3}
                      >
                        admin content area
                      </Tabs.Panel>
                      <Tabs.Panel
                        id="tabE"
                        renderTitle="Announcements"
                        selected={selectedIndex === 4}
                      >
                        announcement content area
                      </Tabs.Panel>
                      <Tabs.Panel
                        id="tabF"
                        renderTitle="Reports"
                        selected={selectedIndex === 5}
                      >
                        report content area
                      </Tabs.Panel>
                      <Tabs.Panel
                        id="tabG"
                        renderTitle="Apps"
                        selected={selectedIndex === 6}
                      >
                        apps content area
                      </Tabs.Panel>
                      <Tabs.Panel
                        id="tabH"
                        renderTitle="Feature Options"
                        selected={selectedIndex === 7}
                      >
                        feature options content area
                      </Tabs.Panel>
                    </Tabs>
                  </div>
                )
              } else {
                return (
                  <div>
                    <SingleSelect
                      selectLabel="Settings"
                      selectedOptionId="1"
                      options={[
                        { id: '0', label: 'Account Settings' },
                        { id: '1', label: 'Quotas' },
                        { id: '2', label: 'Notifications' },
                        { id: '3', label: 'Admins' },
                        { id: '4', label: 'Announcements' },
                        { id: '5', label: 'Reports' },
                        { id: '6', label: 'Apps' },
                        { id: '7', label: 'Feature Options' }
                      ]}
                    />
                    <View as="div" margin="medium 0">
                      quota content area (when select)<br/>
                      TODO: would need to change this render based on the selected option
                    </View>
                  </div>
                )
              }
          }}
          </Responsive>
        </View>
      </View>
    )
  }
}
