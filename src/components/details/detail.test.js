import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Details from './Details';

describe ('Details', () => {
  it('renders search details', () => {
    const search = {   
      'name': 'Luke Skywalker',
      'height': '172',
      'mass': '77',
      'hair_color': 'blond',
      'skin_color': 'fair',
      'eye_color': 'blue',
      'birth_year': '19BBY',
      'gender': 'male',
    };

    const wrapper = shallow(<Details details={search}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();

  });
});