const API_KEY = 'ef6a96a7';
const API_QUERY = `&apikey=${API_KEY}`;
const BASE_URL = 'http://www.omdbapi.com/'



const throwJson = json => { throw json; };
const get = url => fetch(url)
  .then(response => response.ok ? response.json() : response.json().then(throwJson));


export function search({ search }, page = 1, pageSize = 20) {
  const search = `?t=${search}`
  const searchURL = `${BASE_URL}${search}${API_QUERY}`

    return get(searchURL)
}

export function getSources() {
    return get(search_URL).then(response => response.sources);
  }