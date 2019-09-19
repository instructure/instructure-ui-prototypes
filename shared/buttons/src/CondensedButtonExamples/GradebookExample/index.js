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

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { themeable } from '@instructure/ui-themeable'
import { Text } from '@instructure/ui-text'
import { View } from '@instructure/ui-view'
import { TruncateText } from '@instructure/ui-elements'

import styles from './styles.css'
import theme from './theme'

@themeable(theme, styles)
class Gradebook extends Component {
  static propTypes = {
    condensedButton: PropTypes.node.isRequired
  }

  renderCell = ({ name, group = 'group 1'} = {}) => {
    const { condensedButton: CondensedButton } = this.props
    return (
      <tr>
        <td className={styles.cell}>
          <CondensedButton>{name}</CondensedButton>
          <br />
          <Text>{group}</Text></td>
        <td className={styles.cell}></td>
        <td className={styles.cell}><View display="block" textAlign="center">-</View></td>
      </tr>
    )
  }

  renderHead = () => {
    const classes = classnames({
      [styles.cell]: true,
      [styles.headerCell]: true
    })

    return (
      <thead className={styles.head}>
        <tr>
          <th scope="column" className={classes}><Text size="small">Student Name</Text></th>
          <th scope="column" className={classes}>
            <View textAlign="center" display="block">
              <Text weight="normal" size="small" lineHeight="condensed"><TruncateText>accelerate something something</TruncateText></Text>
              <Text weight="normal" size="small">Out of 0</Text>
            </View>
          </th>
          <th scope="column" className={classes}>
            <View textAlign="center" display="block">
              <Text weight="normal" size="small"><TruncateText>Assignment something something</TruncateText></Text>
              <Text weight="normal" size="small">Out of 0</Text>
            </View>
          </th>
        </tr>
      </thead>
    )
  }

  render () {
    return (
      <table className={styles.root}>
        {this.renderHead()}
        <tbody className={styles.body}>
          {this.renderCell({ name: '\'scooby doo\''})}
          {this.renderCell({ name: '\'Daphne Blake\'' })}
          {this.renderCell({ name: 'Joseph Button', group: 'UX Testing' })}
          {this.renderCell({ name: 'Samuel Cole', group: 'UX Testing' })}
          {this.renderCell({ name: 'Patrick Cox' })}
        </tbody>
      </table>
    )
  }
}

export const GradebookExample = ({ condensedButton }) => (
  <Gradebook condensedButton={condensedButton} />
)