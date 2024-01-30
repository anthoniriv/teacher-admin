import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { AddGameModalComponent } from '../modals/add-game-modal/add-game-modal.component';
import { ContentComponent } from './content.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MacawsComponent } from './components/macaws/macaws.component';
import { ParrotsComponent } from './components/parrots/parrots.component';


@NgModule({
  declarations: [
    AddGameModalComponent,
    ContentComponent,
    MacawsComponent,
    ParrotsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDialogModule,
    MaterialModule,
    ContentRoutingModule,
  ],
})
export class ContentModule {  }
