const URL = 'https://swapi.co/api/';

const throwJson = json => { throw json; };
const get = url => fetch(url)
  .then(response => response.ok ? response.json() : response.json().then(throwJson));

export function search(topic, category){
  
  const searchURL = `${URL}${category}/?search=${topic}`;

  return get(searchURL);
}