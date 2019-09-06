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

import { View } from '@instructure/ui-view'
import { Flex } from '@instructure/ui-layout'
import { Text } from '@instructure/ui-elements'
import { IconAddLine } from '@instructure/ui-icons'
import { Table } from '@instructure/ui-table'
import { ScreenReaderContent } from '@instructure/ui-a11y'

import { Button } from '../Button'

const colors = [
  'primary',
  'secondary',
  'success',
  'danger',
  'primary-inverse'
]

const generateLabel = ({ withBackground, withBorder }) => (
  <View textAlign="center">
    <Text as="div">{withBackground ? 'With Background' : 'Without Background'}</Text>
    <Text as="div">{withBorder ? 'With Border' : 'Without Border'}</Text>
  </View>
)

const generatePermutationProps = ({ iconOnlyPermutations = false } = {}) => {
  const permutations = [{
    key: 'iconOnlyRectangle',
    children: <ScreenReaderContent>Hello</ScreenReaderContent>,
    renderIcon: <IconAddLine />,
    shape: 'rectangle',
    size: 'medium'
  }, {
    key: 'iconOnlyCircle',
    children: <ScreenReaderContent>Hello</ScreenReaderContent>,
    renderIcon: <IconAddLine />,
    shape: 'circle',
    size: 'medium'
  }]

  return iconOnlyPermutations ? permutations : [
    {
      key: 'textOnly',
      children: 'Hello',
      size: 'medium',
    },
    {
      key: 'textAndIcon',
      children: 'Hello',
      renderIcon: <IconAddLine />,
      size: 'medium'
    },
    ...permutations
  ]
}

const propertyCollections = [
  {
    key: 1,
    defaultProps: {
      withBackground: true,
      withBorder: true,
    },
    permutationProps: generatePermutationProps()
  },
  {
    key: 2,
    defaultProps: {
      withBackground: false,
      withBorder: true
    },
    permutationProps: generatePermutationProps()
  },
  {
    key: 3,
    defaultProps: {
      withBackground: false,
      withBorder: false
    },
    permutationProps: generatePermutationProps({ iconOnlyPermutations: true })
  },
]

// eslint-disable-next-line react/display-name
const Examples = () => (
  <View as="div" margin="large">
    <Table caption="Button examples">
      <Table.Head>
        <Table.Row>
          <Table.ColHeader id="placeholder"></Table.ColHeader>
          {propertyCollections.map(({ key, defaultProps }) => (
            <Table.ColHeader id={`${key}`} key={key}>{generateLabel(defaultProps)}</Table.ColHeader>
          ))}
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {colors.map((color) => (
          <Table.Row key={color}>
            <Table.RowHeader>{color}</Table.RowHeader>
            {propertyCollections.map(({ key, defaultProps, permutationProps }) => (
              <Table.Cell key={key}>
                <View as="div" background={color.includes('inverse') ? 'primary-inverse' : 'primary'}>
                  <Flex justifyItems="center">
                    <Flex.Item>
                      {permutationProps.map(({ key, ...props }) => (
                        <Button
                          key={key}
                          color={color}
                          margin="medium"
                          {...props}
                          {...defaultProps}
                        />
                      ))}
                    </Flex.Item>
                  </Flex>
                </View>
              </Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </View>
)

export { Examples }