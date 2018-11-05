import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RecruitmentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
