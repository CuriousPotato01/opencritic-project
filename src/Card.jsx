/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
  return (
    <div className="col-3 mb-4">
      <Link to={`/details/${item.id}`} className="text-decoration-none">
        <div className="card text-bg-dark border border-secondary">
          <div>
            <img
              src={'https://img.opencritic.com/' + item.images?.banner?.og}
              alt={item.name}
              className="card-img-top object-fit-contain"
            />
          </div>

          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <p className="card-text">
              Critic Score: {Math.round(item.topCriticScore)}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
