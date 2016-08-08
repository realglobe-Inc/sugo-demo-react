/**
 * Style for MyComponent.
 * @class MyComponentStyle
 */

'use strict'

import React, {PropTypes as types} from 'react'
import {ApStyle} from 'apeman-react-style'

/** @lends MyComponentStyle */
const MyComponentStyle = React.createClass({
  propTypes: {
    style: types.object,
    highlightColor: types.string
  },
  getDefaultProps () {
    return {
      style: {},
      highlightColor: ApStyle.DEFAULT_HIGHLIGHT_COLOR,
      backgroundColor: ApStyle.DEFAULT_BACKGROUND_COLOR
    }
  },
  statics: {
    styleData (config) {
      let {
        highlightColor,
        backgroundColor
      } = config

      return {
        all: {
          '.my-component': {}
        },
        small: {},
        medium: {},
        large: {}
      }
    }
  },
  render () {
    const s = this
    let { props } = s

    let { all, small, medium, large } = MyComponentStyle.styleData(props)

    return (
      <ApStyle data={ Object.assign(all, props.style) }
               smallMediaData={ small }
               mediumMediaData={ medium }
               largeMediaData={ large }
      >{ props.children }</ApStyle>
    )
  }
})

export default MyComponentStyle
