import TimelineTile from '../src/components/TimelineTile';
import React from 'react'
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

describe('TimelineTile', () => {
  let wrapper,
    key,
    id,
    title,
    image

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(
      <TimelineTile
        key='1'
        id='1'
        title='test timeline'
        image={ url => 'exampleimage.url' }
      />
    )
  });

  it('should have one div tag', () => {
    expect(wrapper.find('div').length).toBe(1)
  });

  it('should have one img tag', () => {
    expect(wrapper.find('img').length).toBe(1)
  });

  it('should have one h3 tag', () => {
    expect(wrapper.find('h3').length).toBe(1)
  });

  it('should have one h3 tag with the appropriate text', () => {
    expect(wrapper.find('h3').text()).toBe('TEST TIMELINE')
  });

  it('should have one a tag', () => {
    expect(wrapper.find('a').length).toBe(1)
  });

})
