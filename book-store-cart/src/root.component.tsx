import {
  ConfigurationService,
  Mountable,
  ServiceDirectory,
} from "@fusionize/fusionize-react";
import "./root.component.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Root(props) {
  let ls = undefined;
  ConfigurationService.config(props);
  ServiceDirectory.instance()
    .request(null, "layoutService")
    .subscribe((s) => (ls = s));
  const config = ConfigurationService.factory((c) => c);

  return (
    <>
      <Mountable location="navigation-bar-end">
        <button
          type="button"
          className="btn btn-outline-light"
          onClick={openCart}
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
            onClick={closeCart}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      </Mountable>
    </>
  );

  function openCart() {
    ls.openSidebar();
  }

  function closeCart() {
    ls.closeSidebar();
  }
}
