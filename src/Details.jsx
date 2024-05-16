/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fetchData from './fetchData';

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [reviewData, setReviewData] = useState(null);

  const options = {
    method: 'GET',
    url: `https://opencritic-api.p.rapidapi.com/game/${id}`,
    headers: {
      'X-RapidAPI-Key': 'fc131178cdmsh68f34188b659107p19aedfjsnae0ff1c52c70',
      'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com',
    },
  };
  const reviewOptions = {
    method: 'GET',
    url: `https://opencritic-api.p.rapidapi.com/reviews/game/${id}`,
    params: { sort: 'popularity' },
    headers: {
      'X-RapidAPI-Key': 'fc131178cdmsh68f34188b659107p19aedfjsnae0ff1c52c70',
      'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com',
    },
  };
  useEffect(() => {
    const getData = async () => {
      const data = await fetchData(options);
      setData(data);
      console.log(data);
    };
    const getReviewData = async () => {
      const reviewData = await fetchData(reviewOptions);
      setReviewData(reviewData);
      console.log(reviewData);
    };

    getData();
    getReviewData();
  }, []);

  if (!data || !reviewData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="container d-flex flex-column">
        <p className="text-center fw-bold">{data.name}</p>
        <p>{reviewData[0].snippet}</p>
        <img
          src={'https://img.opencritic.com/' + data.images.masthead.xl}
          alt={data.name}
        />
      </div>
    </div>
  );
};

export default Details;
