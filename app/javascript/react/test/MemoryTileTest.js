import MemoryTile from '../src/components/MemoryTile';
import React from 'react'
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

describe('MemoryTile', () => {
  let wrapper,
    key,
    body,
    name,
    image;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(
      <MemoryTile
        key='1'
        body='test memory body'
        name='Gandalf W'
        image='imageexample.url'
      />
    )
  });

  it('should have two p tags', () => {
    expect(wrapper.find('p').length).toBe(2)
  });

  it('should have four div tags', () => {
    expect(wrapper.find('div').length).toBe(4)
  });

  it('should have an p tag with the memory body', () => {
    expect(wrapper.find('p').at(0).text()).toBe('test memory body')
  });

  it('should have an p tag with the memory body', () => {
    expect(wrapper.find('p').at(1).text()).toBe('Gandalf W')
  });

  it('should have an image tag', () => {
    expect(wrapper.find('.testimonial-block-vertical-avatar').length).toBe(1);
  });

})
