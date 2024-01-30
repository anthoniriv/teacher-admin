import { Component } from '@angular/core';
import { AddGameModalComponent } from '../modals/add-game-modal/add-game-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  constructor(public dialog: MatDialog) {}

  showParrots = false;
  showMacaws = false;

  toggleParrots(): void {
    this.showParrots = !this.showParrots;
    this.showMacaws = false; // Asegúrate de que solo se muestra uno a la vez
  }

  toggleMacaws(): void {
    this.showMacaws = !this.showMacaws;
    this.showParrots = false; // Asegúrate de que solo se muestra uno a la vez
  }

  openAddGameModal() {
    const dialogRef = this.dialog.open(AddGameModalComponent, {
      width: '600px'
      // Puedes pasar datos al modal si es necesario usando 'data': { ... }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The add game dialog was closed', result);
      // Manejar los resultados del modal aquí
    });
  }
}
