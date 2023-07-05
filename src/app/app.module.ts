import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './User/user/user.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './Directives/directives/directives.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
