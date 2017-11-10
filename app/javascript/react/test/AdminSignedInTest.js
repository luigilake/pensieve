import AdminSignedIn from '../src/components/AdminSignedIn';
import React from 'react'
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

describe('AdminSignedIn', () => {
  let wrapper,
  firstname;
  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(
      <AdminSignedIn
        firstname = 'Galadriel'
      />
    )
  });

  it('should have a button tag with the text HOME', () => {
    expect(wrapper.find('button').at(0).text()).toBe('HOME')
  });

  it('should have a button tag with the text ADMIN', () => {
    expect(wrapper.find('button').at(1).text()).toBe('ADMIN')
  });

  it('should have a button tag with the text HI, GALADRIEL', () => {
    expect(wrapper.find('button').at(2).text()).toBe('HI, GALADRIEL')
  });

  it('should have a button tag with the text SIGN OUT', () => {
    expect(wrapper.find('button').at(3).text()).toBe('SIGN OUT')
  });
})
