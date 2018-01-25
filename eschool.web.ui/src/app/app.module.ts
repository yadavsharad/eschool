import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentNewComponent } from './student/student-new/student-new.component';
import { StudentDeleteComponent } from './student/student-delete/student-delete.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
 


@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentNewComponent,
    StudentDeleteComponent,
    StudentDetailsComponent,
 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
