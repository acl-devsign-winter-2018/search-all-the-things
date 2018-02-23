const API_KEY = 'f7ebe991';
const BASE_URL = 'http://www.omdbapi.com/';
const URL = `${BASE_URL}/?apikey=${API_KEY}`;

const get = url => fetch(url)
  .then(response => response.json())
  .then(checkResponseData);

export const checkResponseData = data => {
  if(data.Response === 'True') return data;
  throw data.Error;
};

export function search(search, page = 1) {
  const url = `${BASE_URL}?s=${search}&page=${page}&apikey=${API_KEY}`;

  return fetch(url).then(r => {
    if(r.ok) return r.json();
    return r.json().then(json => { throw json; });
  });
}

export function getMovie(id) {
  const url = `${URL}&i=${id}`;
  return get(url);
}

//search sample link
//http://www.omdbapi.com/?s=batman&apikey=f7ebe991

//search sample movie detail
//http://www.omdbapi.com/?apikey=f7ebe991&i=tt0372784