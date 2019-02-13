import React from 'react';
import TeaserImage from './TeaserImage';
import renderer from 'react-test-renderer';


it('Snapshot renders correctly', () => {
  const tree = renderer
    .create(<TeaserImage path="http://chriskinch.netlify.com" alt="Teaser Image" title="Grey pixel" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});