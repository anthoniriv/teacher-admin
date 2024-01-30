import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ErrorVerifyAccountModalComponent } from '../error-verify-account-modal/error-verify-account-modal.component';

@Component({
  selector: 'app-email-confirmation-modal',
  templateUrl: './email-confirmation-modal.component.html',
  styleUrls: ['./email-confirmation-modal.component.scss']
})
export class EmailConfirmationModalComponent {
  constructor(
    public dialogRef: MatDialogRef<EmailConfirmationModalComponent>,
    private dialog: MatDialog // Asegúrate de tener MatDialog inyectado aquí
  ) {}

  goToLogin() {
    // Cierra el modal de confirmación de correo electrónico
    this.dialogRef.close();

    // Abre el modal de error
    const errorDialogRef = this.dialog.open(ErrorVerifyAccountModalComponent, {
      // Aquí puedes poner otras configuraciones para tu modal de error
    });

    // Puedes suscribirte al cierre del modal de error si necesitas realizar alguna acción cuando se cierra
    errorDialogRef.afterClosed().subscribe(result => {
      if (result === 'retry') {
        // Aquí puedes manejar la lógica de reintento si es necesario
      }
    });
  }
}
