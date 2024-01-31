import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { ProfileComponent } from '../profile/profile.component';
import { TeacherClassesComponent } from '../teachers/components/teacher-classes/teacher-classes.component';
import { TeacherStudentsComponent } from '../teachers/components/teacher-students/teacher-students.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'content', 
        loadChildren: () => import('../content/content.module').then(m => m.ContentModule) 
      },
      {
        path: 'teachers',
        loadChildren: () => import('../teachers/teachers.module').then(m => m.TeachersModule),
      },
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
