import {
  ConfigurationService,
  ServiceDirectory,
} from "@fusionize/fusionize-react";
import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import ProductLoadingComponent from "./product.loding.component";
import ProductErrorComponent from "./product.error.components";
import ProductDetailsComponent from "./product.details.component";
import { from, delay, take } from "rxjs";
let cartService = undefined;
export default function ProductComponent(props) {
  const params = useParams();

  let [isInCart, setIsInCart] = useState(false);
  let [book, setBook] = useState(undefined);

  useEffect(() => {
    let cartServiceSubscription = undefined;
    fetch(
      ConfigurationService.instance().assetUrl(`public/books/${params.id}.json`)
    ).then((r) => {
      if (r.ok) {
        from(r.json()).pipe(delay(500), take(1)).subscribe(setBook);
      } else {
        setBook({});
      }
    });
    const serviceDirectorySubs = ServiceDirectory.instance()
      .request("cartService")
      .subscribe((cs) => {
        cartService = cs;
        setIsInCart(cs.contains(props.id));
        cartServiceSubscription = cs.obs$.subscribe((i) =>
          setIsInCart(cs.contains(props.id))
        );
      });
    return () => {
      serviceDirectorySubs.unsubscribe();
      if (cartServiceSubscription) {
        cartServiceSubscription.unsubscribe();
      }
    };
  }, []);

  return (
    <div className="container">
      {book && book.id ? (
        <ProductDetailsComponent book={book}></ProductDetailsComponent>
      ) : book ? (
        <ProductErrorComponent></ProductErrorComponent>
      ) : (
        <ProductLoadingComponent></ProductLoadingComponent>
      )}
    </div>
  );
}
