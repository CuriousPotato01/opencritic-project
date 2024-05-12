import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import Card from './Card';
import Pagination from './Pagination';
import SecondPage from './SecondPage';
import fetchData from './fetchData';

const options = {
  method: 'GET',
  url: 'https://opencritic-api.p.rapidapi.com/game',
  params: {
    platforms: 'all',
    sort: 'score',
    order: 'desc',
    skip: '0',
  },
  headers: {
    'X-RapidAPI-Key': 'fc131178cdmsh68f34188b659107p19aedfjsnae0ff1c52c70',
    'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com',
  },
};

const HomePage = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchData(options);
      setData(data);
    };

    getData();
  }, []);

  return (
    <div>
      <div className="row">
        {data && data.map((item, index) => <Card key={index} item={item} />)}
      </div>
      <Pagination />
    </div>
  );
};

export default HomePage;
