import { ConfigurationService } from "@fusionize/fusionize-react";
import "./root.component.scss";
import { Mountable } from "@fusionize/fusionize-react";

export default function Root(props) {
  ConfigurationService.config(props);
  const config = ConfigurationService.factory((c) => c);
  return (
    <Mountable location="main-content">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-3 p-1">
            <div className="card">
              <img
                src="https://s26162.pcdn.co/wp-content/uploads/2018/02/gatsby-original2.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A secondsss item</li>
                <li className="list-group-item">A third item</li>
              </ul>
              <div className="card-body">
                <button type="button" className="btn btn-primary m-1">
                  + Add to cart
                </button>
                <button type="button" className="btn btn-outline-dark m-1">
                  Save for later
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Mountable>
  );
}
