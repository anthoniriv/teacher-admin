import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddedStudentModalComponent } from '../added-student-modal/added-student-modal.component';

@Component({
  selector: 'app-add-new-teacher-modal',
  templateUrl: './add-new-teacher-modal.component.html',
  styleUrls: ['./add-new-teacher-modal.component.scss']
})
export class AddNewTeacherModalComponent {
  [x: string]: any;
  constructor(public dialog: MatDialog) {}

  openAddedStudentModal() {
    const dialogRef = this.dialog.open(AddedStudentModalComponent, {
      width: '600px',
      // ...otros ajustes para tu modal
    });

   
  }
  onCloseClick(): void {
    this['dialogRef'].close();
  }
}
