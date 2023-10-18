import { useLoaderData } from "react-router-dom";

const Detail = () => {
  const detailsProduct = useLoaderData();
  const { _id, name, image, brandName, type, price, rating, shortDescription } = detailsProduct;
  return (
    <div>
      <h2 className="text-center text-4xl my-16 font-bold">
        Product Detail of
        <span className="text-orange-700 border-t-2 border-b-2 border-red-600 p-4 rounded-lg">
          {name}
        </span>
      </h2>
      <div>
        <div className="w-3/4 h-96 mx-auto card card-side bg-base-100 shadow-xl my-10">
          <figure className="h-full w-96 px-5">
            <img
              src={image}
              
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{shortDescription}</p>
            <div className="card-actions ">
                <p className="font-bold text-orange-600">Price: {price} Taka</p>
              <button className="btn btn-primary">Add to cart</button>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Detail;
