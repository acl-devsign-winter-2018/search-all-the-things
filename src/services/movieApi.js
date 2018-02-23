const BASE_URL = 'http://www.omdbapi.com/?s='
const API_KEY = 'ef6a96a7';
const API_QUERY = `&apikey=${API_KEY}`;
const URL = `${BASE_URL}/?apikey=${API_KEY}`



const get = url => fetch(url)
  .then(response => response.json())
  .then(checkResponseData);

export const checkResponseData = data => {
  if(data.Response === 'True') return data;
  throw data.Error;
}

export function search(term) { 
  const url = `${BASE_URL}${encodeURI(term)}${API_QUERY}`;
  console.log(url)
  return get(url);
}

// export function getMovie(id) {
//   const url = `${URL}&i=$id`
// }




