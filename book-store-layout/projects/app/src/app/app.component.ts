import { Component } from '@angular/core';
import { ConfigurationService } from "@fusionize/fusionize-angular";
import { take } from "rxjs";
import {NgbOffcanvas, OffcanvasDismissReasons} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-5aedf71a73074aed949c0a8e010e3397-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '@playground/book-store-layout';
  logo = '';
  config= undefined;

  constructor(private offcanvasService: NgbOffcanvas,
              private configService: ConfigurationService) {
    this.logo =  configService.assetUrl('assets/logo.png');
    configService.config$().pipe(take(1)).subscribe((c)=>
      this.config = c
    );
  }


  open(content:any) {
    this.offcanvasService.open(content, { position: 'end',  backdrop: false  });
  }

}
