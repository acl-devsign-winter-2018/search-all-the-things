import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import MovieDetail from './MovieDetail';

describe('MovieDetail', () => {
  it('renders single movie in detail', () => {
    const movie = {
      'Title': 'Requiem for a Dream',
      'Year': '2000',
      'Rated': 'R',
      'Released': '15 Dec 2000',
      'Runtime': '102 min',
      'Genre': 'Drama',
      'Director': 'Darren Aronofsky',
      'Writer': 'Hubert Selby Jr. (based on the book by), Hubert Selby Jr. (screenplay), Darren Aronofsky (screenplay)',
      'Actors': 'Ellen Burstyn, Jared Leto, Jennifer Connelly, Marlon Wayans',
      'Plot': 'The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.',
      'Language': 'English',
      'Country': 'USA',
      'Awards': 'Nominated for 1 Oscar. Another 33 wins & 62 nominations.',
      'Poster': 'https://images-na.ssl-images-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
      'Ratings': [
        {
          'Source': 'Internet Movie Database',
          'Value': '8.3/10'
        },
        {
          'Source': 'Rotten Tomatoes',
          'Value': '78%'
        },
        {
          'Source': 'Metacritic',
          'Value': '68/100'
        }
      ],
      'Metascore': '68',
      'imdbRating': '8.3',
      'imdbVotes': '644,352',
      'imdbID': 'tt0180093',
      'Type': 'movie',
      'DVD': '22 May 2001',
      'BoxOffice': '$2,546,851',
      'Production': 'Artisan Entertainment',
      'Website': 'http://www.requiemforadream.com',
      'Response': 'True'
    };

    const wrapper = shallow(<MovieDetail key={movie.imdbID} movie={movie}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});