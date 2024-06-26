/* eslint-disable react/prop-types */
const ReviewCard = ({ item }) => {
  return (
    <div className="col">
      <div className="card text-bg-dark border border-secondary">
        <div className="card-header text-bg-primary">
          {item.Outlet.name}
          <img src={'https://img.opencritic.com/' + item.Outlet.imageSrc.sm} />
        </div>
        <div className="card-body overflow-auto">
          <p className="card-text">{item.snippet}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
