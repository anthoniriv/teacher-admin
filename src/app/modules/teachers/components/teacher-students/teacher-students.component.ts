import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddExistingStudentModalComponent } from 'src/app/modules/modals/add-existing-student-modal/add-existing-student-modal.component';
import { AddNewStudentModalComponent } from 'src/app/modules/modals/add-new-student-modal/add-new-student-modal.component';
import { EditClassModalComponent } from 'src/app/modules/modals/edit-class-modal/edit-class-modal.component';
import { EditStudentModalComponent } from 'src/app/modules/modals/edit-student-modal/edit-student-modal.component';
import { ProgressStudentModalComponent } from 'src/app/modules/modals/progress-student-modal/progress-student-modal.component';

@Component({
  selector: 'app-teacher-students',
  templateUrl: './teacher-students.component.html',
  styleUrls: ['./teacher-students.component.scss']
})
export class TeacherStudentsComponent implements OnInit {
  currentComponent: string | null = null;
  color = '#65447C';
  students: any[] = [
    {
      name: 'Juan Perez',
      class: 'Mathematics',
      dateAdded: '15/01/2023',
      lastConnection: '01/02/2023',
    },
    {
      name: 'Ana Gomez',
      class: 'History',
      dateAdded: '20/01/2024',
      lastConnection: '02/02/2024',
    },
    {
      name: 'Juan Perez',
      class: 'Mathematics',
      dateAdded: '15/01/2023',
      lastConnection: '01/02/2023',
    },
    {
      name: 'Ana Gomez',
      class: 'History',
      dateAdded: '20/01/2024',
      lastConnection: '02/02/2024',
    },
    
  ];

  displayedColumns: string[] = ['checkbox', 'name', 'class', 'dateAdded', 'lastConnection', 'actions'];
  dataSource = new MatTableDataSource(this.students);

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

  openModal() {
    const dialogRef = this.dialog.open(AddNewStudentModalComponent, {
      width: '50vw',
      height: '60vh',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result) {
        this.students.push(result);
        this.dataSource.data = this.students;
      }
    });
  }
  openAddExistingStudentModal() {
    const dialogRef = this.dialog.open(AddExistingStudentModalComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The add existing student dialog was closed');
    });
  }

  openAddNewStudentModal() {
    const dialogRef = this.dialog.open(AddNewStudentModalComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The add new student dialog was closed');
      if (result) {
        this.students.push(result); 
        this.dataSource.data = this.students; 
      }
    });
  }

  openEditStudentModal(studentData: any) {
    this.dialog.open(EditStudentModalComponent, {
      width: '600px',
      data: studentData
    });
  }

  openProgressStudentModal(studentData: any) {
    this.dialog.open(ProgressStudentModalComponent, {
      width: '1200px',
      data: studentData
    });
  }

  hasStudents(): boolean {
    return this.dataSource.data.length > 0;
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