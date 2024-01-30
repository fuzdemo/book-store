import {ConfigurationService} from "@fusionize/fusionize-react";
import './root.component.scss';

export default function Root(props) {
    ConfigurationService.config(props);
    const config = ConfigurationService.factory((c) => c);
    return (
        <section>
            <div className="content">
                <img src={ConfigurationService.instance().assetUrl("public/logo.png")} style={{width: 24}}
                     alt="logo"/>
                <span>{props.name} app is running!</span>
            </div>
            <span>{JSON.stringify(config())}</span>
        </section>
    );
}
