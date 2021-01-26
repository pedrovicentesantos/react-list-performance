import axios from 'axios';

const fetchData = async (setState) => {
  const pages = Array.from(Array(10).keys());
  const API_URL = 'https://api.tvmaze.com/shows';
  const promises = [];

  pages.map((page) => promises.push(axios.get(`${API_URL}?page=${page}`)
    .then((res) => res.data)));

  const responses = await Promise.all(promises);
  const data = [].concat(...responses);
  setState(data);
};

export default fetchData;
