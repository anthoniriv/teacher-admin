import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ErrorVerifyAccountModalComponent } from '../error-verify-account-modal/error-verify-account-modal.component';

@Component({
  selector: 'app-verify-account-modal',
  templateUrl: './verify-account-modal.component.html',
  styleUrls: ['./verify-account-modal.component.scss']
})
export class VerifyAccountModalComponent {
  constructor(
    public dialogRef: MatDialogRef<VerifyAccountModalComponent>,
    private dialog: MatDialog
  ) {}

  openErrorVerifyAccountModal() {
    // Cierra el modal actual antes de abrir uno nuevo
    this.close();

    // Abre el modal de error
    this.dialog.open(ErrorVerifyAccountModalComponent, {
      // configuraciones adicionales si son necesarias
    });
  }

  close() {
    this.dialogRef.close();
  }
}
