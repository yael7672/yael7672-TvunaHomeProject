import { Component } from '@angular/core';
import { AppProperties } from './app-properties.interface';
import { AppService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tvunaHomeProject';
  appProperties!: AppProperties;
  userDetails: any;
  showMenu = false;
  constructor(private appService: AppService) {
  var x = this.appService.getAppProperties()
   console.log(x);
   
  }

  ngOnInit(): void {
    this.userDetails = localStorage.getItem('userDetails')
    if (this.userDetails?.token)
      this.showMenu = true;
    this.appProperties = this.appService.getAppProperties();
  }
}
