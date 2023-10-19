
import { FiStar } from "react-icons/fi";
const CartCard = ({ cartProduct }) => {
  const {_id, name, image, brandName, type, price, rating, shortDescription } =
    cartProduct;
  console.log(cartProduct);

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="image"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>

          <p className="flex justify-center items-center">
             {rating} <FiStar className="ml-1" />
          </p>
          <p>Brand: {type.toUpperCase()}</p>
          <p>Price: {price} Dollar</p>
          <div className="card-actions">
            <button onClick={()=>handleDelete(_id)} className="btn btn-primary bg-red-950">Delete Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
