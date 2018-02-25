import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Movie from './Movie';

describe('Movie', () => {
  it('renders movie detail', () => {
    const Image = 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg';
    const wrapper = shallow(<Movie Title="Star Wars: Episode IV - A New Hope" Year="1997" Type="Movie" imdbID="tt0076759" Poster={Image}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});