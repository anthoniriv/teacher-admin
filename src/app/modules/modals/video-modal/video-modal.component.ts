import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.scss']
})
export class VideoModalComponent {
  constructor(
    public dialogRef: MatDialogRef<VideoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any // Inyectar datos pasados al modal
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
