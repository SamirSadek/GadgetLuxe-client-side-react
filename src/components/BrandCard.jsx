import { useNavigate } from "react-router-dom";

const BrandCard = ({brand}) => {
const {name, image} = brand

  const navigate = useNavigate()
  const handleBrand = () =>{
    navigate(`/brands/${name}`)
  }
    
  return (
    
    <div onClick={handleBrand}  className="card w-72 h-56 bg-base-100 shadow-xl border-2 hover:border-e-8 hover:border-red-900 hover:bg-base-300">
      <figure className=" pt-10">
        <img
          src={image}
          alt="image"
          className="rounded-xl h-full"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="">{name.toUpperCase()}</h2>
      </div>
    </div>
  );
};

export default BrandCard;
