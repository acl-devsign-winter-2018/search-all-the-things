import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Search from './Search'

describe('Search', () => {

    it('Renders design', () => {
        const wrapper = shallow(<Search/>)
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});