import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddExistingStudentModalComponent } from 'src/app/modules/modals/add-existing-student-modal/add-existing-student-modal.component';
import { AddNewStudentModalComponent } from 'src/app/modules/modals/add-new-student-modal/add-new-student-modal.component';
import { EditClassModalComponent } from 'src/app/modules/modals/edit-class-modal/edit-class-modal.component';

@Component({
  selector: 'app-teacher-main',
  templateUrl: './teacher-main.component.html',
  styleUrls: ['./teacher-main.component.scss']
})
export class TeacherMainComponent implements OnInit {
  currentComponent: string | null = null; // Variable para almacenar el componente actual
  students: any[] = []; // Inicializa students como un arreglo vacío

  constructor(public dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    // En lugar de lanzar un error, puedes inicializar datos o realizar llamadas a servicios aquí.
  }

  openModal() {
    const dialogRef = this.dialog.open(EditClassModalComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Aquí podrías verificar si se agregó un estudiante y actualizar la lista accordingly
    });
  }

  // Método para verificar si hay estudiantes en la lista
  hasStudents(): boolean {
    return this.students && this.students.length > 0;
  }


  get isRootRoute() {
    // Comprueba si la ruta actual es la raíz del módulo Main
    return this.router.url === '/main/teachers';
  }
}

