const API_KEY = 'ef6a96a7';
const API_QUERY = `&apikey=${API_KEY}`;
const BASE_URL = 'http://www.omdbapi.com/'



export function searchApi( search, page = 1, pageSize = 20) {
  const searchQuery = `?t=${search}`;
  const searchURL = `${BASE_URL}${searchQuery}${API_QUERY}`;
  console.log(searchURL)
  //   fetch(searchURL).then( res => {
  //   console.log(res.json())
  //   if(res.ok) return res.json();
  //   return res.json().then(json => { throw json; });
  // });
}

