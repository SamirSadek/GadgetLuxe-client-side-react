import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Auth/provider/AuthProvider";

const Detail = () => {
  const detailsProduct = useLoaderData();
  const{user} =useContext(AuthContext)
  const userEmail =user.email
  const { _id, name, image, brandName, type, price, rating, shortDescription } = detailsProduct;
  const handleAddToCart = () =>{
   
     const addCart = {name, image, brandName, type, price, rating, shortDescription ,userEmail} 
     fetch("https://gadgetluxe-server-side-az44g0nnb-samir-sadeks-projects.vercel.app/addCart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addCart),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Successful!",
            text: "Product Added to Your Cart",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  }
  return (
    <div>
      <h2 className="text-center text-2xl md:text-4xl my-16 font-bold">
        Product Detail of
        <span className="text-orange-700 md:border-t-2 md:border-b-2 border-red-600 p-4 rounded-lg">
          {name}
        </span>
      </h2>
      <div>
        <div className="w-3/4  mx-auto card  bg-base-100 shadow-xl my-10">
          <figure className="h-full w-full px-5 mx-auto">
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
              <button onClick={handleAddToCart} className="btn btn-primary">Add to cart</button>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Detail;
