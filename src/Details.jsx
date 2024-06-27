/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fetchData from './fetchData';
import ReviewCard from './ReviewCard';
import Navbar from './Navbar';

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [reviewData, setReviewData] = useState(null);

  const options = {
    method: 'GET',
    url: `https://opencritic-api.p.rapidapi.com/game/${id}`,
    headers: {
      'X-RapidAPI-Key': 'eeb8c2298dmsh955eaa77e8c60c7p12d369jsnd80d2d9dcafe', //'fc131178cdmsh68f34188b659107p19aedfjsnae0ff1c52c70'
      'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com',
    },
  };
  const reviewOptions = {
    method: 'GET',
    url: `https://opencritic-api.p.rapidapi.com/reviews/game/${id}`,
    params: { sort: 'popularity' },
    headers: {
      'X-RapidAPI-Key': 'eeb8c2298dmsh955eaa77e8c60c7p12d369jsnd80d2d9dcafe',
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
    return <div className="loader"></div>;
  }
  const date = new Date(data.firstReleaseDate);
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

  const formattedDate = date.toLocaleDateString('en-US', dateOptions);

  return (
    <div>
      <Navbar />
      <div className="d-flex flex-row">
        <div>
          <img
            src={'https://img.opencritic.com/' + data.images?.masthead?.xl}
            alt={data.name}
          />
        </div>
        <div className="w-100 bg-secondary ms-2">
          <p className="text-center fw-bold">{data.name}</p>
          <p>Release Date: {formattedDate}</p>
          <p>Developer: {data.Companies[0].name}</p>
          <p>Critic Average: {Math.round(data.topCriticScore)}</p>
        </div>
      </div>

      <div className="">Screenshots</div>

      <div className="row mt-5">
        {reviewData.slice(0, 5).map((item, index) => (
          <ReviewCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Details;
