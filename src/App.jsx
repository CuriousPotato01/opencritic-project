import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import Card from './Card';

const App = () => {
  const [data, setData] = useState(null);
  const options = {
    method: 'GET',
    url: 'https://opencritic-api.p.rapidapi.com/game',
    params: {
      platforms: 'all',
      sort: 'score',
      order: 'desc',
    },
    headers: {
      'X-RapidAPI-Key': 'fc131178cdmsh68f34188b659107p19aedfjsnae0ff1c52c70',
      'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com',
    },
  };
  const fetchData = async () => {
    try {
      const storedOptionsString = localStorage.getItem('myOptions');
      const storedOptions = storedOptionsString
        ? JSON.parse(storedOptionsString)
        : null;

      // If the options have changed, clear the localStorage
      if (JSON.stringify(storedOptions) !== JSON.stringify(options)) {
        localStorage.removeItem('myData');
        localStorage.removeItem('myOptions');
      }

      const dataString = localStorage.getItem('myData');

      if (dataString) {
        const data = JSON.parse(dataString);
        setData(data);
        console.log(data);
      } else {
        const response = await axios.request(options);
        const newDataString = JSON.stringify(response.data);
        localStorage.setItem('myData', newDataString);
        localStorage.setItem('myOptions', JSON.stringify(options)); // Store the options
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
    <div className="row">
      {data && data.map((item, index) => <Card key={index} item={item} />)}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

export default App;
