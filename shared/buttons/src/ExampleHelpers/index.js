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

import { View } from '@instructure/ui-view'
import { List, Heading } from '@instructure/ui-elements'

import React from 'react'

export const ExampleContainer = ({ children, count, description }) => (
  <View display="block" maxWidth="60rem">
    <><Heading level="h3" as="h3">Situation {count}: {description}</Heading></>
    {children}
  </View>
)

export const ExampleFrame = ({ children, description, height = 'auto', width = '60rem', withBorder = true } = {}) => (
  <View display="block" margin="medium none large none">
    {description}
    <View
      margin="small none none none"
      display="block"
      borderWidth={withBorder ? 'medium' : 'none'}
      borderColor="primary"
      width={width}
      height={height}
      overflowX="hidden"
    >
      {children}
    </View>
  </View>
)

export const ExampleDescription = ({ label, children }) => (
  <View display="block" margin="medium none none">
    {label && <Heading margin="none none xx-small none" level="h4" as="h3">{label}</Heading>}
    {children && (
      <List>
        {children.map(child => <List.Item key={child}>{child}</List.Item>)}
      </List>
    )}
  </View>
)