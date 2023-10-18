import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";

const Brands = () => {
  const brands = useLoaderData();
  return (
    <div>
        <h2 className="text-center my-10 text-4xl font-bold">Top Brands Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-3/4 mx-auto gap-10">
        {
            brands.map(brand=> <BrandCard key={brand._id} brand={brand}></BrandCard>)
        }
        </div>
    </div>
  );
};

export default Brands;
