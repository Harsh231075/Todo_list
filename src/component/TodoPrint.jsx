function TodoPrint({ nam, date, onDelete }) {

  return <>
    <div className="row align-items-center mt-2">
      <div className="col-6"> {nam} </div>
      <div className="col-4">{date}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger"
          onClick={() => onDelete(nam)}
        >delete</button>
      </div>
    </div>
  </>
}
export default TodoPrint;