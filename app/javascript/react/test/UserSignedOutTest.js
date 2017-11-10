import UserSignedOut from '../src/components/UserSignedOut';
import React from 'react'
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

describe('UserSignedOut', () => {
  let wrapper;
  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(
      <UserSignedOut />
    )
  });

  it('should have a button with the text HOME', () => {
    expect(wrapper.find('button').at(0).text()).toBe('HOME')
  });

  it('should have a button with the text SIGN IN', () => {
    expect(wrapper.find('button').at(1).text()).toBe('SIGN IN')
  });
})
