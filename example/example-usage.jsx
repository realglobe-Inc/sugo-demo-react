'use strict'

import React from 'react'
import {MyComponent, MyComponentStyle} from 'sugo-demo-react'

const ExampleComponent = React.createClass({
  render () {
    return (
      <div>
        <MyComponentStyle />
        <MyComponent/>
      </div>
    )
  }
})
