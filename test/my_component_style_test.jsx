/**
 * Test case for my-component-style.
 * Runs with mocha.
 */
'use strict'

import MyComponentStyle from '../lib/my_component_style'
import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

describe('my-component-style', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = shallow(
      <MyComponentStyle/>
    )
    assert.ok(element)
  })
})

/* global describe, before, after, it */
