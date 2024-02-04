import { ServiceDirectory } from "@fusionize/fusionize-react";

export default function ProductCardComponent(props) {
  return (
    <div className="col-sm-12 col-md-4 col-lg-3 p-1">
      <div className="card">
        <img
          src="https://s26162.pcdn.co/wp-content/uploads/2018/02/gatsby-original2.jpg"
          className="card-img-top"
          alt={props.title}
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{props.price}</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <div className="card-body">
          <button
            type="button"
            className="btn btn-primary m-1"
            onClick={() =>
              add({
                title: props.title,
                description: props.description,
              })
            }
          >
            + Add to cart
          </button>
          <button type="button" className="btn btn-outline-dark m-1">
            Save for later
          </button>
        </div>
      </div>
    </div>
  );

  function add(i) {
    ServiceDirectory.instance()
      .request(null, "cartService")
      .subscribe((s) => s.add(i));
  }
}
