import { FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";

const SpeciBrand = ({ speciBrand }) => {
  const {_id, name, image, brandName, type, price, rating, shortDescription } =
    speciBrand;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" className="h-40" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">{brandName.toUpperCase()}</div>
        </h2>
        <p>{shortDescription}</p>
        <div className="flex justify-between gap-12 mt-2">
          <p className="flex justify-center items-center">
            Rating : {rating} <FiStar className="ml-1" />
          </p>
          <p>Price: {price} Taka</p>
        </div>
        <div className="card-actions justify-end mt-4">
        <Link to={`/detailsProduct/${_id}`}><div className="btn badge badge-outline">Details</div></Link>
          <Link to={`/updateProduct/${_id}`}> <div className="btn badge badge-outline">Update</div></Link>
        </div>
      </div>
    </div>
  );
};

export default SpeciBrand;
