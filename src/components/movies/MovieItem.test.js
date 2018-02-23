import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import MovieItem from './MovieItem';

describe('Movie Item', () => {
  it('renders movie item', () => {
    const Image = 'https://images-na.ssl-images-amazon.com/images/M/MV5BYzc4ODgyZmYtMGFkZC00NGQyLWJiMDItMmFmNjJiZjcxYzVmXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg';
    const wrapper = shallow(
      <MovieItem 
        Poster={Image}
        Title="Batman Begins"
        Rated="PG-13"
        Released="15 Jun 2005"
        Runtime="140 min"
        Genre="Action, Adventure, Thriller"
        Director="Christopher Nolan"
        Writer="Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)"
        Actors="Christian Bale, Michael Caine, Liam Neeson, Katie Holmes"
        imdbRating="8.3"
      />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});