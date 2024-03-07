import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AddedStudentModalComponent } from '../added-student-modal/added-student-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-existing-student-modal',
  templateUrl: './add-existing-student-modal.component.html',
  styleUrls: ['./add-existing-student-modal.component.scss']
})
export class AddExistingStudentModalComponent {
  [x: string]: any;
  constructor(public dialog: MatDialog) {}
  displayedColumns: string[] = ['select', 'name', 'lastname'];
  dataSource = new MatTableDataSource([

  ]);
  
  closeModal(): void {
    this['dialogRef'].close();
  }
  onCloseClick(): void {
    this['dialogRef'].close();
  }
  openAddedStudentModal() {
    const dialogRef = this.dialog.open(AddedStudentModalComponent, {
      width: '500px',
    });

   
  }
}