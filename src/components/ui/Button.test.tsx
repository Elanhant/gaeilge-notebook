import * as React from 'react';
import * as enzyme from 'enzyme';
import Button, { Color } from './Button';

it('renders with the correct text, tag, and class', () => {
  const button = enzyme.shallow(<Button>Save</Button>);
  expect(button.type()).toEqual('button');
  expect(button.hasClass('button')).toBeTruthy();
  expect(button.text()).toEqual('Save');
});


it('renders with the original class and the applied BEM modifier when color is passed', () => {
  const button = enzyme.shallow(<Button color={Color.green}>Save</Button>);
  expect(button.hasClass('button')).toBeTruthy();
  expect(button.hasClass('button--color-green')).toBeTruthy();
});
