import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ProfileComponent } from '../profile/profile.component';
import { ContentComponent } from '../content/content.component';
import { LoginComponent } from '../login/login.component';
import { ParrotsComponent } from '../content/components/parrots/parrots.component';
import { MacawsComponent } from '../content/components/macaws/macaws.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    MainComponent,
    ProfileComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MaterialModule,
    MainRoutingModule,
  ],
})
export class MainModule { }
