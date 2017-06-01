import * as React from 'react';
import * as enzyme from 'enzyme';
import Hello from './Hello';

it('renders the correct text when no enthusiasm is given', () => {
  const hello = enzyme.shallow(<Hello name="Mark" />);
  expect(hello.find(".greeting").text()).toEqual('Hello Mark!');
});

it('renders the correct text with an explicit enthusiasm of 1', () => {
  const hello = enzyme.shallow(<Hello name="Mark" enthusiasmLevel={1} />);
  expect(hello.find(".greeting").text()).toEqual('Hello Mark!');
});

it('renders the correct text with an explicit enthusiasm of 5', () => {
  const hello = enzyme.shallow(<Hello name="Mark" enthusiasmLevel={5} />);
  expect(hello.find(".greeting").text()).toEqual('Hello Mark!!!!!');
});

it('throws when the enthusiasm level is 0', () => {
  expect(() => {
    enzyme.shallow(<Hello name="Mark" enthusiasmLevel={0} />);
  }).toThrow();
});

it('throws when the enthusiasm level is negative', () => {
  expect(() => {
    enzyme.shallow(<Hello name="Mark" enthusiasmLevel={-1} />);
  }).toThrow();
});
