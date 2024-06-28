/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fetchData from './fetchData';
import ReviewCard from './ReviewCard';
import Navbar from './Navbar';
import Footer from './Footer';

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
    <div className="vh-100">
      <Navbar />
      <div className="d-flex flex-row details-container ps-3 pe-3 ">
        <div>
          <img
            src={'https://img.opencritic.com/' + data.images?.masthead?.xl}
            alt={data.name}
          />
        </div>
        <div className="border ms-2 pt-2  d-flex flex-column">
          <p className="text-center fw-bold">{data.name}</p>
          <div className="ps-2 pe-2 border-bottom">
            <ul>
              <li>
                <p>Release Date: {formattedDate}</p>
              </li>
              <li>
                <p>Developer: {data.Companies[0].name}</p>
              </li>
              <li>
                <p>Critic Average: {Math.round(data.topCriticScore)}</p>
              </li>
            </ul>
          </div>

          <div className="pt-2 ps-3 pe-3 overflow-auto description-container">
            <p className="">{data.description}</p>
          </div>
        </div>
      </div>

      {/* <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner d-flex justify-content-center align-items-center">
          <div className="carousel-item active">
            <img
              src="https://img.opencritic.com/game/4504/FGelgXe0.jpg"
              className="d-block  w-50"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.opencritic.com/game/4504/FGelgXe0.jpg"
              className="d-block w-50"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.opencritic.com/game/4504/FGelgXe0.jpg"
              className="d-block w-50"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}

      <div className="row mt-5 ms-3 me-3 mb-3">
        {reviewData.slice(0, 5).map((item, index) => (
          <ReviewCard key={index} item={item} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Details;
