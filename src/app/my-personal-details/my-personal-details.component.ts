import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { AppService } from '../app-service.service';

@Component({
  selector: 'app-my-personal-details',
  templateUrl: './my-personal-details.component.html',
  styleUrls: ['./my-personal-details.component.css']
})
export class MyPersonalDetailsComponent implements OnInit {
  userDetails: any
  userDetailsToJson: any
  title = "פרטי עובד"
  showMenu!: boolean
  constructor(private router: Router, private appService: AppService) {
    this.appService.getMenu().subscribe(res => {
      this.showMenu = res ? res : false;
    })
  }

  ngOnInit(): void {
    this.appService.setMenu(true)
    this.userDetails = localStorage.getItem('userDetails');
    this.userDetailsToJson = JSON.parse(this.userDetails)
  }
}
