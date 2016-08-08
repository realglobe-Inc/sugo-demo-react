'use strict'

import React from 'react'
import {ApThemeStyle} from 'apeman-react-theme'
import MyComponent from '../../lib/my_component'

const DOMINANT_COLOR = '#FFC533'

const demoStyle = {
  '.react-demo a:link, .react-demo a:visited': {
    color: DOMINANT_COLOR
  },
  '.react-demo .syntaxhighlighter .keyword': {
    color: `${DOMINANT_COLOR} !important`
  }
}

const Demo = React.createClass({
  render () {
    return (
      <div>
        <ApThemeStyle dominant={ DOMINANT_COLOR } style={ demoStyle }/>
        <MyComponent>
          <p className='screenshot-target'>
            This is the demo!!
          </p>
        </MyComponent>
      </div>
    )
  }
})

export default Demo
