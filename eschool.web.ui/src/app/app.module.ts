import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
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
    BrowserModule, BrowserAnimationsModule, MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
