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
import classnames from 'classnames'

import { InlineSVG } from '@instructure/ui-svg-images'

import { themeable } from '@instructure/ui-themeable'

import theme from './theme.js'
import styles from './styles.css'

class Panda extends React.Component {
  static propTypes = {
    status: PropTypes.oneOf(['active', 'inactive', 'success', 'danger', 'info']),
    shadow: PropTypes.bool,
    color: PropTypes.oneOf(['panda', 'panda-inverse']),
    display: PropTypes.oneOf(['block', 'inline-block']),
    size: PropTypes.string
  }

  static defaultProps = {
    status: 'inactive',
    shadow: true,
    color: 'panda',
    display: 'block',
    size: '100%'
  }

  eyeColorFillClass (fillNum) {
    return classnames({
      [styles.eyeColorFill]: true,
      [styles[`fill--${fillNum}`]]: true
    })
  }

  render () {
    const { color, display, size, status, shadow } = this.props

    const svgClasses = classnames({
      [styles.root]: true,
      [styles[`status--${status}`]]: true,
      [styles[`color--${color}`]]: true
    })

    return (
      <InlineSVG
        title="Instructure UI logo"
        viewBox="0 0 765 765"
        className={svgClasses}
        inline={display === 'block' ? false : true}
        width={size}
        height={size}
      >
        {shadow &&
          <defs>
            <filter id="PandaShadow">
              <feDropShadow
                dx="0"
                dy="5"
                stdDeviation="25"
                floodColor={color === 'panda-inverse' ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.2)'}
              />
            </filter>
          </defs>
        }
        <path
          className={styles.backdrop}
          style={{ filter: shadow ? 'url(#PandaShadow)' : null }}
          d="M316.2 682.7l-61-15.2-84-18.3-76.7-120.5-7.4-152.1 62.5-163.9-60.7-79.6 28.3-53.6 123.4 10.3 8 48.2 133.9-24.3L516.4 138l8-48.2 123.4-10.3 28.3 53.6-60.7 79.6 62.5 163.9-7.4 152.1-76.7 120.5-84 18.3-61 15.2-66.3 11.1z"
        />
        <g> {/* main */}
          <path className={styles['fill--1']} d="M146 386.2l-.1.1 76.5 111v103.2L84.7 527.9z"/>
          <path className={styles['fill--2']} d="M146 386.2l-.1.1 76.5-99.4z"/>
          <path className={styles['fill--3']} d="M146 386.2l-.1.1L77 371l7.7 156.9z"/>
          <path className={styles['fill--1']} d="M146 386.2l-.1.1L77 371l84.2-118.6 61.2 34.5z"/>
          <path className={styles['fill--4']} d="M77 371l84.2-118.6-23-42z"/>
          <path className={styles['fill--5']} d="M268.3 149.2L161.2 252.4l-23-42 118.6-88z"/>
          <path className={styles['fill--3']} d="M268.3 149.2l114.7-7.7V99.4l-126.2 23z"/>
          <path className={styles['fill--6']} d="M268.3 149.2l-45.9 137.7-61.2-34.5z"/>
          <path className={styles['fill--7']} d="M268.3 149.2l-45.9 137.7 91.8 7.6 68.8-153z"/>
          <path className={styles['fill--6']} d="M383 290.7l-68.8 3.8 68.8-153z"/>
          <path className={styles['fill--3']} d="M383 290.7l-68.8 3.8 34.4 76.5H383z"/>
          <path className={styles['fill--6']} d="M383 508.7h-49.7L348.6 371H383z"/>
          <path className={styles['fill--3']} d="M333.3 508.7L348.6 371 222.4 497.3z"/>
          <path className={styles['fill--8']} d="M333.3 508.7l-34.4 57.4-76.5-68.8z"/>
          <path className={styles['fill--3']} d="M291.2 646.4l7.7-80.3 84.1 23v49.7z"/>
          <path className={styles['fill--4']} d="M291.2 646.4l23 42.1L383 700v-61.2z"/>
          <path className={styles['fill--9']} d="M291.2 646.4l23 42.1-61.2-15.3-30.6-72.7z"/>
          <path className={styles['fill--4']} d="M84.7 527.9L165 654.1l88 19.1-30.6-72.7z"/>
          <path className={styles['fill--5']} d="M222.4 600.5V497.3l76.5 68.8-7.7 80.3z"/>
          <path className={styles['fill--6']} d="M382 508.7h49.7L416.4 371H382z"/>
          <path className={styles['fill--1']} d="M619 386.2l.1.1-76.5 111v103.2l137.7-72.6z"/>
          <path className={styles['fill--3']} d="M619 386.2l.1.1L688 371l-7.7 156.9z"/>
          <path className={styles['fill--1']} d="M619 386.2l.1.1L688 371l-84.2-118.6-61.2 34.5z"/>
          <path className={styles['fill--4']} d="M688 371l-84.2-118.6 23-42z"/>
          <path className={styles['fill--5']} d="M496.7 149.2l107.1 103.2 23-42-118.6-88z"/>
          <path className={styles['fill--3']} d="M496.7 149.2L382 141.5V99.4l126.2 23z"/>
          <path className={styles['fill--6']} d="M496.7 149.2l45.9 137.7 61.2-34.5z"/>
          <path className={styles['fill--7']} d="M496.7 149.2l45.9 137.7-91.8 7.6-68.8-153z"/>
          <path className={styles['fill--6']} d="M382 290.7l68.8 3.8-68.8-153z"/>
          <path className={styles['fill--3']} d="M382 290.7l68.8 3.8-34.4 76.5H382zM431.7 508.7L416.4 371l126.2 126.3z"/>
          <path className={styles['fill--8']} d="M431.7 508.7l34.4 57.4 76.5-68.8z"/>
          <path className={styles['fill--3']} d="M473.8 646.4l-7.7-80.3-84.1 23v49.7z"/>
          <path className={styles['fill--4']} d="M473.8 646.4l-23 42.1L382 700v-61.2z"/>
          <path className={styles['fill--9']} d="M473.8 646.4l-23 42.1 61.2-15.3 30.6-72.7z"/>
          <path className={styles['fill--4']} d="M680.3 527.9L600 654.1l-88 19.1 30.6-72.7z"/>
          <path className={styles['fill--5']} d="M542.6 600.5V497.3l-76.5 68.8 7.7 80.3z"/>
        </g>
        <g className={styles.ears}> {/* ears */}
          <path className={styles['fill--10']} d="M77 130h88l-53.5-65z"/>
          <path className={styles['fill--2']} d="M249.1 76.5L165 130l-53.5-65z"/>
          <path className={styles['fill--11']} d="M249.1 76.5L165 130l91.8-7.6z"/>
          <path className={styles['fill--2']} d="M138.2 210.4L165 130l91.8-7.6z"/>
          <path className={styles['fill--12']} d="M138.2 210.4L165 130H77z"/>
          <path className={styles['fill--10']} d="M688 130h-88l53.5-65z"/>
          <path className={styles['fill--2']} d="M515.9 76.5L600 130l53.5-65z"/>
          <path className={styles['fill--11']} d="M515.9 76.5L600 130l-91.8-7.6z"/>
          <path className={styles['fill--2']} d="M626.8 210.4L600 130l-91.8-7.6z"/>
          <path className={styles['fill--12']} d="M626.8 210.4L600 130h88z"/>
        </g>
        <g className={styles.nose}> {/* nose */}
          <path className={styles['fill--2']} d="M333.3 508.7l-34.4 57.4 84.1 23v-80.4z"/>
          <path className={styles['fill--2']} d="M431.7 508.7l34.4 57.4-84.1 23v-80.4z"/>
        </g>
        <g> {/* eyes */}
          <g className={styles['statusColorFills--start']}>
            <path className={this.eyeColorFillClass('12')} d="M146 386.2l-.1.1 76.5 111L279.7 371z"/>
            <path className={this.eyeColorFillClass('10')} d="M279.7 371l-56-84-1.3-.1-76.4 99.3z"/>
            <path className={this.eyeColorFillClass('2')} d="M279.7 371l34.2-76.5-90.2-7.5z"/>
            <path className={this.eyeColorFillClass('11')} d="M313.9 294.5L279.7 371h68.9l-34.4-76.5z"/>
            <path className={this.eyeColorFillClass('2')} d="M279.7 371l-57.3 126.3L348.6 371z"/>
          </g>
          <g className={styles['statusColorFills--start']}>
            <path className={styles.statusColorFill} d="M146 386.2l-.1.1 76.5 111L279.7 371z"/>
            <path className={styles.statusColorFill} d="M279.7 371l-56-84-1.3-.1-76.4 99.3z"/>
            <path className={styles.statusColorFill}d="M279.7 371l34.2-76.5-90.2-7.5z"/>
            <path className={styles.statusColorFill} d="M313.9 294.5L279.7 371h68.9l-34.4-76.5z"/>
            <path className={styles.statusColorFill} d="M279.7 371l-57.3 126.3L348.6 371z"/>
          </g>
          <g className={styles['eyeColorFills--end']}>
            <path className={this.eyeColorFillClass('12')} d="M619 386.2l.1.1-76.5 111L485.3 371z"/>
            <path className={this.eyeColorFillClass('10')} d="M485.3 371l56-84 1.3-.1 76.4 99.3z"/>
            <path className={this.eyeColorFillClass('2')} d="M485.3 371l-34.2-76.5 90.2-7.5z"/>
            <path className={this.eyeColorFillClass('11')} d="M451.1 294.5l34.2 76.5h-68.9l34.4-76.5z"/>
            <path className={this.eyeColorFillClass('2')} d="M485.3 371l57.3 126.3L416.4 371zM619 386.2l.1.1-76.5-99.4z"/>
          </g>
          <g className={styles['statusColorFills--end']}>
            <path className={styles.statusColorFill} d="M619 386.2l.1.1-76.5 111L485.3 371z"/>
            <path className={styles.statusColorFill} d="M485.3 371l56-84 1.3-.1 76.4 99.3z"/>
            <path className={styles.statusColorFill} d="M485.3 371l-34.2-76.5 90.2-7.5z"/>
            <path className={styles.statusColorFill} d="M451.1 294.5l34.2 76.5h-68.9l34.4-76.5z"/>
            <path className={styles.statusColorFill} d="M485.3 371l57.3 126.3L416.4 371zM619 386.2l.1.1-76.5-99.4z"/>
          </g>
        </g>
      </InlineSVG>
    )
  }
}

export default themeable(theme, styles)(Panda)
