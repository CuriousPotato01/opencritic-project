import fetchData from './fetchData';
import { useState, useEffect } from 'react';
import Pagination from './Pagination';
import Card from './Card';

const options = {
  method: 'GET',
  url: 'https://opencritic-api.p.rapidapi.com/game',
  params: {
    platforms: 'all',
    sort: 'score',
    order: 'desc',
    skip: '40',
  },
  headers: {
    'X-RapidAPI-Key': 'fc131178cdmsh68f34188b659107p19aedfjsnae0ff1c52c70',
    'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com',
  },
};

const ThirdPage = () => {
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

export default ThirdPage;
