import { useParams } from "react-router-dom";
import Footer from "./Footer";

import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import SpeciBrand from "./SpeciBrand";

const SpecificBrand = () => {
  const { name } = useParams();
  console.log(name);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  // console.log(products)

  const speciBrands = products.filter((speciBrand) => speciBrand.type == name);
  console.log(speciBrands);

  return (
    <div>
      <Navbar />
      <div>
        <div className="carousel w-full md:h-[50vh]">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/YdsRGyt/26412763-7233709.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/XyY3yTs/33139536-7995902-min.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/FXBCM07/34013397-black-friday-web-banner-33.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/gPtLwm7/8511084-3936525.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-center my-16 text-2xl md:text-4xl font-bold border-e-2">
        Trending{" "}
        <span className="text-orange-700 border-t-2 border-b-2 border-red-600 p-4 rounded-lg">
          {name.toUpperCase()}
        </span>{" "}
        Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 w-3/4 mx-auto gap-10">
        {speciBrands?.map((speciBrand) => (
          <SpeciBrand key={speciBrand._id} speciBrand={speciBrand}></SpeciBrand>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SpecificBrand;
