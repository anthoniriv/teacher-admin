import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeachersComponent } from './teachers.component';
import { TeacherClassesComponent } from './components/teacher-classes/teacher-classes.component';
import { TeacherStudentsComponent } from './components/teacher-students/teacher-students.component';
import { TeacherMainComponent } from './components/teacher-main/teacher-main.component';
import { MainComponent } from '../main/main.component';

const routes: Routes = [


  {
    path: '',
    component: TeacherMainComponent, 
  },
  {
    path: 'classes',
    component: TeacherClassesComponent,
  },
  {
    path: 'students',
    component: TeacherStudentsComponent,
  },
  // ... otras rutas hijas ...
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
