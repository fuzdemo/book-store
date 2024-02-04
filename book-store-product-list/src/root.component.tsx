import { ConfigurationService, Mountable } from "@fusionize/fusionize-react";
import "./root.component.scss";
import ProductCardComponent from "./product.card.component";
import { useEffect } from "react";

export default function Root(props) {
  useEffect(() => {
    ConfigurationService.config(props);
  }, []);
  return (
    <Mountable location="main-content">
      <div className="container">
        <div className="row">
          <ProductCardComponent
            price={141.0}
            title="What a great Book"
            description="some description"
          ></ProductCardComponent>
          <ProductCardComponent
            price={141.0}
            title="What a great Book"
            description="some description"
          ></ProductCardComponent>
          <ProductCardComponent
            price={141.0}
            title="What a great Book"
            description="some description"
          ></ProductCardComponent>
        </div>
      </div>
    </Mountable>
  );
}
