/* eslint-disable react/prop-types */
const ReviewCard = ({ item }) => {
  return (
    <div className="col">
      <div className="card text-bg-dark">
        <img className="" src="" alt="" />
        <div className="card-header text-bg-primary">
          {item.Outlet.name}
          <img src={'https://img.opencritic.com/' + item.Outlet.imageSrc.sm} />
        </div>
        <p className="card-text">{item.snippet}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
