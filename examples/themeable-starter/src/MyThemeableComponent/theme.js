// The variables passed to this function are the variables listed https://instructure.design/#canvas (replace `canvas
// with whatever theme name you are using). These variables are passed to this function via context.
export default function ({ colors, spacing }) {
  return {
    // We can map the variables we get from the theme to our own component properties here. We can then use these
    // as CSS variables over in `styles.css`
    componentBackground: colors.backgroundBrand,
    componentMargin: spacing.large,
    componentPadding: spacing.medium,
    componentTextColor: colors.textLightest
  }
}