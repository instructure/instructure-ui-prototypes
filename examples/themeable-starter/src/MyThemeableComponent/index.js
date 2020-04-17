import React, { Component } from 'react'

import { themeable } from '@instructure/ui-themeable'

import theme from './theme'
import styles from './styles.css'

class MyComponent extends Component {
  render () {
    return (
      <div className={styles.root}>
        <div className={styles.content}>
          Hello from a themeable component!
        </div>
      </div>
    )
  }
}

// Bringing it all together. We pass the theme and styles to the themeable HOC and wrap our component.
const MyThemeableComponent = themeable(theme, styles)(MyComponent)

export default MyThemeableComponent