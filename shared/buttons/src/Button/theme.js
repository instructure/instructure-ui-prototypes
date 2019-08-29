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

import { darken } from '@instructure/ui-color-utils'

const activeShadow = 'inset 0 0 0.1875rem 0.0625rem'

const generateButtonThemeVars = function ({ style, mainColor, textColor }) {
  return {
    [`${style}Background`]: mainColor,
    [`${style}BorderColor`]: mainColor,
    [`${style}BorderColorWithContrast`]: darken(mainColor, 10),
    [`${style}Color`]: textColor,
    [`${style}HoverBackground`]: darken(mainColor, 10),
    [`${style}ActiveBackground`]: darken(mainColor, 10),
    [`${style}ActiveBoxShadow`]: `${activeShadow} ${darken(mainColor, 20, 0.45)}`
  }
}

export default ({ borders, colors, forms, spacing, typography }) => {
  return {
    transform: 'none',
    fontFamily: typography.fontFamily,
    fontWeight: typography.fontWeightNormal,
    textTransform: 'none',
    letterSpacing: 'normal',
    borderRadius: borders.radiusMedium,
    borderStyle: borders.style,
    borderWidth: borders.widthSmall,

    smallHeight: forms.inputHeightSmall,
    smallPadding: spacing.xSmall,
    smallFontSize: typography.fontSizeSmall,

    mediumHeight: forms.inputHeightMedium,
    mediumPadding: spacing.small,
    mediumFontSize: typography.fontSizeMedium,

    largeHeight: forms.inputHeightLarge,
    largePadding: spacing.medium,
    largeFontSize: typography.fontSizeLarge,

    ...generateButtonThemeVars({
      style: 'primary',
      mainColor: colors.backgroundLight,
      textColor: colors.textDarkest
    }),

    ...generateButtonThemeVars({
      style: 'brand',
      mainColor: colors.backgroundBrand,
      textColor: colors.textLightest
    })
  }
}
