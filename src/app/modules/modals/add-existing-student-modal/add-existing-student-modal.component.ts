import { Component } from '@angular/core';

@Component({
  selector: 'app-add-existing-student-modal',
  templateUrl: './add-existing-student-modal.component.html',
  styleUrls: ['./add-existing-student-modal.component.scss']
})
export class AddExistingStudentModalComponent {
  dialogRef: any;
  closeModal(): void {
    this.dialogRef.close();
  }
  onCloseClick(): void {
    this['dialogRef'].close();
  }
}
