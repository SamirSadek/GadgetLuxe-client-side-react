import Swal from "sweetalert2";

const Brand = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();

    const form = event.target;
    const image = form.image.value;
    const name = form.name.value;

    const newBrand = {
      name,
      image,
    };
    console.log(newBrand);
    fetch("https://gadgetluxe-server-side-az44g0nnb-samir-sadeks-projects.vercel.app/brands", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newBrand),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              title: "Successful!",
              text: "Successfully Added a new brand",
              icon: "success",
              confirmButtonText: "Cool",
            });
          }
        });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleAddProduct} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">NAME</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">IMAGE</span>
            </label>
            <input
              type="text"
              placeholder="image url"
              name="image"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">add brand</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Brand;
