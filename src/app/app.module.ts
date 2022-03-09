import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserDataInputComponent } from './user-data-input/user-data-input.component';
import { HeaderComponent } from './header/header.component';
import { HealthGlanceComponent } from './health-glance/health-glance.component';
import { TextBubbleComponent } from './text-bubble/text-bubble.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDataInputComponent,
    HeaderComponent,
    HealthGlanceComponent,
    TextBubbleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
