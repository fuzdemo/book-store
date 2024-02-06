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
            id={0}
            price={141.0}
            title="What a great Book"
            description="some description"
            cover="https://s26162.pcdn.co/wp-content/uploads/2018/02/gatsby-original2.jpg"
          ></ProductCardComponent>
          <ProductCardComponent
            id={1}
            price={141.99}
            title="What a great Book"
            description="some description"
            cover="https://s26162.pcdn.co/wp-content/uploads/2018/02/gatsby-original2.jpg"
          ></ProductCardComponent>
          <ProductCardComponent
            id={2}
            price={14.19}
            title="What a great Book"
            description="some description"
            cover="https://s26162.pcdn.co/wp-content/uploads/2018/02/gatsby-original2.jpg"
          ></ProductCardComponent>
        </div>
      </div>
    </Mountable>
  );
}
