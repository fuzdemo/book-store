import {
  ConfigurationService,
  Mountable,
  ServiceDirectory,
} from "@fusionize/fusionize-react";
import "./root.component.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faXmark } from "@fortawesome/free-solid-svg-icons";
import { cartService } from "./cart-service";
import Cart from "./cart";
import { useEffect } from "react";

let layoutService = undefined;
export default function Root(props) {
  useEffect(() => {
    ConfigurationService.config(props);
      ServiceDirectory.instance().register(cartService, "cartService");

      const subs = ServiceDirectory.instance()
      .request(null, "layoutService")
      .subscribe((s) => (layoutService = s));
    const config = ConfigurationService.factory((c) => c);
    return () => subs.unsubscribe();
  }, []);

  return (
    <>
      <Mountable location="navigation-bar-end">
        <button
          type="button"
          className="btn btn-outline-light"
          onClick={() => layoutService.openSidebar()}
        >
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </Mountable>
      <Mountable location="sidenav-header">
        <div className="d-flex">
          <h4>Shopping Cart</h4>
          <span className="spacer"></span>
          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={() => layoutService.closeSidebar()}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      </Mountable>
      <Mountable location="sidenav-content">
        <Cart></Cart>
        <div className="d-flex">
          <h4>Some book</h4>
          <span className="spacer"></span>
          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={() =>
              cartService.add({
                id: new Date().getTime(),
                title: "a book",
                description: "some book",
              })
            }
          >
            +
          </button>
        </div>
      </Mountable>
    </>
  );
}
