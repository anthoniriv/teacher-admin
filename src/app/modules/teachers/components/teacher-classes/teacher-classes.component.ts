import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditClassModalComponent } from 'src/app/modules/modals/edit-class-modal/edit-class-modal.component';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-teacher-classes',
  templateUrl: './teacher-classes.component.html',
  styleUrls: ['./teacher-classes.component.scss']
})
export class TeacherClassesComponent implements OnInit {
  currentComponent: string | null = null; // Variable para almacenar el componente actual
clase: any;

  constructor(public dialog: MatDialog, private navigationService: NavigationService) {}

  ngOnInit() {
    // Suscríbete al servicio de navegación para cambiar el componente
    this.navigationService.componentToLoad$.subscribe(
      (      componentName: string | null) => this.currentComponent = componentName
    );
  }

  openModal() {
    const dialogRef = this.dialog.open(EditClassModalComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
    });
  }

  openEditModal(classData: any) {
    const dialogRef = this.dialog.open(EditClassModalComponent, {
      width: '600px',
      data: classData // Pasar datos de la clase al modal
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The edit dialog was closed', result);
      // Aquí puedes manejar los resultados del modal, por ejemplo, actualizar la lista de clases
    });
  }
}