import React from 'react';
import Title from './Title';
import renderer from 'react-test-renderer';


it('renders correctly', () => {
  const tree = renderer
    .create(<Title text="My example title" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});