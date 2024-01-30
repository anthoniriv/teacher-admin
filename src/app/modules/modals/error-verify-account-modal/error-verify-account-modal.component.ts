import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-error-verify-account-modal',
  templateUrl: './error-verify-account-modal.component.html',
  styleUrls: ['./error-verify-account-modal.component.scss']
})
export class ErrorVerifyAccountModalComponent {
  constructor(public dialogRef: MatDialogRef<ErrorVerifyAccountModalComponent>) {}

  retry() {
    // Cierras el modal y pasas el resultado 'retry'
    this.dialogRef.close('retry');
  }

  close() {
    // Esto simplemente cierra el modal sin pasar ningún resultado
    this.dialogRef.close();
  }
}
