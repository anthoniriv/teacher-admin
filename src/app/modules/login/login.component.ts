import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignUpModalComponent } from 'src/app/modules/modals/sign-up-modal/sign-up-modal.component';
import { VerifyAccountModalComponent } from 'src/app/modules/modals/verify-account-modal/verify-account-modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(public dialog: MatDialog) {}

  openVerifyAccountModal() {
    const dialogRef = this.dialog.open(VerifyAccountModalComponent, {
      // configuraciones adicionales aquí
    });

    dialogRef.afterClosed().subscribe(result => {
      // Código para manejar la respuesta del modal
    });
  }

  openSignUpModal() {
    const dialogRef = this.dialog.open(SignUpModalComponent, {
      // configuraciones adicionales aquí
    });

    dialogRef.afterClosed().subscribe(result => {
      // Código para manejar la respuesta del modal
    });
  }
}
