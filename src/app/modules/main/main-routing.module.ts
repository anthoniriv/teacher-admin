import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { ProfileComponent } from '../profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'content', loadChildren: () => import('../content/content.module').then(m => m.ContentModule) },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
