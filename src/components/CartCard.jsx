
import { useState } from "react";
import { FiStar } from "react-icons/fi";
import Swal from "sweetalert2";
const CartCard = ({ cartProduct,cartProducts,updateCartProducts }) => {
  const {_id, name, image, brandName, type, price, rating, shortDescription } =
    cartProduct;
  console.log(cartProduct);
  const handleDelete = _id =>{
    console.log(_id)

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://gadgetluxe-server-side-az44g0nnb-samir-sadeks-projects.vercel.app/addCart/${_id}`,{
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your Cart has been deleted.',
                        'success'
                      )
                      const remaining = cartProducts.filter(cartProduct => cartProduct._id !== _id)
                      updateCartProducts(remaining)

                }
            })
        
         
        }
      })
  }

  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="image"
            className="rounded-xl h-52"
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
