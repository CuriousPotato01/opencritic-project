/* eslint-disable react/prop-types */
const Card = ({ item }) => {
  return (
    <div className="col-3 mb-4">
      <div className="card text-bg-dark">
        <img
          src={'https://img.opencritic.com/' + item.images?.banner?.sm}
          alt={item.name}
          className="card-img-top"
        />
        <div className="card-body">
          <h2 className="card-title">{item.name}</h2>
          <p className="card-text">
            Critic Score: {Math.round(item.topCriticScore)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
