import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersComponent } from './teachers.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { TeacherClassesComponent } from './components/teacher-classes/teacher-classes.component';
import { TeacherStudentsComponent } from './components/teacher-students/teacher-students.component';
import { TeacherMainComponent } from './components/teacher-main/teacher-main.component';


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
    MatTabsModule,
    TeachersRoutingModule
  ]
})
export class TeachersModule { }
