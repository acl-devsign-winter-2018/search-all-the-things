const API_KEY = '1ecac68e';
const BASE_URL = 'http://www.omdbapi.com';
const URL = `${BASE_URL}/?apikey=${API_KEY}`;

export function search(query, page = 1) {
  const url = `${URL}&s=${encodeURIComponent(query)}&page=${page}`;
  return get(url);
}

export function filterSearch(query, page = 1, filter) {
  const url = `${URL}&s=${encodeURIComponent(query)}&type=${filter}&page=${page}`;
  return get(url);
}

export function movieDetail(id) {
  const url = `${URL}&i=${id}`;
  return get(url);
}

const get = url => fetch(url)
  .then(response => response.json())
  .then(checkResponseData);

const checkResponseData = data => {
  if(data.Response === 'True') return data;
  throw data.Error;
};