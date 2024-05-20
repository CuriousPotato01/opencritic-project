import axios from 'axios';

let cache = new Map(JSON.parse(localStorage.getItem('cache')) || []);

const fetchData = async options => {
  try {
    const key = JSON.stringify(options);
    if (cache.has(key)) {
      console.log(1);
      return cache.get(key);
    }
    console.log(0);
    const response = await axios.request(options);
    const newData = response.data;
    cache.set(key, newData);
    localStorage.setItem('cache', JSON.stringify(Array.from(cache.entries())));
    console.log(response.data);
    console.log(cache);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchData;
