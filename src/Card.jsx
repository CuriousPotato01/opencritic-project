/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
  const date = new Date(item.firstReleaseDate);
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', dateOptions);

  return (
    <div className="col-3 mb-4">
      <Link
        to={`/opencritic-project/details/${item.id}`}
        className="text-decoration-none"
      >
        <div className="card text-bg-dark border border-secondary">
          <div>
            <img
              src={'https://img.opencritic.com/' + item.images?.banner?.og}
              alt={item.name}
              className="card-img-top object-fit-contain"
            />
          </div>

          <div className="card-body">
            <h2 className="card-title border-bottom border-secondary">
              {item.name}
            </h2>
            <p className="card-text">
              Critic Average: {Math.round(item.topCriticScore)}
            </p>
            <p className="card-text ">Release Date: {formattedDate}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
