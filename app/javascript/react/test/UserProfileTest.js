import UserProfile from '../src/components/UserProfile';
import React from 'react'
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

describe('UserProfile', () => {
  let wrapper,
    current;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(
      <UserProfile
        current={
          admin => true,
          image_url => 'exampleimage.url',
          name => 'Gandalf The White',
          email => 'gthewhite@gmail.com'
        }
      />
    )
  });

  it('should have three div tags', () => {
    expect(wrapper.find('div').length).toBe(3)
  });

  it('should have one img tag', () => {
    expect(wrapper.find('img').length).toBe(1)
  });

  it('should have one h4 tag', () => {
    expect(wrapper.find('h4').length).toBe(1)
  });

  it('should have one a tag', () => {
    expect(wrapper.find('a').length).toBe(1)
  });

})
