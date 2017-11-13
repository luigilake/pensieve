import PreviewTimeline from '../src/components/PreviewTimeline';
import React from 'react'
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

describe('PreviewTimeline', () => {
  let wrapper,
    image,
    title;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(
      <PreviewTimeline
        title='test title'
        image='imageexample.url'
      />
    )
  });

  it('should have one div tag', () => {
    expect(wrapper.find('div').length).toBe(1)
  });

  it('should have one img tag', () => {
    expect(wrapper.find('img').length).toBe(1)
    expect(wrapper.find('img').prop('src')).toEqual('imageexample.url');
  });

  it('should have one h3 tag', () => {
    expect(wrapper.find('h3').length).toBe(1)
    expect(wrapper.find('h3').text()).toBe('test title')
  });


})
