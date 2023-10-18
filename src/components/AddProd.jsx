import Swal from "sweetalert2";
const AddProd = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();

    const form = event.target;
    const image = form.image.value;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const shortDescription = form.shortDescription.value;
    const newProduct = {
      name,
      image,
      brandName,
      type,
      price,
      rating,
      shortDescription,
    };

    console.log(newProduct);

    // send data to server
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Successful!",
            text: "Successfully Added a new Product",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] p-20">
      <h2 className="text-4xl font-bold text-center">Add A Product</h2>
      <p className="px-20 mt-10">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <form onSubmit={handleAddProduct}>
        <div className="md:flex gap-10 justify-center mt-10">
          <div className="form-control w-full ">
            <label className="label">
              <span className="text-2xl font-bold">Image Url</span>
            </label>
            <input
              type="text"
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
            <select name="type" className="input input-bordered w-full">
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
              placeholder="Enter Your rating"
              className="input input-bordered w-full "
            />
          </div>
        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="text-2xl font-bold">Short Description</span>
          </label>
          <input
            type="text"
            name="shortDescription"
            placeholder="Enter Your Product Description"
            className="input input-bordered w-full "
          />
        </div>

        <div className="mt-8 w-full  text-center ">
          <input
            className="w-1/4 btn btn-ghost bg-[#D2B48C]"
            type="submit"
            value="Add Product"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProd;
