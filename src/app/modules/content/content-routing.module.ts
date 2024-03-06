// src/app/modules/content/content-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content.component';
import { MacawsComponent } from './components/macaws/macaws.component';
import { ParrotsComponent } from './components/parrots/parrots.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
  },
  { 
    path: 'macaws', 
    component: MacawsComponent 
  },
  { 
    path: 'parrots', 
    component: ParrotsComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {
  
}
