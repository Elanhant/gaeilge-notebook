import * as React from 'react';
import * as enzyme from 'enzyme';
import Header from './Header';

it('renders with the correct content, tag, and class', () => {
  const header = enzyme.shallow(<Header>Lorem ipsum</Header>);
  expect(header.type()).toEqual('header');
  expect(header.hasClass('header')).toBeTruthy();
  expect(header.text()).toEqual('Lorem ipsum');
});
