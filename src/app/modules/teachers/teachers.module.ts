import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersComponent } from './teachers.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { TeacherClassesComponent } from './components/teacher-classes/teacher-classes.component';
import { TeacherStudentsComponent } from './components/teacher-students/teacher-students.component';
import { TeacherMainComponent } from './components/teacher-main/teacher-main.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [
    TeachersComponent,
    TeacherClassesComponent,
    TeacherStudentsComponent,
    TeacherMainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    MatTabsModule,
    TeachersRoutingModule,
    MatIconModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule
  ]
})
export class TeachersModule { }
