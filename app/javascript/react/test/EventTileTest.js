import EventTile from '../src/components/EventTile';
import React from 'react'
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

describe('EventTile', () => {
  let wrapper,
    key,
    id,
    right,
    date,
    title,
    snippet;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(
      <EventTile
        key='1'
        id='1'
        right='true'
        date='FEBRUARY 27 2001'
        title='Seige of Minas Tirith'
        snippet='The great seige of Minas Tirith'
      />
    )
  });

  it('should have four div tags', () => {
    expect(wrapper.find('div').length).toBe(4)
  });

  it('should have two h3 tags', () => {
    expect(wrapper.find('h3').length).toBe(2)
  });

  it('should have one a tags', () => {
    expect(wrapper.find('a').length).toBe(1)
  });

  it('should have one p tags', () => {
    expect(wrapper.find('p').length).toBe(1)
  });

  it('should have an h3 tag with the date', () => {
    expect(wrapper.find('h3.timeline-content-date').text()).toBe('FEBRUARY 27 2001')
  });

  it('should have an h3 tag with the title', () => {
    expect(wrapper.find('h3').at(1).text()).toBe('Seige of Minas Tirith')
  });

  it('should have an p tag with the title', () => {
    expect(wrapper.find('p').text()).toBe('The great seige of Minas Tirith')
  });

})
