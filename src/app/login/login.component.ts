import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import swal from 'sweetalert';
import { UserServiceService } from '../user-service.service';
import { User } from '../interfaces/User';
import { AppService } from '../app-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  show_button: Boolean = false;
  show_eye: Boolean = false;
  isDisabled: any = true;
  isLoading: any
  user: any
  userDetails!: any
  userDetailsObject: any
  showErrorHebrewLettersOnly:any
  constructor(private router: Router, private userService: UserServiceService,private appService:AppService) {
   }

  ngOnInit(): void {
  }

  checkValidity(f: any) {
    if (f.valid) {
      this.isDisabled = false; // Set isDisabled to false if all fields are valid
    } else {
      this.isDisabled = true; // Set isDisabled to true if any field is invalid
    }
  }

  onInput(inputValue: string) {
    if (/[\u0590-\u05FF]/.test(inputValue)) {
      this.showErrorHebrewLettersOnly = true; // Here, you can print or perform any desired action
    }
  }

  showPassword() {
    this.show_button = !this.show_button;
    this.show_eye = !this.show_eye;
  }

  login(form: NgForm) {
    this.isDisabled = true
    this.isLoading = true
    this.userDetailsObject = {
      UserName: form.value.SystemUserName,
      Password: form.value.password
    }
    this.userService.LogIn(this.userDetailsObject).subscribe(
      (res: any) => {
        localStorage.clear();
        this.userDetails = res;
        localStorage.setItem('userDetails', JSON.stringify(this.userDetails[0]));
        swal(this.userDetails[0].personalDetails?.name + " ברוך הבא  ");
        this.appService.setMenu(false)
        this.router.navigate(['/info/'])
      },
      (err: any) => {
        this.isDisabled = false
        this.isLoading = false
        swal(err.error)
      }
    )
  }
}
