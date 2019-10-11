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

import { lighten, darken } from '@instructure/ui-color-utils'

export default ({ colors }) => ({
  colorSuccess: colors.backgroundSuccess,
  colorWarning: colors.backgroundWarning,
  colorAlert: colors.backgroundAlert,
  colorInfo: colors.backgroundInfo,
  colorDanger: colors.backgroundDanger,

  fillDark1: darken(colors.backgroundDarkest, 4),
  fillDark2: darken(colors.backgroundDarkest, 2),
  fillDark3: lighten(colors.backgroundDarkest, 4),
  fillDark4: colors.backgroundDarkest,

  fillLight1: darken(colors.backgroundLight, 2),
  fillLight2: darken(colors.backgroundLight, 4),
  fillLight3: darken(colors.backgroundLight, 7),
  fillLight4: darken(colors.backgroundLight, 11),
  fillLight5: darken(colors.backgroundLight, 15),
  fillLight6: darken(colors.backgroundLight, 19),
  fillLight7: darken(colors.backgroundLight, 22),
  fillLight8: darken(colors.backgroundLight, 29),
})
