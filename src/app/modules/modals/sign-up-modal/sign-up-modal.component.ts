import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EmailConfirmationModalComponent } from '../email-confirmation-modal/email-confirmation-modal.component';

@Component({
  selector: 'app-sign-up-modal',
  templateUrl: './sign-up-modal.component.html',
  styleUrls: ['./sign-up-modal.component.scss']
})
export class SignUpModalComponent {
  constructor(
    public dialogRef: MatDialogRef<SignUpModalComponent>,
    private dialog: MatDialog
  ) {}

  close() {
    this.dialogRef.close();
  }

  // Este método se llamará cuando se presione el botón
  onSubmit() {
    // Aquí va tu lógica de registro
    // ...

    // Cierra el modal actual
    this.close();

    // Abre el modal de confirmación de correo electrónico
    this.dialog.open(EmailConfirmationModalComponent, {
      // configuraciones adicionales si son necesarias
    });
  }
}
