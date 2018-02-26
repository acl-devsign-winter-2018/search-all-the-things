import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Search from './Search';

describe('Search', () => {

  it('Renders Properly', () => {
    const wrapper = shallow(<Search/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('Calls onSearch with entered criteria', () => {
    let filter;
    const handleSearch = _filter => {
      filter = _filter;
    };

    const wrapper = shallow(<Search onSearch={handleSearch}/>);

    const Search = 

  });

});
