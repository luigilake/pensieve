import EventInfo from '../src/components/EventInfo';
import React from 'react'
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

describe('EventInfo', () => {
  let wrapper,
  title,
  body,
  date,
  location;
  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(
      <EventInfo
        title = 'Seige of Minas Tirith'
        body = 'the great seige of Minas Tirith'
        date = 'FEBRUARY 29 2001'
        location = 'Minas Tirith'
      />
    )
  });

  it('should have an h1 tag with the proper text', () => {
    expect(wrapper.find('h1').text()).toBe('Seige of Minas Tirith')
  });

  it('should have an p tag with the proper text', () => {
    expect(wrapper.find('p').at(0).text()).toBe('DATE: FEBRUARY 29 2001')
  });

  it('should have an p tag with the proper text', () => {
    expect(wrapper.find('p').at(1).text()).toBe('LOCATION: Minas Tirith')
  });

  it('should have an p tag with the proper text', () => {
    expect(wrapper.find('p').at(2).text()).toBe('the great seige of Minas Tirith')
  });

})
