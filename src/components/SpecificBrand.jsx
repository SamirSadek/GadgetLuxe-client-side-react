import { useParams } from "react-router-dom";
import Footer from "./Footer";

import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import SpeciBrand from "./SpeciBrand";

const SpecificBrand = () => {
    const {name} = useParams()
    console.log(name)

    const[products, setProducts] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/products')
        .then(res =>res.json())
        .then(data => setProducts(data))
    },[])
    // console.log(products)

    const speciBrands = products.filter(speciBrand =>speciBrand.type==name)
    console.log(speciBrands)

   
    
    
    return (
        <div>
            <Navbar/>
            <h2 className="text-center my-10">Best <span className="text-red-600">{name.toUpperCase()}</span> Products</h2>

             <div className="grid grid-cols-1 md:grid-cols-3 w-3/4 mx-auto gap-10">
                {
                   speciBrands?.map(speciBrand =><SpeciBrand key={speciBrand._id} speciBrand={speciBrand}></SpeciBrand>)
                }
             </div>
            <Footer></Footer>
        </div>
    );
};

export default SpecificBrand;