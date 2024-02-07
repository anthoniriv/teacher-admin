import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-add-existing-student-modal',
  templateUrl: './add-existing-student-modal.component.html',
  styleUrls: ['./add-existing-student-modal.component.scss']
})
export class AddExistingStudentModalComponent {
  dialogRef: any;
  displayedColumns: string[] = ['select', 'name', 'lastname'];
  dataSource = new MatTableDataSource([
    { name: 'Javier A.', lastname: 'Lastname' },
    { name: 'Javier A.', lastname: 'Lastname' },
    { name: 'Javier A.', lastname: 'Lastname' }
  ]);
  closeModal(): void {
    this.dialogRef.close();
  }
  onCloseClick(): void {
    this['dialogRef'].close();
  }
}
