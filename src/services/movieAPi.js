const API_KEY = `ef6a96a7`;
const BASE_URL = `http://www.omdbapi.com/?`



export function search (topic, page) {
    const url = `${BASE_URL}s=${topic}&page=${page}&apikey=${API_KEY}`

    return fetch(url).then(res => res.json());
}