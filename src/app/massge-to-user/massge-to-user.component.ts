import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-massge-to-user',
  templateUrl: './massge-to-user.component.html',
  styleUrls: ['./massge-to-user.component.css']
})
export class MassgeToUserComponent implements OnInit {
  @Input() textOfBtnNo: any
  @Input() textOfBtnYes: any
  @Input() massgeUserHeader: any
  @Input() massgeUserBody2: any
  @Input() massgeUserBody1: any
  @Input() kindOfMassage: any;
  @Input() inputValue: any;
  @Input() ifButton: any;
  @Input() ifButton2: any;
  @Input() buttonCancel!: boolean
  @Output() clickYes = new EventEmitter<any>();
  @Output() clickNo = new EventEmitter<any>();
  @Output() clickCancel = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  btnYes() {
    if (this.kindOfMassage == 'menu') {
      this.clickYes.emit('menu')
    }
  }

  btnNo(){
    if (this.kindOfMassage == 'menu') {
      this.clickNo.emit('menu')
    }
  }

  btnCancel() {
    if (this.kindOfMassage == 'menu') {
      this.clickCancel.emit('menu')
    }
  }
}
