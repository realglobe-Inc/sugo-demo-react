/**
 * Demo of react projects
 * @class MyComponent
 */

'use strict'

import React, {PropTypes as types} from 'react'
import classnames from 'classnames'
import defineDebug from 'debug'

const debug = defineDebug('my:component')

/** @lends MyComponent */
const MyComponent = React.createClass({

  // --------------------
  // Specs
  // --------------------

  propTypes: {},

  mixins: [],

  statics: {},

  getInitialState () {
    return {}
  },

  getDefaultProps () {
    return {}
  },

  render () {
    debug('render')

    const s = this
    let { state, props } = s

    return (
      <div className={ classnames('my-component', props.className) }
           style={ Object.assign({}, props.style) }>
        { props.children }
      </div>
    )
  },

  // --------------------
  // Lifecycle
  // --------------------

  componentWillMount () {
    debug('willMount')
    const s = this
  },

  componentDidMount () {
    debug('didMount')
    const s = this
  },

  componentWillReceiveProps (nextProps) {
    const s = this
  },

  shouldComponentUpdate (nextProps, nextState) {
    const s = this
    return true
  },

  componentWillUpdate (nextProps, nextState) {
    const s = this
  },

  componentDidUpdate (prevProps, prevState) {
    const s = this
  },

  componentWillUnmount () {
    debug('willUnmount')
    const s = this
  }

  // ------------------
  // Custom
  // ------------------

  // ------------------
  // Private
  // ------------------
})

export default MyComponent
