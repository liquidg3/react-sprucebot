import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Avatar from './Avatar'

test('it renders', () => {
	const tree = renderer.create(<Avatar image="test.jpg" />).toJSON()
	expect(tree).toMatchSnapshot()
})
