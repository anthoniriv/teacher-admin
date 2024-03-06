import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherClassesComponent } from './components/teacher-classes/teacher-classes.component';
import { TeacherMainComponent } from './components/teacher-main/teacher-main.component';
import { TeacherStudentsComponent } from './components/teacher-students/teacher-students.component';

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
