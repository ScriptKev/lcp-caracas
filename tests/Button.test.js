import React from 'react'
import renderer from 'react-test-renderer'
import Button from 'components/Button'

test('Button renders correctly', () => {
  expect(
    renderer
      .create(<Button />)
      .toJSON()
  ).toMatchSnapshot()
})