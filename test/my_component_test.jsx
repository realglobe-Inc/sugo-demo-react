/**
 * Test case for my-component.
 * Runs with mocha.
 */
'use strict'

import MyComponent from '../lib/my_component'
import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

describe('my-component', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = shallow(
      <MyComponent/>
    )
    assert.ok(element)
  })
})

/* global describe, before, after, it */
