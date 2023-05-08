const AddCoffee = () => {
    const handleCoffe = (e) =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const brand = form.brand.value;
        const origin = form.origin.value;
        const photo = form.photo.value;
        const newCoffee = { name, quantity, brand, origin, photo}
        console.log(newCoffee);
        fetch("http://localhost:5000/coffee", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            
        })
        
    }
  return (
    <div className="bg-amber-100">
      <h2 className="text-3xl font-extrabold md:ml-12">Add a coffee</h2>
      <form onSubmit={handleCoffe}>
        {/* coffee row */}
        <div className="flex items-center md:mx-12 mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text"></span>
            </label>
            <label className="input-group">
              <span>Name</span>
              <input
                type="text"
                name="name"
                placeholder="Coffee name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-8">
            <label className="label">
              <span className="label-text"></span>
            </label>
            <label className="input-group">
              <span>Available Quantity</span>
              <input
                name="quantity"
                type="text"
                placeholder="Available quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* coffee row */}
        <div className="flex items-center md:mx-12 mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text"></span>
            </label>
            <label className="input-group">
              <span>Brand</span>
              <input
                type="text"
                name="brand"
                placeholder="brand"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-8">
            <label className="label">
              <span className="label-text"></span>
            </label>
            <label className="input-group">
              <span>Taste</span>
              <input
                name="taste"
                type="text"
                placeholder="taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* coffee row */}
        <div className="flex items-center md:mx-12 mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text"></span>
            </label>
            <label className="input-group">
              <span>Price</span>
              <input
                type="text"
                name="price"
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-8">
            <label className="label">
              <span className="label-text"></span>
            </label>
            <label className="input-group">
              <span>Origin</span>
              <input
                name="origin"
                type="text"
                placeholder="origin"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* coffee row */}
        <div className="flex items-center md:mx-12 mb-8">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text"></span>
            </label>
            <label className="input-group">
              <span>Photo</span>
              <input
                type="text"
                name="photo"
                placeholder="photo url"
                className="input input-bordered w-full"
              />
            </label>
            <input type="submit" className="btn btn-black md:mt-10" value="Add Coffee" />
          </div>
         
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
