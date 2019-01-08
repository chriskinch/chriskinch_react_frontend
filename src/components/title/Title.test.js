import { expect } from 'chai';
import React from 'react';
import Title from './Title';
import {mount} from 'enzyme';
mockDom('<html><body></body></html>');

describe('Title', () => {
  function mountComponent(props = {}) {
    return mount(<Title />);
  }

  it('Should render', () => {
    expect(Title).to.be.ok;
  });
});