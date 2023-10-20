import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const newProduct = useLoaderData();
  const {_id, name, image, brandName, type, price, rating } =
    newProduct;

  const handleUpdateProduct = (event) => {
    event.preventDefault();

    const form = event.target;
    const image = form.image.value;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const newProduct = {
        _id,
      name,
      image,
      brandName,
      type,
      price,
      rating,
    };

    console.log(newProduct);

    // send data to server
    fetch(`http://localhost:5000/products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Successful!",
            text: "Successfully Updated Your Product",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <div>
        <div className="bg-[#F4F3F0] p-20">
          <h2 className="text-center text-2xl md:text-4xl my-5 font-bold">
            Update Your Product: <span className="text-orange-700 lg:border-t-2 lg:border-b-2 border-red-600 p-4 rounded-lg">{name}</span>
          </h2>

          <form onSubmit={handleUpdateProduct}>
            <div className="md:flex gap-10 justify-center mt-10">
              <div className="form-control w-full ">
                <label className="label">
                  <span className="text-2xl font-bold">Image Url</span>
                </label>
                <input
                  type="text"
                  defaultValue={image}
                  name="image"
                  placeholder="Enter Image Url"
                  className="input input-bordered w-full "
                />
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="text-2xl font-bold">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Enter Product Name"
                  className="input input-bordered w-full "
                />
              </div>
            </div>
            <div className="md:flex gap-10 justify-center">
              <div className="form-control w-full ">
                <label className="label">
                  <span className="text-2xl font-bold">Type</span>
                </label>
                <input
                  type="text"
                  name="brandName"
                  defaultValue={brandName}
                  placeholder="Enter Brand Name"
                  className="input input-bordered w-full "
                />
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="text-2xl font-bold">Brand Name</span>
                </label>
                {/* <input
              type="text"
              name='type'
              placeholder="Enter Type of Products"
              className="input input-bordered w-full "
            /> */}
                <select
                  name="type"
                  defaultValue={type}
                  className="input input-bordered w-full"
                >
                  <option value="apple">Apple</option>
                  <option value="samsung">Samsung</option>
                  <option value="sony">Sony</option>
                  <option value="google">Google</option>
                  <option value="intel">Intel</option>
                  <option value="microsoft">Microsoft</option>
                </select>
              </div>
            </div>
            <div className="md:flex gap-10 justify-center">
              <div className="form-control w-full ">
                <label className="label">
                  <span className="text-2xl font-bold">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  defaultValue={price}

                  placeholder="Enter product price"
                  className="input input-bordered w-full "
                />
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="text-2xl font-bold">Rating</span>
                </label>
                <input
                  type="text"
                  name="rating"
                  defaultValue={rating}

                  placeholder="Enter Your rating"
                  className="input input-bordered w-full "
                />
              </div>
            </div>

            

            <div className="mt-8 w-full  text-center ">
              <input
                className="md:w-1/4 btn btn-ghost bg-[#D2B48C]"
                type="submit"
                value="Update Product"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
