const API_KEY = '1ecac68e';
const BASE_URL = 'http://www.omdbapi.com/?';

export function search(query, page = 1) {
  const url = `${BASE_URL}s=${encodeURIComponent(query)}&page=${page}&apiKey=${API_KEY}`;
  
  return get(url);
}

export function filterSearch(query, page = 1, filter) {
  const url = `${BASE_URL}s=${encodeURIComponent(query)}&type=${filter}&page=${page}&apiKey=${API_KEY}`;
  
  return get(url);
}

const get = url => fetch(url)
  .then(response => response.json())
  .then(checkResponseData);

const checkResponseData = data => {
  if(data.Response === 'True') return data;
  throw data.Error;
};