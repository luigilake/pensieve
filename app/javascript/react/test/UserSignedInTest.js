import UserSignedIn from '../src/components/UserSignedIn';
import React from 'react'
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

describe('UserSignedIn', () => {
  let wrapper;
  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(
      <UserSignedIn
        firstname = 'Galadriel'
      />
    )
  });

  it('should have a button with the text HOME', () => {
    expect(wrapper.find('button').at(0).text()).toBe('HOME')
  });

  it('should have a button with the text NAME', () => {
    expect(wrapper.find('button').at(1).text()).toBe('HI, GALADRIEL')
  });

  it('should have a button with the text SIGN OUT', () => {
    expect(wrapper.find('button').at(2).text()).toBe('SIGN OUT')
  });
})
