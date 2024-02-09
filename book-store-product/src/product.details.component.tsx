import "./product.details.component.css";

export default function ProductDetailsComponent(props) {
  return (
    <>
      <div className="card m-3 text-bg-light">
        <div className="row g-0">
          <div className="col-md-3 col-xl-2">
            <img
              src={props.book.cover}
              className="img-fluid rounded-start h-100"
              alt="..."
            />
          </div>
          <div className="col-md-9  col-xl-10">
            <div className="card-body">
              <span className="badge text-bg-primary opacity-50">
                {props.book.genre}
              </span>
              <h1 className="card-title">{props.book.title}</h1>
              <p className="card-text text-muted">By {props.book.author}</p>
              <p className="card-text">{props.book.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card m-3 text-bg-light">
        <div className="card-header">
          {" "}
          Ready to read this novel in <b>{props.book.genre}</b> genre
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.book.title}</h5>
          {props.book.keywords.map((kv) => (
            <span
              key={kv}
              className="badge text-bg-secondary opacity-50"
              style={{ margin: "1px" }}
            >
              {kv}
            </span>
          ))}
        </div>
        <ul className="list-group list-group-flush text-end">
          <li className="list-group-item">
            <h2>${Intl.NumberFormat().format(props.book.price)}</h2>
            <span className="text-muted">Immediate online delivery</span>
          </li>
        </ul>
        <div className="card-footer text-end">
          <a href="#" className="btn btn-primary">
            + Add <b>"{props.book.title}"</b> to my cart
          </a>
        </div>
      </div>
    </>
  );
}
