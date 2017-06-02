import * as React from 'react';
import * as enzyme from 'enzyme';
import Page from './Page';

it('renders with the correct content, tag, and class', () => {
  const page = enzyme.shallow(<Page>Lorem ipsum</Page>);
  expect(page.type()).toEqual('main');
  expect(page.hasClass('page')).toBeTruthy();
  expect(page.text()).toEqual('Lorem ipsum');
});
