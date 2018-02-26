const API_KEY = 'ef6a96a7';
const BASE_URL = 'http://www.omdbapi.com/?';



export function search(topic, page) {
    const url = `${BASE_URL}s=${topic}&page=${page}&apikey=${API_KEY}`;
    console.log(url)
    return fetch(url).then(res => res.json());
}

export function getMovie(id) {
    const url = `${BASE_URL}s=${topic}&page=${page}&apikey=${API_KEY}&i=${id}`;
    return get(url);

}