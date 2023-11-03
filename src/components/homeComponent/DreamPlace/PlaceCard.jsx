/* eslint-disable react/prop-types */

const PlaceCard = ({ place }) => {
  const { site, img, description } = place;
  return (
    <div className="card bg-blue-100 shadow-xl mt-10 text-black">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl h-56"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{site}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PlaceCard;
