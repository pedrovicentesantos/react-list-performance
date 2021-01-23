import axios from 'axios';

async function fetchData() {
  const API_URL = 'http://api.tvmaze.com/shows';

  const response = await axios.all([
    axios.get(`${API_URL}?page=0`),
    axios.get(`${API_URL}?page=1`),
    axios.get(`${API_URL}?page=2`),
    axios.get(`${API_URL}?page=3`),
    axios.get(`${API_URL}?page=4`),
  ]);
  console.log(response);
  return response;
}

export default fetchData;
