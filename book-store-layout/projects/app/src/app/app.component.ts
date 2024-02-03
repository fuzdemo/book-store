import { Component } from '@angular/core';
import {ConfigurationService, ServiceDirectoryService} from "@fusionize/fusionize-angular";
import { take } from "rxjs";
import {LayoutService} from "./services/layout.service";

@Component({
  selector: 'app-5aedf71a73074aed949c0a8e010e3397-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navbarColor = 'blue';

  constructor(layoutService: LayoutService,
              serviceDirectory: ServiceDirectoryService,
              configService: ConfigurationService) {
    serviceDirectory.register(layoutService, "layoutService");
    configService.config$().pipe(take(1)).subscribe((c)=>
      this.navbarColor = c.navbarColor
    );
  }

}
