/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import Card from './Card';
import Pagination from './Pagination';
import fetchData from './fetchData';
import Navbar from './Navbar';
import SortingMenu from './SortingMenu';

const HomePage = () => {
  const [data, setData] = useState(null);
  const [options, setOptions] = useState({
    method: 'GET',
    url: 'https://opencritic-api.p.rapidapi.com/game',
    params: {
      platforms: 'all',
      sort: 'score',
      order: 'desc',
      skip: '0',
    },
    headers: {
      'X-RapidAPI-Key': 'eeb8c2298dmsh955eaa77e8c60c7p12d369jsnd80d2d9dcafe',
      'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com',
    },
  });

  const updateOptions = (pageNumber, sortingMethod) => {
    setOptions(prevOptions => ({
      ...prevOptions,
      params: {
        ...prevOptions.params,
        skip: (pageNumber - 1) * 20,
        sort: sortingMethod,
      },
    }));
  };

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData(options);
      setData(data);
    };

    getData();
  }, [options]);

  if (data === null) {
    return <div className="loader"></div>;
  }
  return (
    <div>
      <Navbar />
      <SortingMenu propFunction={updateOptions} />
      <div className="row">
        {data && data.map((item, index) => <Card key={index} item={item} />)}
      </div>
      <Pagination propFunction={updateOptions} sort={options.params.sort} />
    </div>
  );
};

export default HomePage;
