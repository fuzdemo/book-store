import { ConfigurationService, Mountable } from "@fusionize/fusionize-react";
import "./root.component.scss";
import ProductCardComponent from "./product.card.component";

export default function Root(props) {
  ConfigurationService.config(props);
  const config = ConfigurationService.factory((c) => c);
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
