import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LocalDatePipe } from './core/local-date.pipe';
import { SessionService } from './services/session.service';
import { LocalNumberPipe } from './core/local-number.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, LocalDatePipe, LocalNumberPipe ],
  bootstrap:    [ AppComponent ],
  providers: [SessionService]
})
export class AppModule { }
