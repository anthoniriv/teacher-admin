import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddExistingStudentModalComponent } from 'src/app/modules/modals/add-existing-student-modal/add-existing-student-modal.component';
import { AddNewStudentModalComponent } from 'src/app/modules/modals/add-new-student-modal/add-new-student-modal.component';

@Component({
  selector: 'app-teacher-students',
  templateUrl: './teacher-students.component.html',
  styleUrls: ['./teacher-students.component.scss']
})
export class TeacherStudentsComponent implements OnInit {
  currentComponent: string | null = null;
  students: any[] = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    // Aquí podrías cargar los estudiantes si tienes un servicio para hacerlo
  }

  openAddExistingStudentModal() {
    const dialogRef = this.dialog.open(AddExistingStudentModalComponent, {
      width: '600px',
      // Puedes pasar datos al modal si es necesario
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The add existing student dialog was closed');
      // Aquí puedes manejar lo que sucede después de cerrar el modal
    });
  }

  openAddNewStudentModal() {
    const dialogRef = this.dialog.open(AddNewStudentModalComponent, {
      width: '600px',
      // Puedes pasar datos al modal si es necesario
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The add new student dialog was closed');
      // Aquí puedes manejar lo que sucede después de cerrar el modal
    });
  }

  // ...resto de tu código...
}
