import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-added-student-modal',
  templateUrl: './added-student-modal.component.html',
  styleUrls: ['./added-student-modal.component.scss']
})
export class AddedStudentModalComponent {

  constructor(public dialogRef: MatDialogRef<AddedStudentModalComponent>) {}

  // Método para cerrar el modal.
  closeDialog() {
    this.dialogRef.close();
  }
}
