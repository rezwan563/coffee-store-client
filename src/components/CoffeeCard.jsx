import Swal from "sweetalert2";
const CoffeeCard = ({ coffee }) => {
  const { _id, name, photo, origin, brand } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img className="md:w-48" src={photo} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{brand}</p>
        <p>{origin}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Edit</button>
          <button className="btn btn-primary">View</button>
          <button onClick={() => handleDelete(_id)} className="btn bg-red-500">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
