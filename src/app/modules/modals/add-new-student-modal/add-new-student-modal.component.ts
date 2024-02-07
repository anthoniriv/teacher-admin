import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddedStudentModalComponent } from '../added-student-modal/added-student-modal.component';

@Component({
  selector: 'app-add-new-student-modal',
  templateUrl: './add-new-student-modal.component.html',
  styleUrls: ['./add-new-student-modal.component.scss']
})
export class AddNewStudentModalComponent {
  [x: string]: any;
  constructor(public dialog: MatDialog) {}

  openAddedStudentModal() {
    const dialogRef = this.dialog.open(AddedStudentModalComponent, {
      width: '400px',
    });

   
  }
  onCloseClick(): void {
    this['dialogRef'].close();
  }
}
