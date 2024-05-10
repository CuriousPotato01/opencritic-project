import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const options = {
    method: 'GET',
    url: 'https://opencritic-api.p.rapidapi.com/game',
    params: {
      platforms: 'all',
      sort: 'date',
      order: 'asc',
      skip: '20',
    },
    headers: {
      'X-RapidAPI-Key': 'fc131178cdmsh68f34188b659107p19aedfjsnae0ff1c52c70',
      'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com',
    },
  };

  const fetchData = async () => {
    try {
      const dataString = localStorage.getItem('myData');

      if (dataString) {
        const data = JSON.parse(dataString);
        setData(data);
        console.log(data);
      } else {
        const response = await axios.request(options);
        const newDataString = JSON.stringify(response.data);
        localStorage.setItem('myData', newDataString);
        setData(response.data);
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data &&
        data.map((item, index) => (
          <div key={index} className="card">
            <img
              src={'https://img.opencritic.com/' + item.images?.banner?.sm}
              alt={item.name}
            />
            <h2>{item.name}</h2>
          </div>
        ))}
    </div>
  );
};
export default App;
