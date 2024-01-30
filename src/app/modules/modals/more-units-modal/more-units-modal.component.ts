import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-more-units-modal',
  templateUrl: './more-units-modal.component.html',
  styleUrls: ['./more-units-modal.component.scss']
})
export class MoreUnitsModalComponent {
[x: string]: any;

  constructor(public dialogRef: MatDialogRef<MoreUnitsModalComponent>) { }

  closeModal() {
    this.dialogRef.close();
  }
}
