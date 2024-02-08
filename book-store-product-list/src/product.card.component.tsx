import { ServiceDirectory } from "@fusionize/fusionize-react";
import { useEffect, useState } from "react";

let cartService = undefined;
export default function ProductCardComponent(props) {
  let [isInCart, setIsInCart] = useState(false);
  let cartServiceSubscription = undefined;
  useEffect(() => {
    const serviceDirectorySubs = ServiceDirectory.instance()
      .request("cartService")
      .subscribe((cartService) => setCartService(cartService));
    return () => {
      serviceDirectorySubs.unsubscribe();
      if (cartServiceSubscription) {
        cartServiceSubscription.unsubscribe();
      }
    };
  }, []);

  function setCartService(cs) {
    cartService = cs;
    cartServiceSubscription = cartService.obs$.subscribe((i) =>
      setIsInCart(cartService.get(props.id) != undefined)
    );
  }

  return (
    <div className="col-sm-12 col-md-4 col-lg-3 p-1">
      <div className="card  text-bg-light h-100">
        <img src={props.cover} className="card-img-top" alt={props.title} />
        <div className="card-body h-100">
          <h5 className="card-title">{props.title}</h5>
          <p className=" h-6 card-text">{props.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            ${Intl.NumberFormat().format(props.price)}
          </li>
          <li className="list-group-item">{props.genre}</li>
          <li className="list-group-item">
            {props.keywords.map((kv) => (
              <span
                key={kv}
                className="badge text-bg-secondary opacity-50"
                style={{ margin: "1px" }}
              >
                {kv}
              </span>
            ))}
          </li>
        </ul>
        <div className="card-body text-end">
          <button
            type="button"
            className="btn btn-outline-secondary border-0 m-1"
          >
            View Details
          </button>
          <button
            type="button"
            className="btn btn-outline-primary m-1"
            disabled={isInCart}
            onClick={() =>
              cartService.add({
                id: props.id,
                title: props.title,
                description: props.description,
                cover: props.cover,
                price: props.price,
              })
            }
          >
            {isInCart ? "Added" : "+ Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
