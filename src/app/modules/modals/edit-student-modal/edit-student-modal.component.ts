import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-student-modal',
  templateUrl: './edit-student-modal.component.html',
  styleUrls: ['./edit-student-modal.component.scss']
})
export class EditStudentModalComponent {
  constructor(
    public dialogRef: MatDialogRef<EditStudentModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  close() {
    this.dialogRef.close();
  }

  saveChanges() {
    this.dialogRef.close({ saved: true });
  }
}