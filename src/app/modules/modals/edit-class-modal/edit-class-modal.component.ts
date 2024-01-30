import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-class-modal',
  templateUrl: './edit-class-modal.component.html',
  styleUrls: ['./edit-class-modal.component.scss']
})
export class EditClassModalComponent {
  constructor(
    public dialogRef: MatDialogRef<EditClassModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any // Inyecta los datos recibidos
  ) {}

  close() {
    this.dialogRef.close();
  }

  // Método para guardar cambios
  saveChanges() {
    // Lógica para guardar los cambios realizados
    // ...
    // Cierra el modal y opcionalmente pasa algún resultado
    this.dialogRef.close({ saved: true });
  }
}
