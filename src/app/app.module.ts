import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HomeComponent } from './home/home.component';
import { PAGEAComponent } from './page-a/page-a.component';
import { PAGEBComponent } from './page-b/page-b.component';
import { PAGECComponent } from './page-c/page-c.component';
import { PageDComponent } from './page-d/page-d.component';
import { PageEComponent } from './page-e/page-e.component';
import { PageFComponent } from './page-f/page-f.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PAGEAComponent,
    PAGEBComponent,
    PAGECComponent,
    PageDComponent,
    PageEComponent,
    PageFComponent
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,     
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
