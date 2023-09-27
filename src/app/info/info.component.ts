import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { PopUpServiceService } from '../pop-up-service.service';
import { AppService } from '../app-service.service';
import { log } from 'console';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  token: any;
  isUnder1100: boolean;
  showNavBar = true;
  kindOfMassage:any="menu"
  massgeUserHeader:any="איזה דף ברצונך לפתוח?"
  massgeUserBody:any
  massgeUserFooter:any
  showMassgeToUserHowMenuToOpen!:boolean
  showMenu:any
  constructor(private appService: AppService, private router: Router, private userService: UserServiceService, private popUpService: PopUpServiceService) {
    var appProperties = this.appService.getAppProperties()
    this.isUnder1100 = appProperties.isUnder1680$.value;
    this.popUpService.getNavBar().subscribe(res => {
      this.showNavBar = res ? res : false;
    })
    this.appService.getMenu().subscribe(res => {
      this.showMenu = res ? res : false;
    })
  }

  ngOnInit(): void {
  }

  goToPersonalDetailsPage(val:any){
    this.appService.setMenu(true)
    this.router.navigate(['/info/my-personal-details'])
  }

  goToProjectPage(val:any){
    this.appService.setMenu(true)
    this.router.navigate(['/info/my-projects'])
  }

  logOut() {
    localStorage.clear()
    this.appService.setMenu(false)
    this.router.navigate(['/',])
  }
  
}
