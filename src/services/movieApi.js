const API_KEY = 'ef6a96a7';
const API_QUERY = `&apikey=${API_KEY}`;
const BASE_URL = 'http://www.omdbapi.com/'



export function search( search , page = 1, pageSize = 20) {
  const search = `?t=${search}`
  const searchURL = `${BASE_URL}${search}${API_QUERY}`

  return fetch(url).then( res => {
    if(res.ok) return res.json();
    return res.json().then(json => { throw json; });
  });
}

// export function getSources() {
//     return get(search_URL).then(response => response.sources);
// }