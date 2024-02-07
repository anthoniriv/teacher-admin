import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddNewStudentModalComponent } from 'src/app/modules/modals/add-new-student-modal/add-new-student-modal.component';
import { ProgressStudentModalComponent } from 'src/app/modules/modals/progress-student-modal/progress-student-modal.component';

@Component({
  selector: 'app-teacher-main',
  templateUrl: './teacher-main.component.html',
  styleUrls: ['./teacher-main.component.scss']
})

export class TeacherMainComponent implements OnInit {

  teachers: any = [
    {
      teacher: 'Ana Gomez',
      subscriptionType: 'Pro',
      classes: '4',
      students: '12', 
      lastConnection: '02/02/2024'
    },
    {
      teacher: 'Ana Gomez',
      subscriptionType: 'Normal',
      classes: '4',
      students: '12', 
      lastConnection: '02/02/2024'
    },
    {
      teacher: 'Ana Gomez',
      subscriptionType: 'Premium',
      classes: '4',
      students: '12',
      lastConnection: '02/02/2024'
    }
  ];

  displayedColumns: string[] = ['checkbox', 'teacher', 'subscriptionType', 'classes', 'students', 'lastConnection', 'actions']; 
  dataSource = new MatTableDataSource(this.teachers);

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort;
  

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

  openModal() {
    const dialogRef = this.dialog.open(AddNewStudentModalComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.teachers.push(result);  // Cambio aquí
        this.dataSource.data = this.teachers; // Cambio aquí
      }
    });
  }

  openProgressTeacherModal(teacherData: any) {
    this.dialog.open(ProgressStudentModalComponent, {
      width: '1200px',
      data: teacherData
    });
  }

   hasTeachers(): boolean { // Cambio aquí
    return this.dataSource.data.length > 0;
  }

  openEditTeacherModal(teacherData: any) { // Cambio aquí
    this.dialog.open(AddNewStudentModalComponent, { // Asegúrate de que AddNewTeacherModalComponent exista y esté importado correctamente
      width: '600px',
      data: teacherData
    });
  }

  selection = new SelectionModel<any>(true, []);
  

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

 
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }


  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
