import { useState, useEffect } from 'react';
import Card from './Card';
import Pagination from './Pagination';
import fetchData from './fetchData';
import Navbar from './Navbar';
import SortingMenu from './SortingMenu';

const options = {
  method: 'GET',
  url: 'https://opencritic-api.p.rapidapi.com/game',
  params: {
    platforms: 'all',
    sort: 'date',
    order: 'asc',
    skip: '10',
  },
  headers: {
    'X-RapidAPI-Key': 'eeb8c2298dmsh955eaa77e8c60c7p12d369jsnd80d2d9dcafe',
    'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com',
  },
};

const SortedByDate = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchData(options);
      setData(data);
    };

    getData();
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Navbar />
      <SortingMenu />
      <div className="row">
        {data && data.map((item, index) => <Card key={index} item={item} />)}
      </div>
      <Pagination sort="date" />
    </div>
  );
};

export default SortedByDate;
