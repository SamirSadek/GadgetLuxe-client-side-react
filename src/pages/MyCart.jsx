import { useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CartCard from "../components/CartCard";
import { useContext, useState } from "react";
import { AuthContext } from "../Auth/provider/AuthProvider";

const MyCart = () => {
  const carts = useLoaderData()
  console.log(carts)
  const {user} = useContext(AuthContext)
  const Email =user.email
   const filteredCartProducts = carts.filter(cart => cart.userEmail == Email)
   const [cartProducts,setCartProducts] = useState(filteredCartProducts)
   const updateCartProducts = (updateCart)=>{
    setCartProducts(updateCart)
   }

  return (
    <div>
      <Navbar />

      <h2 className="text-center my-10 text-4xl font-bold">My Cart</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-2/3 mx-auto gap-5">
        {
          cartProducts.map(cartProduct => <CartCard key={cartProduct._id} cartProduct={cartProduct} cartProducts={cartProducts} updateCartProducts={updateCartProducts}></CartCard>)
        }
      </div>
      <Footer />
    </div>
  );
};

export default MyCart;
