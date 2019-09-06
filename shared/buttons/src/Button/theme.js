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

import { alpha, darken } from '@instructure/ui-color-utils'

const activeShadow = 'inset 0 0 0.1875rem 0.0625rem'

const generateButtonThemeVars = function ({ style, backgroundColor, borderColor, textColor }) {
  return {
    [`${style}Color`]: textColor,
    [`${style}Background`]: backgroundColor,
    [`${style}HoverBackground`]: darken(backgroundColor, 10),
    [`${style}ActiveBackground`]: darken(backgroundColor, 10),
    [`${style}GhostBackground`]: 'transparent',
    [`${style}GhostActiveBackground`]: 'transparent',
    [`${style}GhostHoverBackground`]: alpha(textColor, 10),
    [`${style}BorderColor`]: darken(borderColor, 10),
    [`${style}GhostBorderColor`]: textColor,
    [`${style}ActiveBoxShadow`]: `${activeShadow} ${darken(borderColor, 20, 0.45)}`,
    [`${style}GhostActiveBoxShadow`]: `${activeShadow} ${alpha(textColor, 20)}`
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

    iconSizeSmall: '1rem',
    iconSizeMedium: '1.25rem',
    iconSizeLarge: '1.625rem',

    ...generateButtonThemeVars({
      style: 'primary',
      backgroundColor: colors.backgroundBrand,
      borderColor: colors.borderBrand,
      textColor: colors.textBrand
    }),

    ...generateButtonThemeVars({
      style: 'secondary',
      backgroundColor: colors.backgroundLight,
      borderColor: colors.borderLight,
      textColor: colors.textDarkest
    }),

    ...generateButtonThemeVars({
      style: 'success',
      backgroundColor: colors.backgroundSuccess,
      borderColor: colors.borderSuccess,
      textColor: colors.textSuccess
    }),

    ...generateButtonThemeVars({
      style: 'danger',
      backgroundColor: colors.backgroundDanger,
      borderColor: colors.borderDanger,
      textColor: colors.textDanger
    }),

    ...generateButtonThemeVars({
      style: 'primaryInverse',
      backgroundColor: colors.backgroundLightest,
      borderColor: colors.borderLightest,
      textColor: colors.textLightest
    })
  }
}
