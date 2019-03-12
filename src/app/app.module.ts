import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { BinaryComponent } from './binary/binary.component';
import { BinaryFormComponent } from './binary/binary-form/binary-form.component';
import { BinaryResultComponent } from './binary/binary-result/binary-result.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoaderComponent } from './shared/loader/loader.component';

import { BinaryService } from './binary/binary.service';
import { ScoreService } from './score.service';

@NgModule({
  declarations: [
    AppComponent,
    BinaryComponent,
    BinaryResultComponent,
    BinaryFormComponent,
    HeaderComponent,
    NavbarComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [BinaryService, ScoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
