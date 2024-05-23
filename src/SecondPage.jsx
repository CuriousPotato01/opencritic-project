import fetchData from './fetchData';
import { useState, useEffect } from 'react';
import Pagination from './Pagination';
import Card from './Card';
import Navbar from './Navbar';

const options = {
  method: 'GET',
  url: 'https://opencritic-api.p.rapidapi.com/game',
  params: {
    platforms: 'all',
    sort: 'score',
    order: 'desc',
    skip: '20',
  },
  headers: {
    'X-RapidAPI-Key': 'eeb8c2298dmsh955eaa77e8c60c7p12d369jsnd80d2d9dcafe',
    'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com',
  },
};

const SecondPage = () => {
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
      <Navbar className="mb-10" />
      <div className="row">
        {data && data.map((item, index) => <Card key={index} item={item} />)}
      </div>
      <Pagination />
    </div>
  );
};

export default SecondPage;
