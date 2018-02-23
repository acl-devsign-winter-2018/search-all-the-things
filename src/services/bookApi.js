const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
const API_KEY = 'AIzaSyC15YhYq4uguEcPkzx7byzQQjKxiljDbuo';

const throwJson = json => { throw json; };
const get = url => fetch(url)
  .then(r => r.ok ? r.json() : r.json().then(throwJson));

export function search({ topic }, page = 1, pageSize = 20) {
  const url = `${BASE_URL}${topic}&maxResults=${pageSize}&startIndex=${page}&orderBy=newest&key=${API_KEY}`;
  console.log(url);
  return get(url);
}