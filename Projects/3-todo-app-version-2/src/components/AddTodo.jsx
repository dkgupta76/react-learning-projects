function AddTodo() {
  return (
    <div className="row dg-row">
      <div className="col-6">
        <input type="text" placeholder="Enter Your Todo Here" />
      </div>
      <div className="col-4">
        <input type="Date" />
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success dg-button">
          Add
        </button>
      </div>
    </div>
  );
}
export default AddTodo;
