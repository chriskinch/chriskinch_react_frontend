import React from 'react';
import Teaser from './Teaser';
import renderer from 'react-test-renderer';

it('Snapshot renders correctly', () => {
  const tree = renderer
    .create(<Teaser url={{alias: "http://chriskinch.netlify.com" }} title="My teaser card" body="Example body txt" primaryImage={{wideCrop:{url:"http://www.roshe-run.co.uk/wp-content/uploads/2018/10/Cat-Picture-4.jpg"}}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});