import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { AddExistingStudentModalComponent } from './modules/modals/add-existing-student-modal/add-existing-student-modal.component';
import { AddNewStudentModalComponent } from './modules/modals/add-new-student-modal/add-new-student-modal.component';
import { AddedStudentModalComponent } from './modules/modals/added-student-modal/added-student-modal.component';
import { EditClassModalComponent } from './modules/modals/edit-class-modal/edit-class-modal.component';
import { EmailConfirmationModalComponent } from './modules/modals/email-confirmation-modal/email-confirmation-modal.component';
import { ErrorVerifyAccountModalComponent } from './modules/modals/error-verify-account-modal/error-verify-account-modal.component';
import { SignUpModalComponent } from './modules/modals/sign-up-modal/sign-up-modal.component';
import { VerifyAccountModalComponent } from './modules/modals/verify-account-modal/verify-account-modal.component';
import { VideoModalComponent } from './modules/modals/video-modal/video-modal.component';
import { MoreUnitsModalComponent } from './modules/modals/more-units-modal/more-units-modal.component';
import { AddNewTeacherModalComponent } from './modules/modals/add-new-teacher-modal/add-new-teacher-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AddExistingStudentModalComponent,
    AddNewStudentModalComponent,
    EditClassModalComponent,
    AddedStudentModalComponent,
    VerifyAccountModalComponent,
    ErrorVerifyAccountModalComponent,
    SignUpModalComponent,
    EmailConfirmationModalComponent,
    EditClassModalComponent,
    VideoModalComponent,
    MoreUnitsModalComponent,
    AddNewTeacherModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatTabsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
