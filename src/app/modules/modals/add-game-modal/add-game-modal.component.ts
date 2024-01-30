import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-game-modal',
  templateUrl: './add-game-modal.component.html',
  styleUrls: ['./add-game-modal.component.scss']
})
export class AddGameModalComponent {
  constructor(
    public dialogRef: MatDialogRef<AddGameModalComponent>,
    private router: Router  // Inyectar Router aquí
  ) {}

  onCloseClick(): void {
    this.dialogRef.close();
  }

  onCreateClick(): void {
    this.dialogRef.close();
    this.router.navigateByUrl('/content/macaws/macawscomponent');
  }
}
