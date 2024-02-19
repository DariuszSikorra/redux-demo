import { fetchDataWithToken } from "../api/fetch";

const apiUrl = 'https://api.rawg.io/api/games';

const fetchGames = (params) => 
  fetchDataWithToken(apiUrl, {...params})
    .then(data => {
      return data
    })
    .catch(error => {
      console.error('Error:', error);
    });

export {fetchGames}