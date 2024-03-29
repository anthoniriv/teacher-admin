import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { EditClassModalComponent } from './modules/modals/edit-class-modal/edit-class-modal.component';
import { EmailConfirmationModalComponent } from './modules/modals/email-confirmation-modal/email-confirmation-modal.component';
import { ErrorVerifyAccountModalComponent } from './modules/modals/error-verify-account-modal/error-verify-account-modal.component';
import { SignUpModalComponent } from './modules/modals/sign-up-modal/sign-up-modal.component';
import { VerifyAccountModalComponent } from './modules/modals/verify-account-modal/verify-account-modal.component';
import { VideoModalComponent } from './modules/modals/video-modal/video-modal.component';
import { MoreUnitsModalComponent } from './modules/modals/more-units-modal/more-units-modal.component';
import { AddNewTeacherModalComponent } from './modules/modals/add-new-teacher-modal/add-new-teacher-modal.component';
import { ProgressStudentModalComponent } from './modules/modals/progress-student-modal/progress-student-modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EditStudentModalComponent } from './modules/modals/edit-student-modal/edit-student-modal.component';
import { AddExistingStudentModalComponent } from './modules/modals/add-existing-student-modal/add-existing-student-modal.component';
import { AddNewStudentModalComponent } from './modules/modals/add-new-student-modal/add-new-student-modal.component';
import { AddedStudentModalComponent } from './modules/modals/added-student-modal/added-student-modal.component';
import { EditTeacherModalComponent } from './modules/modals/edit-teacher-modal/edit-teacher-modal.component';

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
    ProgressStudentModalComponent,
    EditClassModalComponent,
    EditStudentModalComponent,
    EditTeacherModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    SharedModule,
    MatTabsModule,
  
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
