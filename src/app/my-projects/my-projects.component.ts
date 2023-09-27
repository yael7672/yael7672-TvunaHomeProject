import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import swal from 'sweetalert';
import { Project } from '../interfaces/Project';
import { AppService } from '../app-service.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit {
  myProjectArr: any
  ifSortDown: any
  thArrTableMyProjects: any = ['שם', 'ציון', 'משך בימים', 'מספר באגים', 'דדלין'];
  myProjectListKeys: any = ['name', 'score', 'durationInDays', 'bugsCount', 'madeDadeline'];
  token: any
  userDetails: any
  myProjectArrCopy: any
  averageGrade: any
  percentageMetDeadline: any
  totalProjects: any
  projectsMetDeadline: any
  totalGrade: any
  myProjectNamesfilterdArr: any
  openSortInputByName: boolean = true
  openSortInputByHighScore!: boolean
  openSortInputByLowScore!: boolean
  showMenu!: boolean
  grade!: string;
  hasLetterError: boolean = false;

  constructor(private router: Router, private userService: UserServiceService, private appService: AppService) {
    this.appService.getMenu().subscribe(res => {
      this.showMenu = res ? res : false;
    })
  }

  ngOnInit(): void {
    this.appService.setMenu(true)
    this.userDetails = localStorage.getItem('token');
    this.token = this.userDetails?.token
    this.getMyProject(this.token)
  }


  calculateStatistics() {
    // Calculate the percentage of projects that met the deadline
    this.projectsMetDeadline = this.myProjectArr.filter((project: any) => project.madeDadeline == true);
    this.totalProjects = this.myProjectArr.length;
    this.percentageMetDeadline = (this.projectsMetDeadline.length / this.totalProjects) * 100;

    // Calculate the average grade
    this.totalGrade = this.myProjectArr.reduce((sum: number, project: any) => sum + project.score, 0);
    this.averageGrade = this.totalGrade / this.totalProjects;
  }


  whichSearchTypeOpen(val: any) {
    switch (val) {
      case '0':
        this.openSortInputByName = true
        this.openSortInputByHighScore = false
        this.openSortInputByLowScore = false
        break;
      case '1':
        this.openSortInputByName = false
        this.openSortInputByHighScore = true
        this.openSortInputByLowScore = false
        break;
      case '2':
        this.openSortInputByName = false
        this.openSortInputByHighScore = false
        this.openSortInputByLowScore = true
        break;
      default:
        break;
    }
  }

  onSortInputByHighScore(val: any) {
    this.hasLetterError = /\D/.test(this.grade);
    if (this.hasLetterError){
      swal("קלט לא חוקי! שדה זה חייב להכיל מספרים בלבד!")
    }
      debugger
    this.myProjectArr = [...this.myProjectArrCopy]
    this.myProjectArr = this.myProjectArr.filter(
      (item: any) => item.score >= val.value
    );
  }


  onSortInputByLowScore(val: any) {
    debugger
    this.myProjectArr = [...this.myProjectArrCopy]
    this.myProjectArr = this.myProjectArr.filter(
      (item: any) => item.score <= val.value
    );
  }

  getMyProject(token: any) {
    this.userService.GetMyProject(token).subscribe(res => {
      if (res) {
        this.myProjectArr = res;
        this.myProjectArrCopy = res
        this.myProjectNamesfilterdArr = Object.values(this.myProjectArr.reduce((x: any, obj: any) => {
          x[obj.name] = obj;
          return x;
        }, {}));
        this.calculateStatistics()
      }
    },
      err => {
        console.log(err.error);
        swal("error!", err.error, "error");
      })
  }

  searchByName(filterKeyByName: any) {
    this.myProjectArr = [...this.myProjectArrCopy];
    if (filterKeyByName !== "" && filterKeyByName !== null && filterKeyByName !== undefined) {
      this.myProjectArr = this.myProjectArr.filter((f: Project) => f.name?.includes(filterKeyByName));
    }
    else {
      if (filterKeyByName == "" || filterKeyByName == null || filterKeyByName !== undefined) {
        this.myProjectArr = [...this.myProjectArrCopy];
      }
    }
    this.calculateStatistics()
  }

  sortTableDown(thName: any) {
    this.ifSortDown = false;
    let keyToSort: any;
    switch (thName) {
      case 'שם':
        keyToSort = 'name';
        break;
      case 'ציון':
        keyToSort = 'score';
        break;
      case 'משך בימים':
        keyToSort = 'durationInDays';
        break;
      case 'מספר באגים':
        keyToSort = 'bugsCount';
        break;
      case 'דדלין':
        keyToSort = 'madeDadeline';
        break;
      default:
        break;
    }
    this.myProjectArr?.sort((a: any, b: any) =>
      (keyToSort[1] > (keyToSort[1])) ? 1 : -1)
  }



  sortTableUp(thName: any) {
    this.ifSortDown = true;
    let keyToSort: any;
    switch (thName) {
      case 'שם':
        keyToSort = 'name';
        break;
      case 'ציון':
        keyToSort = 'score';
        break;
      case 'משך בימים':
        keyToSort = 'durationInDays';
        break;
      case 'מספר באגים':
        keyToSort = 'bugsCount';
        break;
      case 'דדלין':
        keyToSort = 'madeDadeline';
        break;
      default:
        break;
    }
    this.myProjectArr?.sort((a: any, b: any) => {
      const valueA = a[keyToSort];
      const valueB = b[keyToSort];

      // Check if the values are numbers
      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return valueA - valueB; // Sort numbers in ascending order
      }
      // If not numbers, compare them as strings
      return String(valueA).localeCompare(String(valueB));
    })
  }
}
