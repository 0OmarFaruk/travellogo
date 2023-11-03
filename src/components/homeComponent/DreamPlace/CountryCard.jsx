/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  const {id, type, description, img } = country;



  return (
    <div className="card lg:card-side bg-green-100 shadow-xl p-5 mt-10 text-black">
      <figure>
        <img className="w-[1000px] h-48" src={img} alt="Album" />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title justify-center font-bold text-3xl">{type}</h2>
        <p>{description}</p>
        <div className="card-actions justify-center">
          <Link to={`/place/${id}`}>
            <button className="btn btn-active btn-secondary">Find Place</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
