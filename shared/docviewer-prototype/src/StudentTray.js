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
import { Checkbox } from '@instructure/ui-forms'
import { View, Flex } from '@instructure/ui-layout'
import { Heading, List, Pill } from '@instructure/ui-elements'
import { Button } from '@instructure/ui-buttons'
import { ScreenReaderContent } from '@instructure/ui-a11y'
import { IconXLine, IconCheckLine } from '@instructure/ui-icons'

import SingleSelect from './SingleSelect'

export default class StudentTray extends React.Component {
  static propTypes = {
    onRequestHideStudents: PropTypes.func
  }

  static defaultProps = {
    onRequestHideStudents: () => {}
  }

  handleStudentsClose = () => {
    this.props.onRequestHideStudents()
  }

  render() {
    return (
      <View
        as="div"
        height="100%"
        padding="medium"
        textAlign="start"
      >
        <Flex justifyItems="space-between" margin="0 0 medium 0">
          <Flex.Item grow>
            <Heading level="h3" margin="0 0 small 0">Students</Heading>
          </Flex.Item>
          <Flex.Item>
            <Button
              variant="icon"
              icon={IconXLine}
              onClick={this.handleStudentsClose}
            >
              <ScreenReaderContent>Close</ScreenReaderContent>
            </Button>
          </Flex.Item>
        </Flex>
        <Checkbox label="Hide Student Names" value="hide" />
        <View as="div" margin="small 0 medium 0" padding="small 0 medium 0" borderWidth="0 0 small 0">
          <SingleSelect
            selectLabel="Sort Students By"
            selectedOptionId="1"
            options={[
              { id: '1', label: 'Names A-Z' },
              { id: '2', label: 'Date Submitted' },
              { id: '3', label: 'Submission Status' }
            ]}
          />
        </View>
        <List variant="unstyled" itemSpacing="small">
          <List.Item>
            <Flex>
              <Flex.Item width="1.5em">
                <IconCheckLine color="success" inline={false} />
              </Flex.Item>
              <Flex.Item grow shrink>
                <Button variant="link" href="#">Charlie Butler</Button>
              </Flex.Item>
              <Flex.Item>

              </Flex.Item>
            </Flex>
          </List.Item>
          <List.Item>
            <Flex>
              <Flex.Item width="1.5em">
                <IconCheckLine color="success" inline={false} />
              </Flex.Item>
              <Flex.Item grow shrink>
                <Button variant="link" href="#">Beulah Dean</Button>
              </Flex.Item>
              <Flex.Item>

              </Flex.Item>
            </Flex>
          </List.Item>
          <List.Item>
            <Flex>
              <Flex.Item width="1.5em">

              </Flex.Item>
              <Flex.Item grow shrink>
                <Button variant="link" href="#">Addie Lindsey</Button>
              </Flex.Item>
              <Flex.Item>
                <Pill
                  variant="warning"
                  text="Late"
                />
              </Flex.Item>
            </Flex>
          </List.Item>
          <List.Item>
            <Flex>
              <Flex.Item width="1.5em">

              </Flex.Item>
              <Flex.Item grow shrink>
                <Button variant="link" href="#">Mabelle Thompson</Button>
              </Flex.Item>
              <Flex.Item>

              </Flex.Item>
            </Flex>
          </List.Item>
          <List.Item>
            <Flex>
              <Flex.Item width="1.5em">

              </Flex.Item>
              <Flex.Item grow shrink>
                <Button variant="link" href="#">Sophia Moss</Button>
              </Flex.Item>
              <Flex.Item>

              </Flex.Item>
            </Flex>
          </List.Item>
          <List.Item>
            <Flex>
              <Flex.Item width="1.5em">

              </Flex.Item>
              <Flex.Item grow shrink>
                <Button variant="link" href="#">Rosa Welch</Button>
              </Flex.Item>
              <Flex.Item>

              </Flex.Item>
            </Flex>
          </List.Item>
          <List.Item>
            <Flex>
              <Flex.Item width="1.5em">

              </Flex.Item>
              <Flex.Item grow shrink>
                <Button variant="link" href="#">Mable Norris</Button>
              </Flex.Item>
              <Flex.Item>

              </Flex.Item>
            </Flex>
          </List.Item>
          <List.Item>
            <Flex>
              <Flex.Item width="1.5em">

              </Flex.Item>
              <Flex.Item grow shrink>
                <Button variant="link" href="#">Gordon Doyle</Button>
              </Flex.Item>
              <Flex.Item>

              </Flex.Item>
            </Flex>
          </List.Item>
          <List.Item>
            <Flex>
              <Flex.Item width="1.5em">

              </Flex.Item>
              <Flex.Item grow shrink>
                <Button variant="link" href="#">Roy Norton</Button>
              </Flex.Item>
              <Flex.Item>
                <Pill
                  variant="warning"
                  text="Late"
                  />
              </Flex.Item>
            </Flex>
          </List.Item>
          <List.Item>
            <Flex>
              <Flex.Item width="1.5em">

              </Flex.Item>
              <Flex.Item grow shrink>
                <Button variant="link" href="#">Conner Simmons</Button>
              </Flex.Item>
              <Flex.Item>
                <Pill
                  variant="warning"
                  text="Late"
                  />
              </Flex.Item>
            </Flex>
          </List.Item>
          <List.Item>
            <Flex>
              <Flex.Item width="1.5em">

              </Flex.Item>
              <Flex.Item grow shrink>
                <Button variant="link" href="#">Randall Hernandez</Button>
              </Flex.Item>
              <Flex.Item>

              </Flex.Item>
            </Flex>
          </List.Item>
          <List.Item>
            <Flex>
              <Flex.Item width="1.5em">

              </Flex.Item>
              <Flex.Item grow shrink>
                <Button variant="link" href="#">Nancy Hampton</Button>
              </Flex.Item>
              <Flex.Item>

              </Flex.Item>
            </Flex>
          </List.Item>
          <List.Item>
            <Flex>
              <Flex.Item width="1.5em">

              </Flex.Item>
              <Flex.Item grow shrink>
                <Button variant="link" href="#">Johanna Reynolds</Button>
              </Flex.Item>
              <Flex.Item>
                <Pill
                  variant="danger"
                  text="Missing"
                />
              </Flex.Item>
            </Flex>
          </List.Item>
          <List.Item>
            <Flex>
              <Flex.Item width="1.5em">
                <IconCheckLine color="success" inline={false} />
              </Flex.Item>
              <Flex.Item grow shrink>
                <Button variant="link" href="#">Ralph Rhodes</Button>
              </Flex.Item>
              <Flex.Item>

              </Flex.Item>
            </Flex>
          </List.Item>
          <List.Item>
            <Flex>
              <Flex.Item width="1.5em">

              </Flex.Item>
              <Flex.Item grow shrink>
                <Button variant="link" href="#">Gene Russell</Button>
              </Flex.Item>
              <Flex.Item>
                <Pill
                  variant="warning"
                  text="Late"
                  />
              </Flex.Item>
            </Flex>
          </List.Item>
          <List.Item>
            <Flex>
              <Flex.Item width="1.5em">

              </Flex.Item>
              <Flex.Item grow shrink>
                <Button variant="link" href="#">Clara Huff</Button>
              </Flex.Item>
              <Flex.Item>

              </Flex.Item>
            </Flex>
          </List.Item>
          <List.Item>
            <Flex>
              <Flex.Item width="1.5em">

              </Flex.Item>
              <Flex.Item grow shrink>
                <Button variant="link" href="#">Gertrude Hammond</Button>
              </Flex.Item>
              <Flex.Item>

              </Flex.Item>
            </Flex>
          </List.Item>
          <List.Item>
            <Flex>
              <Flex.Item width="1.5em">

              </Flex.Item>
              <Flex.Item grow shrink>
                <Button variant="link" href="#">Jackson Padilla</Button>
              </Flex.Item>
              <Flex.Item>

              </Flex.Item>
            </Flex>
          </List.Item>
        </List>
      </View>
    )
  }
}
