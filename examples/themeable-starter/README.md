# Themeable Starter
This should demo everything you need to start writing themeable components using Instructure UI. More comprehensive documentation can be found [here](https://instructure.design/#ui-themeable). You can also open this repository with CodeSandbox [here](https://codesandbox.io/s/github/instructure/instructure-ui-prototypes/tree/master/examples/themeable-starter).

## Context: Why would I need to use themeable?
Instructure UI includes components for most common UI elements (buttons, links, dropdowns, modals, etc). Your application, however, may have a need for a custom component that doesn't exist in our library. If it can't be created by composing existing elements you can build it using themeable.

Themeable gives you access to all the style tokens (variables) that we use in our Instructure UI components. This allows you to build new components that have a look and feel consistent with the ones you are already importing from our library.

## Setup
In this example, we're going to integrate themeable with an existing project. This codebase is just about the simplest React app we can spin up. It has a minimal webpack configuration and very few babel presets.

### Configure webpack
> Note: If you don't already have a webpack or babel configuration for your project, we publish all our Instructure UI build presets. See https://instructure.design/#ui-babel-preset and also https://instructure.design/#ui-webpack-config. If you opt to use these, skip this section as these presets will already include the themeable setup for webpack.

* Add `@instructure/ui-webpack-config` to your project using your npm client of choice.
* Add an entry to your `webpack.config.js` rules specifying to load files with the `css` extension via the themeable loader
```js
{
  test: /\.css$/,
  exclude: [/node_modules/],
  use: [
    'babel-loader',
    // Add the custom themeable loader
    'themeable-css-loader',
    // Note: If you want to process styles with postcss, include the postcss loader in this entry as well
    'postcss-loader'
  ]
}
```
* Add the themeable loader via the `resolveLoader` alias field
```js
resolveLoader: {
  alias: require('@instructure/ui-webpack-config').resolveLoader.alias
},
```

### Add ui-themeable and a theme
* Add `@instructure/ui-themeable` to your project using the npm client of choice.
* Add a theme to your project. Here are a few to choose from:
  - `@instructure/canvas-theme` https://instructure.design/#canvas
  - `@instructure/canvas-high-contrast-theme` https://instructure.design/#canvas-high-contrast
  - `@instructure/canvas-ams-theme` https://instructure.design/#canvas-ams
  - `@instructure/instructure-theme` https://instructure.design/#instructure

In our example, we'll be using the `canvas-theme`, but the approach outlined here will be the same for any theme you choose.

### Register your theme
* Import your theme. It should be in a place where it will be imported prior to any themeable components mounting. In this example we do it in the same location where the application is mounted. See `src/index.js`
```js
import ReactDOM from 'react-dom'

import '@instructure/canvas-theme' // Importing the theme will automatically register it

import MyThemeableComponent from './MyThemeableComponent'

ReactDOM.render(
  <MyThemeableComponent />,
  document.getElementById('app')
)
```

When the theme is imported, it is registered. That means that it makes the theme's variables available to any themeable components in the tree via context.

## Creating themeable components
Themeable components all have the same basic structure
- The component source
- The component theme
- The css styles

If you look in the `src/MyThemeableComponent` directory, you'll see an `index.js` file (containing the component source), a `styles.css` file (containing the css styles), and a `theme.js` file (containing the component theme).

### Composing a component theme
When we registered the theme, we made the theme's variables available via context. When we create a themeable component, we are accessing those theme variables and mapping them to our specific component. If you go to `src/MyThemeableComponent/theme.js` you'll see that it exports a function. The arguments to that function are the theme variables defined here https://instructure.design/#canvas. Similar to the structure outlined in the documentation, they are sorted by groups for `colors`, `borders`, `typography` and more.

The function defined in the `theme.js` file will return an object. The keys to the object will be turned into CSS variables that can be used to style our component.
```js
export default function ({ colors, ...allTheOtherVars }) {
  return {
    componentBackground: colors.backgroundBrand
    ...
  }
}
```
In the above example, we are getting `colors.backgroundBrand` from our `canvas-theme` and then mapping it to the `componentBackground` property. `componentBackground` can now be used in our `styles.css` file.

### Creating component styles
As mentioned above, the properties defined in `theme.js` can now be used as CSS variables. For example, if you go to `src/MyThemeableComponent/styles.css`, you'll see the following:
```css
.root {
  background: var(--componentBackground);
  ...
}
```
We are now using the `componentBackground` property defined in the `theme.js` file for our background styling.

### Bringing it all together in the component source
In our component source, we now import `@instructure/ui-themeable` along with our `theme.js` and `styles.css`. If you navigate to `src/MyThemeableComponent/index.js` you'll see the following:
```js
import React, { Component } from 'react'
import { themeable } from '@instructure/ui-themeable'

import theme from './theme'
import styles from './styles.css'

class MyComponent extends Component {
  render () {
    return <div className={styles.root}>Hello from a themeable component!</div>
  }
}

const MyThemeableComponent = themeable(theme, styles)(MyComponent)

export default MyThemeableComponent
```
We can use the import from `styles.css` to apply the classes we defined there. Observe how we added `className={styles.root}` to the containing div.

As a last step, we now wrap our component with the `themeable` HOC and pass it the theme and styles.

### Some Notes
* You can call your variables defined in `theme.js` anything you want and you don't have to worry about collisions. When the `themeable` loader builds your component, it will automatically add a unique identifier to the variable names. This unique identifier is created by generating a hash of the CSS source.
* You can call your css classes defined in `styles.css` anything you want for the same reason as above. Each class is processed and given a unique identifier.
* Themeable currently is only compatible with class components. It needs a ref to your component, and prior to React 16, we couldn't get refs to functional components. We'll look to support this soon as we are dropping support for React 15 in version 7.0.
